import Link from "next/link";
import { useI18n } from "./I18n";
import GuideIcon from "./images/GuideIcon";

function UserManualLink({ className = "" }) {
  // @ts-ignore
  const { t, language } = useI18n();
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <GuideIcon />
      <Link href={"/" + language + "/guide"}>
        {t("guide.link-user-manual")}
      </Link>
    </div>
  );
}

export default UserManualLink;
