import Link from "next/link";
import { useI18n } from "./I18n";
import ExternalLinkIcon from "./images/ExternalLinkIcon";

function PrivacyLink({
  className = "",
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { t } = useI18n();
  return (
    <Link
      href={t("privacy_link")}
      className={"flex gap-1 items-center " + className}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {t("privacy_policy")}
      <ExternalLinkIcon />
    </Link>
  );
}

export default PrivacyLink;
