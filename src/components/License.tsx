import H2 from "./ui/H2";
import H3 from "./ui/H3";
import { useI18n } from "./I18n";
import { Remarkable } from "remarkable";
import de from "@/content/imprint/de.json";
import en from "@/content/imprint/en.json";
import fr from "@/content/imprint/fr.json";;

const md = new Remarkable();
md.set({
  html: true,
  breaks: true,
});

const translations = { de, en, fr };

function License() {
  const { t, language } = useI18n();  

  return (
    <div className="flex flex-col gap-6">
      <H2>{t("license.title")}</H2>
      {translations[language].license.sections.map(({ heading, text }, id) => {
        return (
          <div key={id}>
            <H3>
              <span
                dangerouslySetInnerHTML={{
                  __html: md.render(heading),
                }}
              />
            </H3>
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: md.render(text),
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}

export default License;
