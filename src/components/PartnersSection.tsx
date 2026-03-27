import { ChevronLeft, ChevronRight } from "lucide-react";
import p1 from "@/assets/partner-1.png";
import p2 from "@/assets/partner-2.png";
import p3 from "@/assets/partner-3.png";
import p4 from "@/assets/partner-4.png";
import p5 from "@/assets/partner-5.png";
import p6 from "@/assets/partner-6.png";

// We double the array to ensure the "Infinite" scroll doesn't have a gap
const partnerImages = [p1, p2, p3, p4, p5, p6, p1, p2, p3, p4, p5, p6];

const PartnersSection = () => {
  return (
    <section className="section-charcoal py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Our Title & Closing <span className="text-accent italic">Partners</span>
        </h2>
        <p className="text-center text-white/60 mb-14 max-w-2xl mx-auto text-lg">
          We work with trusted title companies nationwide to ensure a smooth, legally accurate closing.
        </p>

        <div className="relative group">
          {/* Decorative Arrows */}
          <button className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform hidden md:flex">
            <ChevronLeft size={24} />
          </button>
          <button className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform hidden md:flex">
            <ChevronRight size={24} />
          </button>

          {/* Infinite Marquee Container */}
          <div className="overflow-hidden whitespace-nowrap mask-edges">
            <div className="flex animate-marquee gap-8 items-center py-4">
              {partnerImages.map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-48 h-28 bg-white rounded-xl shadow-lg flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer border border-white/10"
                >
                  <img 
                    src={img} 
                    alt={`Partner Logo ${i + 1}`} 
                    className="max-w-full max-h-full object-contain" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind Animation CSS Inject - Optional if not in tailwind.config */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;
