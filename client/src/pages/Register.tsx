import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Home, Shield, Star, Users, MapPin, Sparkles, Zap, Heart } from "lucide-react";
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
    <div className="min-h-screen flex relative overflow-hidden">
      {/* Enhanced Background with Dynamic Effects */}
      <div className="absolute inset-0">
        {/* Primary Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url(${heroImageUrl})`,
          }}
        />

        {/* Multi-layered Glassmorphism Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-emerald-900/50 to-slate-900/60 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent/40 to-emerald-800/50 backdrop-blur-md" />

        {/* Animated Geometric Shapes */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl animate-morph backdrop-blur-sm border border-emerald-400/20" />
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-white/8 rounded-full blur-xl animate-float backdrop-blur-md border border-white/15" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-emerald-400/15 to-white/10 rotate-45 animate-rotate-slow backdrop-blur-sm" />

        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-300 rounded-full animate-ping opacity-60" style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-40" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-2.5 h-2.5 bg-emerald-200 rounded-full animate-ping opacity-50" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>

      {/* Left side - Enhanced Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="relative z-10 flex flex-col justify-center items-center text-white p-12 h-full">
          <div className="max-w-lg text-center space-y-8">
            {/* Enhanced Logo */}
            <div className="flex items-center justify-center space-x-3 mb-10 animate-fade-in-up">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-md text-white rounded-2xl border border-white/30 shadow-2xl animate-pulse-glow">
                <Home className="h-8 w-8" />
              </div>
              <span className="font-heading font-black text-3xl bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">ReloM8</span>
            </div>

            {/* Enhanced Headline */}
            <h1 className="text-5xl font-heading font-black leading-tight animate-fade-in-up drop-shadow-2xl" style={{ animationDelay: '0.2s' }}>
              Join Ghana's
              <span className="block bg-gradient-to-r from-emerald-300 via-white to-emerald-300 bg-clip-text text-transparent animate-shimmer">
                Premier Housing
              </span>
              Community
            </h1>

            {/* Enhanced Description */}
            <p className="text-xl text-white/90 leading-relaxed animate-fade-in-up backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10" style={{ animationDelay: '0.4s' }}>
              Connect with property owners and find your perfect home in any city across Ghana with our advanced platform.
            </p>

            {/* Enhanced Stats with Glassmorphism */}
            <div className="grid grid-cols-2 gap-6 mt-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-black mb-2 bg-gradient-to-r from-emerald-300 to-white bg-clip-text text-transparent">8,500+</div>
                <div className="text-sm text-white/80 flex items-center justify-center gap-1">
                  <Users className="w-4 h-4" />
                  Happy Users
                </div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl font-black mb-2 bg-gradient-to-r from-emerald-300 to-white bg-clip-text text-transparent">4.9★</div>
                <div className="text-sm text-white/80 flex items-center justify-center gap-1">
                  <Star className="w-4 h-4" />
                  Rating
                </div>
              </div>
            </div>

            {/* Enhanced Features */}
            <div className="flex justify-center space-x-6 mt-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center space-x-2 text-white/90 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <Shield className="w-5 h-5 text-emerald-300 animate-pulse-glow" />
                <span className="text-sm font-medium">Secure</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <MapPin className="w-5 h-5 text-emerald-300 animate-pulse-glow" />
                <span className="text-sm font-medium">Nationwide</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <Heart className="w-5 h-5 text-emerald-300 animate-pulse-glow" />
                <span className="text-sm font-medium">Trusted</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Enhanced Registration Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 via-white to-emerald-50 lg:w-1/2 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-slate-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <Card className="w-full max-w-lg shadow-2xl border-0 bg-white/80 backdrop-blur-xl relative overflow-hidden animate-fade-in-up">
          {/* Card Background Effects */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-100 to-transparent rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-slate-100 to-transparent rounded-full blur-xl" />

          <CardHeader className="text-center space-y-3 relative z-10 pb-8">
            <div className="flex items-center justify-center space-x-3 mb-6 lg:hidden animate-bounce-in">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-xl shadow-lg animate-pulse-glow">
                <Home className="h-6 w-6" />
              </div>
              <span className="font-heading font-bold text-2xl bg-gradient-to-r from-emerald-600 to-slate-600 bg-clip-text text-transparent">ReloM8</span>
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-emerald-600 bg-clip-text text-transparent animate-fade-in-up">
              Create Your Account
            </CardTitle>
            <CardDescription className="text-slate-600 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Join thousands of Ghanaians finding their perfect homes with advanced technology
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6 relative z-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                <Label htmlFor="fullName" className="text-slate-700 font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                  className="h-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/70"
                  required
                />
              </div>

              <div className="space-y-2 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                <Label htmlFor="email" className="text-slate-700 font-semibold flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-500" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="h-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/70"
                  required
                />
              </div>

              <div className="space-y-2 animate-slide-in-left" style={{ animationDelay: '0.5s' }}>
                <Label htmlFor="phone" className="text-slate-700 font-semibold flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-500" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="h-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/70"
                  required
                />
              </div>

              <div className="space-y-2 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
                <Label htmlFor="userType" className="text-slate-700 font-semibold flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-500" />
                  I am a
                </Label>
                <Select value={formData.userType} onValueChange={(value) => setFormData(prev => ({ ...prev, userType: value }))}>
                  <SelectTrigger className="h-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/70">
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

              <div className="space-y-2 animate-slide-in-left" style={{ animationDelay: '0.7s' }}>
                <Label htmlFor="password" className="text-slate-700 font-semibold">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    className="h-12 pr-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/70"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4 text-slate-400" /> : <Eye className="h-4 w-4 text-slate-400" />}
                  </Button>
                </div>
              </div>

              <div className="space-y-2 animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
                <Label htmlFor="confirmPassword" className="text-slate-700 font-semibold">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                    className="h-12 pr-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/70"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4 text-slate-400" /> : <Eye className="h-4 w-4 text-slate-400" />}
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-3 animate-fade-in-up pt-2" style={{ animationDelay: '0.9s' }}>
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))}
                  className="mt-1 border-slate-300 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                />
                <Label htmlFor="terms" className="text-sm text-slate-600 leading-relaxed">
                  I agree to the{" "}
                  <Link href="/terms" className="text-emerald-600 hover:text-emerald-700 font-semibold hover:underline transition-colors">
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700 font-semibold hover:underline transition-colors">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full h-14 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-bounce-in"
                style={{ animationDelay: '1s' }}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Create Account
              </Button>
            </form>

            <div className="text-center space-y-3 animate-fade-in-up pt-4" style={{ animationDelay: '1.1s' }}>
              <p className="text-sm text-slate-600">
                Already have an account?{" "}
                <Link href="/login" className="text-emerald-600 hover:text-emerald-700 font-semibold hover:underline transition-colors">
                  Sign in here
                </Link>
              </p>
              <p className="text-xs text-slate-500 bg-slate-50/50 backdrop-blur-sm rounded-lg p-3 border border-slate-200/50">
                By creating an account, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
