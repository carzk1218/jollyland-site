import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Robert Miller",
    location: "Texas",
    text: "I had a 20-acre plot with years of back taxes. JollyLand handled the legal paperwork and the taxes, and I had a check in my hand in less than two weeks.",
    highlight: "Back Taxes Settled"
  },
  {
    name: "Sarah Jenkins",
    location: "Arizona",
    text: "Selling my inherited property was a headache until I found Ken's team. The digital closing was so easy—I never even had to leave my house in Florida.",
    highlight: "Remote Closing"
  },
  {
    name: "Michael Thompson",
    location: "Colorado",
    text: "I was skeptical of 'instant offers,' but JollyLand was transparent from day one. They worked directly with a reputable title company and kept me updated daily.",
    highlight: "Professional Service"
  },
  {
    name: "David Wilson",
    location: "Florida",
    text: "No hidden fees, no complicated jargon. Just a simple, direct offer and a reliable team that actually does what they say they're going to do.",
    highlight: "Simple & Direct"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#163A24] py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Social Proof
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
            What Landowners Are <span className="text-accent italic">Saying</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Hear directly from people who trusted JollyLand with their property transition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-white p-8 rounded-xl border border-white/10 shadow-xl hover:border-accent/40 transition-all duration-500 group overflow-hidden flex flex-col min-h-[350px]"
            >
              {/* Subtle Quote Icon Background */}
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-black/5 group-hover:text-accent/10 transition-colors" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="bg-accent/10 text-accent text-[10px] font-bold px-2 py-1 rounded-md inline-block mb-6 uppercase tracking-wider border border-accent/20 w-fit">
                  {t.highlight}
                </div>
                
                {/* CHANGED: Text color set to slate-700 to be visible on white */}
                <p className="text-slate-700 text-md italic leading-relaxed mb-8">
                  "{t.text}"
                </p>
                
                <div className="mt-auto">
                  {/* CHANGED: Name set to slate-900 */}
                  <h4 className="text-slate-900 font-bold text-lg">{t.name}</h4>
                  <p className="text-accent font-medium text-sm">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/20 text-[10px] mt-16 italic uppercase tracking-widest">
          Portfolio Demo: Names and stories are simulated for design demonstration.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
