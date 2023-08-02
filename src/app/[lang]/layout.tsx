import "./globals.css";
import { Inter } from "next/font/google";
import { Locale } from "../../../i18n-config";
import Website from "@/components/Website";
import { i18n } from "../../../i18n-config";

const inter = Inter({ subsets: ["latin"] });

// important for next-sitemap
export async function generateStaticParams() {
  return i18n.locales.map((locale) => {
    return { lang: locale };
  });
}

export default function Layout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={lang}>
      <body className={"scroll-mt-[81px] " + inter.className}>
        <Website language={lang}>{children}</Website>
      </body>
    </html>
  );
}
