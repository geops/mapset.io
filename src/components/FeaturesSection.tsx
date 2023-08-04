/* eslint-disable jsx-a11y/alt-text */
import React, { useMemo } from "react";
import { useI18n } from "./I18n";
import { useState } from "react";
import H5 from "./ui/H5";
import translations from "@/content/home/de.json";
import ArrowDownIcon2 from "./images/ArrowDownIcon2";
import MacFull from "./ui/MacFull";
import Image from "next/image";
import { onClickSmoothScroll } from "./NavLinks";

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
  const [selectedIndex, setSelectedIndex] = useState(indexStart);
  const [selected, setSelected] = useState(features[indexStart]);

  const featureImg = useMemo(() => {
    let src = t(`features.list.${selectedIndex}.image`);
    if (src[0] === `features.list.${selectedIndex}.image`) {
      src = "";
    }
    return (
      <MacFull>
        {src && (
          <Image
            src={t(`features.list.${selectedIndex}.image`)}
            alt={t(`features.list.${selectedIndex}.title`)}
            width={parseFloat(t(`features.list.${selectedIndex}.image_width`))}
            height={parseFloat(
              t(`features.list.${selectedIndex}.image_height`),
            )}
            className="h-full w-full object-cover rounded-xl animate-fade-in"
          ></Image>
        )}
      </MacFull>
    );
  }, [selectedIndex, t]);

  return (
    <div
      className={`flex justify-between items-center gap-12 ${
        reverse ? "flex-row-reverse" : ""
      } ${className}`}
    >
      <div className="flex flex-col pt-6 lg:max-w-[50%] divide-y divide-blue-lighte md:divide-x-4 md:divide-y-0 md:divide-gray-light">
        {features.map((feature, idx) => {
          if (indexStart > idx || idx >= indexEnd) {
            return null;
          }

          const isUnselected = selected.title !== feature.title;

          return (
            <React.Fragment key={feature.title}>
              <button
                key={feature.title}
                id={"feature" + idx}
                className={
                  "flex flex-col gap-6 px-6 py-6 md:border-l-4  text-left " +
                  (isUnselected
                    ? "md:border-gray-light"
                    : "bg-blue-lighter md:!border-blue-600")
                }
                onClick={(evt) => {
                  setSelected(feature);
                  setSelectedIndex(idx);
                  window.setTimeout(() => {
                    onClickSmoothScroll({
                      // @ts-ignore
                      target: document.getElementById("feature" + idx),
                      preventDefault: evt.preventDefault,
                      stopPropagation: evt.stopPropagation,
                    });
                  }, 100);
                }}
              >
                <H5
                  className={
                    "flex justify-between items-center w-full !pb-0 " +
                    (isUnselected ? "text-gray" : "text-blue")
                  }
                >
                  {t(`features.list.${idx}.title`)}
                  <div
                    className={`bg-blue-600 flex items-center justify-center rounded-full transition-rotate min-w-[32px] w-8 min-h-[32px] h-8`}
                  >
                    <ArrowDownIcon2
                      className={isUnselected ? "rotate-0" : "rotate-180"}
                    />
                  </div>
                </H5>
                <div
                  className={`${
                    isUnselected ? "hidden" : "flex"
                  } flex-col gap-6 transition-[max-height] max-h-[1000px] overflow-hidden `}
                  style={
                    {
                      // maxHeight: isUnselected ? "0px" : "1000px",
                    }
                  }
                >
                  {!isUnselected && (
                    <div className={`relative flex lg:hidden justify-center `}>
                      {featureImg}
                    </div>
                  )}
                  <p
                    className={
                      isUnselected ? "hidden text-gray" : "text-blue-900"
                    }
                  >
                    {t(`features.list.${idx}.content`)}
                  </p>
                </div>
              </button>
            </React.Fragment>
          );
        })}
      </div>
      {reverse ? (
        // 4733 * 2741
        <div className={`relative hidden lg:flex min-w-[40%] h-[557px]`}>
          <div className={`absolute -right-[10%] w-[941px] h-[557px]`}>
            {featureImg}
          </div>
        </div>
      ) : (
        <div className={`relative hidden lg:flex min-w-[40%] h-[557px]`}>
          <div className={`absolute -left-[10%] w-[941px] h-[557px]`}>
            {featureImg}
          </div>
        </div>
      )}
    </div>
  );
}

export default FeaturesSection;
