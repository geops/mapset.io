import Link from "next/link";
import { useI18n } from "./I18n";
import LoginIcon from "./images/LoginIcon";

const domain = process.env.NEXT_PUBLIC_DOMAIN;

function LoginLink({ className = "", linkClassName = "" }) {
  const { t } = useI18n();
  return (
    <div className={className}>
      <Link
        className={`${linkClassName} flex items-center gap-2`}
        href={"/"}
        onClick={() => {
          window.location.href = `https://editor.mapset.ch/accounts/geops/login/authenticate/?next=https%3A%2F%2Feditor.mapset.${domain}`;
        }}
      >
        <LoginIcon /> {t("login")}
      </Link>
    </div>
  );
}

export default LoginLink;
