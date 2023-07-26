import Guide from "@/components/Guide";
import "@/sass/all.sass";
import type { Locale } from "@/../i18n-config.js";
import generateGenericMetadata from "@/lib/generateGenericMetadata.js";

const domain = process.env.NEXT_PUBLIC_DOMAIN;

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const md = await generateGenericMetadata({
    domain,
    language: lang,
    path: "/guide",
    title: "guide.metadata.title",
    description: "guide.metadata.description",
  });
  return md;
}

export default function Page() {
  return <Guide></Guide>;
}
