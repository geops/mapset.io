import Link from "next/link";
import { useI18n } from "./I18n";
import GuideIcon from "./images/GuideIcon";

function UserManualLink({ className = "", linkClassName = "" }) {
  const { t, language } = useI18n();
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <GuideIcon />
      <Link href={"/" + language + "/guide"} className={linkClassName}>
        {t("guide.link_user_manual")}
      </Link>
    </div>
  );
}

export default UserManualLink;
