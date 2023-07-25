import H2 from "./ui/H2";
import H3 from "./ui/H3";
import { useI18n } from "./I18n";
import { Remarkable } from "remarkable";
import translations from "@/content/license/de.json";

const md = new Remarkable();
md.set({
  html: true,
  breaks: true,
});

function License() {
  // @ts-ignore
  const { t } = useI18n();

  return (
    <div className="flex flex-col gap-6 pt-24">
      <H2 className="text-blue">{t("generic.Lizenz")}</H2>
      {translations.license.map(({ heading, text }, id) => {
        return (
          <div key={id}>
            <H3 className="text-blue">
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
