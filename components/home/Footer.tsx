"use client";

import { FaXTwitter } from "react-icons/fa6";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[linear-gradient(180deg,#0B2240_0%,#195199_100%)] px-6 py-10 sm:px-10 sm:py-12 lg:h-[458px] lg:px-[120px] lg:py-[64px]">

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 lg:h-[330px]">

        {/* =========================
            UPPER CONTENT
        ========================== */}

        <div className="flex w-full items-center justify-center">

          <div className="flex w-full max-w-[720px] flex-col items-center gap-8 sm:gap-10">

            {/* LOGO + TEXT */}

            <div className="flex w-full flex-col items-center gap-5 sm:gap-6">

              {/* LOGO */}

              <div className="flex h-[100px] w-[180px] items-center justify-center sm:h-[120px] sm:w-[216px]">

                <img
                  src="/images/legal-masters-logo.svg"
                  alt="Legal Masters"
                  className="h-full w-full object-contain"
                />

              </div>

              {/* TAGLINE */}

              <div className="flex w-full items-center justify-center">

                <p className="text-center font-sans text-base font-normal leading-6 text-white sm:text-lg sm:leading-7 md:whitespace-nowrap lg:text-[20px] lg:leading-[28px]">
                  Simplifying Legal, Tax & Compliance for Modern Businesses.
                </p>

              </div>

            </div>

            {/* SOCIAL ICONS */}

            <div className="flex h-10 w-full items-center justify-center gap-3">

              {/* FACEBOOK */}

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 p-2.5 transition hover:bg-white/20"
              >
                <FaFacebookF size={20} className="text-white" />
              </a>

              {/* X */}

              <a
                href="#"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 p-2.5 transition hover:bg-white/20"
              >
                <FaXTwitter size={20} className="text-white" />
              </a>

              {/* LINKEDIN */}

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 p-2.5 transition hover:bg-white/20"
              >
                <FaLinkedinIn size={20} className="text-white" />
              </a>

              {/* INSTAGRAM */}

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 p-2.5 transition hover:bg-white/20"
              >
                <FaInstagram size={20} className="text-white" />
              </a>

              {/* YOUTUBE */}

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 p-2.5 transition hover:bg-white/20"
              >
                <FaYoutube size={20} className="text-white" />
              </a>

            </div>

          </div>

        </div>

        {/* =========================
            BOTTOM
        ========================== */}

        <div className="flex w-full flex-col gap-5 sm:gap-6">

          {/* SEPARATOR */}

          <div className="h-px w-full border-t border-white" />

          {/* COPYRIGHT + LINKS */}

          <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-6">

            {/* COPYRIGHT */}

            <p className="whitespace-nowrap text-center font-sans text-xs font-normal leading-5 text-white sm:text-sm">
              © 2026 Legal Masters. All rights reserved.
            </p>

            {/* LEGAL LINKS */}

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-end">

              <a
                href="#"
                className="font-sans text-xs font-normal leading-5 text-[#E8EEF5] transition hover:text-white sm:text-sm"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="font-sans text-xs font-normal leading-5 text-[#E8EEF5] transition hover:text-white sm:text-sm"
              >
                Terms of Service
              </a>

              <a
                href="#"
                className="font-sans text-xs font-normal leading-5 text-[#E8EEF5] transition hover:text-white sm:text-sm"
              >
                Cookie Policy
              </a>

              <a
                href="#"
                className="font-sans text-xs font-normal leading-5 text-[#E8EEF5] transition hover:text-white sm:text-sm"
              >
                Disclaimer
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}