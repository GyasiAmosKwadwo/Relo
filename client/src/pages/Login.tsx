import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, EyeOff, Home, Shield, Star, Users } from "lucide-react";
import heroImageUrl from "@assets/generated_images/Ghana_cityscape_hero_image_4ec5a327.png";

export default function Login() {
  const [, setLocation] = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app, this would call an API
    console.log("Login attempt:", formData);
    // Redirect to dashboard based on user type
    switch (formData.userType) {
      case "tenant":
      case "student":
        setLocation("/dashboard/tenant");
        break;
      case "landlord":
      case "hotel-manager":
      case "hostel-manager":
        setLocation("/dashboard/provider");
        break;
      case "logistics":
        setLocation("/dashboard/logistics");
        break;
      case "admin":
        setLocation("/dashboard/admin");
        break;
      default:
        setLocation("/dashboard/tenant");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Hero Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImageUrl})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/80" />
        <div className="relative z-10 flex flex-col justify-center items-center text-white p-12">
          <div className="max-w-md text-center space-y-6">
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="flex items-center justify-center w-12 h-12 bg-white text-primary rounded-xl">
                <Home className="h-6 w-6" />
              </div>
              <span className="font-heading font-bold text-2xl">ReloM8</span>
            </div>

            <h1 className="text-4xl font-heading font-bold leading-tight">
              Welcome Back to Your Home Search Journey
            </h1>

            <p className="text-lg text-white/90">
              Continue your search for the perfect accommodation in Ghana's vibrant cities.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">1,200+</div>
                <div className="text-sm text-white/80">Properties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">65+</div>
                <div className="text-sm text-white/80">Cities</div>
              </div>
            </div>

            <div className="flex justify-center space-x-4 mt-6">
              <div className="flex items-center space-x-2 text-white/90">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Secure</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <Star className="w-4 h-4" />
                <span className="text-sm">Verified</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <Users className="w-4 h-4" />
                <span className="text-sm">Trusted</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-white lg:w-1/2">
        <Card className="w-full max-w-md shadow-xl border-0">
          <CardHeader className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-2 mb-4 lg:hidden">
              <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-lg">
                <Home className="h-5 w-5" />
              </div>
              <span className="font-heading font-bold text-xl">ReloM8</span>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">Welcome Back</CardTitle>
            <CardDescription className="text-gray-600">
              Sign in to continue your accommodation search
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="h-12 border-gray-200 focus:border-primary focus:ring-primary/20"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    className="h-12 pr-12 border-gray-200 focus:border-primary focus:ring-primary/20"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="userType" className="text-gray-700 font-medium">I am a</Label>
                <Select value={formData.userType} onValueChange={(value) => setFormData(prev => ({ ...prev, userType: value }))}>
                  <SelectTrigger className="h-12 border-gray-200 focus:border-primary focus:ring-primary/20">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tenant">👤 Tenant / Traveler</SelectItem>
                    <SelectItem value="student">🎓 Student</SelectItem>
                    <SelectItem value="landlord">🏠 Landlord / Property Owner</SelectItem>
                    <SelectItem value="hotel-manager">🏨 Hotel Manager</SelectItem>
                    <SelectItem value="hostel-manager">🏢 Hostel Manager</SelectItem>
                    <SelectItem value="logistics">🚚 Logistics Provider</SelectItem>
                    <SelectItem value="admin">⚙️ Administrator</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold text-lg">
                Sign In
              </Button>
            </form>

            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/register" className="text-primary hover:underline font-medium">
                  Create one here
                </Link>
              </p>
              <p className="text-xs text-gray-500">
                By signing in, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
