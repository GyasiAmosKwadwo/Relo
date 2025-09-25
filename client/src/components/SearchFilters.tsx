import { useState } from "react";
import { Filter, X, MapPin, DollarSign, Calendar, Users, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface FilterParams {
  location: string;
  propertyType: string;
  priceRange: number[];
  bedrooms: string;
  bathrooms: string;
  amenities: string[];
  availability: string;
}

interface SearchFiltersProps {
  onFiltersChange?: (filters: FilterParams) => void;
  onClearFilters?: () => void;
}

export default function SearchFilters({ onFiltersChange, onClearFilters }: SearchFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterParams>({
    location: "",
    propertyType: "",
    priceRange: [0, 5000],
    bedrooms: "",
    bathrooms: "",
    amenities: [],
    availability: "available"
  });

  const amenityOptions = [
    "WiFi", "Parking", "Security", "Gym", "Pool", "Laundry", 
    "Kitchen", "Breakfast", "Study Room", "Cafeteria", "AC"
  ];

  const cities = [
    "Accra", "Kumasi", "Tamale", "Cape Coast", "Koforidua", 
    "Sunyani", "Ho", "Wa", "Bolgatanga", "Takoradi"
  ];

  const updateFilter = <K extends keyof FilterParams>(
    key: K, 
    value: FilterParams[K]
  ) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const toggleAmenity = (amenity: string) => {
    const newAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter(a => a !== amenity)
      : [...filters.amenities, amenity];
    updateFilter("amenities", newAmenities);
  };

  const clearFilters = () => {
    const clearedFilters: FilterParams = {
      location: "",
      propertyType: "",
      priceRange: [0, 5000],
      bedrooms: "",
      bathrooms: "",
      amenities: [],
      availability: "available"
    };
    setFilters(clearedFilters);
    onClearFilters?.();
    console.log("Filters cleared");
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.location) count++;
    if (filters.propertyType) count++;
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 5000) count++;
    if (filters.bedrooms) count++;
    if (filters.bathrooms) count++;
    if (filters.amenities.length > 0) count++;
    return count;
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Location */}
      <div className="space-y-2">
        <label className="text-sm font-medium flex items-center">
          <MapPin className="h-4 w-4 mr-2" />
          Location
        </label>
        <Select value={filters.location} onValueChange={(value) => updateFilter("location", value)}>
          <SelectTrigger data-testid="select-location">
            <SelectValue placeholder="Select city" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={city} value={city.toLowerCase()}>{city}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Property Type */}
      <div className="space-y-2">
        <label className="text-sm font-medium flex items-center">
          <Home className="h-4 w-4 mr-2" />
          Property Type
        </label>
        <Select value={filters.propertyType} onValueChange={(value) => updateFilter("propertyType", value)}>
          <SelectTrigger data-testid="select-property-type">
            <SelectValue placeholder="Any type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="hostel">Student Hostel</SelectItem>
            <SelectItem value="hotel">Hotel</SelectItem>
            <SelectItem value="house">House</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <label className="text-sm font-medium flex items-center">
          <DollarSign className="h-4 w-4 mr-2" />
          Price Range (GHS)
        </label>
        <div className="px-2">
          <Slider
            value={filters.priceRange}
            onValueChange={(value) => updateFilter("priceRange", value)}
            max={5000}
            min={0}
            step={100}
            className="w-full"
            data-testid="slider-price-range"
          />
        </div>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>GHS {filters.priceRange[0]}</span>
          <span>GHS {filters.priceRange[1]}</span>
        </div>
      </div>

      {/* Bedrooms */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Bedrooms</label>
        <Select value={filters.bedrooms} onValueChange={(value) => updateFilter("bedrooms", value)}>
          <SelectTrigger data-testid="select-bedrooms">
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1+</SelectItem>
            <SelectItem value="2">2+</SelectItem>
            <SelectItem value="3">3+</SelectItem>
            <SelectItem value="4">4+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bathrooms */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Bathrooms</label>
        <Select value={filters.bathrooms} onValueChange={(value) => updateFilter("bathrooms", value)}>
          <SelectTrigger data-testid="select-bathrooms">
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1+</SelectItem>
            <SelectItem value="2">2+</SelectItem>
            <SelectItem value="3">3+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Amenities */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Amenities</label>
        <div className="grid grid-cols-2 gap-2">
          {amenityOptions.map((amenity) => (
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox
                id={amenity}
                checked={filters.amenities.includes(amenity)}
                onCheckedChange={() => toggleAmenity(amenity)}
                data-testid={`checkbox-${amenity.toLowerCase()}`}
              />
              <label htmlFor={amenity} className="text-sm">
                {amenity}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Clear Filters Button */}
      <Button 
        variant="outline" 
        onClick={clearFilters} 
        className="w-full"
        data-testid="button-clear-filters"
      >
        Clear All Filters
      </Button>
    </div>
  );

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden lg:block">
        <div className="bg-card rounded-lg border p-6 sticky top-24">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Filters</h3>
            {getActiveFiltersCount() > 0 && (
              <Badge variant="secondary">{getActiveFiltersCount()}</Badge>
            )}
          </div>
          <FilterContent />
        </div>
      </div>

      {/* Mobile Filter Sheet */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="relative" data-testid="button-filters-mobile">
              <Filter className="h-4 w-4 mr-2" />
              Filters
              {getActiveFiltersCount() > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {getActiveFiltersCount()}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <Button 
                onClick={() => setIsOpen(false)} 
                className="w-full"
                data-testid="button-apply-filters"
              >
                Apply Filters
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Active Filter Tags */}
      {getActiveFiltersCount() > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {filters.location && (
            <Badge variant="secondary" className="gap-1">
              {filters.location}
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => updateFilter("location", "")}
              />
            </Badge>
          )}
          {filters.propertyType && (
            <Badge variant="secondary" className="gap-1">
              {filters.propertyType}
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => updateFilter("propertyType", "")}
              />
            </Badge>
          )}
          {filters.amenities.map((amenity) => (
            <Badge key={amenity} variant="secondary" className="gap-1">
              {amenity}
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => toggleAmenity(amenity)}
              />
            </Badge>
          ))}
        </div>
      )}
    </>
  );
}