import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-darkGray bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <p
          className="font-script text-3xl md:text-4xl lg:text-5xl text-cream mb-4 opacity-0 translate-y-5 transition-all duration-800 ease-out"
          style={{ transitionDelay: "0ms" }}
          data-animate="true"
        >
          We're Getting Married
        </p>
        <h1
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 opacity-0 translate-y-5 transition-all duration-800 ease-out"
          style={{ transitionDelay: "200ms" }}
          data-animate="true"
        >
          Anika & Govind 
        </h1>
        <p
          className="font-sans text-lg md:text-xl text-white mb-3 opacity-0 translate-y-5 transition-all duration-800 ease-out"
          style={{ transitionDelay: "400ms" }}
          data-animate="true"
        >
          May 05, 2025 • Hotel Prime Safari • Jaipur
        </p>
        <p
          className="font-script text-xl md:text-2xl text-gold mb-8 opacity-0 translate-y-5 transition-all duration-800 ease-out"
          style={{ transitionDelay: "500ms" }}
          data-animate="true"
        >
          #ani_ka_govind
        </p>
        <div
          className="opacity-0 translate-y-5 transition-all duration-800 ease-out"
          style={{ transitionDelay: "600ms" }}
          data-animate="true"
        >
          <a
            href="#rsvp"
            className="inline-block bg-gold hover:bg-darkGold text-white font-serif uppercase tracking-wider px-8 py-3 rounded-md transition-colors"
          >
            RSVP Now
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a href="#story" className="block">
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
