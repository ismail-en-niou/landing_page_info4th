import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Hero = () => {
  const coal = () => {
    window.location.href = "https://infom4th.robixe.online";
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      easing: 'ease-in-out',  // Smooth transition easing
      once: true,  // Trigger animation only once
    });
  }, []);

  return (
    <section id="hero" className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1
            data-aos="fade-right"
            className="inline"
          >
            <span className="inline bg-gradient-to-r from-[#009cbd] to-[#015b73] text-transparent bg-clip-text">
              Infom4th
            </span>{" "}
            landing page
          </h1>{" "}
          for{" "}
          <h2
            data-aos="fade-left"
            className="inline"
          >
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            </span>{" "}
            members
          </h2>
        </main>

        <p
          data-aos="fade-up"
          className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0"
        >
          Welcome to InfoMath, where technology meets creativity. Dive into the exciting world of coding, tech talks, and groundbreaking digital solutions.
          Together, we explore the bytes and bits that drive the future!
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button
            className="w-full md:w-1/3"
            onClick={coal}
            data-aos="zoom-in"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Hero cards section */}
      <div
        className="z-10"
        data-aos="fade-up"
      >
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow" data-aos="fade-up"></div>
    </section>
  );
};
