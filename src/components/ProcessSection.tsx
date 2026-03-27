import { Send, BarChart3, FileCheck, Banknote } from "lucide-react";

const steps = [
  { num: 1, icon: Send, title: "Submit Details", desc: "Fill out our simple form with your property info. Takes less than 2 minutes." },
  { num: 2, icon: BarChart3, title: "Analysis", desc: "Our team reviews your property details and researches comparable sales." },
  { num: 3, icon: FileCheck, title: "Review Offer", desc: "Receive a no-obligation cash offer within 24–48 hours." },
  { num: 4, icon: Banknote, title: "Cash Closing", desc: "Accept your offer and we handle everything. You get paid at closing." },
];

const ProcessSection = () => {
  return (
    <section id="our-process" className="section-charcoal py-24">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          A Clear Path <span className="text-accent">Forward</span>
        </h2>
        <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto">
          Our streamlined process gets you from inquiry to cash in hand — fast.
        </p>

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block" />

          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                {/* Number circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center font-display font-bold text-lg text-accent-foreground relative z-10">
                  {step.num}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <step.icon className="text-accent" size={20} />
                    <h3 className="font-display text-xl font-bold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-foreground/60 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
