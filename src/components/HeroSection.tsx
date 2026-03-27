import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Rolling fields" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Small Amber Label */}
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-6 block">
            WE MAKE IT SIMPLE
          </span>
          
          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-10 text-white">
            Unlock the Value <br className="hidden md:block" /> of Your Land
          </h1>
          
          {/* Buttons Container */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Primary Amber Button */}
            <button className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 rounded-md text-lg flex items-center group transition-all duration-300">
              Get Your Property Reviewed 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            
            {/* Secondary Transparent Button */}
            <button className="bg-transparent hover:bg-white/10 text-white font-bold py-4 px-8 rounded-md border border-white/40 transition-all duration-300 text-lg">
              See How the Process Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
