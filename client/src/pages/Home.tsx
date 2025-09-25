import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SearchSection from "@/components/SearchSection";
import PropertyCard from "@/components/PropertyCard";
import SearchFilters from "@/components/SearchFilters";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Search, Shield, Clock, Users, MapPin, Star, TrendingUp, Filter, Eye, MessageCircle, Phone, Calendar, CreditCard } from "lucide-react";
import apartmentImage from "@assets/generated_images/Featured_apartment_interior_15574472.png";
import hostelImage from "@assets/generated_images/Student_hostel_room_0c5d0447.png";
import hotelImage from "@assets/generated_images/Hotel_room_showcase_869cb115.png";

export default function Home() {
  //todo: remove mock functionality
  const mockFeaturedProperties = [
    {
      id: "1",
      title: "Modern 2BR Apartment in East Legon",
      location: "East Legon, Accra",
      price: 2500,
      rating: 4.8,
      reviewCount: 24,
      imageUrl: apartmentImage,
      propertyType: "apartment" as const,
      amenities: ["wifi", "parking", "security"],
      bedrooms: 2,
      bathrooms: 2,
      isAvailable: true
    },
    {
      id: "2",
      title: "University of Ghana Hostel Bed",
      location: "Legon, Accra",
      price: 800,
      period: "semester",
      rating: 4.2,
      reviewCount: 156,
      imageUrl: hostelImage,
      propertyType: "hostel" as const,
      amenities: ["wifi", "study_room", "cafeteria"],
      bedrooms: 1,
      bathrooms: 1,
      isAvailable: true
    },
    {
      id: "3",
      title: "Luxury Hotel Suite Downtown",
      location: "Osu, Accra",
      price: 350,
      period: "night",
      rating: 4.9,
      reviewCount: 89,
      imageUrl: hotelImage,
      propertyType: "hotel" as const,
      amenities: ["wifi", "breakfast", "gym"],
      bedrooms: 1,
      bathrooms: 1,
      isAvailable: true
    },
    {
      id: "4",
      title: "Student Hostel Near KNUST",
      location: "Kumasi, Ashanti",
      price: 650,
      period: "semester",
      rating: 4.5,
      reviewCount: 78,
      imageUrl: hostelImage,
      propertyType: "hostel" as const,
      amenities: ["wifi", "study_room"],
      bedrooms: 1,
      bathrooms: 1,
      isAvailable: true
    },
    {
      id: "5",
      title: "Family House in Tema",
      location: "Tema, Greater Accra",
      price: 1800,
      rating: 4.6,
      reviewCount: 45,
      imageUrl: apartmentImage,
      propertyType: "house" as const,
      amenities: ["parking", "garden", "security"],
      bedrooms: 3,
      bathrooms: 2,
      isAvailable: true
    },
    {
      id: "6",
      title: "Budget Hotel in Tamale",
      location: "Tamale, Northern",
      price: 150,
      period: "night",
      rating: 4.1,
      reviewCount: 32,
      imageUrl: hotelImage,
      propertyType: "hotel" as const,
      amenities: ["wifi", "restaurant"],
      bedrooms: 1,
      bathrooms: 1,
      isAvailable: true
    }
  ];

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchResults, setSearchResults] = useState<typeof mockFeaturedProperties>([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState(mockFeaturedProperties);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [browseDialogOpen, setBrowseDialogOpen] = useState(false);
  const [messageDialogOpen, setMessageDialogOpen] = useState(false);
  const [bookDialogOpen, setBookDialogOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [messageText, setMessageText] = useState("");
  const [bookingDetails, setBookingDetails] = useState({
    checkIn: "",
    checkOut: "",
    guests: "1",
    specialRequests: ""
  });

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleSearch = (params: any) => {
    console.log("Search triggered:", params);
    setIsSearchActive(true);
    // In a real app, this would trigger an API call
    setSearchResults(mockFeaturedProperties.slice(0, 3));
  };

  const handleFiltersChange = (filters: any) => {
    console.log("Filters changed:", filters);
    let filtered = [...mockFeaturedProperties];

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter(p => p.location.toLowerCase().includes(filters.location.toLowerCase()));
    }

    // Filter by property type
    if (filters.propertyType) {
      filtered = filtered.filter(p => p.propertyType === filters.propertyType);
    }

    // Filter by price range
    if (filters.priceRange && (filters.priceRange[0] > 0 || filters.priceRange[1] < 5000)) {
      filtered = filtered.filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);
    }

    // Filter by bedrooms
    if (filters.bedrooms) {
      const minBed = parseInt(filters.bedrooms);
      filtered = filtered.filter(p => p.bedrooms >= minBed);
    }

    // Filter by bathrooms
    if (filters.bathrooms) {
      const minBath = parseInt(filters.bathrooms);
      filtered = filtered.filter(p => p.bathrooms >= minBath);
    }

    // Filter by amenities
    if (filters.amenities && filters.amenities.length > 0) {
      filtered = filtered.filter(p =>
        filters.amenities.some((amenity: string) => p.amenities.includes(amenity.toLowerCase()))
      );
    }

    setFilteredProperties(filtered);
  };

  const handlePropertyClick = (id: string) => {
    console.log("Property clicked:", id);
    // In a real app, this would navigate to property detail page
  };

  const handlePropertyFavorite = (id: string) => {
    console.log("Property favorited:", id);
  };

  const handleBrowse = (id: string) => {
    const property = mockFeaturedProperties.find(p => p.id === id);
    if (property) {
      setSelectedProperty(property);
      setBrowseDialogOpen(true);
    }
  };

  const handleBookNow = (id: string) => {
    const property = mockFeaturedProperties.find(p => p.id === id);
    if (property) {
      setSelectedProperty(property);
      setBookDialogOpen(true);
    }
  };

  const handleMessage = (id: string) => {
    const property = mockFeaturedProperties.find(p => p.id === id);
    if (property) {
      setSelectedProperty(property);
      setMessageDialogOpen(true);
    }
  };

  const handleSendMessage = () => {
    console.log("Sending message:", messageText, "to property:", selectedProperty?.id);
    setMessageText("");
    setMessageDialogOpen(false);
    setSelectedProperty(null);
  };

  const handleBookingSubmit = () => {
    console.log("Booking submitted:", bookingDetails, "for property:", selectedProperty?.id);
    setBookingDetails({ checkIn: "", checkOut: "", guests: "1", specialRequests: "" });
    setBookDialogOpen(false);
    setSelectedProperty(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onSearch={(query) => console.log("Header search:", query)}
        onThemeToggle={handleThemeToggle}
        isDarkMode={isDarkMode}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Search Section */}
        <SearchSection onSearch={handleSearch} />

        {/* How It Works Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                How ReloM8 Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Finding your perfect home in Ghana is now simple, transparent, and secure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Search & Filter</h3>
                <p className="text-muted-foreground">
                  Browse thousands of verified properties across Ghana's major cities.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Book Securely</h3>
                <p className="text-muted-foreground">
                  Connect directly with property owners. No middlemen, no hidden fees.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Move In</h3>
                <p className="text-muted-foreground">
                  Get relocation services and move into your new home seamlessly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-2">
                  Featured Properties ({filteredProperties.length} properties)
                </h2>
                <p className="text-muted-foreground">
                  Discover handpicked accommodations across Ghana
                </p>
              </div>
              <div className="flex gap-2">
                <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      Filters
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Filter Properties</DialogTitle>
                    </DialogHeader>
                    <SearchFilters
                      onFiltersChange={(filters) => {
                        handleFiltersChange(filters);
                        setIsFilterOpen(false);
                      }}
                      onClearFilters={() => {
                        setFilteredProperties(mockFeaturedProperties);
                        setIsFilterOpen(false);
                      }}
                    />
                  </DialogContent>
                </Dialog>
                <Button variant="outline" data-testid="button-view-all">
                  View All Properties
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <div key={property.id} className="relative group">
                  <PropertyCard
                    {...property}
                    onFavorite={handlePropertyFavorite}
                    onClick={handlePropertyClick}
                  />
                  {/* Action buttons overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 rounded-xl">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleBrowse(property.id)}
                      className="flex items-center gap-1"
                    >
                      <Eye className="h-4 w-4" />
                      Browse
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleBookNow(property.id)}
                      className="flex items-center gap-1"
                    >
                      Book Now
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleMessage(property.id)}
                      className="flex items-center gap-1"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Message
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search Results Section (shown after search) */}
        {isSearchActive && (
          <section className="py-16 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="flex gap-8">
                <div className="w-80 shrink-0">
                  <SearchFilters
                    onFiltersChange={handleFiltersChange}
                    onClearFilters={() => console.log("Filters cleared")}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">
                      Search Results ({searchResults.length} found)
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {searchResults.map((property: any) => (
                      <PropertyCard
                        key={property.id}
                        {...property}
                        onFavorite={handlePropertyFavorite}
                        onClick={handlePropertyClick}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Trust & Safety Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Why Choose ReloM8?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're committed to making accommodation search in Ghana safe, transparent, and efficient.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Verified Properties</h3>
                  <p className="text-sm text-muted-foreground">
                    All listings are verified for authenticity and quality.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Direct Contact</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect directly with property owners without middlemen.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">All Cities Covered</h3>
                  <p className="text-sm text-muted-foreground">
                    Properties available in 50+ cities across Ghana.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Trusted Reviews</h3>
                  <p className="text-sm text-muted-foreground">
                    Read genuine reviews from verified tenants.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Growing Ghana's Housing Market
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1,000+</div>
                <div className="text-muted-foreground">Active Properties</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                <div className="text-muted-foreground">Happy Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Cities Covered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Customer Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Ready to Find Your Perfect Home?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Join thousands of Ghanaians who trust ReloM8 for their accommodation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" data-testid="button-get-started">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                List Your Property
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Browse Dialog */}
      <Dialog open={browseDialogOpen} onOpenChange={setBrowseDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Property Details</DialogTitle>
          </DialogHeader>
          {selectedProperty && (
            <div className="space-y-6">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={selectedProperty.imageUrl}
                  alt={selectedProperty.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold">{selectedProperty.title}</h3>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {selectedProperty.location}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{selectedProperty.rating}</span>
                    <span className="text-muted-foreground">({selectedProperty.reviewCount} reviews)</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    ₵{selectedProperty.price}{selectedProperty.period ? `/${selectedProperty.period}` : '/month'}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-semibold">Bedrooms:</span> {selectedProperty.bedrooms}
                  </div>
                  <div>
                    <span className="font-semibold">Bathrooms:</span> {selectedProperty.bathrooms}
                  </div>
                </div>
                <div>
                  <span className="font-semibold">Amenities:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedProperty.amenities.map((amenity: string) => (
                      <span key={amenity} className="px-2 py-1 bg-primary/10 rounded-full text-sm">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => handleBookNow(selectedProperty.id)} className="flex-1">
                  Book Now
                </Button>
                <Button variant="outline" onClick={() => handleMessage(selectedProperty.id)}>
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Message Owner
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Message Dialog */}
      <Dialog open={messageDialogOpen} onOpenChange={setMessageDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Message Property Owner</DialogTitle>
          </DialogHeader>
          {selectedProperty && (
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                Send a message to the owner of <strong>{selectedProperty.title}</strong>
              </div>
              <Textarea
                placeholder="Type your message here..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                rows={4}
              />
              <div className="flex gap-2">
                <Button onClick={handleSendMessage} disabled={!messageText.trim()}>
                  Send Message
                </Button>
                <Button variant="outline" onClick={() => setMessageDialogOpen(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Book Dialog */}
      <Dialog open={bookDialogOpen} onOpenChange={setBookDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Book Property</DialogTitle>
          </DialogHeader>
          {selectedProperty && (
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                Booking <strong>{selectedProperty.title}</strong>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Check-in Date</label>
                  <Input
                    type="date"
                    value={bookingDetails.checkIn}
                    onChange={(e) => setBookingDetails(prev => ({ ...prev, checkIn: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Check-out Date</label>
                  <Input
                    type="date"
                    value={bookingDetails.checkOut}
                    onChange={(e) => setBookingDetails(prev => ({ ...prev, checkOut: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Number of Guests</label>
                  <Input
                    type="number"
                    min="1"
                    value={bookingDetails.guests}
                    onChange={(e) => setBookingDetails(prev => ({ ...prev, guests: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Special Requests</label>
                  <Textarea
                    placeholder="Any special requests..."
                    value={bookingDetails.specialRequests}
                    onChange={(e) => setBookingDetails(prev => ({ ...prev, specialRequests: e.target.value }))}
                    rows={3}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button onClick={handleBookingSubmit} className="flex-1">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Confirm Booking
                </Button>
                <Button variant="outline" onClick={() => setBookDialogOpen(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
