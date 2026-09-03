import Navbar from "@/components/Navbar";
import FinanceHero from "@/components/services/finance&investment/FinanceHero";
import FinanceBreadcrumb from "@/components/services/finance&investment/FinanceBreadcrumb";
import FinanceCards from "@/components/services/finance&investment/FinanceCards";
import FinanceInsurance from "@/components/services/finance&investment/FinanceInsurance";
import FinanceInvestmentCards from "@/components/services/finance&investment/FinanceInvestment";

export default function FinancePage(){
    return(
        <>
        <FinanceHero/>
        <FinanceBreadcrumb/>
        <FinanceCards/>
        <FinanceInsurance/>
        <FinanceInvestmentCards/>
        </>
    )
}