import { useInView } from "@/lib/animation";
import { MapPin, Phone, Globe, Hotel } from "lucide-react";

const Venue = () => {
  const { ref: titleRef, inView: titleInView } = useInView();
  const { ref: contentRef, inView: contentInView } = useInView();
  const { ref: mapRef, inView: mapInView } = useInView();
  
  return (
    <section id="venue" className="relative py-20 md:py-28 bg-cover bg-fixed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')" }}>
      <div className="absolute inset-0 bg-darkGray bg-opacity-60"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-16 opacity-0 translate-y-5 transition-all duration-1000 ease-out ${titleInView ? 'opacity-100 translate-y-0' : ''}`}
        >
          <p className="font-script text-2xl md:text-3xl text-gold mb-2">Location</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Venue Details</h2>
          <div className="h-0.5 w-24 bg-blush mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          <div 
            ref={contentRef}
            className={`bg-white bg-opacity-95 rounded-lg shadow-lg p-8 lg:w-1/2 opacity-0 translate-y-5 transition-all duration-1000 ease-out ${contentInView ? 'opacity-100 translate-y-0' : ''}`}
          >
            <h3 className="font-serif text-2xl text-darkGray mb-4">Lakeside Garden Estate</h3>
            <p className="font-sans text-darkGray leading-relaxed mb-6">
              Our wedding will take place at the stunning Lakeside Garden Estate, offering breathtaking views of the lake and mountains. The venue features beautiful gardens, a waterfront pavilion for the ceremony, and an elegant ballroom for the reception.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <MapPin className="text-gold mt-1 mr-4" size={20} />
                <p className="font-sans text-darkGray">
                  500 Sunset Way<br />
                  Lakeview, CA 95123
                </p>
              </div>
              <div className="flex items-start">
                <Phone className="text-gold mt-1 mr-4" size={20} />
                <p className="font-sans text-darkGray">(555) 123-4567</p>
              </div>
              <div className="flex items-start">
                <Globe className="text-gold mt-1 mr-4" size={20} />
                <p className="font-sans text-darkGray">www.lakesidegardenestate.com</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-serif text-xl text-darkGray">Accommodations</h4>
              <p className="font-sans text-darkGray leading-relaxed">
                We've arranged special rates at the following hotels:
              </p>
              <ul className="space-y-2 font-sans text-darkGray">
                <li className="flex items-center">
                  <Hotel className="text-gold mr-2" size={16} />
                  <span>Lakeview Grand Hotel (2 miles from venue)</span>
                </li>
                <li className="flex items-center">
                  <Hotel className="text-gold mr-2" size={16} />
                  <span>Mountain View Lodge (3 miles from venue)</span>
                </li>
              </ul>
              <p className="font-sans text-sm text-darkGray italic">
                Please mention the "Anderson-Reynolds Wedding" when booking to receive the special rate.
              </p>
            </div>
          </div>
          
          <div 
            ref={mapRef}
            className={`lg:w-1/2 h-96 lg:h-auto rounded-lg overflow-hidden shadow-lg opacity-0 translate-y-5 transition-all duration-1000 ease-out ${mapInView ? 'opacity-100 translate-y-0' : ''}`}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7962652496366!2d-122.47620548371033!3d37.78779997965592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808587725347e56f%3A0x51861821c6e8de39!2sGolden%20Gate%20Park!5e0!3m2!1sen!2sus!4v1629733796603!5m2!1sen!2sus"
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              title="Wedding Venue Location"
              aria-label="Map showing Lakeside Garden Estate"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
