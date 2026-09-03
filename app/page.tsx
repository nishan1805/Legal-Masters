import ContactSection from "@/components/home/Contact";
import BusinessJourney from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import TrustedIndustries from "@/components/home/Industries";
import ServicesSection from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import TrustedBusinesses from "@/components/home/TrustedBusiness";
import WhyChooseUs from "@/components/home/WhyLegalMasters";
import Navbar from "@/components/Navbar"
import { Contact } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesSection />
      <HowItWorks />
      <TrustedBusinesses />
      <TrustedIndustries />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <BusinessJourney />
      <Footer />
    </div>
  );
}
