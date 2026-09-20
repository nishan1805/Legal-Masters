import ContactSection from "@/components/home/Contact";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import ServicesSection from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import TrustedBusinesses from "@/components/home/TrustedBusiness";
import TrustedIndustries from "@/components/home/Industries";
import WhyChooseUs from "@/components/home/WhyLegalMasters";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <HowItWorks />
      <TrustedBusinesses />
      <TrustedIndustries />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </div>
  );
}
