"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
const questions = [
  {
    id: "pricing",
    q: "How much does it cost?",
    a: "Exploring this landing page is free. No paid plan is offered here, and no payment information is collected.",
  },
  {
    id: "speed",
    q: "How quickly will I get a result?",
    a: "The product concept is a quick writing check with clear sentence-level feedback. This landing page demonstrates the workflow; it does not process or score submitted text.",
  },
  {
    id: "free",
    q: "Can I use it for free?",
    a: "You can explore every section without an account. The scan buttons take you through the proposed Read, Spot, and Polish workflow.",
  },
  {
    id: "accuracy",
    q: "Can AI detection prove who wrote something?",
    a: "No. A writing signal is not proof of authorship. The idea behind Verilo is to help you look closer and use your own judgment, rather than make decisions from a score alone.",
  },
  {
    id: "chrome",
    q: "Is there a Chrome extension?",
    a: "The browser companion is part of the product design concept. There is no published extension or download available on this page.",
  },
  {
    id: "privacy",
    q: "What happens to my writing?",
    a: "This landing page has no text upload or analysis form. It does not collect your documents or send your writing to an AI service.",
  },
];
export function FAQ() {
  return (
    <section
      className="faq-section content-panel"
      id="faq"
      aria-labelledby="faq-title"
    >
      <span className="section-tag">FAQ</span>
      <h2 id="faq-title">
        Verilo’s
        <br />
        got answers.
      </h2>
      <Accordion.Root
        className="faq-accordion"
        type="single"
        collapsible
        defaultValue="pricing"
      >
        {questions.map((item) => (
          <Accordion.Item
            className="faq-item"
            value={item.id}
            id={item.id}
            key={item.id}
          >
            <Accordion.Header>
              <Accordion.Trigger>
                {item.q}
                <span className="faq-toggle">
                  <Plus size={18} />
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <p>{item.a}</p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}
