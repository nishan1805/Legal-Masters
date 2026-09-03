import Navbar from "@/components/Navbar";
import LegalServiceBreadcrumb from "@/components/services/legal-service/LegalServiceBreadcrumb";
import LegalServiceHero from "@/components/services/legal-service/LegalServiceHero";
import LegalSupport from "@/components/services/legal-service/LegalSupport";

export default function LegalServicePage(){
    return(
        <>
       <LegalServiceHero/>
       <LegalServiceBreadcrumb/>
       <LegalSupport/>
        </>
    )
}