import rosetta from "rosetta";

import guideDe from "../content/guide/de.json";
import homeDe from "../content/home/de.json";
import imprintDe from "../content/imprint/de.json";

import guideFr from "../content/guide/fr.json";
import homeFr from "../content/home/fr.json";
import imprintFr from "../content/imprint/fr.json";

import guideEn from "../content/guide/en.json";
import homeEn from "../content/home/en.json";
import imprintEn from "../content/imprint/en.json";

const i18n = rosetta();

i18n.set("de", {
  ...guideDe,
  ...homeDe,
  ...imprintDe,
});
i18n.set("en", {
  ...guideEn,
  ...homeEn,
  ...imprintEn,
});
i18n.set("fr", {
  ...guideFr,
  ...homeFr,
  ...imprintFr,
});

export default i18n;
