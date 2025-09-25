import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Home, Shield, Star, Users, MapPin } from "lucide-react";
import heroImageUrl from "@assets/generated_images/Ghana_cityscape_hero_image_4ec5a327.png";

export default function Register() {
  const [, setLocation] = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userType: "",
    agreeToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }
    // Mock registration - in real app, this would call an API
    console.log("Registration attempt:", formData);
    // Redirect to login after registration
    setLocation("/login");
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
        <div className="absolute inset-0 bg-gradient-to-br from-accent/80 via-orange-500/60 to-yellow-500/80" />
        <div className="relative z-10 flex flex-col justify-center items-center text-white p-12">
          <div className="max-w-md text-center space-y-6">
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="flex items-center justify-center w-12 h-12 bg-white text-accent rounded-xl">
                <Home className="h-6 w-6" />
              </div>
              <span className="font-heading font-bold text-2xl">ReloM8</span>
            </div>

            <h1 className="text-4xl font-heading font-bold leading-tight">
              Join Ghana's Growing Housing Community
            </h1>

            <p className="text-lg text-white/90">
              Connect with property owners and find your perfect home in any city across Ghana.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">8,500+</div>
                <div className="text-sm text-white/80">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">4.9★</div>
                <div className="text-sm text-white/80">Rating</div>
              </div>
            </div>

            <div className="flex justify-center space-x-4 mt-6">
              <div className="flex items-center space-x-2 text-white/90">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Secure</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Nationwide</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <Users className="w-4 h-4" />
                <span className="text-sm">Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Registration Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-orange-50 to-yellow-50 lg:w-1/2">
        <Card className="w-full max-w-md shadow-xl border-0">
          <CardHeader className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-2 mb-4 lg:hidden">
              <div className="flex items-center justify-center w-10 h-10 bg-accent text-white rounded-lg">
                <Home className="h-5 w-5" />
              </div>
              <span className="font-heading font-bold text-xl">ReloM8</span>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">Create Your Account</CardTitle>
            <CardDescription className="text-gray-600">
              Join thousands of Ghanaians finding their perfect homes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-gray-700 font-medium">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                  className="h-12 border-gray-200 focus:border-accent focus:ring-accent/20"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="h-12 border-gray-200 focus:border-accent focus:ring-accent/20"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="h-12 border-gray-200 focus:border-accent focus:ring-accent/20"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="userType" className="text-gray-700 font-medium">I am a</Label>
                <Select value={formData.userType} onValueChange={(value) => setFormData(prev => ({ ...prev, userType: value }))}>
                  <SelectTrigger className="h-12 border-gray-200 focus:border-accent focus:ring-accent/20">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tenant">👤 Tenant / Traveler</SelectItem>
                    <SelectItem value="student">🎓 Student</SelectItem>
                    <SelectItem value="landlord">🏠 Landlord / Property Owner</SelectItem>
                    <SelectItem value="hotel-manager">🏨 Hotel Manager</SelectItem>
                    <SelectItem value="hostel-manager">🏢 Hostel Manager</SelectItem>
                    <SelectItem value="logistics">🚚 Logistics Provider</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    className="h-12 pr-12 border-gray-200 focus:border-accent focus:ring-accent/20"
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
                <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                    className="h-12 pr-12 border-gray-200 focus:border-accent focus:ring-accent/20"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))}
                  className="mt-1"
                />
                <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                  I agree to the{" "}
                  <Link href="/terms" className="text-accent hover:underline font-medium">
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-accent hover:underline font-medium">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <Button type="submit" className="w-full h-12 bg-accent hover:bg-accent/90 text-white font-semibold text-lg">
                Create Account
              </Button>
            </form>

            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-accent hover:underline font-medium">
                  Sign in here
                </Link>
              </p>
              <p className="text-xs text-gray-500">
                By creating an account, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
