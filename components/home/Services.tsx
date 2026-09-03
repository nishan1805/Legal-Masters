
import Link from "next/link";
import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      title: "Company Law",
      description:
        "Build and manage your business with complete legal support—from company incorporation and compliance to governance, restructuring, and regulatory filings.",
      icon: "/images/services/company-law-icon.svg",
       link: "/services/company-law",
    },
    {
      title: "IPR",
      description:
        "Protect your ideas, innovations, and brand identity with expert trademark, copyright, patent, and intellectual property registration services.",
      icon: "/images/services/IPR-icon.svg",
       link: "/services/ipr",
    },
    {
      title: "Legal Services",
      description:
        "Receive expert legal assistance for corporate matters, disputes, contracts, documentation, litigation support, and regulatory advisory.",
      icon: "/images/services/legal-service-icon.svg",
       link: "/services/legal-services",
    },
    {
      title: "Accounts, Audit & Taxation",
      description:
        "Stay financially compliant with professional accounting, auditing, GST, income tax, bookkeeping, and statutory compliance services.",
      icon: "/images/services/accounts-icon.svg",
       link: "/services/accounts-audit-taxation",
    },
    {
      title: "License & Registration",
      description:
        "Obtain essential business registrations and government licenses quickly, ensuring smooth operations and regulatory compliance.",
      icon: "/images/services/licence-icon.svg",
       link: "/services/license-registration",
    },
    {
      title: "Finance & Investment",
      description:
        "Access customized financing, insurance, and investment solutions to support business growth, expansion, and long-term financial security.",
      icon: "/images/services/finance-icon.svg",
       link: "/services/finance-investment",
    },
  ];

  return (
    <section id="services" className="w-full overflow-hidden bg-[#174A8B] px-4 py-10 sm:px-6 sm:py-12 lg:px-[120px] lg:py-[64px]">
      
      <div className="mx-auto flex w-full max-w-[1200px] flex-col">

        {/* =========================
            HEADING
        ========================== */}
        <div className="mx-auto flex w-full flex-col items-center text-center">

          <h2 className="max-w-[1000px] font-[Urbanist] text-[32px] font-bold leading-[40px] text-white sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[56px]">
            Services for Every Business Stage
          </h2>

          <p className="mt-3 max-w-[900px] font-[Inter] text-base font-normal leading-6 text-white sm:mt-4 sm:text-lg sm:leading-7 lg:text-[24px] lg:leading-[32px]">
            From starting your business to scaling it, we provide complete
            legal, tax, compliance and financial solutions.
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
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-[12px] object-contain"
                />

                {/* Title */}
                <h3 className="font-[Inter] text-[18px] font-semibold leading-7 text-[#212121] sm:text-[20px]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-[Inter] text-[13px] font-normal leading-5 text-[#424242] sm:text-[14px]">
                  {service.description}
                </p>

              </div>


              {/* Bottom */}
              <div className="mt-5 flex items-center justify-between gap-3">

                {/* Services Count */}
                <span className="font-[Inter] text-[13px] font-medium leading-5 text-[#757575] sm:text-[14px]">
                  12 Services
                </span>


                {/* View All */}
                <Link
                  href={service.link}
                  className="inline-flex h-[40px] shrink-0 items-center justify-center gap-1 font-[Inter] text-[14px] font-medium leading-6 text-[#FFB900] transition hover:text-[#FFC933] sm:text-[16px]"
                >
                  <span>View All</span>

                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12H19M19 12L13 6M19 12L13 18"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

