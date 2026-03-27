import { ChevronLeft, ChevronRight } from "lucide-react";

const logos = Array.from({ length: 12 }, (_, i) => `[PARTNER LOGO ${(i % 6) + 1}]`);

const PartnersSection = () => {
  return (
    <section className="section-charcoal py-24">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Our Title & Closing <span className="text-accent">Partners</span>
        </h2>
        <p className="text-center text-foreground/60 mb-14 max-w-2xl mx-auto">
          We work with trusted title companies nationwide to ensure a smooth closing.
        </p>

        <div className="relative">
          {/* Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:bg-amber-hover transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:bg-amber-hover transition-colors">
            <ChevronRight size={20} />
          </button>

          {/* Marquee */}
          <div className="overflow-hidden mx-14">
            <div className="flex animate-marquee gap-8">
              {logos.map((label, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-40 h-24 bg-muted rounded-lg flex items-center justify-center"
                >
                  <span className="text-muted-foreground text-xs">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
