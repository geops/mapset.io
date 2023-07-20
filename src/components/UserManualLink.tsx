import Link from "next/link";
import { useI18n } from "./I18n";

function UserManualLink() {
  // @ts-ignore
  const { t, language } = useI18n();
  return (
    <div className="flex items-center">
      <Link href={"/" + language + "/guide"}>
        {t("guide.link-user-manual")}
      </Link>
    </div>
  );
}

export default UserManualLink;
