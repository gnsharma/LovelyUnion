import { useInView } from "@/lib/animation";
import { brideImage, groomImage } from "@/data/images";

const OurStory = () => {
  const { ref, inView } = useInView();

  return (
    <section id="story" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center opacity-0 translate-y-5 transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : ""}`}
        >
          <p className="font-script text-2xl md:text-3xl text-darkGold mb-2">
            In Each Other, We Found Everything
          </p>
          <div className="h-0.5 w-24 bg-blush mx-auto mb-10"></div>

          <div className="text-center mb-12">
            <p className="font-sans text-base md:text-lg text-darkGray leading-relaxed mb-6">
              We’re tying the knot—and it still feels like a beautiful dream
              come true.
            </p>
            <p className="font-sans text-base md:text-lg text-darkGray leading-relaxed mb-6">
              Somewhere between all the late-night talks, the dumb jokes only we
              find funny, and the endless “what should we eat?” debates, we
              stumbled into something that just… worked.
            </p>
            <p className="font-sans text-base md:text-lg text-darkGray leading-relaxed mb-6">
              Govind is the calm to Anika’s spark. He’s the steady one; she’s
              the spontaneous one. She dreams out loud, and he quietly figures
              out how to make those dreams happen. Sure, we don’t always agree
              on movie choices, or what counts as “on time”—but we’ve learned
              how to meet in the middle, laugh through it, and keep things
              light.
            </p>
            <p className="font-sans text-base md:text-lg text-darkGray leading-relaxed mb-6">
              We’ve tackled messy days, celebrated tiny wins, and built a kind
              of love that’s equal parts cozy, chaotic, and completely real.
            </p>
            <p className="font-sans text-base md:text-lg text-darkGray leading-relaxed mb-6">
              This next step isn’t just about the big day—it’s about choosing
              each other, again and again, through every weird and wonderful day
              ahead.
            </p>
            <p className="font-sans text-base md:text-lg text-darkGray leading-relaxed mb-6">
              And yes, we’re beyond excited—for forever.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8 md:justify-center">
            <div className="mb-8 md:mb-0">
              <div className="w-60 h-60 mx-auto rounded-full overflow-hidden border-4 border-blush shadow-lg mb-4">
                <img
                  src={brideImage}
                  alt="Anika Jain portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-darkGray">Anika Jain</h3>
              <p className="font-sans text-sm text-darkGray italic">
                The Bride
              </p>
            </div>

            <div>
              <div className="w-60 h-60 mx-auto rounded-full overflow-hidden border-4 border-blush shadow-lg mb-4">
                <img
                  src={groomImage}
                  alt="Govind Narayan Sharma portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-darkGray">
                Govind Narayan Sharma
              </h3>
              <p className="font-sans text-sm text-darkGray italic">
                The Groom
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
