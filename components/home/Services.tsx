import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Company Law",
      description:
        "Build and manage your business with complete legal support—from company incorporation and compliance to governance, restructuring, and regulatory filings.",
      icon: "/images/services/company-law-icon.svg",
      link: "/services/company-law",
      count: 24,
    },
    {
      title: "IPR",
      description:
        "Protect your ideas, innovations, and brand identity with expert trademark, copyright, patent, and intellectual property registration services.",
      icon: "/images/services/IPR-icon.svg",
      link: "/services/ipr",
      count: 15,
    },
    {
      title: "Legal Services",
      description:
        "Receive expert legal assistance for corporate matters, disputes, contracts, documentation, litigation support, and regulatory advisory.",
      icon: "/images/services/legal-service-icon.svg",
      link: "/services/legal-services",
      count: 16,
    },
    {
      title: "Accounts, Audit & Taxation",
      description:
        "Stay financially compliant with professional accounting, auditing, GST, income tax, bookkeeping, and statutory compliance services.",
      icon: "/images/services/accounts-icon.svg",
      link: "/services/accounts-audit-taxation",
      count: 11,
    },
    {
      title: "License & Registration",
      description:
        "Obtain essential business registrations and government licenses quickly, ensuring smooth operations and regulatory compliance.",
      icon: "/images/services/licence-icon.svg",
      link: "/services/license-registration",
      count: 14,
    },
    {
      title: "Finance & Investment",
      description:
        "Access customized financing, insurance, and investment solutions to support business growth, expansion, and long-term financial security.",
      icon: "/images/services/finance-icon.svg",
      link: "/services/finance-investment",
      count: 17,
    },
  ];

  return (
    <section
      id="services"
      className="w-full overflow-hidden bg-[#174A8B] px-4 py-10 sm:px-6 sm:py-12 lg:px-[120px] lg:py-[64px]"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col">
        {/* =========================
            HEADING
        ========================== */}
        <div className="mx-auto flex w-full flex-col items-center text-center">
          <h2 className="max-w-[1000px] font-heading text-[32px] font-bold leading-[40px] text-white sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[56px]">
            Services for Every Business Stage
          </h2>

          <p className="mt-3 max-w-[600px] font-sans text-base font-normal leading-6 text-white sm:mt-4 sm:text-lg sm:leading-7 lg:text-[24px] lg:leading-[32px]">
            From registrations to ongoing compliance support.
          </p>
        </div>

        {/* =========================
            CARDS
        ========================== */}
        <div className="mx-auto mt-8 grid w-full grid-cols-1 justify-items-center gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex min-h-[296px] w-full max-w-[384px] flex-col rounded-[20px] border border-[#E5E7EB] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6"
            >
              {/* Card Content */}
              <div className="flex flex-1 w-full flex-col gap-4">
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-[12px] bg-[#FFF7D6]">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="font-sans text-[18px] font-semibold leading-7 text-[#212121] sm:text-[20px]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-[13px] font-normal leading-5 text-[#424242] sm:text-[14px]">
                  {service.description}
                </p>
              </div>

              {/* Bottom */}
              <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                {/* Services Count */}
                <span className="font-sans text-[13px] font-medium leading-5 text-[#757575] sm:text-[14px]">
                  {service.count} Service{service.count !== 1 ? "s" : ""}
                </span>

                {/* View All */}
                <Link
                  href={service.link}
                  className="inline-flex h-[40px] shrink-0 items-center justify-center gap-1 font-sans text-[14px] font-medium leading-6 text-[#8C6900] transition hover:text-[#8C6900] sm:text-[16px]"
                >
                  <span>View all</span>
                  <ChevronRight
                    size={24}
                    strokeWidth={1.8}
                    className="shrink-0 font-medium text-[#8C6900] transition group-hover:text-[#8C6900] "
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
