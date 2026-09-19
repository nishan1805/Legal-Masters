import Image from "next/image";
import { MdFormatQuote } from "react-icons/md";

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
        flex min-h-[244px] w-[85%] shrink-0 snap-start flex-col gap-4
        rounded-[20px] border border-[#E0E0E0]
        bg-white p-6
        sm:w-[calc(50%-12px)]
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
                truncate font-sans
                text-[18px] font-semibold leading-7
                text-[#313131]
                lg:text-[24px] lg:leading-8
              "
            >
              {name}
            </h3>

            <p
              className="
                truncate font-sans
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
        <div className="shrink-0 text-[#FFCC33]">
          <MdFormatQuote size={36} />
        </div>
      </div>

      {/* Review */}
      <p className="font-sans text-[14px] font-normal leading-5 text-[#212121]">
        {review}
      </p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="
        w-full bg-[#174A8B]
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
              font-heading
              text-[32px] font-bold leading-10
              text-white
              sm:text-[40px] sm:leading-[48px]
              lg:text-[48px] lg:leading-[56px]
            "
          >
            What Our Clients Say
          </h2>

          <p
            className="
              font-sans
              text-[18px] font-normal leading-7
              text-white/80
              sm:text-[20px]
              lg:text-[24px] lg:leading-8
            "
          >
            Real experiences from businesses we support.
          </p>
        </div>

        {/* =========================
            TESTIMONIALS
            (horizontally scrollable carousel — touch/drag swipe,
            no visible nav controls)
        ========================== */}

        <div
          className="
            scrollbar-hide flex w-full
            snap-x snap-mandatory
            scroll-smooth
            gap-6 overflow-x-auto
            scroll-px-6
          "
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}