"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 86;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="w-full px-6 py-12 sm:px-10 md:px-12 lg:px-[120px]">
      <div className="mx-auto flex w-full max-w-[1200px] justify-center">
        <div className="flex items-center gap-2">

          {/* Previous */}
          <button
            type="button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#DCDCDC] bg-white text-[#525252] disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Previous page"
          >
            <ChevronLeft size={18} strokeWidth={1.5} />
          </button>

          {/* Page 1 */}
          <button
            type="button"
            onClick={() => handlePageChange(1)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg font-[Inter] text-sm font-medium ${
              currentPage === 1
                ? "bg-[#195199] text-white"
                : "border border-[#DCDCDC] bg-white text-[#525252]"
            }`}
          >
            1
          </button>

          {/* Page 2 */}
          <button
            type="button"
            onClick={() => handlePageChange(2)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg font-[Inter] text-sm font-medium ${
              currentPage === 2
                ? "bg-[#195199] text-white"
                : "border border-[#DCDCDC] bg-white text-[#525252]"
            }`}
          >
            2
          </button>

          {/* Page 3 */}
          <button
            type="button"
            onClick={() => handlePageChange(3)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg font-[Inter] text-sm font-medium ${
              currentPage === 3
                ? "bg-[#195199] text-white"
                : "border border-[#DCDCDC] bg-white text-[#525252]"
            }`}
          >
            3
          </button>

          {/* Dots */}
          <span className="flex h-10 w-10 items-center justify-center font-[Inter] text-sm text-[#525252]">
            ...
          </span>

          {/* Last page */}
          <button
            type="button"
            onClick={() => handlePageChange(totalPages)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg font-[Inter] text-sm font-medium ${
              currentPage === totalPages
                ? "bg-[#195199] text-white"
                : "border border-[#DCDCDC] bg-white text-[#525252]"
            }`}
          >
            {totalPages}
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#DCDCDC] bg-white text-[#525252] disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Next page"
          >
            <ChevronRight size={18} strokeWidth={1.5} />
          </button>

        </div>
      </div>
    </section>
  );
}