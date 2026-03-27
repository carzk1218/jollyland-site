import heroBg from "@/assets/hero-bg.jpg";

const PreFooterCTA = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Ready to Start the <span className="text-accent">Conversation?</span>
        </h2>
        <p className="text-foreground/60 text-lg mb-10 max-w-2xl mx-auto">
          Whether you're ready to sell or just exploring your options, we're here to help
          with a no-pressure conversation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#cash-offer" className="btn-amber inline-block">
            Submit Your Property
          </a>
          <a href="#contact" className="btn-outline-white inline-block">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default PreFooterCTA;
