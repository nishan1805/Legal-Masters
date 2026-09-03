import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function IPRBreadcrumb() {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1200px] items-center px-6 py-4 sm:px-10 md:px-12 lg:px-0">

        {/* Home */}
        <Link
          href="/"
          className="font-[Inter] text-[14px] font-normal leading-[20px] text-[#525252] transition hover:text-[#195199]"
        >
          Home
        </Link>

        {/* Icon */}
        <ChevronRight
          width={20}
          height={20}
          strokeWidth={1.8}
          className="mx-1 text-[#525252]"
        />

        {/* Current Page */}
        <span className="font-[Inter] text-[14px] font-medium leading-[20px] text-[#195199]">
          Intellectual Property Rights
        </span>

      </div>
    </div>
  );
}