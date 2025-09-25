import { useState } from "react";
import { Search, MapPin, Calendar, Users, Star, TrendingUp, Shield, Zap, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface SearchSectionProps {
  onSearch?: (params: {
    location: string;
    checkIn: string;
    checkOut: string;
    guests: string;
    propertyType: string;
  }) => void;
}

export default function SearchSection({ onSearch }: SearchSectionProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchParams, setSearchParams] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    propertyType: ""
  });

  const handleSearch = () => {
    onSearch?.(searchParams);
    console.log("Search triggered:", searchParams);
    setIsSearchOpen(false);
  };

  const updateParam = (key: string, value: string) => {
    setSearchParams(prev => ({ ...prev, [key]: value }));
  };

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Find Your Perfect Place
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Search through thousands of verified properties across Ghana's major cities
              </p>
            </div>
          </div>

          {/* Search Button - Contains Everything */}
          <div className="flex justify-center">
            <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-bold text-xl px-12 py-8 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-4 border-primary/20"
                  data-testid="button-open-search"
                >
                  <div className="flex flex-col items-center gap-3">
                    <Search className="h-12 w-12" />
                    <span>Start Your Search</span>
                    <span className="text-sm font-normal opacity-75">Click to explore properties</span>
                  </div>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-heading">Find Your Perfect Accommodation</DialogTitle>
                </DialogHeader>

                {/* Search Form Inside Dialog */}
                <div className="space-y-6">
                  {/* Main Search Inputs */}
                  <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                      {/* Location Input */}
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Destination</label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5" />
                          <Input
                            placeholder="Accra, Kumasi, Tamale..."
                            value={searchParams.location}
                            onChange={(e) => updateParam("location", e.target.value)}
                            className="pl-12 pr-4 py-4 text-lg border-primary/20 focus:border-primary focus:ring-primary/20 rounded-xl h-14"
                            data-testid="input-location"
                          />
                        </div>
                      </div>

                      {/* Property Type */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Property Type</label>
                        <Select value={searchParams.propertyType} onValueChange={(value) => updateParam("propertyType", value)}>
                          <SelectTrigger className="w-full h-14 border-primary/20 focus:border-primary focus:ring-primary/20 rounded-xl" data-testid="select-property-type">
                            <SelectValue placeholder="All Types" />
                          </SelectTrigger>
                          <SelectContent className="bg-white/95 border-0 rounded-xl">
                            <SelectItem value="apartment" className="rounded-lg">🏢 Apartments</SelectItem>
                            <SelectItem value="hostel" className="rounded-lg">🎓 Student Hostels</SelectItem>
                            <SelectItem value="hotel" className="rounded-lg">🏨 Hotels</SelectItem>
                            <SelectItem value="house" className="rounded-lg">🏠 Houses</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Search Button */}
                      <div>
                        <Button
                          onClick={handleSearch}
                          size="lg"
                          className="w-full h-14 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                          data-testid="button-search"
                        >
                          <Search className="h-6 w-6 mr-2" />
                          Search Now
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Advanced Options */}
                  <div className="bg-muted/50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-4 text-center">Advanced Options</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Check-in & Check-out */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-2">Check-in</label>
                          <Input
                            type="date"
                            value={searchParams.checkIn}
                            onChange={(e) => updateParam("checkIn", e.target.value)}
                            className="h-11 border-primary/20 focus:border-primary focus:ring-primary/20 rounded-lg"
                            data-testid="input-checkin"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-2">Check-out</label>
                          <Input
                            type="date"
                            value={searchParams.checkOut}
                            onChange={(e) => updateParam("checkOut", e.target.value)}
                            className="h-11 border-primary/20 focus:border-primary focus:ring-primary/20 rounded-lg"
                            data-testid="input-checkout"
                          />
                        </div>
                      </div>

                      {/* Guests */}
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-2">Guests</label>
                        <Select value={searchParams.guests} onValueChange={(value) => updateParam("guests", value)}>
                          <SelectTrigger className="h-11 border-primary/20 focus:border-primary focus:ring-primary/20 rounded-lg" data-testid="select-guests">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-white/95 border-0 rounded-lg">
                            <SelectItem value="1">👤 1 Guest</SelectItem>
                            <SelectItem value="2">👥 2 Guests</SelectItem>
                            <SelectItem value="3">👨‍👩‍👧‍👦 3 Guests</SelectItem>
                            <SelectItem value="4">👨‍👩‍👧‍👦 4+ Guests</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Quick Filters */}
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-2">Quick Filters</label>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 text-xs px-3 py-2 rounded-lg">
                            Budget
                          </Button>
                          <Button variant="outline" size="sm" className="bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 text-xs px-3 py-2 rounded-lg">
                            Luxury
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats Inside Dialog */}
                  <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                    <h3 className="text-lg font-semibold mb-4 text-center">Platform Statistics</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                      <div className="group">
                        <div className="text-3xl md:text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                          1,200+
                        </div>
                        <div className="text-muted-foreground font-medium text-sm">Premium Properties</div>
                      </div>
                      <div className="group">
                        <div className="text-3xl md:text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                          65+
                        </div>
                        <div className="text-muted-foreground font-medium text-sm">Cities Covered</div>
                      </div>
                      <div className="group">
                        <div className="text-3xl md:text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                          8,500+
                        </div>
                        <div className="text-muted-foreground font-medium text-sm">Happy Tenants</div>
                      </div>
                      <div className="group">
                        <div className="text-3xl md:text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                          4.9★
                        </div>
                        <div className="text-muted-foreground font-medium text-sm">Average Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
