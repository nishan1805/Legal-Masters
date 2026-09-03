"use client";

import { Search, Filter, ChevronDown } from "lucide-react";
import { useState } from "react";

type Tab = "All" | "Word" | "Device";

type ClientFiltersProps = {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export default function ClientFilters({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery
}: ClientFiltersProps) {
  const [inputValue, setInputValue] = useState(searchQuery);
  const tabs: Tab[] = ["All", "Word", "Device"];

   const handleSearch = () => {
    setSearchQuery(inputValue);
  };

  return (
    <section className="w-full px-6 sm:px-10 md:px-12 lg:px-[120px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6">

        {/* Search section */}
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Search bar */}
          <div className="flex h-[52px] w-full max-w-[600px] items-center rounded-[12px] border border-[#DCDCDC] bg-white p-[8px] pl-4">

            <div className="flex min-w-0 flex-1 items-center gap-2">
              <Search
                size={24}
                strokeWidth={1.5}
                className="shrink-0 text-[#757575]"
              />

              <input
                type="text"
                placeholder="Search trademarks..."
                className="min-w-0 flex-1 bg-transparent font-[Inter] text-[16px] font-normal leading-6 text-[#101010] outline-none placeholder:text-[#757575]"
              />
            </div>

            {/* Search button */}
            <button
              type="button"
              onClick={handleSearch}
              className="flex h-[36px] w-[94px] shrink-0 items-center justify-center rounded-[8px] bg-[#FFBF00] px-5 font-[Inter] text-[16px] font-medium leading-6 text-white"
            >
              Search
            </button>
          </div>

          {/* Class filter */}
          <button
            type="button"
            className="flex h-[36px] w-[68px] items-center justify-center gap-1 rounded-[8px] border border-[#DCDCDC] bg-white font-[Inter] text-[14px] font-normal leading-5 text-[#212121]"
          >
            <Filter size={16} strokeWidth={1.5} />

            <span>Class</span>

            <ChevronDown size={16} strokeWidth={1.5} />
          </button>

        </div>

        {/* Tabs */}
        <div className="flex h-[40px] w-full items-end border-b border-[#E5E5E5]">

          {tabs.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`flex h-[40px] items-center px-3 font-[Inter] text-[14px] leading-5 transition ${
                  isActive
                    ? "border-b-2 border-[#FFBF00] font-medium text-[#195199]"
                    : "font-normal text-[#525252]"
                }`}
              >
                {tab}
              </button>
            );
          })}

        </div>

      </div>
    </section>
  );
}