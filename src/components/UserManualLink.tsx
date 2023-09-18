import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useI18n } from "./I18n";
import GuideIcon from "./images/GuideIcon";
import VerticalSeparator from "./ui/VerticalSeparator";

function UserManualLink({ className = "", linkClassName = "" }) {
  const { t, language } = useI18n();
  const pathname = usePathname();

  if (pathname.endsWith("/guide")) return null;
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <GuideIcon />
      <Link
        href={"/" + language + "/guide"}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
      >
        {t("guide.link_user_manual")}
      </Link>
      <VerticalSeparator />
    </div>
  );
}

export default UserManualLink;
