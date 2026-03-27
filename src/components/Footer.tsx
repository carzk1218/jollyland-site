import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="section-forest py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand & Contact */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/jollyland-logo-white.png" 
                alt="JollyLand Logo" 
                className="h-10 w-auto object-contain" 
              />
            </div>
            <p className="text-foreground/50 text-sm leading-relaxed mb-8">
              Your trusted partner for fast, fair land transactions. Family-owned
              and operated across multiple states.
            </p>
            <div className="space-y-3 text-foreground/50 text-sm">
              <div className="flex items-center gap-3 hover:text-accent transition-colors">
                <Mail size={16} className="text-accent" /> 
                <span>hello@jollyland.com</span>
              </div>
              <div className="flex items-center gap-3 hover:text-accent transition-colors">
                <Phone size={16} className="text-accent" /> 
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 hover:text-accent transition-colors">
                <MapPin size={16} className="text-accent" /> 
                <span>123 Realty Way, Austin, TX 78701</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:pl-12">
            <h4 className="font-display font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3 text-foreground/50 text-sm">
              {["Home", "About Us", "Our Process", "Cash Offer", "FAQ"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(/\s/g, "-")}`} className="hover:text-accent transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Socials */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">Resources</h4>
            <ul className="space-y-3 text-foreground/50 text-sm">
              {["Blog", "Testimonials", "Partners", "Privacy Policy", "Terms of Service"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-accent transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              {["FB", "IG", "LI", "YT"].map((s) => (
                <div
                  key={s}
                  className="w-10 h-10 rounded-full bg-muted/20 flex items-center justify-center text-foreground/50 text-xs hover:bg-accent hover:text-accent-foreground transition-all cursor-pointer shadow-sm"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-foreground/5 mt-16 pt-8 text-center text-foreground/30 text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} JollyLand. All rights reserved. 
          <span className="mx-2">|</span> 
          Designed by CKGHLVA
        </div>
      </div>
    </footer>
  );
};

export default Footer;
