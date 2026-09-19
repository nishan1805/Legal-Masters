import { FaBuilding } from "react-icons/fa";
import ComplianceManagementCards from "@/components/services/company-law/ComplianceManagementCards";

export default function ComplianceManagement() {
  return (
    <section className="w-full bg-white px-6 py-12 sm:px-10 md:px-12 lg:px-[120px] lg:py-12">

      {/* Main Container */}
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12">

        {/* =====================================
            HEADING + SUBHEADING
        ====================================== */}
        <div className="flex w-full flex-col items-start gap-4">

          {/* Icon + Heading */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">

            {/* Icon Container */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] border border-[#B8C9DF] bg-[#E8EEF5]">
              <FaBuilding
                size={20}
                className="text-[#195199]"
              />
            </div>

            {/* Heading */}
            <h2 className="font-sans text-[24px] font-semibold leading-8 text-[#212121] md:text-[30px] lg:text-[32px] lg:leading-[40px]">
              Compliance & Management
            </h2>

          </div>


          {/* Subheading */}
          <p className="max-w-[1000px] text-left font-sans text-[18px] font-normal leading-7 text-[#525252] md:text-[20px] md:leading-7">
            Stay compliant with evolving corporate regulations through our
            comprehensive compliance.
          </p>

        </div>


        {/* =====================================
            CARDS
        ====================================== */}
        <ComplianceManagementCards />

      </div>

    </section>
  );
}