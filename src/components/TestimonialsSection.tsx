import { useCallback, useMemo, useState } from "react";
import translations from "@/content/index/de.json";
import ArrowLeftIcon from "./ArrowLeftIcon";
import ArrowRightIcon from "./images/ArrowRightIcon";
import IconButtonWhite from "./ui/IconButtonWhite";
import H4 from "./ui/H4";
import OurCustomer from "./images/OurCustomerImage";
import { useI18n } from "./I18n";

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

  return (
    <div className={`flex justify-between overflow-hidden gap-12 ${className}`}>
      <div className="flex flex-col gap-6 lg:max-w-[50%] text-darker">
        {items.map((item, idx) => {
          const isUnselected = selected !== idx;
          return (
            <div key={item.name} hidden={isUnselected}>
              <H4 className="normal-case leading-normal font-medium text-3xl">
                “{t("testimonials.customers." + idx + ".testimonial")}“
              </H4>
            </div>
          );
        })}
        <div className="flex gap-2 justify-between">
          <div className="flex flex-col gap-1 ">
            <p className="text-darker font-semibold text-lg">
              {t("testimonials.customers." + selected + ".name")}
            </p>
            <p className="text-gray">
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
        <OurCustomer />
      </div>
    </div>
  );
}

export default TestimonialsSection;
