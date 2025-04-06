import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { heroBackground } from "@/data/images";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set wedding date - May 5, 2025
    const weddingDate = new Date('2025-05-05T19:00:00').getTime();
    
    // Update countdown every second
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;
      
      if (distance < 0) {
        // Wedding day has passed
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        return;
      }
      
      // Calculate time units
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('${heroBackground}')`,
      }}
    >
      <div className="absolute inset-0 bg-darkGray bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center text-center px-4 pt-32 md:pt-24 ">
        <p
          className="font-script text-3xl md:text-4xl lg:text-5xl text-gold mb-4 opacity-0 translate-y-5 transition-all duration-800 ease-out"
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
        
        {/* Countdown Timer */}
        <div 
          className="flex justify-center gap-4 md:gap-8 mb-8 opacity-0 translate-y-5 transition-all duration-800 ease-out"
          style={{ transitionDelay: "300ms" }}
          data-animate="true"
        >
          <div className="flex flex-col items-center">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg w-16 md:w-24 h-16 md:h-24 flex items-center justify-center">
              <span className="font-serif text-2xl md:text-4xl text-white">{timeLeft.days.toString()}</span>
            </div>
            <span className="text-white text-xs md:text-sm mt-2">Days</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg w-16 md:w-24 h-16 md:h-24 flex items-center justify-center">
              <span className="font-serif text-2xl md:text-4xl text-white">{timeLeft.hours.toString()}</span>
            </div>
            <span className="text-white text-xs md:text-sm mt-2">Hours</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg w-16 md:w-24 h-16 md:h-24 flex items-center justify-center">
              <span className="font-serif text-2xl md:text-4xl text-white">{timeLeft.minutes.toString()}</span>
            </div>
            <span className="text-white text-xs md:text-sm mt-2">Minutes</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg w-16 md:w-24 h-16 md:h-24 flex items-center justify-center">
              <span className="font-serif text-2xl md:text-4xl text-white">{timeLeft.seconds.toString()}</span>
            </div>
            <span className="text-white text-xs md:text-sm mt-2">Seconds</span>
          </div>
        </div>
        
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
