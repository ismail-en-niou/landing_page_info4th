import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is Club InfoMath?",
    answer: "Club InfoMath is a community at FS Tétouan focused on coding, innovation, and digital exploration.",
    value: "item-1",
  },
  {
    question: "Who can join Club InfoMath?",
    answer: "Anyone interested in technology, coding, and innovation is welcome to join, regardless of skill level.",
    value: "item-2",
  },
  {
    question: "What kind of activities does Club InfoMath organize?",
    answer: "We organize tech talks, coding sessions, innovation workshops, and community events to inspire and collaborate.",
    value: "item-3",
  },
  {
    question: "Do I need prior experience to join Club InfoMath?",
    answer: "No, we welcome beginners and experts alike! Our goal is to foster learning and collaboration.",
    value: "item-4",
  },
  {
    question: "How can I contact Club InfoMath for more details?",
    answer: "You can reach out to us through our social media channels or visit us at FS Tétouan.",
    value: "item-5",
  },
];


export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="https://api.whatsapp.com/send/?phone=%2B212687823916&text=...+%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%D8%8C+%D8%A3%D9%86%D8%A7+%D8%A3%D8%AA%D8%B5%D9%84+%D8%A8%D9%83+%D8%A8%D8%AE%D8%B5%D9%88%D8%B5+&type=phone_number&app_absent=0"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
