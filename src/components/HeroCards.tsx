import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { useEffect } from 'react';
declare module 'aos';
import 'aos/dist/aos.css';

export const HeroCards = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Team */}
      <Card
        data-aos="fade-up"
        className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10"
      >
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="./Logo.png"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Infom4th club</CardTitle>
          <CardDescription className="font-normal text-primary">
            Infom4th
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            I really enjoy transforming ideas into functional software that
            exceeds expectations
          </p>
        </CardContent>
      </Card>

      {/* Pricing */}
      <Card
        data-aos="fade-up"
        className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10"
      >
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            VIP
            <Badge variant="secondary" className="text-sm text-primary">
              Most popular
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">50DH</span>
          </div>
          <CardDescription>
            We’re excited to invite you to become part of InfoM4ath! 🎉
            Don’t miss out on member-exclusive events, trainings, and much more!
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Start Your Trial</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="">
            {[
              "Events: Free access to member-exclusive events.",
              "Formations & Trainings: Free access to all exclusive sessions.",
              "Discounts: 70-100% off advanced sessions.",
              "Priority: Priority access for limited spots.",
              "Community: Join a special group for club decisions.",
            ].map((benefit: string) => (
              <span key={benefit} className="flex">
                <Check className="text-green-500" />{" "}
                <h3 className="ml-2">{benefit}</h3>
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card
        data-aos="fade-up"
        className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10"
      >
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Light & dark mode</CardTitle>
            <CardDescription className="text-md mt-2">
              Lorem ipsum dolor sit amet consect adipisicing elit. Consectetur
              natusm.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

