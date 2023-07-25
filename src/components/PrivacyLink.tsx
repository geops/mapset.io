import Link from "next/link";
import { useI18n } from "./I18n";
import ExternalLinkIcon from "./images/ExternalLinkIcon";

function PrivacyLink({
  className = "",
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { t, language } = useI18n();
  return (
    <Link
      href={`https://geops.com/` + language + `/privacy`}
      className={"flex gap-1 items-center " + className}
      {...props}
    >
      {t("generic.privacyPolicy")}
      <ExternalLinkIcon />
    </Link>
  );
}

export default PrivacyLink;
