import { useInView } from "@/lib/animation";
import { Calendar, UserPlus, Gift } from "lucide-react";

const RSVP = () => {
  const { ref, inView } = useInView();
  
  return (
    <section id="rsvp" className="py-20 md:py-28 bg-blush bg-opacity-20">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto text-center opacity-0 translate-y-5 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : ''}`}
        >
          <p className="font-script text-2xl md:text-3xl text-gold mb-2">Join Us</p>
          <h2 className="font-serif text-3xl md:text-4xl text-darkGray mb-6">RSVP</h2>
          <div className="h-0.5 w-24 bg-gold mx-auto mb-10"></div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <p className="font-sans text-lg text-darkGray leading-relaxed mb-6">
              We would be honored to have you join us on our special day. Please RSVP by May 15, 2024 by emailing us at:
            </p>
            
            <a href="mailto:hello@sarahandmichael.com" className="font-serif text-xl md:text-2xl text-gold hover:text-darkGold transition-colors">
              hello@sarahandmichael.com
            </a>
            
            <p className="font-sans text-base text-darkGray mt-6">
              Please include the names of all guests attending and any dietary restrictions in your response.
            </p>
            
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blush bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Calendar className="text-gold" size={24} />
                </div>
                <h3 className="font-serif text-darkGray mb-1">RSVP Deadline</h3>
                <p className="font-sans text-darkGray">May 15, 2024</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blush bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-2">
                  <UserPlus className="text-gold" size={24} />
                </div>
                <h3 className="font-serif text-darkGray mb-1">Plus Ones</h3>
                <p className="font-sans text-darkGray">As indicated on your invitation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blush bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Gift className="text-gold" size={24} />
                </div>
                <h3 className="font-serif text-darkGray mb-1">Registry</h3>
                <p className="font-sans text-darkGray">Details in your invitation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
