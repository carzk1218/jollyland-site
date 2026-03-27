const TeamSection = () => {
  return (
    <section className="section-charcoal py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Real People <span className="text-accent">Serving You</span>
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-4">
              We're a family-owned business with deep roots in the land industry.
              Our team has closed deals in multiple states and built lasting
              relationships with landowners across the country.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              When you work with JollyLand, you're working with real people who
              care about getting you the best outcome.
            </p>
            <a href="#contact" className="btn-amber inline-block">
              Meet the Team
            </a>
          </div>

          {/* Team photo placeholder */}
          <div className="bg-muted rounded-xl h-80 md:h-96 flex items-center justify-center">
            <span className="text-muted-foreground text-sm">[TEAM_FACE_PLACEHOLDERS_VISIBLE]</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
