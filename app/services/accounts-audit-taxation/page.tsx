import Navbar from "@/components/Navbar";
import AccountAuditCards from "@/components/services/accounts&audit/AccountAudit";
import AccountingCards from "@/components/services/accounts&audit/AccountingCards";
import AccounntsBreadcrumb from "@/components/services/accounts&audit/AccountsBreadcrumb";
import AccountsHero from "@/components/services/accounts&audit/AccountsHero";
import AccountTaxationCards from "@/components/services/accounts&audit/AccountTaxation";

export default function AccountsPage(){
    return(
        <>
       <AccountsHero/>
        <AccounntsBreadcrumb/>
        <AccountingCards/>
        <AccountAuditCards/>
        <AccountTaxationCards/>
        </>
    )
}