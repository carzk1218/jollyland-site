import teamImg from "@/assets/my-team.png";

const TeamSection = () => {
  return (
    <section className="section-charcoal py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Real People <span className="text-accent italic">Serving You.</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              We're a family-owned business with deep roots in the land industry. 
              Our diverse team has closed deals across multiple states, combining 
              traditional real estate values with a digital-first approach to 
              ensure your closing is fast and accurate.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              When you work with <span className="text-white font-semibold">JollyLand</span>, you're not dealing with an algorithm. You're working with real people who care about getting you a fair outcome and a stress-free exit from your property.
            </p>
            <a href="#contact" className="btn-amber inline-block px-10">
              Meet the Team
            </a>
          </div>

          {/* Team Photo - Swapped from placeholder to my-team.png */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-2xl h-80 md:h-[30rem] overflow-hidden rounded-xl border-4 border-accent/20 shadow-2xl">
              <img 
                src={teamImg} 
                alt="The diverse JollyLand team standing together smiling" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
