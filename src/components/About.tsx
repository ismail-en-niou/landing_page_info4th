import { useEffect } from "react";
import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

export const About = () => {
  // Initialize AOS when the component is mounted
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set default duration for animations
      easing: "ease-in-out", // Set easing for smooth transitions
      once: true, // Animation will happen only once
    });
  }, []);

  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          {/* Apply animation to the image */}
          <img
            src={pilot}
            alt="Pilot"
            className="w-[300px] object-contain rounded-lg"
            data-aos="fade-right" // AOS animation type
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2
                className="text-3xl md:text-4xl font-bold"
                data-aos="fade-up" // AOS animation type
              >
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Infom4th
              </h2>
              <p
                className="text-xl text-muted-foreground mt-4"
                data-aos="fade-up" // AOS animation type
                data-aos-delay="200" // Delay for staggered animation
              >
                Welcome to InfoMath, where technology meets creativity. Dive into the exciting world of coding, tech talks, and groundbreaking digital solutions. Together, we explore the bytes and bits that drive the future!
                <br />
                🌟 Join the movement:
                <br />
                🖥️ Tech Talks
                <br />
                💡 Innovation Insights
                <br />
                🌐 Building a connected community
                <br />
                Let’s shape the future, one line of code at a time. 🔍💡
              </p>
            </div>

            {/* Add AOS animation to Statistics component */}
            <Statistics data-aos="fade-up" data-aos-delay="400" />
          </div>
        </div>
      </div>
    </section>
  );
};
