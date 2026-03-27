import { Play } from "lucide-react";

const testimonials = [
  "[CLIENT_FACE_PLACEHOLDER_1]",
  "[CLIENT_FACE_PLACEHOLDER_2]",
  "[CLIENT_FACE_PLACEHOLDER_3]",
  "[CLIENT_FACE_PLACEHOLDER_4]",
];

const TestimonialsSection = () => {
  return (
    <section className="section-forest py-24">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          What Landowners Are <span className="text-accent">Saying</span>
        </h2>
        <p className="text-center text-foreground/60 mb-14 max-w-2xl mx-auto">
          Hear directly from people who trusted JollyLand with their property.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((label, i) => (
            <div
              key={i}
              className="relative bg-muted rounded-xl aspect-[3/4] flex items-center justify-center group cursor-pointer overflow-hidden"
            >
              <span className="text-muted-foreground text-xs text-center px-2">{label}</span>
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                  <Play className="text-accent-foreground ml-1" size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
