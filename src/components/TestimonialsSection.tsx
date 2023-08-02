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

const pClamp = "clamp(1.125rem, 3vw + 0.37rem, 2rem)";

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
      <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
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
    <div className={`flex justify-between overflow-hidden gap-12 ${className}`}>
      <div className="flex flex-col gap-6 lg:max-w-[50%] text-darker justify-center">
        <div className="flex lg:hidden items-center justify-center">
          {image}
        </div>
        {items.map((item, idx) => {
          const isUnselected = selected !== idx;
          return (
            <p
              key={item.name}
              hidden={isUnselected}
              className="font-hero text-3xl text-blue-900 font-medium -tracking-[0.64px] leading-normal"
              style={{ fontSize: pClamp }}
            >
              “{t("testimonials.customers." + idx + ".testimonial")}”
            </p>
          );
        })}
        <div className="flex gap-2 justify-between">
          <div className="flex flex-col gap-1 ">
            <p className="text-lg text-blue-900 font-semibold leading-7">
              {t("testimonials.customers." + selected + ".name")}
            </p>
            <p className="text-slate-500">
              {t("testimonials.customers." + selected + ".job")}
            </p>
          </div>
          <div className="flex gap-6">
            <IconButtonWhite disabled={isFirst} onClick={previous}>
              <ArrowLeftIcon></ArrowLeftIcon>
            </IconButtonWhite>{" "}
            <IconButtonWhite disabled={isLast} onClick={next}>
              <ArrowRightIcon></ArrowRightIcon>
            </IconButtonWhite>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-1 items-center justify-center">
        {image}
      </div>
    </div>
  );
}

export default TestimonialsSection;
