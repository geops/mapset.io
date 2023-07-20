"use client";

import userManager from "@/utils/userManager";
import { User } from "oidc-client";

const onSuccess = (user: User) => {
  const params = (user && user.state && user.state.urlParams) || "";
  const pathName = (user && user.state && user.state.urlPathname) || "/";
  if (window) window.location.href = `${pathName}${params}`;
};

const onError = (error: Error) => {
  console.error("Signin redirect:", error);
  if (window) window.location.href = "/";
};

if (
  userManager &&
  typeof window !== `undefined` &&
  /signin/.test(window.location.pathname)
) {
  userManager
    .signinRedirectCallback()
    .then((user) => {
      onSuccess(user);
    })
    .catch((error) => {
      onError(error);
    });
}

const Signin = () => {
  return "Redirecting ...";
};

export default Signin;
