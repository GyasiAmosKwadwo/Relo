import { useState } from "react";
import { Bell, MessageSquare, Heart, Calendar, CreditCard, Settings, Home, Building, Truck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserDashboardProps {
  userType?: "tenant" | "landlord" | "student" | "hotel_manager" | "logistics";
  userName?: string;
  userAvatar?: string;
}

export default function UserDashboard({ 
  userType = "tenant", 
  userName = "John Doe",
  userAvatar 
}: UserDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview");

  //todo: remove mock functionality
  const mockStats = {
    tenant: {
      bookings: 3,
      favorites: 12,
      messages: 5,
      payments: 2
    },
    landlord: {
      properties: 8,
      bookings: 24,
      messages: 15,
      revenue: 45000
    },
    student: {
      applications: 2,
      favorites: 6,
      messages: 3,
      payments: 1
    }
  };

  const mockBookings = [
    { id: "1", property: "Modern Apartment in East Legon", dates: "Mar 15 - Sep 15", status: "active", amount: "GHS 2,500" },
    { id: "2", property: "University Hostel Room", dates: "Jan 10 - May 10", status: "completed", amount: "GHS 800" },
    { id: "3", property: "Hotel Suite Downtown", dates: "Dec 20 - Dec 25", status: "upcoming", amount: "GHS 350" },
  ];

  const mockMessages = [
    { id: "1", from: "Sarah Johnson", message: "Is the apartment still available?", time: "2 hours ago", unread: true },
    { id: "2", from: "Property Owner", message: "Your booking has been confirmed!", time: "1 day ago", unread: false },
    { id: "3", from: "Mike Chen", message: "Thanks for the quick response", time: "3 days ago", unread: false },
  ];

  const getStatsForUserType = () => {
    switch (userType) {
      case "landlord": {
        const landlordStats = mockStats.landlord;
        return [
          { title: "Active Properties", value: landlordStats.properties, icon: Home, color: "text-blue-600" },
          { title: "Total Bookings", value: landlordStats.bookings, icon: Calendar, color: "text-green-600" },
          { title: "Messages", value: landlordStats.messages, icon: MessageSquare, color: "text-yellow-600" },
          { title: "Monthly Revenue", value: `GHS ${(landlordStats.revenue / 1000).toFixed(1)}k`, icon: CreditCard, color: "text-purple-600" },
        ];
      }
      case "student": {
        const studentStats = mockStats.student;
        return [
          { title: "Applications", value: studentStats.applications, icon: Building, color: "text-blue-600" },
          { title: "Saved Places", value: studentStats.favorites, icon: Heart, color: "text-red-600" },
          { title: "Messages", value: studentStats.messages, icon: MessageSquare, color: "text-yellow-600" },
          { title: "Payments", value: studentStats.payments, icon: CreditCard, color: "text-green-600" },
        ];
      }
      case "logistics":
        return [
          { title: "Active Jobs", value: 5, icon: Truck, color: "text-blue-600" },
          { title: "Completed", value: 24, icon: Calendar, color: "text-green-600" },
          { title: "Messages", value: 8, icon: MessageSquare, color: "text-yellow-600" },
          { title: "Earnings", value: "GHS 12k", icon: CreditCard, color: "text-purple-600" },
        ];
      default: {
        const tenantStats = mockStats.tenant;
        return [
          { title: "Active Bookings", value: tenantStats.bookings, icon: Calendar, color: "text-blue-600" },
          { title: "Saved Places", value: tenantStats.favorites, icon: Heart, color: "text-red-600" },
          { title: "Messages", value: tenantStats.messages, icon: MessageSquare, color: "text-yellow-600" },
          { title: "Payments", value: tenantStats.payments, icon: CreditCard, color: "text-green-600" },
        ];
      }
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      active: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      completed: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      upcoming: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      pending: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
    };
    return variants[status as keyof typeof variants] || variants.pending;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={userAvatar} alt={userName} />
            <AvatarFallback>
              {userName.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold" data-testid="text-user-name">Welcome back, {userName}</h1>
            <p className="text-muted-foreground capitalize">{userType} Dashboard</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" data-testid="button-notifications">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" data-testid="button-settings">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {getStatsForUserType().map((stat, index) => (
          <Card key={index} className="hover-elevate">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center space-x-4 w-full">
                <div className={`p-2 rounded-lg bg-muted ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold" data-testid={`stat-${stat.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {stat.value}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">New booking confirmed</span>
                    </div>
                    <span className="text-xs text-muted-foreground">2 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="h-4 w-4 text-green-600" />
                      <span className="text-sm">New message received</span>
                    </div>
                    <span className="text-xs text-muted-foreground">1 day ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Payment processed</span>
                    </div>
                    <span className="text-xs text-muted-foreground">3 days ago</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">View All Activity</Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {userType === "landlord" ? (
                  <>
                    <Button className="w-full justify-start" data-testid="button-add-property">
                      <Home className="h-4 w-4 mr-2" />
                      Add New Property
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="h-4 w-4 mr-2" />
                      Manage Bookings
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <CreditCard className="h-4 w-4 mr-2" />
                      View Payments
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="w-full justify-start" data-testid="button-search-properties">
                      <Building className="h-4 w-4 mr-2" />
                      Search Properties
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Heart className="h-4 w-4 mr-2" />
                      View Favorites
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Truck className="h-4 w-4 mr-2" />
                      Book Moving Service
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="bookings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>My Bookings</CardTitle>
              <CardDescription>Manage your current and past bookings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <h4 className="font-medium" data-testid={`text-booking-${booking.id}`}>
                        {booking.property}
                      </h4>
                      <p className="text-sm text-muted-foreground">{booking.dates}</p>
                      <p className="text-sm font-medium">{booking.amount}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className={getStatusBadge(booking.status)}>
                        {booking.status}
                      </Badge>
                      <Button size="sm" variant="outline" data-testid={`button-view-booking-${booking.id}`}>
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Messages</CardTitle>
              <CardDescription>Your recent conversations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockMessages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex items-start space-x-4 p-4 rounded-lg border ${
                      message.unread ? "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800" : ""
                    }`}
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        {message.from.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-sm">{message.from}</h4>
                        <span className="text-xs text-muted-foreground">{message.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{message.message}</p>
                    </div>
                    {message.unread && (
                      <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4">View All Messages</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}