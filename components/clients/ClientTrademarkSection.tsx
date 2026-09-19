"use client";

import { useState } from "react";
import ClientFilters from "./ClientsFilters";
import Pagination from "./Pagination";
import TrademarkGrid, { Trademark } from "./TrademarkGrid";


const trademarks: Trademark[] = [
  {
    image: "/images/client-logo.png",
    classNumber: 14,
    type: "Device",
  },
  {
    name: "Solise Paris",
    classNumber: 3,
    type: "Word",
  },
  {
    image: "/images/client-logo.png",
    classNumber: 14,
    type: "Device",
  },
  {
    name: "Solise Paris",
    classNumber: 3,
    type: "Word",
  },
  {
    image: "/images/client-logo.png",
    classNumber: 14,
    type: "Device",
  },
  {
    name: "Solise Paris",
    classNumber: 3,
    type: "Word",
  },
  {
    image: "/images/client-logo.png",
    classNumber: 14,
    type: "Device",
  },
  {
    name: "Solise Paris",
    classNumber: 3,
    type: "Word",
  },
  {
    image: "/images/client-logo.png",
    classNumber: 14,
    type: "Device",
  },
  {
    name: "Solise Paris",
    classNumber: 3,
    type: "Word",
  },
  {
    image: "/images/client-logo.png",
    classNumber: 14,
    type: "Device",
  },
  {
    name: "Solise Paris",
    classNumber: 3,
    type: "Word",
  },
  {
    image: "/images/client-logo.png",
    classNumber: 14,
    type: "Device",
  },
  {
    name: "Solise Paris",
    classNumber: 3,
    type: "Word",
  },
  {
    image: "/images/client-logo.png",
    classNumber: 14,
    type: "Device",
  },
  {
    name: "Solise Paris",
    classNumber: 3,
    type: "Word",
  },
  {
    image: "/images/client-logo.png",
    classNumber: 14,
    type: "Device",
  },
  {
    name: "Solise Paris",
    classNumber: 3,
    type: "Word",
  },
  {
    image: "/images/client-logo.png",
    classNumber: 14,
    type: "Device",
  },
  {
    name: "Solise Paris",
    classNumber: 3,
    type: "Word",
  },
];

const pageSize = 24;
const totalCount = 2049;

export default function ClientsTrademarkSection() {
  const [activeTab, setActiveTab] = useState<
    "All" | "Word" | "Device"
  >("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTrademarks =
    activeTab === "All"
      ? trademarks
      : trademarks.filter(
          (trademark) => trademark.type === activeTab
        );

  const totalPages = Math.ceil(totalCount / pageSize);
  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalCount);

  return (
    <div className="flex w-full flex-col gap-0">

      <ClientFilters
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery=""
        setSearchQuery={() => {}}
      />

      <TrademarkGrid
        trademarks={filteredTrademarks}
        start={start}
        end={end}
        totalCount={totalCount}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

    </div>
  );
}