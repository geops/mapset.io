import Link from "next/link";
import { useI18n } from "./I18n";
import { usePathname } from "next/navigation";

function ProductLink({
  className = "",
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { t, language } = useI18n();
  const pathname = usePathname();
  const isProductPage = "/" + language === pathname;
  return (
    <Link
      href={"/" + language}
      className={"relative " + (isProductPage ? "font-bold " : " ") + className}
      {...props}
    >
      {t("product")}
      {children}
    </Link>
  );
}

export default ProductLink;
