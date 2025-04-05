import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-darkGray text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-script text-3xl text-gold mb-4">Sarah & Michael</h2>
          <p className="font-serif mb-6">June 15, 2024 • Lakeside Garden Estate</p>
          
          <div className="flex justify-center space-x-4 mb-8">
            <a href="#" className="text-white hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-white hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="mailto:hello@sarahandmichael.com" className="text-white hover:text-gold transition-colors" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
          
          <div className="w-24 h-px bg-gold mx-auto mb-6"></div>
          
          <nav className="mb-6">
            <ul className="flex flex-wrap justify-center space-x-4 font-sans text-sm">
              <li><a href="#hero" className="text-white hover:text-gold transition-colors">Home</a></li>
              <li><a href="#story" className="text-white hover:text-gold transition-colors">Our Story</a></li>
              <li><a href="#schedule" className="text-white hover:text-gold transition-colors">Schedule</a></li>
              <li><a href="#venue" className="text-white hover:text-gold transition-colors">Venue</a></li>
              <li><a href="#gallery" className="text-white hover:text-gold transition-colors">Gallery</a></li>
              <li><a href="#rsvp" className="text-white hover:text-gold transition-colors">RSVP</a></li>
            </ul>
          </nav>
          
          <p className="font-sans text-sm text-gray-400">
            &copy; {currentYear} Sarah & Michael Wedding | Created with ♥
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
