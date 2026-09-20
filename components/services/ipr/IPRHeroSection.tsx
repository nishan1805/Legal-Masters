import Image from "next/image";

export default function IPRHeroSection() {
  return (
    <header className="relative w-full overflow-hidden bg-[#174A8B]">

      {/* Background Artwork */}
      <div className="pointer-events-none absolute inset-0 z-0">

        {/* Book */}
        <Image
          src="/images/company-law/Books.svg"
          alt=""
          width={142}
          height={164}
          className="
            absolute
            left-[8.54%]
            top-[142px]
            h-auto
            w-[142px]
            opacity-60
          "
        />

        {/* Stamp */}
        <Image
          src="/images/company-law/Stamp.svg"
          alt=""
          width={90}
          height={95}
          className="
            absolute
            left-[84.86%]
            top-[279px]
            h-auto
            w-[90px]
            opacity-80
          "
        />

        {/* Laptop */}
        <Image
          src="/images/company-law/Laptop.svg"
          alt=""
          width={154}
          height={148}
          className="
            absolute
            left-[32.71%]
            top-[260px]
            h-auto
            w-[154px]
            rotate-5
            opacity-60
          "
        />

        {/* Clipboard */}
        <Image
          src="/images/company-law/Clipboard.svg"
          alt=""
          width={140}
          height={145}
          className="
            absolute
            right-[25%]
            top-[110px]
            h-auto
            w-[130px]
            opacity-60
          "
        />

      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[276px] items-center px-6 sm:px-10 md:px-12 lg:px-16">

        <div className="mx-auto flex w-full max-w-[1194px] flex-col items-center gap-6 text-center">

          <h1 className="font-heading text-[32px] font-bold leading-[40px] text-[#FFBF00] sm:text-[40px] sm:leading-[48px] md:text-[44px] md:leading-[52px] lg:text-[48px] lg:leading-[56px]">
           Intellectual Property Rights
          </h1>

          <p className="max-w-[1000px] font-sans text-[18px] font-medium leading-[28px] text-[#E8EEF5] sm:text-[20px] sm:leading-[30px] md:text-[22px] md:leading-[32px] lg:text-[24px] lg:leading-[32px]">
           Protect your ideas, innovations, creative works, and brand identity with comprehensive Intellectual Property (IP) services. 
          </p>

        </div>

      </div>

    </header>
  );
}
