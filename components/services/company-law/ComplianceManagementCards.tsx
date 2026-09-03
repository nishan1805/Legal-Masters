import Link from "next/link";
import { ArrowRight, FileCheck } from "lucide-react";

const complianceCards = [
  {
    title: "Annual Compliance under Companies Act",
    description:
      "Complete mandatory ROC filings, annual returns, and statutory compliance to keep your company legally compliant.",
  },
  {
    title: "Annual Compliance under LLP Act",
    description:
      "Meet all LLP compliance requirements, including annual filings and partner disclosures, with expert assistance.",
  },
  {
    title: "Annual Compliance under Income Tax Act",
    description:
      "Ensure timely tax filings, financial reporting, and regulatory compliance under the Income Tax Act.",
  },
  {
    title: "Annual Compliance under GST Act",
    description:
      "Stay GST compliant with accurate return filing, reconciliation, and ongoing tax advisory services.",
  },
  {
    title: "Annual Compliance as per RBI Rules & Regulations",
    description:
      "Maintain compliance with RBI guidelines applicable to NBFCs, foreign investments.",
  },
  {
    title: "Business Valuation Report",
    description:
      "Get an accurate valuation of your business for investments, mergers, acquisitions, fundraising, or strategic planning.",
  },
  {
    title: "Brand Valuation Report",
    description:
      "Understand the financial value of your brand through professional brand assessment and valuation services.",
  },
  {
    title: "Listing of Company",
    description:
      "Prepare your business for public listing with expert guidance on legal, financial, and regulatory requirements.",
  },
  {
    title: "Closure of Company & LLP",
    description:
      "Close your Company or LLP through a legally compliant process while minimizing future liabilities.",
  },
  {
    title: "Closure of Partnership Firm",
    description:
      "Complete the dissolution of your partnership firm efficiently with proper legal documentation and settlement procedures.",
  },
  {
    title: "Merger & Demerger",
    description:
      "Restructure your business with legally compliant merger or demerger solutions tailored to your organizational goals.",
  },
  {
    title: "NCLT Filing Works",
    description:
      "Receive expert assistance with petitions, applications, and legal filings before the National Company Law Tribunal (NCLT).",
  },
];

export default function ComplianceManagementCards() {
  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {complianceCards.map((card) => (
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
  );
}