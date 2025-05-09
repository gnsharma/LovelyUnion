import { useEffect } from "react";
import {
  Header,
  Hero,
  OurStory,
  Schedule,
  Venue,
  Gallery,
  Footer,
} from "@/components";

function App() {
  useEffect(() => {
    document.title = "Anika & Govind - Wedding Celebration | #ani_ka_govind";

    // Add meta description for SEO
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Join us in celebrating the wedding of Anika Jain and Govind Narayan Sharma on May 05, 2025 at Hotel Prime Safari. #ani_ka_govind";
    document.head.appendChild(metaDescription);

    // Function to handle animations on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('[data-animate="true"]');

      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight - 50) {
          element.classList.add("opacity-100", "translate-y-0");
          element.classList.remove("opacity-0", "translate-y-5");
        }
      });
    };

    // Initial check for elements in view
    animateOnScroll();

    // Add scroll event listener
    window.addEventListener("scroll", animateOnScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", animateOnScroll);
    };
  }, []);

  return (
    <div className="font-sans text-darkGray bg-cream">
      <Header />
      <main>
        <Hero />
        <OurStory />
        <Schedule />
        <Venue />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
