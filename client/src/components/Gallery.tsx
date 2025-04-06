import { useInView } from "@/lib/animation";
import { galleryImages } from "@/data/images";

const Gallery = () => {
  const { ref: titleRef, inView: titleInView } = useInView();
  
  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 opacity-0 translate-y-5 transition-all duration-1000 ease-out ${titleInView ? 'opacity-100 translate-y-0' : ''}`}
        >
          <p className="font-script text-2xl md:text-3xl text-gold mb-2">Memories</p>
          <h2 className="font-serif text-3xl md:text-4xl text-darkGray mb-6">Our Gallery</h2>
          <div className="h-0.5 w-24 bg-blush mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => {
            const { ref, inView } = useInView();
            
            return (
              <div 
                key={index}
                ref={ref}
                className={`opacity-0 translate-y-5 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="gallery-item rounded-lg overflow-hidden shadow-md cursor-pointer relative group">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {image.description && (
                    <div className="absolute inset-0 bg-darkGray bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-end justify-center opacity-0 group-hover:opacity-100">
                      <p className="text-white font-sans p-4 text-center">{image.description}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
