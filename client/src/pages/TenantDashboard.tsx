import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, MapPin, Calendar, MessageSquare, Settings, LogOut } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";

export default function TenantDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "",
    type: "Tenant"
  };

  const bookings = [
    {
      id: 1,
      property: "Modern Apartment in Accra",
      location: "Accra, Ghana",
      dates: "Dec 15 - Dec 20, 2024",
      status: "confirmed",
      price: "₵250/night"
    },
    {
      id: 2,
      property: "Student Hostel - Legon",
      location: "Legon, Ghana",
      dates: "Jan 1 - Jan 31, 2025",
      status: "pending",
      price: "₵800/month"
    }
  ];

  const recentSearches = [
    "Apartments in Accra",
    "Hostels near University of Ghana",
    "Hotels in Kumasi"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              ReloM8
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Search Properties
              </Button>
              <Avatar>
                <AvatarImage src={user.avatar} />
                <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="sm">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Dashboard Menu</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={activeTab === "overview" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("overview")}
                >
                  Overview
                </Button>
                <Button
                  variant={activeTab === "bookings" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("bookings")}
                >
                  My Bookings
                </Button>
                <Button
                  variant={activeTab === "favorites" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("favorites")}
                >
                  Favorites
                </Button>
                <Button
                  variant={activeTab === "messages" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("messages")}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Messages
                </Button>
                <Button
                  variant={activeTab === "profile" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("profile")}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Profile Settings
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
                  <p className="text-gray-600 mt-2">Here's what's happening with your account.</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Active Bookings</CardTitle>
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">2</div>
                      <p className="text-xs text-muted-foreground">1 confirmed, 1 pending</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Saved Properties</CardTitle>
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">8</div>
                      <p className="text-xs text-muted-foreground">+2 from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Messages</CardTitle>
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3</div>
                      <p className="text-xs text-muted-foreground">2 unread</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Searches */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Searches</CardTitle>
                    <CardDescription>Your latest property searches</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {recentSearches.map((search, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm">{search}</span>
                          <Button variant="ghost" size="sm">Search Again</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="bookings" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">My Bookings</h2>
                  <p className="text-gray-600 mt-2">Manage your current and past bookings.</p>
                </div>

                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <Card key={booking.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="space-y-2">
                            <h3 className="font-semibold text-lg">{booking.property}</h3>
                            <div className="flex items-center text-sm text-gray-600">
                              <MapPin className="h-4 w-4 mr-1" />
                              {booking.location}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar className="h-4 w-4 mr-1" />
                              {booking.dates}
                            </div>
                            <div className="text-sm font-medium text-green-600">{booking.price}</div>
                          </div>
                          <Badge variant={booking.status === "confirmed" ? "default" : "secondary"}>
                            {booking.status}
                          </Badge>
                        </div>
                        <div className="flex space-x-2 mt-4">
                          <Button variant="outline" size="sm">View Details</Button>
                          <Button variant="outline" size="sm">Contact Host</Button>
                          {booking.status === "confirmed" && (
                            <Button variant="outline" size="sm">Cancel Booking</Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="favorites" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Favorite Properties</h2>
                  <p className="text-gray-600 mt-2">Properties you've saved for later.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Mock favorite properties */}
                  <PropertyCard
                    id="1"
                    title="Cozy Studio in East Legon"
                    location="East Legon, Accra"
                    price={1200}
                    rating={4.5}
                    imageUrl="/api/placeholder/400/300"
                    propertyType="apartment"
                  />
                  <PropertyCard
                    id="2"
                    title="Student Hostel - Central Campus"
                    location="University of Ghana"
                    price={600}
                    rating={4.2}
                    imageUrl="/api/placeholder/400/300"
                    propertyType="hostel"
                  />
                </div>
              </TabsContent>

              <TabsContent value="messages" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Messages</h2>
                  <p className="text-gray-600 mt-2">Communicate with property owners and support.</p>
                </div>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-500 text-center">No messages yet. Start booking to connect with hosts!</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="profile" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
                  <p className="text-gray-600 mt-2">Manage your account information.</p>
                </div>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-500 text-center">Profile settings coming soon...</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
