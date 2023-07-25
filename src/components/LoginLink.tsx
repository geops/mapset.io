import Link from "next/link";
import { useI18n } from "./I18n";
import userManager from "@/utils/userManager";
import LogoutIcon from "./LogoutIcon";
import { User } from "oidc-client";
import { useEffect, useState } from "react";
import LoginIcon from "./LoginIcon";

function LoginLink({ className = "" }) {
  // @ts-ignore
  const { t } = useI18n();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (typeof window !== "undefined" && userManager) {
      userManager.getUser().then((userr: User) => {
        setUser(userr);
      });
    }
  }, []);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Link
        className="flex items-center gap-2"
        href={"/"}
        onClick={(event) => {
          if (user) {
            userManager?.signoutRedirect();
          } else {
            userManager?.signinRedirect();
          }
          event.preventDefault();
        }}
      >
        {!user ? <LoginIcon /> : <LogoutIcon />}
        {user?.profile?.nickname || t("generic.navbar.Login")}
      </Link>
    </div>
  );
}

export default LoginLink;
