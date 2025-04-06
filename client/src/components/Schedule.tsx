import { useInView } from "@/lib/animation";
import { MapPin } from "lucide-react";
import { scheduleItems } from "@/data/weddingData";

const Schedule = () => {
  const { ref: titleRef, inView: titleInView } = useInView();
  
  return (
    <section id="schedule" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 opacity-0 translate-y-5 transition-all duration-1000 ease-out ${titleInView ? 'opacity-100 translate-y-0' : ''}`}
        >
          <p className="font-script text-2xl md:text-3xl text-gold mb-2">Join Us</p>
          <h2 className="font-serif text-3xl md:text-4xl text-darkGray mb-6">Wedding Schedule</h2>
          <div className="h-0.5 w-24 bg-blush mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto relative">
          {/* <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gold bg-opacity-30"></div> */}
          
          {scheduleItems.map((item, index) => {
            const { ref, inView } = useInView();
            
            return (
              <div 
                key={index}
                ref={ref}
                className={`md:pl-4 mb-16 relative timeline-dot timeline-line opacity-0 translate-y-5 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-gold">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="font-serif text-2xl text-darkGray">{item.title}</h3>
                    <div className="font-sans mt-2 md:mt-0">
                      <p className="text-gold font-medium">{item.date}</p>
                      <p className="text-darkGray">{item.time}</p>
                    </div>
                  </div>
                  <div className="font-sans text-darkGray leading-relaxed">
                    {item.description}
                  </div>
                  <div className="mt-4 text-sm flex items-center text-darkGray">
                    <MapPin className="text-gold mr-2" size={16} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
