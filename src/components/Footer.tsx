import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="section-forest py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center font-display font-bold text-sm text-accent-foreground">
                JL
              </div>
              <span className="font-display text-lg font-bold text-foreground">JollyLand</span>
            </div>
            <p className="text-foreground/50 text-sm leading-relaxed mb-6">
              Your trusted partner for fast, fair land transactions. Family-owned
              and operated across multiple states.
            </p>
            <div className="space-y-2 text-foreground/50 text-sm">
              <div className="flex items-center gap-2"><Mail size={14} className="text-accent" /> [EMAIL]</div>
              <div className="flex items-center gap-2"><Phone size={14} className="text-accent" /> [PHONE]</div>
              <div className="flex items-center gap-2"><MapPin size={14} className="text-accent" /> [ADDRESS]</div>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-foreground/50 text-sm">
              {["Home", "About Us", "Our Process", "Cash Offer", "FAQ"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(/\s/g, "-")}`} className="hover:text-accent transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-foreground/50 text-sm">
              {["Blog", "Testimonials", "Partners", "Privacy Policy", "Terms of Service"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-accent transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              {["FB", "IG", "LI", "YT"].map((s) => (
                <div
                  key={s}
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground text-xs hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-foreground/30 text-xs">
          © {new Date().getFullYear()} JollyLand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
