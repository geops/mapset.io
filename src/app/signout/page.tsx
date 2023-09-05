"use client";

import userManager from "@/utils/userManager";
import { SignoutResponse } from "oidc-client";

const onSuccess = (user: SignoutResponse) => {
  const params = (user && user.state && user.state.urlParams) || "";
  const pathName = (user && user.state && user.state.urlPathname) || "/";
  console.error(`${pathName}${params}`);
  if (window) window.location.href = `${pathName}${params}`;
};

const onError = (error: Error) => {
  console.error("Signout redirect:", error);
  if (window) window.location.href = "/";
};

if (
  userManager &&
  typeof window !== `undefined` &&
  /signout/.test(window.location.pathname)
) {
  userManager
    .signoutRedirectCallback()
    .then((user: SignoutResponse) => {
      alert("success");
      onSuccess(user);
    })
    .catch((error) => {
      alert("error");
      onError(error);
    });
}

const Signout = () => {
  return "Redirecting ...";
};

export default Signout;
