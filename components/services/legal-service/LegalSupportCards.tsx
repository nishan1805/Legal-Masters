"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

const legalsupportCards = [
  {
    title: "Dispute Resolution & Arbitration",
    description:
      "Resolve commercial and other disputes through professional negotiation, dispute resolution and arbitration support.",
  },
  {
    title: "Civil Matters",
    description:
      "Get professional legal assiatance for civil disputes, claims, proceeding, and related legal matters.",
  },
  {
    title: "Commercial Matters",
    description:
      "Receive legal support for business related dispute, arguments, transaction, and commercial matters.",
  },
  {
    title: "Criminal Matters",
    description:
      "Get professional legal assistance and representation for criminal proceeding and related legal matters.",
  },
  {
    title: "Family Matters",
    description:
      "Receive legal guidance and support for family-related dispute and proceedings.",
  },
  {
    title: "Corporate and NCLT Matters",
    description:
      "Get legal assistance for corporate disputes, proceedings, and matters before the National Company Law Tribunal.",
  },
  {
    title: "Construction Matters",
    description:
      "Address construction-related disputes, contracts, claims and other legal matters with professional assistance.",
  },
  {
    title: "GST, Income Tax, Property Matters",
    description:
      "Receive legal support for GST, income tax, property, and related regulatory matters.",
  },
  {
    title: "Motor Vehicle Claim",
    description:
      "Get legal assistance with motor vehicle claims and related proceedings.",
  },
  {
    title: "Information Technology / E-commerce and Cyber Laws",
    description:
      "Navugate technology, e-commerce, and cyber law matters with professional legal guidance.",
  },
  {
    title: "Intellectual Property Rights",
    description:
      "Get legal support for intellectual property matters including protection, disputes, and related proceedings..",
  },
  {
    title: "Labour and Employment",
    description:
      "Address employment-related legal matters with professional guidance on applicable labour laws and regulations..",
  },
  {
    title: "Revenue Matters",
    description:
      "Receive legal assistance for revenue-related disputes, proceedings, and regulatory matters.",
  },
  {
    title: "Real Estate Litigation",
    description:
      "Get professional legal support for disputes and litigation involving real estate and property matters.",
  },
  {
    title: "Recovery Matters",
    description:
      "Receive legal assistance for recovery-related disputes, claims, and proceedings.",
  },
  {
    title: "RERA Registration and Matters",
    description:
      "Get professional assistance with RERA registration and other applicable real estate regulatory matters.",
  },
];

export default function LegalSupportCards() {
  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {legalsupportCards.map((card) => (
        <div
          key={card.title}
          className="flex min-h-[270px] w-full flex-col justify-between rounded-[20px] border border-[#EEEEEE] bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-md"
        >

          {/* Heading + Description */}
          <div className="flex flex-col gap-4">

            <h3 className="font-sans text-[20px] font-semibold leading-7 text-[#212121]">
              {card.title}
            </h3>

            <p className="font-sans text-[16px] font-normal leading-6 text-[#525252]">
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
            className="inline-flex h-10 w-fit items-center gap-2 py-2 font-sans text-[16px] font-semibold leading-6 text-[#8C6900] transition hover:text-[#B58800]"
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
  );
}
