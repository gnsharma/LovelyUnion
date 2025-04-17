const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-darkGray text-darkGray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-script text-5xl text-gold mb-3">
            Anika & Govind
          </h2>
          <p className="font-script text-2xl text-gold mb-2">#ani_ka_govind</p>
          <p className="font-serif mb-6">
            May 05, 2025 • Hotel Prime Safari • Jaipur
          </p>
          <div className="w-24 h-px bg-gold mx-auto mb-6"></div>
          <nav className="mb-6">
            <ul className="flex flex-wrap justify-center space-x-4 font-sans text-sm">
              <li>
                <a href="#hero" className="hover:text-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-gold transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  className="hover:text-gold transition-colors"
                >
                  Schedule
                </a>
              </li>
              <li>
                <a href="#venue" className="hover:text-gold transition-colors">
                  Venue
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-gold transition-colors"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </nav>

          <p className="font-sans text-sm text-gray-400">
            &copy; {currentYear} Anika & Govind Wedding | Created with{" "}
            <span className="text-red-600">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
