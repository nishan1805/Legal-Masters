import Navbar from "@/components/Navbar";

export default function ClientHeader() {
  return (
   <>
  {/* Navbar */}
  <Navbar />

  {/* Header only */}
 <section className="relative h-[340px] w-full overflow-hidden bg-[#195199]">

  {/* Background artwork */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
    style={{
      backgroundImage: "url('/images/client-bg.png')",
    }}
  />

  {/* Header content */}
  <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
    <h1 className="font-[Urbanist] text-[48px] font-bold leading-[56px] text-[#FFBF00]">
      Our Clients
    </h1>

    <p className="mt-6 font-[Inter] text-[24px] font-medium leading-[32px] text-white">
      Trusted by business across industries for comprehensive legal and
      trademark support.
    </p>
  </div>

</section>
</>
  );
}