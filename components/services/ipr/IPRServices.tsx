import { FaBuilding } from "react-icons/fa";
import IPRRegistrationCards from "./IPRRegistrationCards";


export default function IPRServices() {
    return (
        <section className="w-full bg-white px-6 py-8 sm:px-10 md:px-12 lg:px-[120px]">
            <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12">

                {/* Heading + Subheading */}
                <div className="flex w-full flex-col items-start gap-4">

                    {/* Heading */}
                    <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">

                        {/* Icon */}
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] border border-[#FFEBB0] bg-[#FFF9E6] p-3">
                            <FaBuilding
                                size={20}
                                className="text-[#B58800]"
                            />
                        </div>

                        {/* Heading */}
                        <h2 className="font-sans text-[24px] font-semibold leading-8 text-[#212121] md:text-[30px] lg:text-[32px] lg:leading-[40px]">
                            TradeMark
                        </h2>

                    </div>

                    {/* Description */}
                    <p className="max-w-[900px] text-left font-sans text-[18px] font-normal leading-7 text-[#525252] md:text-[20px] md:leading-7">
                        Build and protect your brand identity with complete trademark registration and management.
                    </p>

                </div>
                {/* Service content will come here */}
                <IPRRegistrationCards />

            </div>
        </section>
    )
}