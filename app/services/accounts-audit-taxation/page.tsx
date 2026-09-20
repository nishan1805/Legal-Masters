import AccountAuditCards from "@/components/services/accounts&audit/AccountAudit";
import AccountingCards from "@/components/services/accounts&audit/AccountingCards";
import AccountsBreadcrumb from "@/components/services/accounts&audit/AccountsBreadcrumb";
import AccountsHero from "@/components/services/accounts&audit/AccountsHero";
import AccountTaxationCards from "@/components/services/accounts&audit/AccountTaxation";

export default function AccountsPage() {
  return (
    <>
      <AccountsHero />
      <AccountsBreadcrumb />
      <AccountingCards />
      <AccountAuditCards />
      <AccountTaxationCards />
    </>
  );
}
