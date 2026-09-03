import CompanyLawHero from "@/components/services/company-law/CompanyLawHero";
import CompanyLawServices from "@/components/services/company-law/CompanyLawServices";
import CompanyLawBreadcrumb from "@/components/services/company-law/CompanyLawBreadcrumb";
import ComplianceManagement from "@/components/services/company-law/ComplianceManagement";

export default function CompanyLawPage() {
  return (
    <>
      
      <CompanyLawHero />
      <CompanyLawBreadcrumb/>
      <CompanyLawServices />
      <ComplianceManagement/>
      
    </>
  );
}