"use client";

import React from "react";
import I18n from "./I18n";
import useAnalytics from "../lib/useAnalytics";
import { Locale } from "../../i18n-config";
// import PlausibleProvider from "next-plausible";

export default function Website({
  children,
  language,
}: {
  children: React.ReactNode;
  language: Locale;
}) {
  useAnalytics();
  return (
    // <PlausibleProvider domain={`mapset.${process.env.NEXT_PUBLIC_DOMAIN}`}>
    <I18n language={language}>{children}</I18n>
    // </PlausibleProvider>
  );
}
