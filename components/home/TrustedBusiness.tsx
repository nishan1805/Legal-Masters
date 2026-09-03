
import { Inter, Urbanist } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
});

const stats = [
  {
    number: "15,000",
    suffix: "+",
    label: "Clients Served",
  },
  {
    number: "500",
    suffix: "+",
    label: "Corporate Clients",
  },
  {
    number: "10",
    suffix: "+",
    label: "Years Experience",
  },
  {
    number: "100",
    suffix: "+",
    label: "Services",
  },
];

export default function TrustedByBusiness() {
  return (
    <section className="w-full overflow-hidden bg-[#174A8B] px-4 py-10 sm:px-6 sm:py-12 lg:px-[120px] lg:py-[64px]">

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 sm:gap-12 lg:gap-16">

        {/* =========================
            HEADING + SUBHEADING
        ========================== */}
        <div className="flex w-full flex-col items-center gap-3 text-center sm:gap-4">

          <h2
            className={`${urbanist.className} max-w-[1000px] text-[32px] font-bold leading-[40px] text-white sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[56px]`}
          >
            Trusted by Businesses Across India
          </h2>

          <p
            className={`${inter.className} max-w-[800px] text-base font-normal leading-6 text-white sm:text-lg sm:leading-7 lg:text-[24px] lg:leading-[32px]`}
          >
            Helping businesses simplify legal and compliance processes.
          </p>

        </div>


        {/* =========================
            STATISTICS
        ========================== */}
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex h-[160px] w-full max-w-[282px] items-center justify-center rounded-[20px] border border-[#95AFD0] bg-[#E8EEF5] sm:h-[172px]"
            >

              <div className="flex w-full flex-col items-center gap-3 px-4">

                {/* Number */}
                <div className="flex h-[56px] items-center justify-center">

                  <span
                    className={`${urbanist.className} text-[36px] font-bold leading-[44px] text-[#174A8B] sm:text-[42px] sm:leading-[50px] lg:text-[48px] lg:leading-[56px]`}
                  >
                    {stat.number}
                  </span>

                  <span
                    className={`${urbanist.className} text-[36px] font-bold leading-[44px] text-[#FFB900] sm:text-[42px] sm:leading-[50px] lg:text-[48px] lg:leading-[56px]`}
                  >
                    {stat.suffix}
                  </span>

                </div>


                {/* Label */}
                <p
                  className={`${inter.className} text-center text-[14px] font-semibold leading-5 text-[#424242] sm:text-[16px] sm:leading-6`}
                >
                  {stat.label}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

