import Navbar from "@/components/Navbar";

export default function ClientHeader() {
  return (
   <>
  {/* Navbar */}
  <Navbar />

  {/* Header only */}
 <section className="relative w-full overflow-hidden bg-[#195199]">

  {/* Background artwork */}
  <div
    className="absolute inset-0 bg-cover bg-no-repeat"
    style={{
      backgroundColor: "#195199",
      backgroundImage: "url('/images/client-bg.png')",
      backgroundBlendMode: "screen",
      backgroundPosition: "center 30%",
    }}
  />

  {/* Header content */}
  <div className="relative z-10 flex min-h-[276px] items-center px-6 sm:px-10 md:px-12 lg:px-16">
    <div className="mx-auto flex w-full max-w-[1194px] flex-col items-center gap-6 text-center">
      <h1 className="font-heading text-[32px] font-bold leading-[40px] text-[#FFBF00] sm:text-[40px] sm:leading-[48px] md:text-[44px] md:leading-[52px] lg:text-[48px] lg:leading-[56px]">
        Our Clients
      </h1>

      <p className="max-w-[1000px] font-sans text-[18px] font-medium leading-[28px] text-[#E8EEF5] sm:text-[20px] sm:leading-[30px] md:text-[22px] md:leading-[32px] lg:text-[24px] lg:leading-[32px]">
        Trusted by businesses across industries for comprehensive legal and
        trademark support.
      </p>
    </div>
  </div>

</section>
</>
  );
}
