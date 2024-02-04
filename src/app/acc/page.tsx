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
    { question: "Long text?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
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
