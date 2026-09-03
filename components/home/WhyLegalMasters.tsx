import Image from "next/image";

const cards = [
  {
    title: "Experienced Professionals",
    description:
      "Experienced CAs, legal experts, and consultants helping businesses stay compliant and grow confidently.",
    image: "/images/whychoose/experienced.svg",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden charges. Clear pricing structure with detailed quotations upfront",
    image: "/images/whychoose/transport-pricing.svg",
  },
  {
    title: "Fast Turnaround",
    description:
      "Quick processing with time-bound delivery commitments for all services",
    image: "/images/whychoose/turnaround.svg",
  },
  {
    title: "Dedicated Support",
    description:
      "Get personalized assistance and support throughout the entire process",
    image: "/images/whychoose/nationwide-service.svg",
  },
  {
    title: "Complete Compliance",
    description:
      "Stay compliant with accurate documentation and timely regulatory support",
    image: "/images/whychoose/one-stop-solution.svg",
  },
];

export default function WhyChooseLegalMasters() {
  return (
    <section className="w-full bg-[#174A8B] px-4 py-12 sm:px-6 md:px-8 lg:px-16 xl:px-[120px] lg:py-16">

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 lg:gap-16">

        {/* =========================
            HEADING
        ========================== */}
        <div className="flex w-full flex-col items-center gap-4 text-center">

          <h2 className="font-[Urbanist] text-[32px] font-bold leading-[40px] text-white sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[56px]">
            Why Choose Legal Masters
          </h2>

          <p className="font-[Inter] text-[18px] font-normal leading-[28px] text-white sm:text-[20px] sm:leading-[30px] lg:text-[24px] lg:leading-[32px]">
            Your trusted partner for all legal, tax, and compliance needs
          </p>

        </div>


        {/* =========================
            CARDS
        ========================== */}
        <div className="flex w-full flex-col gap-6">


          {/* =========================
              ROW 1 — CARD 1 + CARD 2
          ========================== */}
          {/* =========================
    CARDS CONTAINER
========================== */}
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">

            {cards.map((card, index) => (
              <div
                key={card.title}
                className={`
        flex w-full flex-col rounded-[16px]
        border-[0.8px] border-white bg-white
        p-6 sm:p-8

        /* Mobile */
        min-h-[400px]

        /* Tablet */
        md:min-h-[400px]

        /* Desktop */
        lg:min-h-[480px]

        /* Card 1 & 2 */
        ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}

        /* Card 5 on tablet */
        ${index === 4 ? "md:col-span-2 md:mx-auto md:w-full md:max-w-[calc(50%-12px)] lg:col-span-2 lg:mx-0 lg:max-w-none" : ""}
      `}
              >

                {/* Image */}
                <div className="flex flex-1 items-center justify-center">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={320}
                    height={293}
                    className="
            h-auto
            max-h-[260px]
            w-auto
            max-w-full
            object-contain
            md:max-h-[240px]
            lg:max-h-[293px]
          "
                  />
                </div>

                {/* Text */}
                <div className="flex w-full flex-col gap-3">
                  <h3 className="font-[Inter] text-[20px] font-bold leading-[28px] text-[#0E2D54] sm:text-[24px] sm:leading-[32px]">
                    {card.title}
                  </h3>

                  <p className="font-[Inter] text-[14px] font-semibold leading-[20px] text-[#757575] sm:text-[16px] sm:leading-[24px]">
                    {card.description}
                  </p>
                </div>

              </div>
            ))}

          </div>


        </div>

      </div>



    </section>
  );
}