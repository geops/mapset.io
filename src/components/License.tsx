import H2 from "./ui/H2";
import H3 from "./ui/H3";
import { useI18n } from "./I18n";
import { Remarkable } from "remarkable";
import translations from "@/content/imprint/de.json";

const md = new Remarkable();
md.set({
  html: true,
  breaks: true,
});

function License() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col gap-6">
      <H2>{t("license.title")}</H2>
      {translations.license.sections.map(({ heading, text }, id) => {
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
