import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/site";

export default function FaqsBlock() {
  return (
    <section className="flex w-full items-center justify-center bg-background px-6 py-12 text-foreground">
      <div className="w-full max-w-2xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Good to know
          </h2>
          <p className="mt-3 text-muted-foreground">
            Answers to the questions we hear most often.
          </p>
        </div>

        <Accordion defaultValue={[faqs[0].question]} className="mt-10">
          {faqs.map(({ question, answer }) => (
            <AccordionItem key={question} value={question}>
              <AccordionTrigger className="py-4 text-base font-medium">
                {question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-base text-muted-foreground">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
