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
      {/* Container: Removed py-4 and px-6 to eliminate extra spacing around the logo */}
      <div className="container mx-auto flex items-center justify-between p-0">
        <div className="flex items-center p-0 m-0">
          <a href="/" className="block p-0 m-0 leading-[0] transition-opacity hover:opacity-90">
            <img 
              src="/jollyland-logo-white.png" 
              alt="JollyLand Logo" 
              className="w-[150px] h-auto block m-0 p-0" 
              style={{ display: 'block' }}
            />
          </a>
        </div>

        {/* Desktop Navigation - Added some padding here so the links aren't touching the screen edge */}
        <nav className="hidden md:flex items-center gap-8 pr-6">
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
          className="md:hidden text-foreground pr-6"
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
