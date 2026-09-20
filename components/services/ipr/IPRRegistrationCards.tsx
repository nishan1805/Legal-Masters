"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

const registrationCards = [
  {
    title: "Trademark Registration",
    description:
      "Secure exclusive legal rights to your brand name, logo, or slogan with hassle-free trademark registration.",
  },
  {
    title: "Trademark Amendment",
    description:
      "Update or modify your trademark details to reflect changes accurately and maintain legal compliance.",
  },
  {
    title: "Society (NGO)",
    description:
      "Register your society for educational, cultural, scientific, or charitable purposes under applicable laws.",
  },
  {
    title: "Trademark Objection",
    description:
      "Respond to trademark objections with expert legal assistance to improve approval chances.",
  },
  {
    title: "Trademark Hearing",
    description:
      "Professional representation and guidance during trademark hearings before the tradenark authority .",
  },
  {
    title: "Trademark Renewal",
    description:
      "Renew your registered trademark on time to maintain uninterrupted legal protection.",
  },
  {
    title: "Trademark Assignment",
    description:
      "Transfer trademark ownership securely through legally compiant assignment procedures.",
  },
  {
    title: "Trademark Opposition & Counterstatement",
    description:
      "Handle trademark disoutes effectively by filing or responding to oppostion oroceedings.",
  },
];

export default function IPRRegistrationCards() {
  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {registrationCards.map((card) => (
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
