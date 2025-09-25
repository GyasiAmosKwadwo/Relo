import { Star, TrendingUp, Shield, MapPin, Home, Users } from "lucide-react";
import heroImageUrl from "@assets/generated_images/Ghana_cityscape_hero_image_4ec5a327.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Primary Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-pulse"
          style={{
            backgroundImage: `url(${heroImageUrl})`,
            animationDuration: '20s'
          }}
        />

        {/* Glassy Transparent Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-emerald-900/20 to-slate-900/30 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent/50 to-emerald-800/30 backdrop-blur-md" />

        {/* Building Overlay Image - Using existing hero image */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-cover bg-bottom bg-no-repeat opacity-20"
             style={{ backgroundImage: `url(${heroImageUrl})` }} />

        {/* Animated Shapes - Glassy Theme */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-bounce backdrop-blur-sm border border-white/10" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl animate-pulse backdrop-blur-md border border-emerald-400/10" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg animate-ping backdrop-blur-sm" style={{ animationDuration: '5s' }} />
        <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-emerald-400/5 rounded-full blur-xl animate-pulse backdrop-blur-md border border-emerald-300/10" style={{ animationDuration: '6s' }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-white/20 animate-float" style={{ animationDelay: '0.2s' }}>
          <Home className="w-8 h-8" />
        </div>
        <div className="absolute top-1/3 right-1/4 text-emerald-200/20 animate-float-delayed" style={{ animationDelay: '0.4s' }}>
          <MapPin className="w-6 h-6" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-white/15 animate-float" style={{ animationDelay: '0.6s' }}>
          <Users className="w-10 h-10" />
        </div>
        <div className="absolute top-1/6 right-1/6 text-emerald-100/15 animate-float" style={{ animationDelay: '0.8s' }}>
          <Star className="w-6 h-6" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Hero Text - Improved Structure with Shift */}
          <div className="mb-16">
            {/* Main Headline */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-white mb-4 leading-none tracking-tight">
                <span className="block animate-fade-in-up transform hover:-translate-y-1 transition-transform duration-300" style={{ animationDelay: '0.1s' }}>
                  Find Your
                </span>
                <span className="block bg-gradient-to-r from-emerald-300 via-white to-emerald-300 bg-clip-text text-transparent animate-fade-in-up font-extrabold transform hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.3s' }}>
                  Dream Home
                </span>
              </h1>

              {/* Subheading */}
              <div className="mt-6 animate-fade-in-up transform hover:-translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.5s' }}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                  in Ghana
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-white mx-auto rounded-full transform hover:scale-x-125 transition-transform duration-300"></div>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light backdrop-blur-sm bg-white/5 rounded-xl p-4 inline-block">
                Discover luxury living with our curated collection of premium apartments,
                boutique hotels, and student accommodations across Ghana's vibrant cities.
              </p>
            </div>

            {/* Trust Indicators - Enhanced */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-16 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Shield className="w-5 h-5 text-emerald-300" />
                <span className="text-sm font-medium text-white">Verified Properties</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Star className="w-5 h-5 text-emerald-300" />
                <span className="text-sm font-medium text-white">5-Star Rated</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <TrendingUp className="w-5 h-5 text-emerald-300" />
                <span className="text-sm font-medium text-white">Growing Fast</span>
              </div>
            </div>
          </div>

          {/* Enhanced Stats - Improved Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
            <div className="text-center group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                1,200+
              </div>
              <div className="text-white/90 font-medium text-sm">Premium Properties</div>
              <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-white mx-auto mt-3 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </div>
            <div className="text-center group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                65+
              </div>
              <div className="text-white/90 font-medium text-sm">Cities Covered</div>
              <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-white mx-auto mt-3 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </div>
            <div className="text-center group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                8,500+
              </div>
              <div className="text-white/90 font-medium text-sm">Happy Tenants</div>
              <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-white mx-auto mt-3 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </div>
            <div className="text-center group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                4.9★
              </div>
              <div className="text-white/90 font-medium text-sm">Average Rating</div>
              <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-white mx-auto mt-3 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/20 rounded-full flex justify-center bg-white/5 backdrop-blur-md shadow-lg">
          <div className="w-1.5 h-4 bg-gradient-to-b from-emerald-300 to-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
