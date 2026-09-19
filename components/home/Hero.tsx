
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">

      <div
        className="relative min-h-[calc(100svh-80px)] w-full px-5 py-16 sm:min-h-[calc(100svh-90px)] sm:px-8 sm:py-20 lg:flex lg:min-h-[calc(100svh-100px)] lg:items-center lg:px-[120px] lg:py-20"
        style={{
          background:
            "radial-gradient(circle at 75% 50%, rgba(255, 210, 70, 0.25) 0%, rgba(255, 210, 70, 0.12) 20%, rgba(255, 210, 70, 0.04) 40%, transparent 65%)",
        }}
      >

        <div className="relative mx-auto flex w-full max-w-[1200px] flex-col">

        {/* =================================================
            CONTENT
            (sits above the artwork — in the design the heading
            overlaps the faint illustration rather than sitting
            in a separate column beside it)
        ================================================= */}

        <div className="relative z-10 w-full lg:max-w-[760px]">

          {/* BUSINESS COUNT */}

          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 sm:mb-8 sm:gap-3 sm:px-4 sm:py-2.5">

            <div className="flex shrink-0 -space-x-2">

              <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full sm:h-9 sm:w-9">
                <Image
                  src="/images/hero/Ellipse 1.svg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full border-2 border-white sm:h-9 sm:w-9">
                <Image
                  src="/images/hero/Ellipse 2.svg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full border-2 border-white sm:h-9 sm:w-9">
                <Image
                  src="/images/hero/Ellipse 3.svg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

            </div>

            <span className="text-xs font-medium leading-5 text-[#12345A] sm:text-sm md:text-base">
              15,000+ Businesses Served Across India
            </span>

          </div>


          {/* HEADING */}

          <h1 className="max-w-[900px] font-heading text-[38px] font-bold leading-[44px] text-[#0B2748] sm:text-[48px] sm:leading-[56px] md:text-[56px] md:leading-[64px] lg:text-[56px] lg:leading-[64px]">

            Complete Legal, Tax &

            <br className="hidden sm:block" />

            <span className="sm:hidden"> </span>

            Compliance Solutions for

            <br />

            <span className="text-[#FFB900]">
              Growing Businesses
            </span>

          </h1>


          {/* DESCRIPTION */}

          <p className="mt-5 text-lg font-medium leading-7 text-[#333333] sm:mt-6 sm:text-xl sm:leading-8 lg:text-[30px] lg:leading-[40px]">
            Everything your business needs under one roof.
          </p>


          {/* BUTTONS */}

          <div className="mt-7 flex flex-row gap-3 sm:mt-9 sm:gap-4">

            <Link
              href="#contact"
              className="inline-flex h-[48px] items-center justify-center rounded-full bg-[#E8AE00] px-4 font-sans text-sm font-medium leading-6 text-[#111111] transition hover:bg-[#E5A700] sm:flex-none sm:px-7 sm:text-base"
            >
              Talk to Experts
            </Link>

            <Link
              href="#services"
              className="inline-flex h-[48px] flex-1 items-center justify-center gap-[6px] rounded-[24px] border-[1.5px] border-[#B58800] px-3 py-3 font-sans text-sm font-medium leading-6 text-[#B58800] transition hover:bg-[#FFF7D6] sm:flex-none sm:whitespace-nowrap sm:px-6 sm:text-base"
            >
              Explore Services
            </Link>

          </div>


          {/* =================================================
              MOBILE / TABLET ARTWORK
          ================================================= */}

          <div className="relative mt-16 h-[260px] w-full sm:mt-20 sm:h-[320px] lg:hidden">

            {/* Yellow background glow */}

            <div
              className="absolute inset-x-[-40px] bottom-[30] h-[240px] rounded-full opacity-70"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,210,70,0.30) 0%, rgba(255,210,70,0.12) 45%, transparent 75%)",
              }}
            />

            {/* Books */}

            <Image
              src="/images/hero/Books.svg"
              alt=""
              width={120}
              height={120}
              className="absolute left-[8%] top-[30px] h-auto w-[75px] sm:left-[18%] sm:w-[90px]"
            />

            {/* Clipboard */}

            <Image
              src="/images/hero/Clipboard.svg"
              alt=""
              width={150}
              height={150}
              className="absolute right-[8%] top-[20px] h-auto w-[90px] sm:right-[18%] sm:w-[110px]"
            />

            {/* Laptop */}

            <Image
              src="/images/hero/Laptop.svg"
              alt=""
              width={130}
              height={130}
              className="absolute bottom-[25px] left-[10%] h-auto w-[80px] sm:left-[20%] sm:w-[100px]"
            />

            {/* Object */}

            <Image
              src="/images/hero/Object.svg"
              alt=""
              width={100}
              height={100}
              className="absolute bottom-[25px] right-[8%] h-auto w-[65px] sm:right-[18%] sm:w-[80px]"
            />

            {/* Stamp */}

            <Image
              src="/images/hero/Stamp.svg"
              alt=""
              width={80}
              height={80}
              className="absolute bottom-[100px] right-[12%] h-auto w-[55px] sm:right-[20%] sm:w-[65px]"
            />

            {/* Shield container */}

            <Image
              src="/images/hero/shieldcontainer.svg"
              alt=""
              width={140}
              height={100}
              className="absolute bottom-[15px] left-1/2 h-auto w-[110px] -translate-x-1/2 sm:w-[130px]"
            />

            {/* GOLDEN SHIELD */}

            <Image
              src="/images/hero/Goldenshield.svg"
              alt="Golden Shield"
              width={200}
              height={200}
              className="shield-float absolute left-1/2 top-[38%] z-10 h-auto w-[145px] -translate-x-1/2 -translate-y-1/2 sm:w-[180px]"
            />

          </div>

        </div>


        {/* =================================================
            DESKTOP ARTWORK
            (self-contained box that stays inside the section's
            own right padding — never overlaps the margin)
        ================================================= */}

        {/* Each asset already has its Figma opacity and rotation baked into the
            SVG itself, so no CSS opacity/rotate is applied here — doing so
            would double-apply them and wash the artwork out. */}
        <div className="absolute right-0 top-1/2 z-0 hidden -translate-y-1/2 shrink-0 items-center justify-center lg:flex lg:h-[598px] lg:w-[588px]">

          <div className="relative h-full w-full">

            {/* Books */}
            <Image
              src="/images/hero/Books.svg"
              alt=""
              width={141}
              height={163}
              className="absolute left-[21.9%] top-[15.9%] h-auto w-[141px] -translate-x-1/2 -translate-y-1/2"
            />

            {/* Clipboard */}
            <Image
              src="/images/hero/Clipboard.svg"
              alt=""
              width={216}
              height={217}
              className="absolute left-[81.6%] top-[18.1%] h-auto w-[216px] -translate-x-1/2 -translate-y-1/2"
            />

            {/* Laptop */}
            <Image
              src="/images/hero/Laptop.svg"
              alt=""
              width={189}
              height={181}
              className="absolute left-[16%] top-[73.1%] h-auto w-[189px] -translate-x-1/2 -translate-y-1/2"
            />

            {/* Stamp */}
            <Image
              src="/images/hero/Stamp.svg"
              alt=""
              width={108}
              height={115}
              className="absolute left-[88.7%] top-[66.2%] h-auto w-[108px] -translate-x-1/2 -translate-y-1/2"
            />

            {/* Pen */}
            <Image
              src="/images/hero/Object.svg"
              alt=""
              width={120}
              height={82}
              className="absolute left-[86%] top-[89%] h-auto w-[120px] -translate-x-1/2 -translate-y-1/2"
            />

            {/* Shield base / glow */}
            <Image
              src="/images/hero/shieldcontainer.svg"
              alt=""
              width={185}
              height={100}
              className="absolute left-[51.7%] top-[91.7%] h-auto w-[185px] -translate-x-1/2 -translate-y-1/2"
            />

            {/* GOLDEN SHIELD */}
            <Image
              src="/images/hero/Goldenshield.svg"
              alt="Golden Shield"
              width={249}
              height={366}
              priority
              className="shield-float absolute left-[51.7%] top-[61.7%] z-10 h-auto w-[249px] -translate-x-1/2 -translate-y-1/2"
            />

          </div>

        </div>

        </div>

      </div>

    </section>
  );
}

