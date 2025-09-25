import { useState } from "react";
import { Heart, Star, MapPin, Wifi, Car, Coffee, Bath, Bed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  currency?: string;
  period?: string;
  rating?: number;
  reviewCount?: number;
  imageUrl: string;
  propertyType: "apartment" | "hostel" | "hotel" | "house";
  amenities?: string[];
  bedrooms?: number;
  bathrooms?: number;
  isAvailable?: boolean;
  onFavorite?: (id: string) => void;
  onClick?: (id: string) => void;
}

export default function PropertyCard({
  id,
  title,
  location,
  price,
  currency = "GHS",
  period = "month",
  rating = 0,
  reviewCount = 0,
  imageUrl,
  propertyType,
  amenities = [],
  bedrooms,
  bathrooms,
  isAvailable = true,
  onFavorite,
  onClick
}: PropertyCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
    onFavorite?.(id);
    console.log(`Property ${id} favorited:`, !isFavorited);
  };

  const handleClick = () => {
    onClick?.(id);
    console.log(`Property ${id} clicked`);
  };

  const getPropertyTypeColor = (type: string) => {
    const colors = {
      apartment: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      hostel: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      hotel: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      house: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
    };
    return colors[type as keyof typeof colors] || colors.apartment;
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `${(price / 1000).toFixed(1)}k`;
    }
    return price.toString();
  };

  return (
    <div 
      className="group cursor-pointer overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-200 hover-elevate"
      onClick={handleClick}
      data-testid={`card-property-${id}`}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 h-8 w-8 bg-white/80 backdrop-blur-sm hover:bg-white/90"
          onClick={handleFavorite}
          data-testid={`button-favorite-${id}`}
        >
          <Heart 
            className={`h-4 w-4 transition-colors ${
              isFavorited ? "fill-red-500 text-red-500" : "text-gray-600"
            }`} 
          />
        </Button>

        {/* Property Type Badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className={getPropertyTypeColor(propertyType)}>
            {propertyType.charAt(0).toUpperCase() + propertyType.slice(1)}
          </Badge>
        </div>

        {/* Availability Status */}
        {!isAvailable && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <Badge variant="destructive">Not Available</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title and Rating */}
        <div className="space-y-2">
          <h3 className="font-medium text-base line-clamp-2" data-testid={`text-title-${id}`}>
            {title}
          </h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span data-testid={`text-location-${id}`}>{location}</span>
            </div>
            
            {rating > 0 && (
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{rating.toFixed(1)}</span>
                <span className="text-xs text-muted-foreground">({reviewCount})</span>
              </div>
            )}
          </div>
        </div>

        {/* Property Details */}
        {(bedrooms || bathrooms) && (
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            {bedrooms && (
              <div className="flex items-center space-x-1">
                <Bed className="h-3 w-3" />
                <span>{bedrooms} bed{bedrooms > 1 ? 's' : ''}</span>
              </div>
            )}
            {bathrooms && (
              <div className="flex items-center space-x-1">
                <Bath className="h-3 w-3" />
                <span>{bathrooms} bath{bathrooms > 1 ? 's' : ''}</span>
              </div>
            )}
          </div>
        )}

        {/* Amenities */}
        {amenities.length > 0 && (
          <div className="flex items-center space-x-2 overflow-hidden">
            {amenities.slice(0, 3).map((amenity, index) => {
              const getAmenityIcon = (amenity: string) => {
                const icons: { [key: string]: any } = {
                  wifi: Wifi,
                  parking: Car,
                  breakfast: Coffee,
                  // Add more mappings as needed
                };
                const Icon = icons[amenity.toLowerCase()] || Wifi;
                return <Icon className="h-3 w-3" />;
              };
              
              return (
                <div key={index} className="flex items-center space-x-1">
                  {getAmenityIcon(amenity)}
                  <span className="text-xs text-muted-foreground capitalize">
                    {amenity}
                  </span>
                </div>
              );
            })}
            {amenities.length > 3 && (
              <span className="text-xs text-muted-foreground">+{amenities.length - 3} more</span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-lg font-bold" data-testid={`text-price-${id}`}>
              {currency} {formatPrice(price)}
            </span>
            <span className="text-sm text-muted-foreground">/{period}</span>
          </div>
          
          <Button size="sm" disabled={!isAvailable} data-testid={`button-book-${id}`}>
            {isAvailable ? "Book Now" : "Unavailable"}
          </Button>
        </div>
      </div>
    </div>
  );
}