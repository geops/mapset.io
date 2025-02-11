import React from "react";
import { useI18n } from "./I18n";
import Price from "./Price";
import CheckIcon from "./images/CheckIcon";
import { inter } from "./PricingSection";

interface ListItemProps {
  title: string;
  content?: string;
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const Cross = () => (
  <div className="w-[29px]">
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-1.5 ml-1"
    >
      <path
        d="M18.5089 2.952L12.3649 9.064L18.5089 15.208L15.6609 18.056L9.51688 11.912L3.34088 18.056L0.524875 15.208L6.66888 9.064L0.524875 2.952L3.37288 0.103998L9.51688 6.216L15.6289 0.103998L18.5089 2.952Z"
        fill="#126392"
      />
    </svg>
  </div>
);

const fontInterGray = `text-gray text-sm font-semibold ${inter.className}`;

export const ListItem = (props: ListItemProps) => {
  const { title, content, children, className, icon } = props;
  return (
    <li className={`pt-4 flex gap-2 ${className || ""}`}>
      <div className="basis-1/8">{icon || <CheckIcon />}</div>
      <div className="mt-1.5 basis-7/8">
        <div className="font-semibold text-blue-500 text-lg leading-6">
          {title}
        </div>
        {content && <p className={fontInterGray}>{content}</p>}
        {children}
      </div>
    </li>
  );
};

interface Props {
  product: string;
  price: number;
  basemap: string;
  tools: string;
  planExport: string;
  embed: string;
  busTramStopsCount: string;
  railwayStopsCount?: string;
  isAnnualBilling: boolean;
}

function PriceCard(props: Props) {
  const { t } = useI18n();
  const {
    product,
    price,
    basemap,
    tools,
    planExport,
    embed,
    busTramStopsCount,
    railwayStopsCount,
    isAnnualBilling,
  } = props;

  return (
    <td className="w-full min-w-[262px] border-[3px] rounded-2xl bg-white p-3 font-hero flex flex-col">
      <div className="flex flex-col items-center align-center justify-center gap-6">
        <p
          className={`w-[min-content] text-blue-700 border border-[#8FCCFE] py-0.5 px-3 rounded-full bg-[#F1F9FE] mb-3 text-sm font-medium ${inter.className}`}
        >
          {product}
        </p>
        <p className="font-extrabold text-[56px] text-blue-700">{price}</p>
        <p
          className={`text-sm font-semibold text-gray mt-[-14px] ${inter.className}`}
        >
          <Price>
            {t(`pricing.${isAnnualBilling ? "per_year" : "per_month"}`)}
          </Price>
        </p>
      </div>
      <ul>
        <ListItem title={t("pricing.basemap")} content={basemap} />
        <ListItem title={t("pricing.tools")} content={tools} />
        <ListItem title={t("pricing.plan_export")} content={planExport} />
        <ListItem title={t("pricing.embed")} content={embed} />
        <ListItem title={`${busTramStopsCount}*`} />
        <ListItem
          title={`${
            railwayStopsCount || t("pricing.railway_stops_unavailable")
          }*`}
          icon={!railwayStopsCount && <Cross />}
        />
      </ul>
    </td>
  );
}

export default PriceCard;
