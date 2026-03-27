import { Home, TreePine, MapPin, FileText, DollarSign, Clock } from "lucide-react";

const situations = [
  { icon: FileText, title: "Inherited Land", desc: "Received property you don't need? We make it easy to convert to cash." },
  { icon: Home, title: "Unwanted Property", desc: "Tired of paying taxes on land you'll never use? Get a fair cash offer today." },
  { icon: MapPin, title: "Out-of-State Owner", desc: "Managing land from far away is stressful. Let us take it off your hands." },
  { icon: DollarSign, title: "Back Taxes Owed", desc: "Behind on taxes? We'll cover them and still give you a fair price." },
  { icon: Clock, title: "Need Fast Cash", desc: "Life happens. We close quickly so you get cash when you need it most." },
  { icon: TreePine, title: "Vacant Land", desc: "Sitting on an empty lot? Turn unused acreage into immediate value." },
];

const SituationsSection = () => {
  return (
    <section className="section-forest py-24">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Situations We <span className="text-accent">Understand</span>
        </h2>
        <p className="text-center text-foreground/60 mb-14 max-w-2xl mx-auto">
          No matter your situation, we've helped landowners just like you find the right solution.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {situations.map((s) => (
            <div
              key={s.title}
              className="bg-card text-card-foreground rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <s.icon className="text-accent mb-4" size={36} />
              <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-card-foreground/70 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SituationsSection;
