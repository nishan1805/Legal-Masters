"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "ABC Pvt. Ltd.",
    image: "/images/client.svg",
    review:
      "Legal Masters made the entire compliance process simple and hassle-free. Their team was professional and supportive throughout the process.",
  },
  {
    name: "Priya Mehta",
    company: "Mehta Enterprises",
    image: "/images/client.svg",
    review:
      "The team provided excellent guidance and completed everything on time. I highly recommend Legal Masters.",
  },
  {
    name: "Amit Verma",
    company: "Verma Industries",
    image: "/images/client.svg",
    review:
      "Very transparent and reliable service. They explained every step clearly and handled all the documentation perfectly.",
  },
  {
    name: "Neha Gupta",
    company: "Gupta Solutions",
    image: "/images/client.svg",
    review:
      "Working with Legal Masters was a great experience. Their experts were responsive and made the process very smooth.",
  },
  {
    name: "Ankit Jain",
    company: "Jain Enterprises",
    image: "/images/client.svg",
    review:
      "The entire process was easy and well managed. I received excellent support whenever I needed it.",
  },
  {
    name: "Sneha Patel",
    company: "Patel Industries",
    image: "/images/client.svg",
    review:
      "Professional service with clear communication. The team helped us complete our compliance requirements without any hassle.",
  },
];

type TestimonialCardProps = {
  name: string;
  company: string;
  image: string;
  review: string;
};

function TestimonialCard({
  name,
  company,
  image,
  review,
}: TestimonialCardProps) {
  return (
    <div
      className="
        flex h-[244px] w-full shrink-0 flex-col gap-4
        rounded-[20px] border border-[#E0E0E0]
        bg-white p-6
        md:w-[calc(50%-12px)]
        lg:w-[467px]
      "
    >
      {/* Client Details */}
      <div className="flex h-[60px] w-full items-center justify-between">

        {/* Client */}
        <div className="flex min-w-0 items-center gap-4 lg:gap-6">

          <Image
            src={image}
            alt={name}
            width={60}
            height={60}
            className="h-[60px] w-[60px] shrink-0 rounded-full object-cover"
          />

          <div className="min-w-0">
            <h3
              className="
                truncate font-[Inter]
                text-[18px] font-medium leading-7
                text-[#313131]
                lg:text-[24px] lg:leading-8
              "
            >
              {name}
            </h3>

            <p
              className="
                truncate font-[Inter]
                text-[14px] font-medium leading-6
                text-[#525252]
                lg:text-[16px]
              "
            >
              {company}
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="shrink-0 text-[37px] font-bold leading-[27px] text-[#FFCC33]">
          ”
        </div>
      </div>

      {/* Review */}
      <p className="font-[Inter] text-[14px] font-normal leading-5 text-[#212121]">
        {review}
      </p>
    </div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, testimonials.length - 1)
    );
  };

  return (
    <section
      className="
        w-full bg-white
        px-6 py-12
        sm:px-10
        lg:px-[120px] lg:py-[64px]
      "
    >
      {/* Main Container */}
      <div
        className="
          mx-auto flex w-full max-w-[1200px]
          flex-col
          gap-10
          lg:gap-[64px]
        "
      >

        {/* =========================
            HEADING
        ========================== */}

        <div
          className="
            flex w-full flex-col
            items-center gap-4
            text-center
          "
        >
          <h2
            className="
              font-[Urbanist]
              text-[32px] font-bold leading-10
              text-[#0E2D54]
              sm:text-[40px] sm:leading-[48px]
              lg:text-[48px] lg:leading-[56px]
            "
          >
            What Our Clients Say
          </h2>

          <p
            className="
              font-[Inter]
              text-[18px] font-normal leading-7
              text-[#525252]
              sm:text-[20px]
              lg:text-[24px] lg:leading-8
            "
          >
            Real experiences from businesses we support.
          </p>
        </div>

        {/* =========================
            TESTIMONIALS
        ========================== */}

        <div className="flex w-full items-center gap-3 sm:gap-4 lg:gap-6">

          {/* Previous Button */}
          {currentIndex > 0 && (
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous testimonials"
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-full
                border border-[#0E2D54]
                text-xl text-[#0E2D54]
                transition
                hover:bg-[#0E2D54]
                hover:text-white
                sm:h-12 sm:w-12
                sm:text-[28px]
              "
            >
              &lt;
            </button>
          )}

          {/* =========================
              MOBILE
              1 CARD
          ========================== */}

          <div className="min-w-0 flex-1 overflow-hidden md:hidden">
            <div className="flex w-full">
              <TestimonialCard
                {...testimonials[currentIndex]}
              />
            </div>
          </div>

          {/* =========================
              TABLET
              2 CARDS
          ========================== */}

          <div className="hidden min-w-0 flex-1 overflow-hidden md:block lg:hidden">
            <div className="flex gap-6">

              {testimonials
                .slice(currentIndex, currentIndex + 2)
                .map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.name}
                    {...testimonial}
                  />
                ))}

            </div>
          </div>

          {/* =========================
              DESKTOP
              2 FULL + HALF THIRD
          ========================== */}

          <div className="hidden min-w-0 flex-1 overflow-hidden lg:block">
            <div className="flex gap-6">

              {testimonials
                .slice(currentIndex, currentIndex + 3)
                .map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.name}
                    {...testimonial}
                  />
                ))}

            </div>
          </div>

          {/* Next Button */}
          {currentIndex < testimonials.length - 1 && (
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonials"
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-full
                border border-[#0E2D54]
                text-xl text-[#0E2D54]
                transition
                hover:bg-[#0E2D54]
                hover:text-white
                sm:h-12 sm:w-12
                sm:text-[28px]
              "
            >
              &gt;
            </button>
          )}

        </div>
      </div>
    </section>
  );
}