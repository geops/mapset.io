import { useEffect, useRef, useState } from "react";
import ArrowDownIcon from "./images/ArrowDownIcon";
import { Inter } from "next/font/google";
import { useI18n } from "./I18n";
import PriceCard, { ListItem } from "./PriceCard";
import ButtonBlue from "./ui/ButtonBlue";
import Button from "./ui/Button";
import H3 from "./ui/H3";
import { onClickSmoothScroll } from "./NavLinks";

export const inter = Inter({ subsets: ["latin"] });

export type Product = {
  tier: string;
  price: {
    month: number;
    year: number;
  };
  price_add_on: {
    month: number;
    year: number;
  };
  basemap: string;
  tools: string;
  plan_export: string;
  embed: string;
  bus_tram_stops: string;
  railway_stops?: string;
};

const domain = process.env.NEXT_PUBLIC_DOMAIN;

const trClassName = "even:bg-white odd:bg-blue-lighter flex gap-10 !bg-transparent";
const billingSwitcherBtnClassName = 
  "basis-1/2 h-16 rounded-none p-2 bg-blue-700 font-semibold hover:!bg-blue-800 text-white uppercase text-sm lg:text-base";

function AnnualPromo() {
  const { t } = useI18n();
  return (
    <div className="pointer-events-none">
      <svg className="absolute right-6 top-[-20px] sm:right-[-20px] sm:top-[-10px]" width="49" height="28" viewBox="0 0 49 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.631 17.8128C19.7374 17.6532 19.8163 17.4627 19.9554 17.339C20.619 16.7394 21.3653 16.2499 22.1327 15.7924C22.1995 15.7522 22.2676 15.7082 22.3416 15.691C23.0711 15.5172 23.6716 15.0699 24.3366 14.7606C24.7633 14.5641 25.0574 14.1729 25.5077 14.016C25.9082 13.8753 26.3099 13.7307 26.6943 13.5504C27.0083 13.4039 27.3011 13.2101 27.5939 13.0239C28.1191 12.6906 28.6355 12.3509 29.2746 12.2681C29.4583 12.2441 29.6392 12.1449 29.8084 12.0571C30.0482 11.933 30.2669 11.7615 30.5128 11.6565C32.7973 10.6941 35.077 9.7112 37.4649 9.02979C37.9494 8.89229 38.4387 8.77266 38.9255 8.65046C39.2705 8.56407 39.2705 8.56916 39.8305 8.80034C40.0236 8.63886 40.2071 8.43145 40.4367 8.30974C40.6713 8.18553 40.9472 8.1266 41.2103 8.07012C42.1925 7.85508 43.1783 7.65156 44.1642 7.44547C44.5435 7.36572 44.9252 7.30128 45.3008 7.20748C45.5666 7.14083 45.8444 7.03224 45.9774 6.78877C46.2017 6.38046 46.5721 6.20128 46.9665 6.03377C46.9934 6.02252 47.0274 5.95655 47.0174 5.94119C46.9812 5.88104 46.9375 5.81067 46.8792 5.78473C46.7741 5.73931 46.6558 5.72691 46.5441 5.70054L46.5439 5.7158C46.7993 5.46312 47.1176 5.37015 47.4647 5.32198C47.873 5.26665 48.297 5.27386 48.6715 5.06798C48.7126 5.04539 48.7177 4.94227 48.7211 4.87607C48.7227 4.84934 48.6813 4.80443 48.6508 4.79399C48.5811 4.76924 48.5061 4.75462 48.4323 4.74894C48.2453 4.73598 48.0568 4.73194 47.8684 4.72279C47.7034 4.77879 47.5384 4.83477 47.3734 4.89076L47.3745 4.89969C47.5395 4.84624 47.7058 4.79155 47.8721 4.73684C47.9804 4.63327 48.095 4.53357 48.1995 4.42615C48.4009 4.21634 48.4548 3.98241 48.3348 3.70508C48.2618 3.53765 48.2069 3.35254 48.1875 3.17026C48.1443 2.76235 48.1012 2.34936 48.1115 1.93934C48.118 1.62863 47.9367 1.46159 47.7519 1.27799L47.7516 1.29582C47.7333 1.13775 47.6959 0.973148 47.558 0.894356C47.4316 0.822023 47.2693 0.764685 47.1265 0.773733C46.6638 0.80697 46.2044 0.86954 45.7451 0.934644C45.6826 0.94306 45.5963 1.01496 45.5803 1.07342C45.5682 1.12045 45.6411 1.1949 45.685 1.25001C45.7076 1.27821 45.7636 1.28122 45.7811 1.30938C45.8198 1.36701 45.8799 1.44644 45.8628 1.49597C45.8442 1.55186 45.7581 1.61102 45.693 1.62196C45.4109 1.66938 45.1421 1.57808 44.9211 1.42985C44.6117 1.22233 44.282 1.20314 43.9281 1.18757C42.9149 1.14127 41.9225 1.25306 40.9386 1.50247C40.5642 1.59754 40.1836 1.68109 39.8009 1.72898C36.0132 2.21452 32.3761 3.26422 28.84 4.69298C27.7992 5.11387 26.7545 5.53092 25.7173 5.9633C24.4663 6.48695 23.276 7.1397 22.0708 7.76178C21.2451 8.18821 20.4181 8.61591 19.6012 9.05897C18.6136 9.59364 17.6347 10.1475 16.6534 10.6937C16.5213 10.7678 16.3867 10.8367 16.2738 10.897C16.1635 10.854 16.149 10.7928 16.2099 10.7131C16.6725 10.0914 17.144 9.47874 17.5965 8.84937C17.8221 8.53532 18.0174 8.20065 18.2153 7.86854C18.3364 7.66191 18.3738 7.42659 18.3117 7.19557C18.2206 6.85479 18.1982 6.51198 18.237 6.16204C18.2687 5.877 18.1609 5.6431 17.9687 5.42632C17.3861 4.76958 16.6512 4.37015 15.8188 4.1266C15.463 4.15815 15.2583 3.93108 15.0422 3.7001C14.8776 3.52175 14.6084 3.55655 14.429 3.74234C14.3748 3.79794 14.3067 3.84452 14.2689 3.90917C13.9122 4.52021 13.3929 4.99109 12.9114 5.49541C12.5357 5.88851 12.1815 6.2958 11.8714 6.74546C11.5639 7.19004 11.1907 7.59079 10.8781 8.03278C10.4539 8.63181 10.0576 9.25143 9.64857 9.86332C9.52001 10.0572 9.41159 10.269 9.25659 10.4384C8.91044 10.8152 8.66796 11.2539 8.44187 11.7042C8.24978 12.0861 8.00865 12.4153 7.68008 12.712C7.34123 13.0162 7.0915 13.4243 6.82557 13.803C6.22496 14.6579 5.64833 15.5295 5.03763 16.3767C4.83664 16.6565 4.57372 16.899 4.30977 17.1223C4.06771 17.3267 3.87643 17.5442 3.7377 17.8361C3.24441 18.865 2.54538 19.7484 1.6261 20.4224C1.08099 20.8205 0.655798 21.3024 0.284551 21.8496C0.266364 21.8775 0.255498 21.9309 0.270424 21.9591C0.305173 22.0307 0.377567 22.0453 0.457177 21.995C0.588152 21.9119 0.710389 21.8148 0.842587 21.7357C1.11852 21.571 1.38243 21.6521 1.5035 21.946C1.70987 22.4431 1.84715 22.9651 2.1034 23.446C2.21536 23.6558 2.30201 23.8526 2.51183 23.9791C2.5687 24.0139 2.62744 24.1023 2.62789 24.1672C2.62898 24.5812 2.83442 24.7497 3.22763 24.8776C3.65637 25.0161 4.02314 25.3208 4.47223 25.462C4.78177 25.5587 4.93196 25.8668 4.98394 26.1856C5.01594 26.3731 5.01851 26.5718 4.99699 26.7614C4.93443 27.2729 5.10382 27.6704 5.54338 27.9592C5.73126 27.9085 5.5887 27.8041 5.56671 27.7301C5.45071 27.3382 5.4997 27.0915 5.79592 26.9346C6.01775 26.818 6.20394 26.5979 6.49921 26.6155C6.44712 26.8049 6.39012 26.9814 6.36105 27.1633C6.35547 27.2015 6.45374 27.2863 6.5122 27.297C6.57955 27.309 6.66533 27.2728 6.72823 27.2338C7.0223 27.0464 7.34027 26.8833 7.59416 26.6497C7.98084 26.2911 8.49765 26.215 8.92635 25.9561C9.02006 25.8995 9.14765 25.8802 9.26101 25.8798C9.85197 25.882 10.411 25.7896 10.9235 25.4562C11.0724 25.3606 11.2983 25.3255 11.479 25.3447C12.2205 25.4233 12.9434 25.2711 13.6729 25.1929C14.2111 25.1361 14.7495 25.0639 15.2877 25.0122C15.5172 24.9886 15.7531 24.9714 15.9794 24.9986C16.1651 25.0205 16.3423 25.1136 16.516 25.1723C17.1768 24.6911 17.1961 24.6747 17.8661 24.5743C18.2476 24.5175 18.6341 24.476 19.0203 24.4523C20.5295 24.3651 22.0268 24.2013 23.5012 23.8437C24.2525 23.6612 25.0184 23.5298 25.7744 23.3677C25.9622 23.3272 26.1527 23.2739 26.3256 23.1951C26.4217 23.1513 26.5223 23.0553 26.5591 22.9588C26.6079 22.8306 26.4813 22.7684 26.3788 22.7179C26.3446 22.7011 26.3066 22.688 26.2763 22.6649C26.1249 22.5541 26.0965 22.3807 26.2187 22.2862C26.4039 22.145 26.5979 22.0153 26.7769 21.8678C27.0922 21.6066 27.2847 21.2923 27.2215 20.8563C27.2005 20.7083 27.2331 20.5507 27.2592 20.3993C27.2936 20.2022 27.2883 20.0162 27.2014 19.8346C27.1518 19.7298 27.0959 19.6236 27.0731 19.5127C26.9101 18.709 26.3022 18.3386 25.6057 18.2184C24.8839 18.0929 24.1688 17.9356 23.4469 17.8127C22.4048 17.6363 21.366 17.6878 20.3233 17.7585C20.0912 17.7744 19.8593 17.7879 19.6286 17.8026C19.5521 17.8045 19.4756 17.8141 19.3992 17.8084C19.375 17.8069 19.3552 17.766 19.3338 17.7416C19.4596 17.6662 19.5373 17.7662 19.631 17.8128ZM8.8427 14.4305C8.8427 14.4305 8.83124 14.4316 8.83253 14.4303L8.8427 14.4305ZM15.2474 13.9824L15.2484 13.9989C15.2471 14.0002 15.2474 13.9824 15.2474 13.9824ZM14.4197 14.4661C14.3814 14.4709 14.3419 14.4744 14.3049 14.4779C14.3431 14.4782 14.3813 14.4785 14.4208 14.4776C14.4465 14.4625 14.4709 14.4436 14.4978 14.4349C14.5183 14.4274 14.5436 14.4352 14.5666 14.4354C14.518 14.4478 14.4682 14.4563 14.4197 14.4661ZM19.7067 11.5714L19.7069 11.5587C19.6698 11.5647 19.6328 11.5708 19.5971 11.5756C19.6328 11.5733 19.6697 11.5724 19.7067 11.5714ZM18.0562 12.5542C18.0952 12.4933 18.1317 12.43 18.177 12.3755C18.1899 12.3604 18.2343 12.3697 18.2662 12.3686C18.2719 12.5215 18.1409 12.5039 18.0539 12.5389C17.8615 12.6418 17.6703 12.751 17.473 12.8463C17.3833 12.8889 17.2191 12.7831 17.2316 12.6953C17.2426 12.6317 17.2781 12.5492 17.3282 12.5178C17.5772 12.3618 17.8211 12.4122 18.0562 12.5542ZM14.0406 9.93535C14.1632 9.60646 14.4154 9.50786 14.6738 9.42077C14.7071 9.4083 14.767 9.40242 14.7795 9.42035C14.8222 9.47163 14.8811 9.53961 14.8753 9.59561C14.8416 9.94813 14.681 10.2512 14.4964 10.5503C14.2129 11.0066 13.8864 11.4421 13.7268 11.9681C13.6551 12.2019 13.4699 12.3405 13.2246 12.3996C13.0215 12.4477 12.9064 12.583 12.8515 12.7928C12.8247 12.8944 12.7481 13.0097 12.6608 13.0651C12.1716 13.3732 11.6749 13.666 11.177 13.96C11.1141 13.9965 11.0312 14.0047 10.956 14.013C10.9228 14.0178 10.8682 14.0034 10.8532 13.9804C10.8183 13.9215 10.7683 13.8447 10.7818 13.7887C10.8087 13.6794 10.8547 13.5639 10.9284 13.4817C11.4503 12.9051 11.8749 12.2679 12.1681 11.5455C12.2431 11.3615 12.3647 11.2147 12.5303 11.1077C12.9824 10.8159 13.2904 10.3357 13.8189 10.1399C13.9187 10.1051 13.9877 9.98714 14.0406 9.93535ZM16.2432 11.9984C16.3986 12.0022 16.5058 11.9827 16.5933 12.0127C16.7125 12.0518 16.7463 12.1973 16.679 12.2808C16.6104 12.3656 16.4648 12.4001 16.3869 12.318C16.324 12.2512 16.3051 12.1441 16.2432 11.9984ZM16.7462 13.2034C16.7509 13.2366 16.7695 13.2813 16.7552 13.3028C16.7045 13.3801 16.6305 13.3872 16.5651 13.323C16.5462 13.3063 16.5394 13.2476 16.5536 13.2261C16.6043 13.1513 16.6731 13.1468 16.7462 13.2034ZM47.0753 4.39549L47.0085 4.43573L47.0246 4.37217L47.0753 4.39549ZM18.8277 10.8855L18.7875 10.9425L18.7628 10.8787L18.8277 10.8855Z" fill="#84CC16"/>
        <path d="M15.4714 3.20424L15.4763 3.11642L15.4045 3.15404L15.4714 3.20424Z" fill="#84CC16"/>
        <path d="M13.5253 3.10082C13.5198 3.13134 13.504 3.1669 13.5139 3.19245C13.5213 3.20779 13.5734 3.21966 13.5939 3.20964C13.6772 3.16828 13.683 3.11227 13.6097 3.07093C13.5932 3.06188 13.5534 3.09086 13.5253 3.10082Z" fill="#84CC16"/>
      </svg>
      <span className="absolute rotate-[350deg] right-[-30px] top-[-45px] sm:rotate-[340deg] sm:top-[-10px] sm:right-[-95px] w-[max-content]" >{t("pricing.annual_promo")}</span>
    </div>
  )
}
function PricingSection({ products = [] }: { products: Product[] }) {
  const { t } = useI18n();
  const [open, setOpen] = useState<boolean>(false);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);
  const [isAnnualBilling, setIsAnnualBilling] = useState<boolean>(false);
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
      setCanScrollLeft(targetRect.left > Math.ceil(firstChildRect.left));
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
      <div className="relative w-[clamp(300px,40vw,500px)] mb-8 mx-auto bg-blue-700 rounded-full flex gap-0 items-center px-6 tracking-[.14px] leading-6 font-hero">
        <Button className={`${billingSwitcherBtnClassName} ml-2${!isAnnualBilling ? ' bg-blue-800' : ''}`} onClick={() => setIsAnnualBilling(false)}>
          {t("pricing.monthly_billing")}
        </Button>
        <Button className={`${billingSwitcherBtnClassName} mr-2${isAnnualBilling ? ' bg-blue-800' : ''}`} onClick={() => setIsAnnualBilling(true)}>
          {t("pricing.annual_billing")}
        </Button>
        <AnnualPromo /> 
      </div>
      <div className="relative w-full bg-[radial-gradient(ellipse_at_center_400px,_var(--tw-gradient-stops))] from-blue-lighte to-white to-60%">
        <div ref={scrollElt} className="w-full overflow-x-auto pb-4 mb-5 !bg-transparent">
          <table className="w-full min-w-[800px] !bg-transparent">
            <tbody>
              <tr className={trClassName}>
                {products.map((product) => {
                  return (
                    <PriceCard
                      key={product.tier}
                      isAnnualBilling={isAnnualBilling}
                      product={product.tier}
                      price={product.price[isAnnualBilling ? "year" : "month"]}
                      basemap={product.basemap}
                      tools={product.tools}
                      planExport={product.plan_export}
                      embed={product.embed}
                      busTramStopsCount={product.bus_tram_stops}
                      railwayStopsCount={product.railway_stops}
                    />
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
        <div
          hidden={!canScrollLeft}
          className="absolute left-0 top-0 bottom-0 w-[75px] h-full bg-gradient-to-l from-transparent to-white pointer-events-none"
        ></div>
        <div
          hidden={!canScrollRight}
          className="absolute right-0 top-0 bottom-0 w-[75px] h-full bg-gradient-to-r from-transparent to-white pointer-events-none"
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
          <p className="grid grid-cols-[10px_auto] gap-5">
            <span className="text-blue-600">* </span>
            {t("pricing.details_one")}
          </p>
          <br />
          <p className="grid grid-cols-[10px_auto] gap-5">
            <span className="text-blue-600">** </span>
            <span
              dangerouslySetInnerHTML={{
                __html: t("pricing.details_two." + domain),
              }}
            ></span>
          </p>
        </div>
      </div>
      <div className="w-full border-[3px] rounded-2xl bg-white p-6 font-hero my-6">
        <H3 className="!text-blue-500 font-semibold">{t("Share AddOn")}</H3>
        <ul>
          <ListItem title={t("pricing.add_on_coop")} content={t("pricing.add_on_coop-description")} />
          <ListItem title={t("pricing.add_on_defaultplans")} content={t("pricing.add_on_defaultplans-description")} />
        </ul>
        <br />
        <div className="w-full flex flex-wrap sm:flex-nowrap gap-6">
          {products.map((product) => {
            return (
              <div key={product.tier} className="sm:basis-1/4 w-full sm:w-auto text-center rounded-2xl p-6 text-blue-700 border border-[#8FCCFE] bg-[#F1F9FE]">
                <p className="mb-4">{product.tier}</p>
                <p className="font-extrabold text-[32px]">{product.price_add_on[isAnnualBilling ? 'year' : 'month']}</p>
                <p className={`text-sm font-semibold text-gray ${inter.className}`}>{t(`pricing.currency.${domain}`)} {t(`pricing.${isAnnualBilling ? 'per_year' : 'per_month'}`)}</p>
              </div>
            )
          })}
        </div>
      </div>
      <ButtonBlue
        href={`#contact`}
        className="!text-sm font-bold leading-4 max-w-[max-content] m-auto"
        onClick={onClickSmoothScroll}
      >
        {t("home.get_started")}
      </ButtonBlue>
    </>
  );
}

export default PricingSection;
