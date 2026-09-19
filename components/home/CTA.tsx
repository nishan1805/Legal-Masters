
"use client";

import { ArrowRight } from "lucide-react";
import { FaLock, FaBolt, FaUserTie, FaWhatsapp } from "react-icons/fa";

export default function BusinessJourneyCTA() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-12 xl:px-[120px] xl:py-[80px]">
      
      <div
        className="
          mx-auto
          flex
          min-h-[520px]
          w-full
          max-w-[1200px]
          items-center
          justify-center
          overflow-hidden
          rounded-[20px]
          px-5
          py-10
          sm:min-h-[480px]
          sm:px-8
          md:min-h-[450px]
          md:px-10
          lg:min-h-[420px]
          lg:px-12
          xl:h-[406px]
          xl:min-h-0
          xl:px-0
          xl:py-0
          xl:rounded-[24px]
        "
        style={{
          backgroundImage:
            "linear-gradient(180deg, #0B2240 0%, #174A8B 100%), url('/images/Background-image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "screen",
        }}
      >

        {/* CONTENT */}
        <div className="flex w-full max-w-[1040px] flex-col items-center">

          {/* HEADING + SUBHEADING */}
          <div className="flex w-full flex-col items-center gap-3 sm:gap-4">

            <h2
              className="
                w-full
                text-center
                font-heading
                text-[32px]
                font-bold
                leading-[40px]
                text-white
                sm:text-[38px]
                sm:leading-[46px]
                md:text-[42px]
                md:leading-[50px]
                lg:text-[46px]
                lg:leading-[54px]
                xl:text-[48px]
                xl:leading-[56px]
              "
            >
              Start Your Business Journey With
              <br />
              Legal Masters
            </h2>

            <p
              className="
                text-center
                font-sans
                text-[16px]
                font-normal
                leading-[24px]
                text-white
                sm:text-[18px]
                sm:leading-[28px]
                md:text-[20px]
                md:leading-[30px]
                lg:text-[22px]
                lg:leading-[32px]
                xl:text-[24px]
              "
            >
              Expert assistance for registrations, taxation, and compliance.
            </p>

          </div>


          {/* BUTTONS */}
          <div
            className="
              mt-7
              flex
              w-full
              flex-col
              items-center
              justify-center
              gap-3
              sm:mt-8
              sm:flex-row
              sm:gap-4
            "
          >

            {/* TALK TO EXPERTS */}
            <button
              type="button"
              className="
                flex
                h-[52px]
                w-full
                max-w-[194px]
                items-center
                justify-center
                gap-2
                rounded-[12px]
                bg-[#FFBF00]
                px-6
                py-3
                font-sans
                text-[16px]
                font-medium
                leading-6
                text-[#212121]
                transition
                hover:bg-[#E8AE00]
                sm:h-[56px]
              "
            >
              <span>Talk to Experts</span>

              <ArrowRight
                size={24}
                strokeWidth={2}
                className="text-[#212121]"
              />
            </button>


            {/* WHATSAPP */}
            <button
              type="button"
              className="
                flex
                h-[52px]
                w-full
                max-w-[181px]
                items-center
                justify-center
                gap-1
                rounded-[12px]
                bg-[#018A3E]
                px-6
                py-3
                font-sans
                text-[16px]
                font-medium
                leading-6
                text-white
                transition
                hover:bg-[#017A37]
                sm:h-[56px]
              "
            >
              <FaWhatsapp
                size={24}
                className="text-white"
              />

              <span>WhatsApp Us</span>
            </button>

          </div>


          {/* THREE BENEFITS */}
          <div
            className="
              mt-7
              flex
              w-full
              flex-wrap
              items-center
              justify-center
              gap-x-6
              gap-y-4
              sm:mt-8
            "
          >

            {/* FREE CONSULTATION */}
            <div className="flex items-center gap-2">

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white">
                <FaLock
                  size={14}
                  className="text-[#E8AE00]"
                />
              </div>

              <span className="whitespace-nowrap font-sans text-[14px] font-normal leading-6 text-white sm:text-[16px]">
                Free Consultation
              </span>

            </div>


            {/* QUICK RESPONSE */}
            <div className="flex items-center gap-2">

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white">
                <FaBolt
                  size={16}
                  className="text-[#E8AE00]"
                />
              </div>

              <span className="whitespace-nowrap font-sans text-[14px] font-normal leading-6 text-white sm:text-[16px]">
                Quick Response
              </span>

            </div>


            {/* EXPERT GUIDANCE */}
            <div className="flex items-center gap-2">

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white">
                <FaUserTie
                  size={14}
                  className="text-[#E8AE00]"
                />
              </div>

              <span className="whitespace-nowrap font-sans text-[14px] font-normal leading-6 text-white sm:text-[16px]">
                Expert Guidance
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

