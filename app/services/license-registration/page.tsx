
import LicenseBusinessCards from "@/components/services/license&registration/LicennseBusinessReg";
import LicenseResgistrationHero from "@/components/services/license&registration/License&RegistrationHero";
import LicenseBreadcrumb from "@/components/services/license&registration/LicenseBreadcrumb";
import LicenseRegulatoryCards from "@/components/services/license&registration/LicenseRegulatory";

export default function License(){
    return(
        <>
        <LicenseResgistrationHero/>
        <LicenseBreadcrumb/>
        <LicenseBusinessCards/>
        <LicenseRegulatoryCards/>
        </>
    )
}