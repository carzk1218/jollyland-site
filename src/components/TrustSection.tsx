import { Zap, Eye, Users } from "lucide-react";

const values = [
  { icon: Zap, title: "Speed", desc: "Close in as little as 7 days. No banks, no delays, no red tape." },
  { icon: Eye, title: "Transparency", desc: "Clear communication at every step. No hidden fees, ever." },
  { icon: Users, title: "Local Experts", desc: "We know the land market in your area. Fair offers backed by data." },
];

const TrustSection = () => {
  return (
    <section className="section-charcoal py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-forest rounded-xl p-10 text-center"
            >
              <v.icon className="text-accent mx-auto mb-4" size={40} />
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">{v.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
