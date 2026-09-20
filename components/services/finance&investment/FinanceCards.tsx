import { FaBuilding } from "react-icons/fa";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const financeCards = [
 
  {
    title: "Project Loan ",
    description:
      "Secure financing support for business and project-related requirements.",
  },
  {
    title: "Business Loan",
    description:
      "Secure an early filling date for your invention with a provisional patent application.",
  },
  {
    title: "Personal Loan",
    description:
      "Explore financing solutions for personal financial requirements.",
  },
 {
    title: "Housing Loan",
    description:
      "Get assistance with financing solutions for residential property needs.",
  },
  {
    title: "Private Funding",
    description:
      "Explore private funding opportunities aligned with your financial or business requirements.",
  },
  {
    title: "Mortgage Loan",
    description:
      "Access mortgage financing solutions for property-related financial needs.",
  },
 {
    title: "Vehicle Loan",
    description:
      "Obtain financing support for purchasing a vehicle.",
  },
 
];


export default function FinanceCards() {
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
             Finance
            </h2>

          </div>


          {/* Subheading */}
          <p className="max-w-[1000px] text-left font-sans text-[18px] font-normal leading-7 text-[#525252] md:text-[20px] md:leading-7">
           Access suitable financing solutions to support personal needs, business growth, and long-term financial goals.
          </p>

        </div>


        {/* =====================================
            CARDS
        ====================================== */}
         <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {financeCards.map((card) => (
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
            href={`https://wa.me/919589393949?text=${encodeURIComponent(
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
