type TrademarkCardProps = {
  name?: string;
  image?: string;
  classNumber: number;
};

export default function TrademarkCard({
  name,
  image,
  classNumber,
}: TrademarkCardProps) {
  return (
    <div className="flex h-[120px] w-full flex-col justify-between rounded-[12px] border border-[#E5E5E5] bg-white p-4">

      {/* Trademark */}
      <div className="flex flex-1 items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="max-h-[60px] max-w-[180px] object-contain"
          />
        ) : (
          <p className="text-center font-[Poppins] text-[20px] font-semibold leading-7 text-[#212121]">
            {name}
          </p>
        )}
      </div>

      {/* Class */}
      <p className="font-[Inter] text-[12px] font-medium leading-4 text-[#525252] text-center">
        Class {classNumber}
      </p>

    </div>
  );
}