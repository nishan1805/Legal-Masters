import { FaBuilding } from "react-icons/fa";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const financeInvestmentCards = [
 
  {
    title: "Mutual Fund & SIP",
    description:
      "Explore mutual fund and SIP investment options based on your financial goals.",
  },
  {
    title: "Systematic Private Investment",
    description:
      "Explore structured private investment opportunities aligned with your investment objectives.",
  },
  {
    title: "Business Startups Funding",
    description:
      "Explore funding opportunities for startup and early-stage business requirements.",
  },
  {
    title: "Franchise Investment",
    description:
      "Evaluate franchise investment opportunities based on business potential and financial objectives.",
  },
 {
    title: "Direct Private Investment",
    description:
      "Explore direct private investment opportunities with appropriate financial guidance.",
  },
 {
    title: "Capital Investment",
    description:
      "Identify capital investment opportunities aligned with long-term financial objectives.",
  },
 
];


export default function FinanceInvestmentCards() {
  return (
    <section className="w-full bg-white px-6 py-12 sm:px-10 md:px-12 lg:px-[120px] lg:py-12">

      {/* Main Container */}
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12">

        {/* =====================================
            HEADING + SUBHEADING
        ====================================== */}
        <div className="flex w-full flex-col items-start gap-4">

          {/* Icon + Heading */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">

            {/* Icon Container */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] border border-[#FFEBB0] bg-[#FFF9E6]">
              <FaBuilding
                size={20}
                className="text-[#B58800]"
              />
            </div>

            {/* Heading */}
            <h2 className="font-sans text-[24px] font-semibold leading-8 text-[#212121] md:text-[30px] lg:text-[32px] lg:leading-[40px]">
             Investment Advisory Services
            </h2>

          </div>


          {/* Subheading */}
          <p className="max-w-[1000px] text-left font-sans text-[18px] font-normal leading-7 text-[#525252] md:text-[20px] md:leading-7">
            Build and manage your investment strategy with professional guidance aligned with your financial objectives.
          </p>

        </div>


        {/* =====================================
            CARDS
        ====================================== */}
         <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {financeInvestmentCards.map((card) => (
        <div
          key={card.title}
          className="flex min-h-[280px] w-full flex-col justify-between rounded-[20px] border border-[#EEEEEE] bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-md"
        >
          {/* Heading + Description */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-[20px] font-semibold leading-7 text-[#212121]">
              {card.title}
            </h3>

            <p className="font-sans text-[14px] font-normal leading-5 text-[#525252]">
              {card.description}
            </p>
          </div>

          {/* Enquire Now */}
          <Link
            href={`https://wa.me/916262343456?text=${encodeURIComponent(
             `Hi Legal Masters, I would like to enquire about ${card.title}. Please assist me.`
            )}`}
           target="_blank"
           rel="noopener noreferrer"
            className="inline-flex h-10 w-fit items-center gap-1 py-2 font-sans text-[16px] font-semibold leading-6 text-[#8C6900] transition hover:text-[#B58800]"
          >
            <span>Enquire now</span>

            <ChevronRight
              size={24}
              strokeWidth={1.8}
            />
          </Link>
        </div>
      ))}
    </div>

      </div>

    </section>
  );
}
