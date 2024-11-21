import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
// Import AOS

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Accessibility",
    description:
      "We believe technology should be for everyone. By fostering an inclusive environment, we ensure our community thrives on equal access to resources, opportunities, and innovative solutions that empower every member.",
  },
  {
    icon: <MapIcon />,
    title: "Community",
    description:
      "At the heart of InfoMath lies a vibrant and supportive community. Together, we share knowledge, foster collaboration, and grow through collective learning and engaging activities that inspire innovation.",
  },
  {
    icon: <PlaneIcon />,
    title: "Scalability",
    description:
      "Our initiatives are designed to grow with you. From local events to global impact, InfoMath ensures that our projects, ideas, and solutions evolve seamlessly to meet the demands of an ever-changing digital landscape.",
  },
  {
    icon: <GiftIcon />,
    title: "Gamification",
    description:
      "Learning and innovation are more fun when gamified! We incorporate interactive challenges, tech quizzes, and reward-based activities to make coding and problem-solving engaging and exciting for all members.",
  },
];

export const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Optional: Animation duration
      easing: 'ease-in-out', // Optional: Easing function
      once: true, // Optional: Trigger animation only once
    });
  }, []);

  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50 hover:scale-105 hover:shadow-lg transition-transform duration-200"
            data-aos="fade-up" // Add your AOS animation type here
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
