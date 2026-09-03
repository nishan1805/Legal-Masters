import TrademarkCard from "./TrademarkCard";

export type Trademark = {
  name?: string;
  image?: string;
  classNumber: number;
  type: "Word" | "Device";
};

type TrademarkGridProps = {
  trademarks: Trademark[];
};

export default function TrademarkGrid({
  trademarks,
}: TrademarkGridProps) {
  return (
    <section className="w-full px-6 sm:px-10 md:px-12 lg:px-[120px]">
      <div className="mx-auto w-full max-w-[1200px]">

        {/* Result count */}
        <p className="mb-6 mt-5 font-[Inter] text-[14px] font-normal leading-5 text-[#525252]">
          Showing {trademarks.length} trademarks
        </p>

        {/* Grid */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trademarks.map((trademark, index) => (
            <TrademarkCard
              key={index}
              name={trademark.name}
              image={trademark.image}
              classNumber={trademark.classNumber}
            />
          ))}
        </div>

      </div>
    </section>
  );
}