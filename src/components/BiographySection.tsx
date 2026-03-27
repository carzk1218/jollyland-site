import ownerImg from "@/assets/owner.png";

const BiographySection = () => {
  return (
    <section id="about-us" className="section-charcoal py-24 lg:pt-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Portrait */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Actual Image container */}
              <div className="w-72 h-96 md:w-80 md:h-[28rem] overflow-hidden rounded-lg border-4 border-accent/30 shadow-2xl">
                <img 
                  src={ownerImg} 
                  alt="Cary Kenner - Founder of JollyLand" 
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
              {/* Decorative Accent Frame behind the photo */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent/20 rounded-lg -z-10" />
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              Meet the Founder
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Built by Real People.{" "}
              <span className="text-accent italic">Scaled by Trust.</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              With years of experience buying land across multiple states, we've built our
              reputation on transparency, fair dealing, and genuine care for landowners.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              We started <span className="text-white font-semibold">JollyLand</span> because we believe selling your land should be simple,
              stress-free, and handled with integrity from start to finish. We’re not just a company; we’re your partners in a smooth transition.
            </p>
            <a href="#contact" className="btn-amber inline-block px-10">
              Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
