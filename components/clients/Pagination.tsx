"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
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

          {/* Pages 1-5 */}
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => handlePageChange(page)}
              className={`flex h-10 w-10 items-center justify-center rounded-lg font-sans text-sm font-medium ${
                currentPage === page
                  ? "border-2 border-[#FFBF00] bg-white text-[#212121]"
                  : "border border-[#DCDCDC] bg-white text-[#525252]"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Dots */}
          <span className="flex h-10 w-10 items-center justify-center font-sans text-sm text-[#525252]">
            ...
          </span>

          {/* Last page */}
          <button
            type="button"
            onClick={() => handlePageChange(totalPages)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg font-sans text-sm font-medium ${
              currentPage === totalPages
                ? "border-2 border-[#FFBF00] bg-white text-[#212121]"
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
