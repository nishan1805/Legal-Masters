
"use client";

import { ChevronDown, Lock } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="flex w-full max-w-[608px] flex-col gap-6 rounded-[16px] bg-white p-6 sm:gap-8 sm:p-8">

      {/* =========================================
          HEADING
      ========================================= */}

      <div className="flex w-full">

        <h2 className="font-sans text-[20px] font-semibold leading-[28px] text-[#1A2F5A] sm:text-[24px] sm:leading-[32px]">
          Send us a Message
        </h2>

      </div>


      {/* =========================================
          CONTACT INPUTS
      ========================================= */}

      <div className="flex w-full flex-col gap-4">


        {/* =======================================
            FULL NAME
        ======================================= */}

        <div className="flex w-full flex-col gap-2">

          <label
            htmlFor="fullName"
            className="font-sans text-[16px] font-medium leading-[24px] text-[#212121]"
          >
            Full Name
          </label>

          <input
            id="fullName"
            type="text"
            placeholder="Your name"
            className="h-[48px] w-full rounded-[8px] border-[0.8px] border-[#DCDCDC] bg-white px-[16px] py-[12px] font-sans text-[16px] font-normal leading-[24px] text-[#212121] outline-none placeholder:text-[#757575] focus:border-[#4774AD]"
          />

        </div>


        {/* =======================================
            EMAIL + PHONE
        ======================================= */}

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">


          {/* EMAIL */}

          <div className="flex w-full flex-col gap-2">

            <label
              htmlFor="email"
              className="font-sans text-[16px] font-medium leading-[24px] text-[#212121]"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@company.com"
              className="h-[48px] w-full rounded-[8px] border-[0.8px] border-[#DCDCDC] bg-white px-[16px] py-[12px] font-sans text-[16px] font-normal leading-[24px] text-[#212121] outline-none placeholder:text-[#757575] focus:border-[#4774AD]"
            />

          </div>


          {/* PHONE */}

          <div className="flex w-full flex-col gap-2">

            <label
              htmlFor="phone"
              className="font-sans text-[16px] font-medium leading-[24px] text-[#212121]"
            >
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              className="h-[48px] w-full rounded-[8px] border-[0.8px] border-[#DCDCDC] bg-white px-[16px] py-[12px] font-sans text-[16px] font-normal leading-[24px] text-[#212121] outline-none placeholder:text-[#757575] focus:border-[#4774AD]"
            />

          </div>

        </div>


        {/* =======================================
            SERVICE
        ======================================= */}

        <div className="flex w-full flex-col gap-2">

          <label
            htmlFor="service"
            className="font-sans text-[16px] font-medium leading-[24px] text-[#212121]"
          >
            Select Service
          </label>


          <div className="relative w-full">

            <select
              id="service"
              defaultValue=""
              className="h-[48px] w-full appearance-none rounded-[8px] border-[0.8px] border-[#DCDCDC] bg-white px-[16px] py-[12px] font-sans text-[16px] font-normal leading-[24px] text-[#757575] outline-none focus:border-[#4774AD]"
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

            <div className="pointer-events-none absolute right-[16px] top-1/2 flex h-[16px] w-[16px] -translate-y-1/2 items-center justify-center">

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

        <div className="flex w-full flex-col gap-2">

          <label
            htmlFor="message"
            className="font-sans text-[16px] font-medium leading-[24px] text-[#212121]"
          >
            Message
          </label>


          <textarea
            id="message"
            placeholder="Tell us about your requirements"
            className="h-[120px] w-full resize-none rounded-[8px] border-[0.8px] border-[#DCDCDC] bg-white px-[16px] py-[12px] font-sans text-[16px] font-normal leading-[24px] text-[#212121] outline-none placeholder:text-[#757575] focus:border-[#4774AD]"
          />

        </div>

      </div>


      {/* =========================================
          BUTTON + SECURITY
      ========================================= */}

      <div className="flex w-full flex-col gap-4">


        {/* REQUEST CALLBACK BUTTON */}

        <button
          type="button"
          className="flex h-[48px] w-full items-center justify-center gap-[10px] rounded-[8px] bg-[#FFCC33] px-[24px] py-[12px] font-sans text-[16px] font-medium leading-[24px] text-[#212121] transition hover:bg-[#f5c229]"
        >
          Request Callback
        </button>


        {/* SECURITY */}

        <div className="flex w-full items-center justify-center gap-1">

          <div className="flex h-[20px] w-[20px] shrink-0 items-center justify-center">

            <Lock
              size={14}
              strokeWidth={2}
              className="text-[#757575]"
            />

          </div>


          <p className="font-sans text-[14px] font-medium leading-[20px] text-[#757575]">
            Your information is secure and confidential.
          </p>

        </div>

      </div>

    </div>
  );
}
