
import DiscussSection from "./DiscussSection";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-[#174A8B] px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 xl:px-[120px] xl:py-16"
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1200px]
          flex-col
          gap-10
          md:gap-12
          lg:flex-row
          lg:items-start
          lg:gap-8
          xl:gap-10
        "
      >
        {/* Discuss Section */}
        <div className="w-full lg:w-[calc(50%-20px)]">
          <DiscussSection />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-[calc(50%-20px)]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

