import { useState, useEffect } from "react";
import { ChevronDown, Heart } from "lucide-react";
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
      <div className="absolute inset-0 flex flex-col items-center text-center px-4 pt-20 md:pt-24">
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
        
        {/* Title for countdown */}
        <div 
          className="mb-4 opacity-0 translate-y-5 transition-all duration-800 ease-out"
          style={{ transitionDelay: "300ms" }}
          data-animate="true"
        >
          <p className="text-cream font-script text-xl md:text-2xl">
            Counting Down to Our Special Day
          </p>
        </div>

        {/* Playful Countdown Timer */}
        <div 
          className="flex justify-center gap-4 md:gap-8 mb-8 opacity-0 translate-y-5 transition-all duration-800 ease-out"
          style={{ transitionDelay: "300ms" }}
          data-animate="true"
        >
          <div className="flex flex-col items-center">
            <div className="relative bg-gradient-to-br from-pink-100/30 to-pink-300/30 backdrop-blur-sm rounded-lg w-16 md:w-24 h-16 md:h-24 flex items-center justify-center overflow-hidden hover:scale-110 transition-all duration-300 border border-pink-200/30 shadow-lg">
              <span className="font-serif text-2xl md:text-4xl text-white drop-shadow-md animate-pulse">{timeLeft.days.toString()}</span>
              <Heart className="absolute -bottom-3 -right-3 text-pink-300/30 w-12 h-12 animate-ping" style={{ animationDuration: '3s' }} />
            </div>
            <span className="text-white text-xs md:text-sm mt-2 font-medium bg-pink-500/20 px-3 py-0.5 rounded-full">Days</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="relative bg-gradient-to-br from-blue-100/30 to-blue-300/30 backdrop-blur-sm rounded-lg w-16 md:w-24 h-16 md:h-24 flex items-center justify-center overflow-hidden hover:scale-110 transition-all duration-300 border border-blue-200/30 shadow-lg">
              <span className="font-serif text-2xl md:text-4xl text-white drop-shadow-md animate-pulse" style={{ animationDuration: '1.5s' }}>{timeLeft.hours.toString()}</span>
              <Heart className="absolute -top-3 -left-3 text-blue-300/30 w-12 h-12 animate-ping" style={{ animationDuration: '4s' }} />
            </div>
            <span className="text-white text-xs md:text-sm mt-2 font-medium bg-blue-500/20 px-3 py-0.5 rounded-full">Hours</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="relative bg-gradient-to-br from-purple-100/30 to-purple-300/30 backdrop-blur-sm rounded-lg w-16 md:w-24 h-16 md:h-24 flex items-center justify-center overflow-hidden hover:scale-110 transition-all duration-300 border border-purple-200/30 shadow-lg">
              <span className="font-serif text-2xl md:text-4xl text-white drop-shadow-md animate-pulse" style={{ animationDuration: '2s' }}>{timeLeft.minutes.toString()}</span>
              <Heart className="absolute -bottom-3 -left-3 text-purple-300/30 w-12 h-12 animate-ping" style={{ animationDuration: '3.5s' }} />
            </div>
            <span className="text-white text-xs md:text-sm mt-2 font-medium bg-purple-500/20 px-3 py-0.5 rounded-full">Minutes</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="relative bg-gradient-to-br from-gold/30 to-yellow-300/30 backdrop-blur-sm rounded-lg w-16 md:w-24 h-16 md:h-24 flex items-center justify-center overflow-hidden hover:scale-110 transition-all duration-300 border border-yellow-200/30 shadow-lg">
              <span className="font-serif text-2xl md:text-4xl text-white drop-shadow-md animate-pulse" style={{ animationDuration: '1s' }}>{timeLeft.seconds.toString()}</span>
              <Heart className="absolute -top-3 -right-3 text-yellow-300/30 w-12 h-12 animate-ping" style={{ animationDuration: '2.5s' }} />
            </div>
            <span className="text-white text-xs md:text-sm mt-2 font-medium bg-yellow-500/20 px-3 py-0.5 rounded-full">Seconds</span>
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
