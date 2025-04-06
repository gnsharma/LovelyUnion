import { useInView } from "@/lib/animation";
import { MapPin } from "lucide-react";
import { venueExteriorImage } from "@/data/images";

const Venue = () => {
  const { ref: titleRef, inView: titleInView } = useInView();
  const { ref: contentRef, inView: contentInView } = useInView();
  const { ref: mapRef, inView: mapInView } = useInView();

  return (
    <section
      id="venue"
      className="relative py-20 md:py-28 bg-cover bg-fixed"
      style={{
        backgroundImage: `url('${venueExteriorImage}')`,
      }}
    >
      <div className="absolute inset-0 bg-darkGray bg-opacity-60"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-16 opacity-0 translate-y-5 transition-all duration-1000 ease-out ${titleInView ? "opacity-100 translate-y-0" : ""}`}
        >
          <p className="font-script text-2xl md:text-3xl text-gold mb-2">
            Location
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            Venue Details
          </h2>
          <div className="h-0.5 w-24 bg-blush mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          <div
            ref={contentRef}
            className={`bg-white bg-opacity-95 rounded-lg shadow-lg p-8 lg:w-1/2 opacity-0 translate-y-5 transition-all duration-1000 ease-out ${contentInView ? "opacity-100 translate-y-0" : ""}`}
          >
            <h3 className="font-serif text-2xl text-darkGray mb-4">
              Hotel Prime Safari
            </h3>
            <p className="font-sans text-darkGray leading-relaxed mb-6">
              Our wedding will take place at the stunning Hotel Prime Safari offering a blend of modern amenities and
              traditional hospitality, featuring well-appointed rooms and
              versatile event spaces suitable for weddings and other
              celebrations. Its proximity to Mansarovar Metro Station, just
              about 1 km away, ensures convenient access for guests.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-gold mt-1 mr-4" size={20} />
                <p className="font-sans text-darkGray">
                  283A Gopalpura Bypass Road
                  <br />
                  Mansarovar, Jaipur, 302012
                </p>
              </div>
            </div>
          </div>
          <div
            ref={mapRef}
            className={`lg:w-1/2 h-96 lg:h-auto rounded-lg overflow-hidden shadow-lg opacity-0 translate-y-5 transition-all duration-1000 ease-out ${mapInView ? "opacity-100 translate-y-0" : ""}`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4281.567300019258!2d75.74009777543837!3d26.881102976666014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db594b59b0357%3A0xa83d6e51915c974a!2sHotel%20Prime%20Safari!5e1!3m2!1sen!2sth!4v1743916770832!5m2!1sen!2sth"
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              title="Wedding Venue Location"
              aria-label="Map showing Lakeside Garden Estate"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
