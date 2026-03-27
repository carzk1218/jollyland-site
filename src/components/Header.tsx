import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "About Us", "Our Process", "Cash Offer", "Contact"];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-secondary shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Container div - Added this back to fix the layout and error */}
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <a href="/" className="transition-opacity hover:opacity-90">
            <img 
              src="/jollyland-logo-white.png" 
              alt="JollyLand Logo" 
              className="h-10 w-auto object-contain" 
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`} 
              className="nav-link"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <nav className="md:hidden bg-secondary px-6 pb-6 flex flex-col gap-4 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
              className="nav-link"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
