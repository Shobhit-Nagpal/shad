import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactNode } from "react";

export default function Acc() {
  const faq = [
    { question: "What's the point of life?", answer: "Live and let live." },
    { question: "What do you want to build?", answer: "The future." },
    { question: "Is this cool?", answer: "This is pretty cool ngl." },
  ];
  return (
    <div className="flex justify-center items-center h-full">
      <main className="w-[500px] p-4">
        {faq.map((q, idx) => (
          <Accordion key={idx} type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>{q.question}</AccordionTrigger>
              <AccordionContent>{q.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </main>
    </div>
  );
}
