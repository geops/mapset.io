import Link from "next/link";
import { useI18n } from "./I18n";
import { usePathname } from "next/navigation";

function ImprintLink({
  className = "",
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { t, language } = useI18n();
  const pathname = usePathname();
  const isImprintPage = /imprint/.test(pathname);
  return (
    <Link
      href={"/" + language + "/imprint"}
      className={"relative " + (isImprintPage ? "font-bold " : " ") + className}
      {...props}
    >
      {t("licenseImprint")}
      {children}
    </Link>
  );
}

export default ImprintLink;
