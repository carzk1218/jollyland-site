import { ChevronLeft, ChevronRight } from "lucide-react";
import p1 from "@/assets/partner-1.png";
import p2 from "@/assets/partner-2.png";
import p3 from "@/assets/partner-3.png";
import p4 from "@/assets/partner-4.png";
import p5 from "@/assets/partner-5.png";
import p6 from "@/assets/partner-6.png";

// Doubling the array to ensure a seamless infinite loop
const partnerImages = [p1, p2, p3, p4, p5, p6, p1, p2, p3, p4, p5, p6];

const PartnersSection = () => {
  return (
    <section className="section-charcoal py-24 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
          Our Title & Closing <span className="text-accent italic">Partners</span>
        </h2>
        <p className="text-white/60 mb-14 max-w-2xl mx-auto text-lg">
          We work with trusted title companies nationwide to ensure a smooth, legally accurate closing.
        </p>

        <div className="relative group">
          {/* Navigation Arrows */}
          <button className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform hidden md:flex">
            <ChevronLeft size={24} />
          </button>
          <button className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform hidden md:flex">
            <ChevronRight size={24} />
          </button>

          {/* Marquee Container */}
          <div className="overflow-hidden whitespace-nowrap mask-edges">
            <div className="flex animate-marquee gap-8 items-center">
              {partnerImages.map((img, i) => (
                <div
                  key={i}
                  {/* w-full h-full and overflow-hidden ensures the image covers the card completely */}
                  className="flex-shrink-0 w-52 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer overflow-hidden"
                >
                  <img 
                    src={img} 
                    alt={`Partner ${i + 1}`} 
                    className="w-full h-full object-cover block" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;
