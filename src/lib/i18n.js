import rosetta from "rosetta";

import benefitsDe from "../content/benefits/de.json";
import guideDe from "../content/guide/de.json";
import indexDe from "../content/index/de.json";
import licenseDe from "../content/license/de.json";
import pricesDe from "../content/license/de.json";
import imprintDe from "../content/imprint/de.json";

import benefitsFr from "../content/benefits/fr.json";
import guideFr from "../content/guide/fr.json";
import indexFr from "../content/index/fr.json";
import licenseFr from "../content/license/fr.json";
import pricesFr from "../content/license/fr.json";
import imprintFr from "../content/imprint/fr.json";

import benefitsEn from "../content/benefits/en.json";
import guideEn from "../content/guide/en.json";
import indexEn from "../content/index/en.json";
import licenseEn from "../content/license/en.json";
import pricesEn from "../content/license/en.json";
import imprintEn from "../content/imprint/en.json";

const i18n = rosetta();

i18n.set("de", {
  ...benefitsDe,
  ...guideDe,
  ...indexDe,
  ...licenseDe,
  ...pricesDe,
  ...imprintDe,
});
i18n.set("en", {
  ...benefitsEn,
  ...guideEn,
  ...indexEn,
  ...licenseEn,
  ...pricesEn,
  ...imprintFr,
});
i18n.set("fr", {
  ...benefitsFr,
  ...guideFr,
  ...indexFr,
  ...licenseFr,
  ...pricesFr,
  ...imprintEn,
});

export default i18n;
