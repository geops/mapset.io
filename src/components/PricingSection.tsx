import { useState } from "react";
import ArrowDownIcon from "./images/ArrowDownIcon";
import CheckIcon from "./images/CheckIcon";
import { useI18n } from "./I18n";
import Price from "./Price";
import ButtonBlue from "./ui/ButtonBlue";
import H3 from "./ui/H3";
import ButtonWhite from "./ui/ButtonWhite";

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

function PricingSection({ products = [] }: { products: Product[] }) {
  const { t } = useI18n();
  const [open, setOpen] = useState();
  const trClassName = "even:bg-white odd:bg-blue-lighter";
  const firstColumnClassName = "text-left text-blue-darker px-4";
  const tdClassName = "text-center p-6";
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full min-w[800px]">
          <thead>
            <tr>
              <th></th>
              {products.map((product, idx) => {
                return (
                  <th key={product.tier} className="py-6">
                    <H3 className="text-blue text-3xl">
                      {t(`pricing.products.${idx}.tier`)}
                    </H3>
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
                    <span className="text-gray"> / {t("pricing.year")}</span>
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
                    <span className="text-gray">/ {t("pricing.year")}</span>
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
                      <ButtonBlue>{t("home.get_started")}</ButtonBlue>
                    </div>
                  </td>
                );
              })}
            </tr>
          </tfoot>
        </table>
      </div>
      <div>
        <ButtonWhite
          className="border-none !px-4 text-blue-darker capitalize"
          onClick={() => setOpen(!open)}
        >
          <ArrowDownIcon
            className={`transition-rotate ${open ? "rotate-0" : "-rotate-90"}`}
          />
          <p>
            {t("pricing.details")}
            <span className="text-blue">*/**</span>
          </p>
        </ButtonWhite>
        <div hidden={!open} className="text-gray px-4">
          <p>
            <span className="text-blue">* </span>
            {t("pricing.details_one")}
          </p>
          <br />
          <p>
            <span className="text-blue">** </span>
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
