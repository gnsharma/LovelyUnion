import { useInView } from "@/lib/animation";

const OurStory = () => {
  const { ref, inView } = useInView();
  
  return (
    <section id="story" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto text-center opacity-0 translate-y-5 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : ''}`}
        >
          <p className="font-script text-2xl md:text-3xl text-gold mb-2">Our Love Story</p>
          <h2 className="font-serif text-3xl md:text-4xl text-darkGray mb-6">How We Met</h2>
          <div className="h-0.5 w-24 bg-blush mx-auto mb-10"></div>
          
          <div className="text-center mb-12">
            <p className="font-sans text-base md:text-lg text-darkGray leading-relaxed mb-6">
              It all began with a chance encounter at a local coffee shop in the fall of 2018. Sarah was studying for her architecture exam, while Michael was working on his novel. With just one available table left, they ended up sharing it, and the rest is history.
            </p>
            <p className="font-sans text-base md:text-lg text-darkGray leading-relaxed">
              After three wonderful years together, Michael proposed during a sunrise hike at their favorite mountain lookout. We're excited to celebrate our love with our closest friends and family, and to begin this next chapter of our lives together.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-8 md:justify-center">
            <div className="mb-8 md:mb-0">
              <div className="w-60 h-60 mx-auto rounded-full overflow-hidden border-4 border-blush shadow-lg mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80" 
                  alt="Sarah portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-darkGray">Anika Jain</h3>
              <p className="font-sans text-sm text-darkGray italic">The Bride</p>
            </div>
            
            <div>
              <div className="w-60 h-60 mx-auto rounded-full overflow-hidden border-4 border-blush shadow-lg mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1563452965085-2e77e5bf2607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Michael portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-darkGray">Govind Narayan Sharma</h3>
              <p className="font-sans text-sm text-darkGray italic">The Groom</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
