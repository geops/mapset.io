import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Locale } from "../../../i18n-config";
import Website from "@/components/Website";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mapset",
  description: "Generated by create next app",
};

// export async function generateStaticParams() {
//   return i18n.locales.map((locale) => {
//     return { lang: locale };
//   });
// }

export default function Layout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Website language={lang}>{children}</Website>
      </body>
    </html>
  );
}