import ClientBreadcrumb from "@/components/clients/ClientBreadCrumb";
import ClientHeader from "@/components/clients/ClientHeader";
import ClientFilters from "@/components/clients/ClientsFilters";
import ClientsTrademarkSection from "@/components/clients/ClientTrademarkSection";
import Pagination from "@/components/clients/Pagination";
import TrademarkGrid from "@/components/clients/TrademarkGrid";



export default function ClientPage(){
    return(
        <>
        
       
        <ClientHeader/>
        <ClientBreadcrumb/>
        <ClientsTrademarkSection/>
        <Pagination/>
        

        
        </>
    )
}