
import IPRHeroSection from "@/components/services/ipr/IPRHeroSection";
import IPRBreadcrumb from "@/components/services/ipr/IPRBreadcrumb";
import IPRServices from "@/components/services/ipr/IPRServices";
import IPRCopyright from "@/components/services/ipr/IPRCopyright";
import IPRPatent from "@/components/services/ipr/IPRPatent";

export default function IPR(){
    return(
        <>
        <IPRHeroSection/>
        <IPRBreadcrumb/>
        <IPRServices/>
        <IPRCopyright/>
        <IPRPatent/>

        </>
    )
}