import { useState } from "react";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImageUrl from "@assets/generated_images/Ghana_cityscape_hero_image_4ec5a327.png";

interface HeroSectionProps {
  onSearch?: (params: {
    location: string;
    checkIn: string;
    checkOut: string;
    guests: string;
    propertyType: string;
  }) => void;
}

export default function HeroSection({ onSearch }: HeroSectionProps) {
  const [searchParams, setSearchParams] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    propertyType: ""
  });

  const handleSearch = () => {
    onSearch?.(searchParams);
    console.log("Hero search triggered:", searchParams);
  };

  const updateParam = (key: string, value: string) => {
    setSearchParams(prev => ({ ...prev, [key]: value }));
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroImageUrl})` 
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Find Your Perfect 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
              Home in Ghana
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Discover apartments, student hostels, hotels, and relocation services. 
            Direct connections, no middlemen, trusted platform.
          </p>

          {/* Search Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2">
              {/* Location */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Where
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Accra, Kumasi, Tamale..."
                    value={searchParams.location}
                    onChange={(e) => updateParam("location", e.target.value)}
                    className="pl-10"
                    data-testid="input-location"
                  />
                </div>
              </div>

              {/* Check-in */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Check-in
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="date"
                    value={searchParams.checkIn}
                    onChange={(e) => updateParam("checkIn", e.target.value)}
                    className="pl-10"
                    data-testid="input-checkin"
                  />
                </div>
              </div>

              {/* Check-out */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Check-out
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="date"
                    value={searchParams.checkOut}
                    onChange={(e) => updateParam("checkOut", e.target.value)}
                    className="pl-10"
                    data-testid="input-checkout"
                  />
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Guests
                </label>
                <Select value={searchParams.guests} onValueChange={(value) => updateParam("guests", value)}>
                  <SelectTrigger data-testid="select-guests">
                    <Users className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Property Type Filter */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Type
              </label>
              <Select value={searchParams.propertyType} onValueChange={(value) => updateParam("propertyType", value)}>
                <SelectTrigger data-testid="select-property-type">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Types</SelectItem>
                  <SelectItem value="apartment">Apartments</SelectItem>
                  <SelectItem value="hostel">Student Hostels</SelectItem>
                  <SelectItem value="hotel">Hotels</SelectItem>
                  <SelectItem value="house">Houses</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <div className="mt-6">
              <Button 
                onClick={handleSearch} 
                size="lg" 
                className="w-full md:w-auto md:px-12"
                data-testid="button-search"
              >
                <Search className="h-5 w-5 mr-2" />
                Search Properties
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">1000+</div>
              <div className="text-gray-300">Properties</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-gray-300">Cities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">5000+</div>
              <div className="text-gray-300">Happy Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}