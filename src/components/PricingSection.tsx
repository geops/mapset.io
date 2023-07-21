import CheckIcon from "./CheckIcon";
import { useI18n } from "./I18n";
import Price from "./Price";
import ButtonBlue from "./ui/ButtonBlue";
import H2 from "./ui/H2";
import H3 from "./ui/H3";
import H4 from "./ui/H4";
import H5 from "./ui/H5";

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
  const trClassName = "even:bg-white odd:bg-blue-lighter";
  const firstColumnClassName = "text-left text-blue-darker";
  const tdClassName = "text-center p-6";
  return (
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
            <th className={firstColumnClassName}>{t("pricing.stops")}</th>
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
            </th>
            {products.map((product, idx) => {
              return (
                <td key={product.tier} className={tdClassName}>
                  <Price>{t(`pricing.products.${idx}.price.${domain}`)}</Price>{" "}
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
            <th className={firstColumnClassName}>{t("pricing.onetime")}</th>
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
  );
}

export default PricingSection;
