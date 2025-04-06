import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-opacity-95 shadow' : 'bg-opacity-90'}`} id="navbar">
      <nav className="bg-cream backdrop-blur-sm py-4">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <a href="#hero" className="font-script text-5xl text-gold">Anika & Govind</a>
            <span className="text-lg text-darkGold italic">#ani_ka_govind</span>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gold focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-serif text-sm uppercase tracking-wider">
            <li><a href="#hero" className="text-darkGray hover:text-gold transition-colors">Home</a></li>
            <li><a href="#story" className="text-darkGray hover:text-gold transition-colors">Our Story</a></li>
            <li><a href="#schedule" className="text-darkGray hover:text-gold transition-colors">Schedule</a></li>
            <li><a href="#venue" className="text-darkGray hover:text-gold transition-colors">Venue</a></li>
            <li><a href="#gallery" className="text-darkGray hover:text-gold transition-colors">Gallery</a></li>
            <li><a href="#rsvp" className="text-darkGray hover:text-gold transition-colors">RSVP</a></li>
          </ul>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-cream bg-opacity-95 shadow-md`}>
          <ul className="container mx-auto px-4 py-4 space-y-4 font-serif text-sm uppercase tracking-wider">
            <li><a href="#hero" onClick={closeMenu} className="block text-darkGray hover:text-gold transition-colors">Home</a></li>
            <li><a href="#story" onClick={closeMenu} className="block text-darkGray hover:text-gold transition-colors">Our Story</a></li>
            <li><a href="#schedule" onClick={closeMenu} className="block text-darkGray hover:text-gold transition-colors">Schedule</a></li>
            <li><a href="#venue" onClick={closeMenu} className="block text-darkGray hover:text-gold transition-colors">Venue</a></li>
            <li><a href="#gallery" onClick={closeMenu} className="block text-darkGray hover:text-gold transition-colors">Gallery</a></li>
            <li><a href="#rsvp" onClick={closeMenu} className="block text-darkGray hover:text-gold transition-colors">RSVP</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
