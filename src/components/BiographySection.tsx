const BiographySection = () => {
  return (
    <section id="about-us" className="section-charcoal py-24 lg:pt-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Portrait */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-96 md:w-80 md:h-[28rem] bg-muted rounded-lg border-4 border-accent/30 flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-body">[MY_FACE]</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-72 h-96 md:w-80 md:h-[28rem] border-2 border-accent/20 rounded-lg -z-10" />
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Built by Real People.{" "}
              <span className="text-accent">Scaled by Trust.</span>
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-4">
              With years of experience buying land across multiple states, we've built our
              reputation on transparency, fair dealing, and genuine care for landowners.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              We started JollyLand because we believe selling your land should be simple,
              stress-free, and handled with integrity from start to finish.
            </p>
            <a href="#about-us" className="btn-amber inline-block">
              Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
