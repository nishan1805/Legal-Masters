import { Building2 } from "lucide-react";
import LegalSupportCards from "./LegalSupportCards";

export default function LegalSupport() {
    return (
        <section className="w-full bg-white px-6 py-8 sm:px-10 md:px-12 lg:px-[120px]">
            <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12">

                {/* Heading + Subheading */}
                <div className="flex w-full flex-col items-start gap-4">

                    {/* Heading */}
                    <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">

                        {/* Icon */}
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] border border-[#FFEBB0] bg-[#FFF9E6] p-3">
                            <Building2
                                size={20}
                                strokeWidth={2}
                                className="text-[#B58800]"
                            />
                        </div>

                        {/* Heading */}
                        <h2 className="font-[Inter] text-[24px] font-semibold leading-8 text-[#212121] md:text-[30px] lg:text-[32px] lg:leading-[40px]">
                            Legal Support
                        </h2>

                    </div>

                    {/* Description */}
                    <p className="max-w-[900px] text-left font-[Inter] text-[18px] font-normal leading-7 text-[#525252] md:text-[20px] md:leading-7">
                        Navigate complex legal matters with professional guidance, representation, and strategic support.
                    </p>

                </div>
                {/* Service content will come here */}
                <LegalSupportCards/>

            </div>
        </section>
    );
}