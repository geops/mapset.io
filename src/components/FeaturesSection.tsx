import { useI18n } from "./I18n";
import { useState } from "react";
import Image from "next/image";
import H5 from "./ui/H5";
import translations from "@/content/index/de.json";
import ArrowDownIcon2 from "./images/ArrowDownIcon2";

export type MapsetFeature = {
  title: string;
  content: string;
};

function FeaturesSection({
  className = "",
  reverse = false,
  indexStart = 0,
  indexEnd = translations.features.list.length,
}: {
  indexStart?: number;
  indexEnd?: number;
  className?: string;
  reverse?: boolean;
}) {
  // @ts-ignore
  const features: MapsetFeature[] = translations.features.list;
  const { t } = useI18n();
  const [selected, setSelected] = useState(features[indexStart]);
  const imgSrc = reverse
    ? "/img/mac-book-pro-16-left.png"
    : "/img/mac-book-pro-16-right.png";
  const macFull = "/img/mac-book-pro-16.png";

  return (
    <div
      className={`flex justify-between overflow-hidden items-center gap-12 ${
        reverse ? "flex-row-reverse" : ""
      } ${className}`}
    >
      <div className="flex flex-col pt-6 md:max-w-[50%] divide-y divide-blue-lighte md:divide-x-4 md:divide-y-0 md:divide-gray-light">
        {features.map((feature, idx) => {
          if (indexStart > idx || idx >= indexEnd) {
            return null;
          }

          const isUnselected = selected.title !== feature.title;

          return (
            <>
              <button
                key={feature.title}
                className={
                  "px-6 py-4 md:border-l-4  text-left " +
                  (isUnselected
                    ? "md:border-gray-light"
                    : "bg-blue-lighter md:!border-blue-600")
                }
                onClick={() => {
                  setSelected(feature);
                }}
              >
                <H5
                  className={
                    "flex justify-between items-center pb-2 " +
                    (isUnselected ? "text-gray" : "text-blue")
                  }
                >
                  {t(`features.list.${idx}.title`)}
                  <div
                    className={`bg-blue-600 flex items-center justify-center rounded-full transition-rotate ${
                      isUnselected ? "rotate-0" : "rotate-180"
                    } min-w-[32px] w-8 min-h-[32px] h-8`}
                  >
                    <ArrowDownIcon2 />
                  </div>
                </H5>

                <div
                  className={`py-6 ${
                    isUnselected ? "hidden" : "flex justify-center md:hidden"
                  }`}
                >
                  <Image
                    src={macFull}
                    width="375"
                    height="239"
                    alt={"mac"}
                    className="w-[400px]"
                  ></Image>
                </div>
                <p
                  className={
                    isUnselected ? "hidden text-gray" : "text-blue-900"
                  }
                >
                  {t(`features.list.${idx}.content`)}
                </p>
              </button>
            </>
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
