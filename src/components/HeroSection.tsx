import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Rolling fields" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24 pb-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="max-w-xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
              Discover Your Cash for Land.{" "}
              <span className="text-accent">The Easy Button</span> for Real Estate.
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              Get an immediate cash offer with no headaches. We cover back taxes,
              simplify the closing with legal accuracy, and coordinate with any
              reputable title company. Simple. Direct. Reliable.
            </p>
            <a href="#cash-offer" className="btn-amber inline-block">
              Get an Offer
            </a>
          </div>

          {/* Form Card — overlaps into next section */}
          <div className="relative lg:translate-y-24">
            <div className="bg-card text-card-foreground rounded-xl shadow-2xl p-8">
              <h3 className="font-display text-2xl font-bold mb-6 text-center">
                Get Your Cash Offer
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Property Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-card-foreground"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="State"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-card-foreground"
                  />
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-card-foreground"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-card-foreground"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-card-foreground"
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-card-foreground"
                />
                <button type="submit" className="btn-amber w-full">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
