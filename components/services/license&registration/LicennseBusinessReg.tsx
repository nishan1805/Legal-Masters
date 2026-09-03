import { Building2 } from "lucide-react";
import Link from "next/link";
import { ArrowRight, FileCheck } from "lucide-react";

const licensebusinessCards = [
 
  {
    title: "Shop & Establishment Registration",
    description:
      "Register your establishment and meet applicable requirements for legally operating your business.",
  },
  {
    title: "Digital Signature Certificate",
    description:
      "Obtain a secure digital signature for online filings, registrations, and official business transactions.",
  },
  {
    title: "Permanent Account Number (PAN)",
    description:
      "Get PAN registration support for your business and ensure compliance with applicable tax requirements.",
  },
  {
    title: "TAN Application",
    description:
      "Apply for TAN to meet tax deduction and collection obligations for your business.",
  },
  {
    title: "MSME/Udyam Registration",
    description:
      "Register your business under Udyam to establish MSME status and access applicable benefits.",
  },
  {
    title: "Startup India Registration (DIPP)",
    description:
      "Obtain Startup India recognition and complete the required registration process for eligible businesses.",
  },
];


export default function LicenseBusinessCards() {
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
              <Building2
                size={20}
                strokeWidth={2}
                className="text-[#B58800]"
              />
            </div>

            {/* Heading */}
            <h2 className="font-[Inter] text-[24px] font-semibold leading-8 text-[#212121] md:text-[30px] lg:text-[32px] lg:leading-[40px]">
            Business Registration
            </h2>

          </div>


          {/* Subheading */}
          <p className="max-w-[1000px] text-left font-[Inter] text-[18px] font-normal leading-7 text-[#525252] md:text-[20px] md:leading-7">
          Complete essential business registrations and statutory formalities to establish and operate your business legally.
          </p>

        </div>


        {/* =====================================
            CARDS
        ====================================== */}
         <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {licensebusinessCards.map((card) => (
        <div
          key={card.title}
          className="flex min-h-[280px] w-full flex-col justify-between rounded-[20px] border border-[#EEEEEE] bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-md"
        >
          {/* Heading + Description */}
          <div className="flex flex-col gap-4">
            <h3 className="font-[Inter] text-[20px] font-semibold leading-7 text-[#212121]">
              {card.title}
            </h3>

            <p className="font-[Inter] text-[14px] font-normal leading-5 text-[#525252]">
              {card.description}
            </p>
          </div>

          {/* Enquire Now */}
          <Link
            href="/contact"
            className="inline-flex h-10 w-fit items-center gap-1 py-2 font-[Inter] text-[16px] font-semibold leading-6 text-[#8C6900] transition hover:text-[#B58800]"
          >
            <span>Enquire now</span>

            <ArrowRight
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