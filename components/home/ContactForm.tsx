
"use client";

import { ChevronDown, Lock } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="flex h-[684px] w-[608px] flex-col gap-[32px] rounded-[16px] bg-white p-[32px]">

      {/* =========================================
          HEADING
      ========================================= */}

      <div className="flex h-[32px] w-[544px]">

        <h2 className="font-[Inter] text-[24px] font-semibold leading-[32px] text-[#1A2F5A]">
          Send us a Message
        </h2>

      </div>


      {/* =========================================
          CONTACT INPUTS
      ========================================= */}

      <div className="flex h-[440px] w-[544px] flex-col gap-[16px]">


        {/* =======================================
            FULL NAME
        ======================================= */}

        <div className="flex h-[80px] w-[544px] flex-col gap-[8px]">

          <label
            htmlFor="fullName"
            className="h-[24px] font-[Inter] text-[16px] font-medium leading-[24px] text-[#212121]"
          >
            Full Name
          </label>

          <input
            id="fullName"
            type="text"
            placeholder="Your name"
            className="h-[48px] w-[544px] rounded-[8px] border-[0.8px] border-[#DCDCDC] bg-white px-[16px] py-[12px] font-[Inter] text-[16px] font-normal leading-[24px] text-[#212121] outline-none placeholder:text-[#757575] focus:border-[#4774AD]"
          />

        </div>


        {/* =======================================
            EMAIL + PHONE
        ======================================= */}

        <div className="flex h-[80px] w-[544px] gap-[16px]">


          {/* EMAIL */}

          <div className="flex h-[80px] w-[264px] flex-col gap-[8px]">

            <label
              htmlFor="email"
              className="h-[24px] font-[Inter] text-[16px] font-medium leading-[24px] text-[#212121]"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@company.com"
              className="h-[48px] w-[264px] rounded-[8px] border-[0.8px] border-[#DCDCDC] bg-white px-[16px] py-[12px] font-[Inter] text-[16px] font-normal leading-[24px] text-[#212121] outline-none placeholder:text-[#757575] focus:border-[#4774AD]"
            />

          </div>


          {/* PHONE */}

          <div className="flex h-[80px] w-[264px] flex-col gap-[8px]">

            <label
              htmlFor="phone"
              className="h-[24px] font-[Inter] text-[16px] font-medium leading-[24px] text-[#212121]"
            >
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              className="h-[48px] w-[264px] rounded-[8px] border-[0.8px] border-[#DCDCDC] bg-white px-[16px] py-[12px] font-[Inter] text-[16px] font-normal leading-[24px] text-[#212121] outline-none placeholder:text-[#757575] focus:border-[#4774AD]"
            />

          </div>

        </div>


        {/* =======================================
            SERVICE
        ======================================= */}

        <div className="flex h-[80px] w-[544px] flex-col gap-[8px]">

          <label
            htmlFor="service"
            className="h-[24px] font-[Inter] text-[16px] font-medium leading-[24px] text-[#212121]"
          >
            Select Service
          </label>


          <div className="relative h-[48px] w-[544px]">

            <select
              id="service"
              defaultValue=""
              className="h-[48px] w-[544px] appearance-none rounded-[8px] border-[0.8px] border-[#DCDCDC] bg-white px-[16px] py-[12px] font-[Inter] text-[16px] font-normal leading-[24px] text-[#757575] outline-none focus:border-[#4774AD]"
            >

              <option value="" disabled>
                Select
              </option>

              <option value="business-registration">
                Business Registration
              </option>

              <option value="gst">
                GST Registration
              </option>

              <option value="income-tax">
                Income Tax
              </option>

              <option value="company-compliance">
                Company Compliance
              </option>

              <option value="legal-consultation">
                Legal Consultation
              </option>

              <option value="other">
                Other
              </option>

            </select>


            {/* Dropdown Icon */}

            <div className="pointer-events-none absolute right-[16px] top-1/2 flex h-[16px] w-[16px] -translate-y-1/2 items-center justify-center rounded-[6px]">

              <ChevronDown
                size={16}
                strokeWidth={2}
                className="text-[#757575]"
              />

            </div>

          </div>

        </div>


        {/* =======================================
            MESSAGE
        ======================================= */}

        <div className="flex h-[152px] w-[544px] flex-col gap-[8px]">

          <label
            htmlFor="message"
            className="h-[24px] font-[Inter] text-[16px] font-medium leading-[24px] text-[#212121]"
          >
            Message
          </label>


          <textarea
            id="message"
            placeholder="Tell us about your requirements"
            className="h-[120px] w-[544px] resize-none rounded-[8px] border-[0.8px] border-[#DCDCDC] bg-white px-[16px] py-[12px] font-[Inter] text-[16px] font-normal leading-[24px] text-[#212121] outline-none placeholder:text-[#757575] focus:border-[#4774AD]"
          />

        </div>

      </div>


      {/* =========================================
          BUTTON + SECURITY
      ========================================= */}

      <div className="flex h-[84px] w-[544px] flex-col gap-[16px]">


        {/* REQUEST CALLBACK BUTTON */}

        <button
          type="button"
          className="flex h-[48px] w-[544px] items-center justify-center gap-[10px] rounded-[8px] bg-[#FFCC33] px-[24px] py-[12px] font-[Inter] text-[16px] font-medium leading-[24px] text-[#212121] transition hover:bg-[#f5c229]"
        >
          Request Callback
        </button>


        {/* SECURITY */}

        <div className="flex h-[20px] w-[544px] items-center justify-center gap-[4px]">

          <div className="flex h-[20px] w-[20px] items-center justify-center">

            <Lock
              size={14}
              strokeWidth={2}
              className="text-[#757575]"
            />

          </div>


          <p className="font-[Inter] text-[14px] font-medium leading-[20px] text-[#757575]">
            Your information is secure and confidential.
          </p>

        </div>

      </div>

    </div>
  );
}

