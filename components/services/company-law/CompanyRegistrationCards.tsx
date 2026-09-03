"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const registrationCards = [
  {
    title: "Partnership Firm",
    description:
      "Register your partnership firm with proper documentation and legal support.",
  },
  {
    title: "Proprietorship Firm",
    description:
      "Perfect for solo entrepreneurs looking for a simple and cost-effective way to start their business.",
  },
  {
    title: "Society (NGO)",
    description:
      "Register your society for educational, cultural, scientific, or charitable purposes under applicable laws.",
  },
  {
    title: "Indian Subsidiary",
    description:
      "Expand your global presence by establishing a legally compliant Indian subsidiary for your foreign business.",
  },
  {
    title: "Limited Liability Partnership (LLP)",
    description:
      "Combine the flexibility of a partnership with limited liability protection for partners through LLP registration.",
  },
  {
    title: "One Person Company (OPC)",
    description:
      "Start your business independently while enjoying the benefits of a corporate legal structure.",
  },
  {
    title: "Private Limited Company (Pvt.)",
    description:
      "Register a Private Limited Company for enhanced credibility, investor confidence, and long-term business growth.",
  },
  {
    title: "Public Limited Company (PLC)",
    description:
      "Launch a Public Limited Company with expert guidance for large-scale operations.",
  },
  {
    title: "Section 8 Company (NGO)",
    description:
      "Register a non-profit organization dedicated to charitable, educational, or social welfare activities.",
  },
  {
    title: "Trust Registration (NGO)",
    description:
      "Create a legally recognized trust to manage charitable assets and fulfill social or religious objectives.",
  },
  {
    title: "Producer Company",
    description:
      "Empower farmers and producers by forming a Producer Company with legal support for registration and compliance.",
  },
  {
    title: "Nidhi Company",
    description:
      "Establish a Nidhi Company to encourage savings among members and facilitate mutual financial assistance.",
  },
];

export default function CompanyRegistrationCards() {
  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {registrationCards.map((card) => (
        <div
          key={card.title}
          className="flex min-h-[270px] w-full flex-col justify-between rounded-[20px] border border-[#EEEEEE] bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-md"
        >

          {/* Heading + Description */}
          <div className="flex flex-col gap-4">

            <h3 className="font-[Inter] text-[20px] font-semibold leading-7 text-[#212121]">
              {card.title}
            </h3>

            <p className="font-[Inter] text-[16px] font-normal leading-6 text-[#525252]">
              {card.description}
            </p>

          </div>


          {/* Enquire Now */}
          <Link
            href="/contact"
            className="inline-flex h-10 w-fit items-center gap-2 py-2 font-[Inter] text-[16px] font-semibold leading-6 text-[#8C6900] transition hover:text-[#B58800]"
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