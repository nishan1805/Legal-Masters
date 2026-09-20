"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { LuArrowRight } from "react-icons/lu";
export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

   const navbarRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const services = [
    {
      name: "Company Laws",
      href: "/services/company-law",
    },
    {
      name: "Intellectual Property Rights",
      href: "/services/ipr",
    },
    {
      name: "Legal Services",
      href: "/services/legal-services",
    },
    {
      name: "Finance & Investment",
      href: "/services/finance-investment",
    },
    {
      name: "Accounts, Audit & Taxation",
      href: "/services/accounts-audit-taxation",
    },
    {
      name: "License & Registration",
      href: "/services/license-registration",
    },
  ];

  return (
    <header 
      ref={navbarRef}
      className="sticky top-0 z-50 w-full bg-[#0B2748]"
      >
      <nav className="mx-auto flex h-[80px] w-full max-w-[1792px] items-center justify-between px-5 sm:h-[90px] sm:px-8 lg:h-[100px] lg:px-16">
        {/* =========================
            LOGO
        ========================== */}

        <div className="shrink-0">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Image
              src="/images/legal-masters-logo.svg"
              alt="Legal Masters"
              width={115}
              height={64}
              className="block h-auto w-[90px] sm:w-[100px] lg:w-[115px]"
              priority
            />
          </Link>
        </div>

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}

        <div className="hidden items-center gap-5 md:flex lg:gap-8 xl:gap-10">
          {/* SERVICES */}

          <div className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1.5 whitespace-nowrap text-sm text-white transition hover:text-[#FFB900] lg:gap-2 lg:text-base xl:text-lg"
            >
              Services
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {/* SERVICES DROPDOWN */}

            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 mt-4 w-[300px] overflow-hidden rounded-xl bg-white py-2 shadow-xl">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    onClick={() => setServicesOpen(false)}
                    className="group flex items-center justify-between px-5 py-3 text-sm font-medium text-[#0B2748] transition hover:bg-[#FFBF00] hover:text-[#ffffff] rounded-sm mx-2"
                  >
                    {service.name}
                    <ChevronRight
                      size={18}
                      strokeWidth={2}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* WHY US */}

          <Link
            href="/#why-us"
            className="whitespace-nowrap text-sm text-white transition hover:text-[#FFB900] lg:text-base xl:text-lg"
          >
            Why Us
          </Link>

          {/* CLIENTS */}

          <Link
            href="/clients"
            className="whitespace-nowrap text-sm text-white transition hover:text-[#FFB900] lg:text-base xl:text-lg"
          >
            Clients
          </Link>

          {/* CONTACT */}

          <Link
            href="/#contact"
            className="whitespace-nowrap text-sm text-white transition hover:text-[#FFB900] lg:text-base xl:text-lg"
          >
            Contact
          </Link>
        </div>

        {/* =======================
            CALLBACK
        ========================== */}

        <div className="hidden shrink-0 md:block">
          <Link
            href="https://wa.me/916262343456?text=Hi%20Legal%20Masters%2C%20I%20would%20like%20to%20request%20a%20callback%20regarding%20your%20services.%20Please%20contact%20me%20at%20your%20convenience."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#FFBF00] px-6 py-3 text-base font-medium text-black transition hover:bg-[#e6ac00]"
            >
            <span>Request Callback</span>
            <span>
              <LuArrowRight size={20} />
            </span>
          </Link>
        </div>

        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 text-white md:hidden"
        >
          {mobileOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* =========================
          MOBILE NAVIGATION
      ========================== */}

      {mobileOpen && (
        <div className="absolute left-0 right-0 top-full z-50 max-h-[calc(100svh-80px)] overflow-y-auto border-t border-white/10 bg-[#0B2748] px-5 pb-5 shadow-xl md:hidden">
          <div className="flex flex-col">
            {/* SERVICES */}

            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between border-b border-white/10 py-4 text-left text-base font-medium text-white"
            >
              <span>Services</span>

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {/* MOBILE SERVICES */}

            {servicesOpen && (
              <div className="flex flex-col border-b border-white/10 py-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    onClick={() => {
                      setMobileOpen(false);
                      setServicesOpen(false);
                    }}
                    className="rounded-lg px-3 py-3 text-sm text-white/90  hover:bg-[#FFBF00] hover:text-[#ffffff] rounded-sm mx-2"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}

            {/* WHY US */}

            <Link
              href="/#why-us"
              onClick={() => setMobileOpen(false)}
              className="border-b border-white/10 py-4 text-base font-medium text-white"
            >
              Why Us
            </Link>

            {/* CLIENTS */}

            <Link
              href="/clients"
              onClick={() => setMobileOpen(false)}
              className="border-b border-white/10 py-4 text-base font-medium text-white"
            >
              Clients
            </Link>

            {/* CONTACT */}

            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="border-b border-white/10 py-4 text-base font-medium text-white"
            >
              Contact
            </Link>

            {/* CALLBACK */}

            <Link
              href="https://wa.me/916262343456?text=Hi%20Legal%20Masters%2C%20I%20would%20like%20to%20request%20a%20callback%20regarding%20your%20services.%20Please%20contact%20me%20at%20your%20convenience."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#FFBF00] px-6 py-3 text-base font-bold text-black transition hover:bg-[#e6ac00]"
              >
              Request Callback
              <LuArrowRight size={20} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
