import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Shield, MapPin, Home, Users, Search, Zap } from "lucide-react";
import heroImageUrl from "@assets/generated_images/Ghana_cityscape_hero_image_4ec5a327.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      {/* Enhanced Animated Background - More visible image */}
      <div className="absolute inset-0">
        {/* Primary Background Image with subtle parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: `url(${heroImageUrl})`,
          }}
        />

        {/* Reduced opacity overlays for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-emerald-900/3 to-slate-900/5 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent/15 to-emerald-800/5 backdrop-blur-md" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/1 via-transparent to-slate-900/3" />

        {/* Subtle building overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-cover bg-bottom bg-no-repeat opacity-0"
             style={{ backgroundImage: `url(${heroImageUrl})` }} />

        {/* Minimal animated shapes for modern feel */}
        <div className="absolute top-1/4 left-5 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse backdrop-blur-sm border border-white/10 shadow-xl" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/4 right-5 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl animate-bounce backdrop-blur-md border border-emerald-400/10 shadow-2xl" style={{ animationDuration: '8s' }} />

        {/* Floating icons inspired by event site */}
        <div className="absolute top-1/3 left-10 text-white/10 animate-float">
          <Home className="w-6 h-6 drop-shadow-lg" />
        </div>
        <div className="absolute bottom-1/3 right-10 text-emerald-200/10 animate-float-delayed">
          <MapPin className="w-5 h-5 drop-shadow-lg" />
        </div>
      </div>

      {/* Main Content - Centered and Clean like event demo */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Logo/Brand - Inspired by clean header */}
          <div className="flex items-center justify-center space-x-2 mb-8 animate-fade-in-up">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 animate-pulse-glow">
              <Home className="w-6 h-6 text-emerald-300" />
            </div>
            <span className="text-4xl font-heading font-black bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
              ReloM8
            </span>
          </div>

          {/* Main Headline - Large and Bold */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-tight drop-shadow-2xl">
              Find Your
              <span className="block bg-gradient-to-r from-emerald-300 via-white to-emerald-400 bg-clip-text text-transparent font-extrabold">
                Dream Home
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/90 drop-shadow-xl">
              in Beautiful Ghana
            </h2>
          </div>

          {/* Description - Concise and Elegant */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Discover premium properties across Ghana's vibrant cities. Connect directly with owners for seamless, secure housing solutions.
          </p>

          {/* Trust Indicators - Minimal like event badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <Shield className="w-4 h-4 text-emerald-300" />
              <span className="text-sm font-medium text-white">Verified Listings</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <Star className="w-4 h-4 text-emerald-300" />
              <span className="text-sm font-medium text-white">4.9★ Rated</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <Users className="w-4 h-4 text-emerald-300" />
              <span className="text-sm font-medium text-white">8,500+ Users</span>
            </div>
          </div>

          {/* Stats Grid - Compact and Modern */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-3xl font-black text-white mb-1">1,200+</div>
              <div className="text-white/80 text-sm">Properties</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-3xl font-black text-white mb-1">65+</div>
              <div className="text-white/80 text-sm">Cities</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-3xl font-black text-white mb-1">24/7</div>
              <div className="text-white/80 text-sm">Support</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-3xl font-black text-white mb-1">Secure</div>
              <div className="text-white/80 text-sm">Payments</div>
            </div>
          </div>

          {/* CTA Buttons - Prominent like event demo */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up pt-8" style={{ animationDelay: '1s' }}>
            <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
              <Search className="w-5 h-5 mr-2" />
              Search Properties
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
              <Zap className="w-5 h-5 mr-2" />
              List Your Property
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center bg-white/5 backdrop-blur-md">
          <div className="w-1 h-3 bg-gradient-to-b from-emerald-300 to-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
