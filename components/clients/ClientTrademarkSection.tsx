"use client";

import { useState } from "react";
import ClientFilters from "./ClientsFilters";
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

export default function ClientsTrademarkSection() {
  const [activeTab, setActiveTab] = useState<
    "All" | "Word" | "Device"
  >("All");

  const filteredTrademarks =
    activeTab === "All"
      ? trademarks
      : trademarks.filter(
          (trademark) => trademark.type === activeTab
        );

  return (
    <div className="flex w-full flex-col gap-0">

      <ClientFilters
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery=""
        setSearchQuery={() => {}}
      />

      <TrademarkGrid trademarks={filteredTrademarks} />

    </div>
  );
}