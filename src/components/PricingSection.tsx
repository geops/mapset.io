import { useEffect, useRef, useState } from "react";
import ArrowDownIcon from "./images/ArrowDownIcon";
import CheckIcon from "./images/CheckIcon";
import { useI18n } from "./I18n";
import Price from "./Price";
import ButtonBlue from "./ui/ButtonBlue";
import Button from "./ui/Button";

export type Product = {
  tier: string;
  stops: string;
  railway_stations: string;
  price: {
    ch: string;
    io: string;
  };
  price_addon: {
    ch: string;
    io: string;
  };
  price_onetime: {
    ch: string;
    io: string;
  };
};
const domain = process.env.NEXT_PUBLIC_DOMAIN;

const trClassName = "even:bg-white odd:bg-blue-lighter";
const firstColumnClassName =
  "text-left text-sm text-blue-900 font-semibold leading-5 p-6";
const tdClassName =
  "text-center text-blue-900 text-sm font-normal leading-5 px-2 py-6";

function PricingSection({ products = [] }: { products: Product[] }) {
  const { t } = useI18n();
  const [open, setOpen] = useState<boolean>(false);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);
  const scrollElt = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node: HTMLDivElement | null = scrollElt.current;

    if (!node) {
      return;
    }

    function onScroll() {
      if (!node) {
        return;
      }
      const target = node;
      const targetRect = target.getBoundingClientRect();
      const firstChildRect = (
        target.firstChild as HTMLDivElement
      ).getBoundingClientRect();
      setCanScrollLeft(targetRect.left > Math.floor(firstChildRect.left));
      setCanScrollRight(targetRect.right < Math.floor(firstChildRect.right));
    }

    node.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    return () => {
      node.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [scrollElt]);

  return (
    <>
      <div className="relative w-full">
        <div ref={scrollElt} className="w-full overflow-x-auto mb-5">
          <table className="w-full min-w[800px]">
            <thead>
              <tr>
                <th></th>
                {products.map((product, idx) => {
                  return (
                    <th
                      key={product.tier}
                      className="pb-6 uppercase font-hero text-blue-600 text-3xl font-bold -tracking-[0.64px] leading-[60px]"
                    >
                      {t(`pricing.products.${idx}.tier`)}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              <tr className={trClassName}>
                <th className={firstColumnClassName}>
                  {t("pricing.mapset_features")}
                </th>
                {products.map((product) => {
                  return (
                    <td key={product.tier} className={tdClassName}>
                      <div className="flex items-center justify-center w-full">
                        <CheckIcon />
                      </div>
                    </td>
                  );
                })}
              </tr>
              <tr className={trClassName}>
                <th className={firstColumnClassName}>
                  {t("pricing.stops")}
                  <span className="text-blue">*</span>
                </th>
                {products.map((product, idx) => {
                  return (
                    <td key={product.tier} className={tdClassName}>
                      {t(`pricing.products.${idx}.stops`)}
                    </td>
                  );
                })}
              </tr>
              <tr className={trClassName}>
                <th className={firstColumnClassName}>
                  {t("pricing.railway_stations")}
                  <span className="text-blue">**</span>
                </th>
                {products.map((product, idx) => {
                  return (
                    <td key={product.tier} className={tdClassName}>
                      <Price>
                        {t(`pricing.products.${idx}.price.${domain}`)}
                      </Price>{" "}
                      <span className="text-slate-400">
                        {" "}
                        / {t("pricing.year")}
                      </span>
                    </td>
                  );
                })}
              </tr>
              <tr className={trClassName}>
                <th className={firstColumnClassName}>{t("pricing.addon")}</th>
                {products.map((product, idx) => {
                  return (
                    <td key={product.tier} className={tdClassName}>
                      <Price>
                        {t(`pricing.products.${idx}.price_addon.${domain}`)}
                      </Price>{" "}
                      <span className="text-slate-400">
                        / {t("pricing.year")}
                      </span>
                    </td>
                  );
                })}
              </tr>
              <tr className={trClassName}>
                <th className={firstColumnClassName}>
                  {t("pricing.onetime")}
                  <span className="text-blue">**</span>
                </th>
                {products.map((product, idx) => {
                  return (
                    <td key={product.tier} className={tdClassName}>
                      <Price>
                        {t(`pricing.products.${idx}.price_onetime.${domain}`)}
                      </Price>
                    </td>
                  );
                })}
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                {products.map((product) => {
                  return (
                    <td key={product.tier} className={tdClassName}>
                      <div className="flex items-center justify-center w-full">
                        <ButtonBlue
                          href={`#contact`}
                          className="!text-[14px] !font-semibold"
                        >
                          {t("home.get_started")}
                        </ButtonBlue>
                      </div>
                    </td>
                  );
                })}
              </tr>
            </tfoot>
          </table>
        </div>
        <div
          hidden={!canScrollLeft}
          className="absolute left-0 top-0 bottom-0 w-[75px] h-full bg-gradient-to-l from-transparent to-white"
        ></div>
        <div
          hidden={!canScrollRight}
          className="absolute right-0 top-0 bottom-0 w-[75px] h-full bg-gradient-to-r from-transparent to-white"
        ></div>
      </div>
      <div>
        <Button
          className="flex items-center gap-2 px-4 py-2 pl-0 text-blue-900 text-sm font-bold capitalize leading-[160%]"
          onClick={() => setOpen(!open)}
        >
          <ArrowDownIcon
            className={`transition-rotate ${open ? "rotate-0" : "-rotate-90"}`}
          />
          {t("pricing.details")}
          <span className="text-blue-600">*/**</span>
        </Button>
        <div
          hidden={!open}
          className="text-slate-500 text-sm font-normal leading-[160%]"
        >
          <p>
            <span className="text-blue-600">* </span>
            {t("pricing.details_one")}
          </p>
          <br />
          <p>
            <span className="text-blue-600">** </span>
            <span
              dangerouslySetInnerHTML={{
                __html: t("pricing.details_two." + domain),
              }}
            ></span>
          </p>
        </div>
      </div>
    </>
  );
}

export default PricingSection;
