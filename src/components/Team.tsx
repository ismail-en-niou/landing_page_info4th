import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  description: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "./club/1.jpg",
    name: "HAMZA ZEROUK",
    position: "Photographer",
    description: "Captures stunning visuals to highlight the essence of our events and projects."
  },
  {
    imageUrl: "./club/13.jpg",
    name: "HIBA HAZIM",
    position: "Designer",
    description: "Creates visually appealing designs that embody our brand's identity."
  },
  {
    imageUrl: "./club/2.jpg",
    name: "HICHAM HARED",
    position: "Media Cell Leader",
    description: "Leads the media team to ensure impactful communication and branding."
  },
  {
    imageUrl: "./club/3.jpg",
    name: "MALIKA EL ABDERRAHMANI",
    position: "Conference Officer",
    description: "Coordinates conferences and ensures seamless event execution."
  },
  {
    imageUrl: "./club/4.jpg",
    name: "Zakaria El Aloouche",
    position: "Community Manager",
    description: "Engages with our audience and fosters a strong sense of community."
  },
  {
    imageUrl: "./club/5.jpg",
    name: "SOULAYMAN CHAFAI",
    position: "Product Manager",
    description: "Oversees product development to deliver innovative solutions."
  },
  {
    imageUrl: "./club/6.jpg",
    name: "Hikmat Ben-Aisa",
    position: "Vice President",
    description: "Supports the president in strategic decisions and operations."
  },
  {
    imageUrl: "./club/7.jpg",
    name: "Fatima El Asri",
    position: "Communications Officer",
    description: "Handles internal and external communication to ensure clarity and alignment."
  },
  {
    imageUrl: "./club/9.jpg",
    name: "HAMZA BOUZIAN",
    position: "Event Cell Leader",
    description: "Manages event planning and execution with precision and creativity."
  },
  {
    imageUrl: "./club/10.jpg",
    name: "NARJISSE HARROUCH TOURKI",
    position: "Training Manager",
    description: "Designs and leads training programs to enhance team capabilities."
  },
  {
    imageUrl: "./club/11.jpg",
    name: "DOUÂE TAMESTAST",
    position: "Secretary",
    description: "Maintains organization by managing documentation and schedules."
  },
  {
    imageUrl: "./club/12.jpg",
    name: "AYA AJBAR",
    position: "Media Manager",
    description: "Develops creative media content to showcase our vision and activities."
  },
];

export const Team = () => {
  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Team{" "}
        </span>
        InfoMath
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Meet the dedicated minds behind InfoMath! Our team of innovators and tech enthusiasts is committed to driving creativity, collaboration, and growth in the digital space. Together, we turn ideas into impactful solutions.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(({ imageUrl, name, position, description }: TeamProps) => (
          <Card
            key={name}
            className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
          >
            <CardHeader className="mt-8 flex justify-center items-center pb-2">
              <img
                src={imageUrl}
                alt={`${name} ${position}`}
                className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
              />
              <CardTitle className="text-center">{name}</CardTitle>
              <CardDescription className="text-primary">{position}</CardDescription>
            </CardHeader>

            <CardContent className="text-center pb-2">
              <p>{description}</p>
            </CardContent>

            <CardFooter></CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
