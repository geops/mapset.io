import guideDe from "../content/guide/de.json";
import homeDe from "../content/home/de.json";
import imprintDe from "../content/imprint/de.json";

import guideFr from "../content/guide/fr.json";
import homeFr from "../content/home/fr.json";
import imprintFr from "../content/imprint/fr.json";

import guideEn from "../content/guide/en.json";
import homeEn from "../content/home/en.json";
import imprintEn from "../content/imprint/en.json";

import rosetta from "rosetta";
import { i18n as config } from "../../i18n-config";

const translations = {
  de: {
    ...guideDe,
    ...homeDe,
    ...imprintDe,
  },
  en: {
    ...guideEn,
    ...homeEn,
    ...imprintEn,
  },
  fr: {
    ...guideFr,
    ...homeFr,
    ...imprintFr,
  },
};
const locales = config.locales;

export async function generateGenericMetadata(props) {
  const { language, title, description, domain, shareImg, path } = props;
  const i18n = rosetta();
  i18n.set(language, translations[language]);
  i18n.locale(language);

  // From Layout component
  const titl = (title && i18n.t(title)) || title || undefined;
  const descr =
    (description &&
      i18n.t(description) &&
      i18n.t(description).replace("/&shy;/g", "")) ||
    description ||
    undefined;
  const image =
    shareImg || "https://mapset." + domain + "/img/screens_perspective.png";
  const canonicalPath = "/" + language + path;
  const alternatesLanguage = {};

  locales.forEach((locale) => {
    alternatesLanguage[locale] = "/" + locale + path;
  });

  const md = {
    title: titl,
    description: descr,
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    },
    //   generator: 'Next.js',
    applicationName: "mapset." + domain,
    // referrer: 'origin-when-cross-origin',
    // keywords: ['Next.js', 'React', 'JavaScript'],
    // authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
    // colorScheme: 'dark',
    // creator: 'Jiachi Liu',
    // publisher: 'Sebastian Markbåge',
    // formatDetection: {
    //   email: false,
    //   address: false,
    //   telephone: false,
    // },
    metadataBase: new URL("https://mapset." + domain),
    alternates: {
      canonical: canonicalPath,
      languages: alternatesLanguage,
    },
    openGraph: {
      title: titl,
      description: descr,
      url: canonicalPath,
      siteName: "mapset." + domain,
      images: image,
      locale: language,
      type: "website",
    },
  };
  return md;
}

export default generateGenericMetadata;
