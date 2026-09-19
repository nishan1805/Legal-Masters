
import Image from "next/image";

export default function TrustedIndustries() {
  const industries = [
    { src: "/images/industries/adobe.png", width: 91 },
    { src: "/images/industries/apple.png", width: 33 },
    { src: "/images/industries/meta.png", width: 177 },
    { src: "/images/industries/RBI.png", width: 147 },
    { src: "/images/industries/slack.png", width: 145 },
    { src: "/images/industries/swiggy.png", width: 156 },
    { src: "/images/industries/zoho.png", width: 137 },
  ];

  return (
    <section className="w-full overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-[120px] lg:py-[64px]">

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 sm:gap-12 lg:gap-16">

        {/* =========================
            HEADING
        ========================== */}
        <div className="flex w-full flex-col items-center gap-3 text-center sm:gap-4">

          <h2 className="font-heading text-[32px] font-bold leading-[40px] text-[#0E2D54] sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[56px]">
            Trusted Across Industries
          </h2>

          <p className="font-sans text-base font-normal leading-6 text-[#525252] sm:text-lg sm:leading-7 lg:text-[24px] lg:leading-[32px]">
            Businesses across India rely on Legal Masters.
          </p>

        </div>


        {/* =========================
            COMPANY LOGOS
        ========================== */}
        <div className="w-full overflow-hidden">

          <div className="flex w-max animate-marquee">

            {/* Copy 1 */}
            <div className="flex shrink-0 items-center gap-6 sm:gap-8 lg:gap-[40px]">

              {industries.map((industry, index) => (
                <Image
                  key={`one-${index}`}
                  src={industry.src}
                  alt="Industry logo"
                  width={industry.width}
                  height={40}
                  className="h-[32px] w-auto shrink-0 sm:h-[36px] lg:h-[40px]"
                />
              ))}

            </div>


            {/* Copy 2 */}
            <div className="ml-6 flex shrink-0 items-center gap-6 sm:ml-8 sm:gap-8 lg:ml-[40px] lg:gap-[40px]">

              {industries.map((industry, index) => (
                <Image
                  key={`two-${index}`}
                  src={industry.src}
                  alt="Industry logo"
                  width={industry.width}
                  height={40}
                  className="h-[32px] w-auto shrink-0 sm:h-[36px] lg:h-[40px]"
                />
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

