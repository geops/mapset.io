import { useI18n } from "./I18n";
import { useState } from "react";
import H5 from "./ui/H5";
import translations from "@/content/home/de.json";
import ArrowDownIcon2 from "./images/ArrowDownIcon2";
import MacLeftToRight from "./ui/MacLeftToRight";
import MacRightToLeft from "./ui/MacRightToLeft";
import MacFull from "./ui/MacFull";
import Image from "next/image";

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

  return (
    <div
      className={`flex justify-between items-center gap-12 ${
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
                  setSelectedIndex(idx);
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
                    className={`bg-blue-600 flex items-center justify-center rounded-full transition-rotate min-w-[32px] w-8 min-h-[32px] h-8`}
                  >
                    <ArrowDownIcon2
                      className={isUnselected ? "rotate-0" : "rotate-180"}
                    />
                  </div>
                </H5>
                {!isUnselected && (
                  <div
                    className={`relative flex md:hidden justify-center py-12 h-[300px]`}
                  >
                    <MacFull>
                      <Image
                        alt="feature"
                        src={t(`features.list.${selectedIndex}.image`)}
                        // width={parseFloat(t(`features.list.${selectedIndex}.image_width`))}
                        // height={parseFloat(
                        //   t(`features.list.${selectedIndex}.image_height`),
                        // )}
                        width={parseFloat(
                          t(`features.list.${selectedIndex}.image_width`),
                        )}
                        height={parseFloat(
                          t(`features.list.${selectedIndex}.image_height`),
                        )}
                        className="h-full w-full object-cover"
                      ></Image>
                    </MacFull>
                  </div>
                )}
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
      {reverse ? (
        // <MacLeftToRight
        //   className="hidden md:block"
        //   src={t(`features.list.${selectedIndex}.image`)}
        //   width={t(`features.list.${selectedIndex}.image_width`)}
        //   height={t(`features.list.${selectedIndex}.image_height`)}
        // ></MacLeftToRight>

        // 4733 * 2741
        <div className={`relative hidden md:flex min-w-[40%] h-[557px]`}>
          <div className={`absolute -right-[10%] w-[941px] h-[557px]`}>
            <MacFull>
              <Image
                alt="feature"
                src={t(`features.list.${selectedIndex}.image`)}
                // width={parseFloat(t(`features.list.${selectedIndex}.image_width`))}
                // height={parseFloat(
                //   t(`features.list.${selectedIndex}.image_height`),
                // )}
                width={parseFloat(
                  t(`features.list.${selectedIndex}.image_width`),
                )}
                height={parseFloat(
                  t(`features.list.${selectedIndex}.image_height`),
                )}
                className="h-full w-full object-cover"
              ></Image>
            </MacFull>
          </div>
        </div>
      ) : (
        // <MacRightToLeft
        //   className="hidden md:block"
        //   src={t(`features.list.${selectedIndex}.image`)}
        //   width={t(`features.list.${selectedIndex}.image_width`)}
        //   height={t(`features.list.${selectedIndex}.image_height`)}
        // ></MacRightToLeft>
        <div className={`relative hidden md:flex min-w-[40%] h-[557px]`}>
          <div className={`absolute left-0 w-[941px] h-[557px]`}>
            <MacFull>
              <Image
                alt="feature"
                src={t(`features.list.${selectedIndex}.image`)}
                // width={parseFloat(t(`features.list.${selectedIndex}.image_width`))}
                // height={parseFloat(
                //   t(`features.list.${selectedIndex}.image_height`),
                // )}
                width={parseFloat(
                  t(`features.list.${selectedIndex}.image_width`),
                )}
                height={parseFloat(
                  t(`features.list.${selectedIndex}.image_height`),
                )}
                className="h-full w-full object-cover"
              ></Image>
            </MacFull>
          </div>
        </div>

        // <MacFull
        //   className={`hidden md:block`}
        //   src={t(`features.list.${selectedIndex}.image`)}
        //   width={t(`features.list.${selectedIndex}.image_width`)}
        //   height={t(`features.list.${selectedIndex}.image_height`)}
        // ></MacFull>
      )}
    </div>
  );
}

export default FeaturesSection;
