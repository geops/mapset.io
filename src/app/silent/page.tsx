"use client";

import userManager from "@/utils/userManager";

if (
  userManager &&
  typeof window !== `undefined` &&
  /silent/.test(window.location.pathname)
) {
  userManager.signinSilentCallback();
}

const Silent = () => {
  return null;
};

export default Silent;
