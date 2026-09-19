"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* =====================================
   FAQ DATA
===================================== */

const faqs = [
  {
    question: "What services does Legal Masters provide?",
    answer:
      "Legal Masters provides a wide range of legal, tax, registration, and compliance services for businesses.",
  },
  {
    question: "How can I get started with Legal Masters?",
    answer:
      "You can get started by selecting the service you need and contacting our team for expert assistance.",
  },
  {
    question: "How long does the process usually take?",
    answer:
      "The processing time depends on the service and required documentation. Our team will provide you with an estimated timeline.",
  },
  {
    question: "What documents do I need to provide?",
    answer:
      "The required documents depend on the service you choose. Our experts will provide you with a complete list of required documents.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our pricing depends on the type of service and your specific requirements. We provide transparent pricing and quotations before you proceed.",
  },
  {
    question: "Can I get support after my service is completed?",
    answer:
      "Yes. Our team provides dedicated support even after completion to help with any questions or follow-up requirements.",
  },
];

/* =====================================
   FAQ ITEM PROPS
===================================== */

type FAQItemProps = {
  question: string;
  answer: string;
};

/* =====================================
   FAQ ITEM
===================================== */

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`
        w-full overflow-hidden rounded-[8px]
        border-2 border-[#C9D6E8]
        transition-all duration-300
        ${isOpen ? "min-h-[144px]" : "min-h-[64px]"}
      `}
    >
      {/* =================================
          QUESTION
      ================================== */}

      <div
        className="
          flex min-h-[64px] w-full
          items-center justify-between
          gap-4
          bg-[#E8EEF5]
          p-4
        "
      >
        {/* Question */}

        <p
          className="
            min-w-0
            font-sans
            text-[14px]
            font-medium
            leading-6
            text-[#212121]
            sm:text-[16px]
          "
        >
          {question}
        </p>

        {/* Dropdown Button */}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close answer" : "Open answer"}
          className="
            flex h-8 w-8 shrink-0
            items-center justify-center
            rounded-[6px]
            bg-[#4774AD]
            p-1
          "
        >
          <span
            className={`
              flex h-6 w-6
              items-center justify-center
              text-white
              transition-transform
              duration-300
              ${isOpen ? "rotate-180" : "rotate-0"}
            `}
          >
            <ChevronDown size={20} strokeWidth={2} />
          </span>
        </button>
      </div>

      {/* =================================
          ANSWER
      ================================== */}

      {isOpen && (
        <div
          className="
            flex min-h-[80px]
            w-full
            items-center
            p-4
            sm:min-h-[80px]
          "
        >
          <p
            className="
              font-sans
              text-[14px]
              font-normal
              leading-6
              text-[#424242]
              sm:text-[16px]
            "
          >
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

/* =====================================
   MAIN FAQ SECTION
===================================== */

export default function FAQ() {
  return (
    <section
      className="
        w-full
        bg-white
        px-6 py-12
        sm:px-10
        lg:px-[120px]
        lg:py-[64px]
      "
    >
      {/* Main Container */}

      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1200px]
          flex-col
          gap-10
          lg:gap-[64px]
        "
      >
        {/* =================================
            HEADING + SUBHEADING
        ================================== */}

        <div
          className="
            flex
            w-full
            flex-col
            items-center
            gap-4
            text-center
          "
        >
          {/* Heading */}

          <h2
            className="
              font-heading
              text-[32px]
              font-bold
              leading-10
              text-[#0E2D54]
              sm:text-[40px]
              sm:leading-[48px]
              lg:text-[48px]
              lg:leading-[56px]
            "
          >
            Frequently Asked Questions
          </h2>

          {/* Subheading */}

          <p
            className="
              max-w-[1000px]
              font-sans
              text-[16px]
              font-normal
              leading-6
              text-[#525252]
              sm:text-[20px]
              sm:leading-7
              lg:text-[24px]
              lg:leading-8
            "
          >
            Quick answers to common queries.
          </p>
        </div>

        {/* =================================
            QUESTIONS CONTAINER
        ================================== */}

        <div
          className="
            flex
            w-full
            flex-col
            gap-4
          "
        >
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
