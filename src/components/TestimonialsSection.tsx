import { useCallback, useMemo, useState } from "react";
import translations from "@/content/home/de.json";
import ArrowLeftIcon from "./images/ArrowLeftIcon";
import ArrowRightIcon from "./images/ArrowRightIcon";
import IconButtonWhite from "./ui/IconButtonWhite";
import OurCustomer from "./images/OurCustomerImage";
import { useI18n } from "./I18n";
import Image from "next/image";

export type CustomerTestimonial = {
  name: string;
  job: string;
  testimonial: string;
};

function TestimonialsSection({ className = "" }: { className?: string }) {
  const { t } = useI18n();
  // @ts-ignore
  const items: CustomerTestimonial[] = translations.testimonials.customers;
  const [selected, setSelected] = useState(0);

  const isFirst = useMemo(() => {
    return selected === 0;
  }, [selected]);

  const isLast = useMemo(() => {
    return selected === items.length - 1;
  }, [items.length, selected]);

  const previous = useCallback(() => {
    setSelected(selected - 1);
  }, [selected]);

  const next = useCallback(() => {
    setSelected(selected + 1);
  }, [selected]);
  
  const image = useMemo(() => {
    const src = t("testimonials.customers." + selected + ".image");
    const hasUserImage =
      src[0] !== "testimonials.customers." + selected + ".image";
    return (
      <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]">
        {hasUserImage ? (
          <Image
            src={`/img/${src}`}
            alt={
              (t("testimonials.customers." + selected + ".name"),
              t("testimonials.customers." + selected + ".job"))
            }
            // width={parseFloat(
            //   t("testimonials.customers." + selected + ".image_width"),
            // )}
            // height={parseFloat(
            //   t("testimonials.customers." + selected + ".image_height"),
            // )}
            width={"400"}
            height={"400"}
            className="h-full object-cover rounded-full animate-fade-in"
          />
        ) : (
          <OurCustomer className="w-full h-full animate-fade-in" />
        )}
      </div>
    );
  }, [selected, t]);

  return (
    <>
    <div className={`flex justify-between overflow-hidden gap-12 ${className}`}>
      <div className="flex flex-col gap-6 lg:max-w-[45%] text-darker justify-center">
        <div className="flex lg:hidden items-center justify-center">
          {image}
        </div>
        {items.map((item, idx) => {
          const isUnselected = selected !== idx;
          return (
            <div key={item.name} className={`flex flex-col gap-5 md:h-[300px] h-[250px]${isUnselected ? " hidden" : ""}`}>
              <p
                className="font-hero text-xs text-blue-900 font-medium -tracking-[0.64px] leading-normal"
                style={{ fontSize: "clamp(1rem, 1vw + 0.75rem, 1.25rem)" }}
              >
                “{t("testimonials.customers." + idx + ".testimonial")}”
              </p>
              <div className="flex flex-col">
                <p className="text-blue-900 font-semibold">
                  {t("testimonials.customers." + selected + ".name")}
                </p>
                <p className="text-slate-500">
                  {t("testimonials.customers." + selected + ".job")}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="hidden lg:flex flex-1 px-10">
        {image}
      </div>
    </div>
    <div className="flex gap-2 sm:justify-start justify-center">
    {items.length > 1 ? (
      <div className="flex gap-6">
        <IconButtonWhite disabled={isFirst} onClick={previous}>
          <ArrowLeftIcon></ArrowLeftIcon>
        </IconButtonWhite>{" "}
        <IconButtonWhite disabled={isLast} onClick={next}>
          <ArrowRightIcon></ArrowRightIcon>
        </IconButtonWhite>
      </div>
    ) : null}
  </div>
    </>
  );
}

export default TestimonialsSection;
