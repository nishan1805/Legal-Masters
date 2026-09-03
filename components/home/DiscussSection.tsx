
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function DiscussSection() {
  return (
    <div className="flex h-auto min-h-[684px] w-full max-w-[512px] flex-col justify-between">

      {/* =========================================
          HEADING + SUBHEADING
      ========================================= */}
      <div className="flex w-full flex-col gap-4">

        <h2 className="font-[Urbanist] text-[36px] font-bold leading-[44px] text-white sm:text-[42px] sm:leading-[50px] lg:text-[48px] lg:leading-[56px]">
          Let’s Discuss Your Requirements
        </h2>

        <p className="font-[Inter] text-[18px] font-normal leading-[28px] text-white sm:text-[20px] sm:leading-[30px] lg:text-[24px] lg:leading-[32px]">
          Connect with our experts for personalized assistance.
        </p>

      </div>


      {/* =========================================
          CONTACT INFORMATION
      ========================================= */}
      <div className="mt-12 flex w-full flex-col gap-8">

        {/* Contact Information Heading */}

        <h3 className="font-[Inter] text-[20px] font-semibold leading-[28px] text-white sm:text-[22px] sm:leading-[30px] lg:text-[24px] lg:leading-[32px]">
          Contact Information
        </h3>


        {/* =========================================
            INFORMATION CONTAINER
        ========================================= */}
        <div className="flex w-full flex-col gap-6">


          {/* =======================================
              ADDRESS
          ======================================= */}
          <div className="flex w-full gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
              <MapPin
                size={24}
                strokeWidth={2}
                className="text-white"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-1">

              <p className="font-[Inter] text-[18px] font-medium leading-[26px] text-white lg:text-[20px] lg:leading-[28px]">
                Address
              </p>

              <p className="font-[Inter] text-[14px] font-normal leading-[22px] text-white sm:text-[15px] sm:leading-[23px] lg:text-[16px] lg:leading-[24px]">
                Office No, 5071, 5th Floor, Currency Tower, VIP Rd,
                Telibandha, Raipur, Chhattisgarh 492001
              </p>

            </div>

          </div>


          {/* =======================================
              PHONE
          ======================================= */}
          <div className="flex w-full gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
              <Phone
                size={24}
                strokeWidth={2}
                className="text-white"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-1">

              <p className="font-[Inter] text-[18px] font-medium leading-[26px] text-white lg:text-[20px] lg:leading-[28px]">
                Phone
              </p>

              <p className="font-[Inter] text-[14px] font-normal leading-[22px] text-white sm:text-[15px] sm:leading-[23px] lg:text-[16px] lg:leading-[24px]">
                +91 95893 93949
                <br />
                +91 62623 43456
              </p>

            </div>

          </div>


          {/* =======================================
              EMAIL
          ======================================= */}
          <div className="flex w-full gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
              <Mail
                size={24}
                strokeWidth={2}
                className="text-white"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-1">

              <p className="font-[Inter] text-[18px] font-medium leading-[26px] text-white lg:text-[20px] lg:leading-[28px]">
                Email
              </p>

              <p className="break-all font-[Inter] text-[14px] font-normal leading-[22px] text-white sm:text-[15px] sm:leading-[23px] lg:text-[16px] lg:leading-[24px]">
                legalmasters01@gmail.com
              </p>

            </div>

          </div>


          {/* =======================================
              BUSINESS HOURS
          ======================================= */}
          <div className="flex w-full gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
              <Clock
                size={24}
                strokeWidth={2}
                className="text-white"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-1">

              <p className="font-[Inter] text-[18px] font-medium leading-[26px] text-white lg:text-[20px] lg:leading-[28px]">
                Business Hours
              </p>

              <p className="font-[Inter] text-[14px] font-normal leading-[22px] text-white sm:text-[15px] sm:leading-[23px] lg:text-[16px] lg:leading-[24px]">
                Monday - Saturday: 9:00 AM - 7:00 PM
                <br />
                Sunday: Closed
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

