import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PropertyCard from "@/components/PropertyCard";
import SearchFilters from "@/components/SearchFilters";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Shield, Clock, Users, MapPin, Star, TrendingUp } from "lucide-react";
import apartmentImage from "@assets/generated_images/Featured_apartment_interior_15574472.png";
import hostelImage from "@assets/generated_images/Student_hostel_room_0c5d0447.png";
import hotelImage from "@assets/generated_images/Hotel_room_showcase_869cb115.png";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchResults, setSearchResults] = useState<typeof mockFeaturedProperties>([]);
  const [isSearchActive, setIsSearchActive] = useState(false);

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
      isAvailable: true
    }
  ];

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleHeroSearch = (params: any) => {
    console.log("Hero search:", params);
    setIsSearchActive(true);
    // In a real app, this would trigger an API call
    setSearchResults(mockFeaturedProperties.slice(0, 3));
  };

  const handleFiltersChange = (filters: any) => {
    console.log("Filters changed:", filters);
    // In a real app, this would filter the results
  };

  const handlePropertyClick = (id: string) => {
    console.log("Property clicked:", id);
    // In a real app, this would navigate to property detail page
  };

  const handlePropertyFavorite = (id: string) => {
    console.log("Property favorited:", id);
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
        <HeroSection onSearch={handleHeroSearch} />

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
                  Featured Properties
                </h2>
                <p className="text-muted-foreground">
                  Discover handpicked accommodations across Ghana
                </p>
              </div>
              <Button variant="outline" data-testid="button-view-all">
                View All Properties
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockFeaturedProperties.slice(0, 6).map((property) => (
                <PropertyCard
                  key={property.id}
                  {...property}
                  onFavorite={handlePropertyFavorite}
                  onClick={handlePropertyClick}
                />
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
    </div>
  );
}