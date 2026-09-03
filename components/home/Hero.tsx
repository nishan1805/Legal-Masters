
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">

      <div
        className="relative mx-auto min-h-[850px] max-w-[1792px] px-5 py-12 sm:min-h-[850px] sm:px-8 sm:py-16 lg:flex lg:min-h-[620px] lg:items-center lg:px-16 lg:py-16"
        style={{
          background:
            "radial-gradient(circle at 75% 50%, rgba(255, 210, 70, 0.25) 0%, rgba(255, 210, 70, 0.12) 20%, rgba(255, 210, 70, 0.04) 40%, transparent 65%)",
        }}
      >

        {/* =================================================
            DESKTOP BACKGROUND ARTWORK
        ================================================= */}

        <div className="pointer-events-none absolute inset-0 hidden lg:block">

          <Image
            src="/images/hero/Books.svg"
            alt=""
            width={120}
            height={120}
            className="absolute right-[28%] top-[70px]"
          />

          <Image
            src="/images/hero/Clipboard.svg"
            alt=""
            width={150}
            height={150}
            className="absolute right-[5%] top-[30px]"
          />

          <Image
            src="/images/hero/Laptop.svg"
            alt=""
            width={130}
            height={130}
            className="absolute bottom-[150px] right-[29%]"
          />

          <Image
            src="/images/hero/Object.svg"
            alt=""
            width={100}
            height={100}
            className="absolute bottom-[70px] right-[4%]"
          />

          <Image
            src="/images/hero/Stamp.svg"
            alt=""
            width={80}
            height={80}
            className="absolute bottom-[200px] right-[4%]"
          />

          <Image
            src="/images/hero/shieldcontainer.svg"
            alt=""
            width={140}
            height={100}
            className="absolute bottom-[100px] right-[17%]"
          />

          <Image
            src="/images/hero/Goldenshield.svg"
            alt="Golden Shield"
            width={200}
            height={200}
            priority
            className="shield-float absolute right-[14%] top-1/2 -translate-y-1/2"
          />

        </div>


        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="relative z-10 w-full max-w-[900px] lg:ml-[100px]">

          {/* BUSINESS COUNT */}

          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-sm sm:mb-8 sm:gap-3 sm:px-4 sm:py-2.5">

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

          <h1 className="max-w-[900px] font-[Urbanist] text-[38px] font-bold leading-[44px] sm:text-[48px] sm:leading-[56px] md:text-[56px] md:leading-[64px] lg:text-[64px] lg:leading-[72px]">

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

          <p className="mt-5 text-base leading-6 text-[#333333] sm:mt-6 sm:text-lg sm:leading-7 lg:text-xl">
            Everything your business needs under one roof.
          </p>


          {/* BUTTONS */}

          <div className="mt-7 flex flex-row gap-3 sm:mt-9 sm:gap-4">

            <Link
              href="#contact"
              className="inline-flex h-[48px] items-center justify-center rounded-full bg-[#E8AE00] px-4 font-[Inter] text-sm font-medium leading-6 text-[#111111] transition hover:bg-[#E5A700] sm:flex-none sm:px-7 sm:text-base"
            >
              Talk to Experts
            </Link>

            <Link
              href="#services"
              className="inline-flex h-[48px] flex-1 items-center justify-center gap-[6px] rounded-[24px] border-[1.5px] border-[#B58800] px-3 py-3 font-[Inter] text-sm font-medium leading-6 text-[#B58800] transition hover:bg-[#FFF7D6] sm:w-[178px] sm:flex-none sm:px-6 sm:text-base"
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

      </div>

    </section>
  );
}

