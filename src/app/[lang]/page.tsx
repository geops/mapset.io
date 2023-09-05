import Home from "@/components/Home";
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
    path: "/",
    title: "home.metadata.title",
    description: "home.metadata.description",
  });
  return md;
}

export default function Page() {
  return <Home></Home>;
}
