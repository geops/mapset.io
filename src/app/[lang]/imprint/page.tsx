import Imprint from "@/components/Imprint";
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
    path: "/imprint",
    title: "imprint.metadata.title",
    description: "imprint.metadata.description",
  });
  return md;
}

export default function Page() {
  return <Imprint></Imprint>;
}
