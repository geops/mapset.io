import { useI18n } from "./I18n";
import { useState } from "react";
import Image from "next/image";
import H5 from "./ui/H5";
import translations from "@/content/index/de.json";

export type MapsetFeature = {
  title: string;
  content: string;
};

function FeaturesSection({
  className = "",
  reverse = false,
  prefix = "list",
}: {
  prefix: string;
  className?: string;
  reverse?: boolean;
}) {
  // @ts-ignore
  const features: MapsetFeature[] = translations.features[prefix];
  // @ts-ignore
  const { t } = useI18n();
  const [featureSelected, setFeatureSelected] = useState(features[0]);
  const imgSrc = reverse
    ? "/img/mac-book-pro-16-left.png"
    : "/img/mac-book-pro-16.png";

  return (
    <div
      className={`flex justify-between overflow-hidden items-center gap-12 ${
        reverse ? "flex-row-reverse" : ""
      } ${className}`}
    >
      <div className="flex flex-col pt-6 md:max-w-[50%]">
        {features.map((feature, idx) => {
          const isUnselected = featureSelected.title !== feature.title;

          return (
            <button
              key={feature.title}
              className={
                "px-6 py-4 border-l-4  text-left " +
                (isUnselected ? "border-gray-light" : "border-blue")
              }
              onClick={() => {
                setFeatureSelected(feature);
              }}
            >
              <H5
                className={"pb-2 " + (isUnselected ? "text-gray" : "text-blue")}
              >
                {t(`features.${prefix}.${idx}.title`)}
              </H5>
              <div className={isUnselected ? "text-gray" : ""}>
                {t(`features.${prefix}.${idx}.content`)}
              </div>
            </button>
          );
        })}
      </div>
      <div className="hidden md:block">
        <Image
          src={imgSrc}
          width="679"
          height="557"
          alt={"mac"}
          className="h-[100%] w-[800px]"
        ></Image>
      </div>
    </div>
  );
}

export default FeaturesSection;
