
import Image from "next/image";

const steps = [
  {
    title: "1. Share Your Requirement",
    description:
      "Share your business requirements with our experts and tell us what assistance you need.",
    points: [
      "Quick and simple onboarding process",
      "Share your business requirements",
      "Get expert guidance",
      "Start your process easily",
    ],
    image: "/images/howitwork/image1.svg",
  },

  {
    title: "2. Expert Consultation",
    description:
      "Connect with our experienced professionals.",
    points: [
      "Personalized consultation from experts",
      "Understand compliance and legal requirements",
      "Get the right business solutions",
      "Clarify doubts before proceeding",
    ],
    image: "/images/howitwork/image2.svg",
  },

  {
    title: "3. Documentation",
    description:
      "We prepare and verify all required documents accurately.",
    points: [
      "Assistance with document preparation",
      "Verification of submitted details",
      "Ensure compliance with regulations",
      "Minimize errors and delays",
    ],
    image: "/images/howitwork/image3.svg",
  },

  {
    title: "4. Processing",
    description:
      "Our team handles filings, registrations, and approvals.",
    points: [
      "End-to-end application processing",
      "Government filings and submissions",
      "Regular progress updates",
      "Smooth and transparent workflow",
    ],
    image: "/images/howitwork/image4.svg",
  },

  {
    title: "5. Delivery",
    description:
      "Receive your completed certificates and documents securely.",
    points: [
      "Timely delivery of final documents",
      "Secure access to reports and certificates",
      "Dedicated support after completion",
      "Complete transparency till final delivery",
    ],
    image: "/images/howitwork/image5.svg",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-[120px] lg:py-[64px]">
      
      <div className="mx-auto w-full max-w-[1200px]">

        {/* =========================
            HEADING
        ========================== */}
        <div className="flex w-full flex-col items-center gap-3 text-center sm:gap-4">

          <h2 className="font-[Urbanist] text-[32px] font-bold leading-[40px] text-[#0B2748] sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[56px]">
            How Legal Masters Works
          </h2>

          <p className="max-w-[900px] font-[Inter] text-base font-normal leading-6 text-[#555555] sm:text-lg sm:leading-7 lg:text-[24px] lg:leading-[32px]">
            Simple, transparent process to get your business services completed
          </p>

        </div>


        {/* =========================
            STEPS
        ========================== */}
        <div className="mt-10 flex w-full flex-col gap-12 sm:mt-12 sm:gap-16 lg:mt-16 lg:gap-10">

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex w-full flex-col items-center gap-6 lg:h-[292px] lg:flex-row lg:items-center lg:justify-between lg:gap-10"
            >

              {/* =========================
                  IMAGE
              ========================== */}
              <div
                className={`relative flex w-full max-w-[491px] shrink-0 items-center justify-center lg:h-[292px] lg:w-[491px] ${
                  index % 2 !== 0 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  width={491}
                  height={292}
                  className="h-auto max-h-[292px] w-full object-contain"
                />
              </div>


              {/* =========================
                  INFORMATION
              ========================== */}
              <div
                className={`flex w-full max-w-[613px] flex-col gap-4 sm:gap-5 lg:h-[264px] lg:w-[613px] ${
                  index % 2 !== 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >

                {/* Title */}
                <h3 className="font-[Inter] text-[24px] font-semibold leading-8 text-[#0B2748] sm:text-[28px] sm:leading-9 lg:h-[48px] lg:text-[32px] lg:leading-[40px]">
                  {step.title}
                </h3>


                <div className="flex w-full flex-col gap-4 sm:gap-5">

                  {/* Description */}
                  <p className="font-[Inter] text-base font-normal leading-6 text-[#525252] sm:text-lg sm:leading-7 lg:text-[20px] lg:leading-7">
                    {step.description}
                  </p>


                  {/* Points */}
                  <ul className="flex w-full flex-col gap-2 sm:gap-3">

                    {step.points.map((point) => (
                      <li
                        key={point}
                        className="flex w-full items-start gap-3 font-[Inter] text-base leading-6 text-[#333333] sm:text-lg sm:leading-7 lg:text-[20px] lg:leading-7"
                      >
                        <span className="shrink-0 text-[#174A8B]">
                          ✓
                        </span>

                        <span>{point}</span>
                      </li>
                    ))}

                  </ul>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

