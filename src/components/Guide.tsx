// @ts-nocheck
"use client";

import { useEffect, useMemo, useState } from "react";
import { useI18n } from "./I18n";
import Link from "next/link";
import { Remarkable } from "remarkable";
import Contact from "@/components/Contact";
import WarningIcon from "./images/WarningIcon";
import transDE from "../content/guide/de.json";
import transFR from "../content/guide/fr.json";
import transEN from "../content/guide/en.json";
import Footer from "./Footer.tsx";
import Header from "./Header";
import MapsetLogo from "./MapsetLogo";
import H2 from "./ui/H2";
import DotIcon from "./images/DotIcon";
import GuideH4 from "./GuideH4";
import { onClickSmoothScroll } from "./NavLinks";
import SquareIcon from "./images/SquareIcon";
import H1 from "./ui/H1";
import useIsMobile from "@/utils/hooks/useIsMobile";
import { useClickAway } from "@/utils/hooks/useClickAway";

const translations = {
  de: transDE,
  en: transEN,
  fr: transFR,
}

const renderId = (label: string) => {
  if (label) {
    return label.toLowerCase().replace(/\s/g, "");
  }
  return null;
};

const renderScrollerId = (label: string) => {
  if (label) {
    return `scroller-${label.toLowerCase().replace(/\s/g, "")}`;
  }
  return null;
};

const domain = process.env.NEXT_PUBLIC_DOMAIN;

type NavFeature = { label: string };
type NavTitlesProps = {
  titles: NavFeature[];
  hasBullets: boolean;
  hasDividers: boolean;
  onItemClick: () => void;
};
const NavTitles = ({
  titles = [],
  hasBullets = true,
  hasDividers = false,
  onItemClick = () => {},
}: NavTitlesProps) => {
  const onClick = (evt) => {
    onClickSmoothScroll(evt);
    onItemClick(evt);
  };
  return titles.map((feature) => {
    return (
      <div key={renderScrollerId(feature.label)}>
        <Link
          href={`#${renderId(feature.label)}`}
          id={renderScrollerId(feature.label)}
          title={feature.label}
          className="flex items-center gap-2 py-2 hover:text-blue-600 scroll-mt-[90px] mx-4 "
          onClick={onClick}
        >
          {hasBullets ? <DotIcon /> : null}
          <span className="text-ellipsis overflow-hidden pointer-events-none">
            {feature.label}
          </span>
        </Link>
        <div className="guide-scroller-sub">
          {(feature.sub_features || []).map((feat) => (
            <Link
              href={`#${renderId(feat)}`}
              id={renderScrollerId(feat)}
              key={renderScrollerId(feat)}
              title={feat}
              className="flex items-center gap-2 py-2 pl-4 hover:text-blue-600 scroll-mt-[90px] mx-8"
              onClick={onClick}
            >
              {hasBullets ? <SquareIcon /> : null}
              <span className="text-ellipsis overflow-hidden pointer-events-none">
                {feat}
              </span>
            </Link>
          ))}
        </div>
        {hasDividers ? <hr /> : null}
      </div>
    );
  });
};

type NavDropDownBtnProps = {
  onClick: () => void;
  className: string;
  open: boolean;
};

const NavDropDownBtn = ({
  onClick = () => {},
  className = "",
  open = false,
}: NavDropDownBtnProps) => {
  const { t } = useI18n();
  const classes = `inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 font-semibold text-gray-900 items-center ${className}`;
  return (
    <button
      onClick={onClick}
      type="button"
      className={classes}
      id="menu-button"
      aria-expanded="true"
      aria-haspopup="true"
    >
      {t("guide.features_title")}
      <svg
        className={`${open ? " rotate-180" : ""} -mr-1 h-5 w-5 text-gray-400`}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

type NavDropDownProps = {
  titles: NavFeature[];
};

const NavDropDown = ({ titles = [] }: NavDropDownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownRef, setDropdownRef] = useState(null);
  useClickAway(dropdownRef, () => setDropdownOpen(false));
  return (
    <div className="sticky top-2 iw-full text-left mb-10 z-40">
      <NavDropDownBtn
        onClick={() => setDropdownOpen(true)}
        className="shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      />
      {dropdownOpen ? (
        <div
          className="absolute right-0 top-[-8px] z-10 mt-2 w-full h-screen max-h-[calc(100vh-50px)] overflow-scroll origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
          ref={(el) => setDropdownRef(el)}
        >
          <div className="relative" role="none">
            <NavDropDownBtn
              onClick={() => setDropdownOpen(false)}
              open
              className="sticky top-0 right-0 border-b-[1px] rounded-b-none"
            />
            <NavTitles
              titles={titles}
              hasBullets={false}
              onItemClick={() => setDropdownOpen(false)}
              hasDividers
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export const Guide = () => {
  const { t, language } = useI18n();
  const isMobile = useIsMobile();  
  const guideContent = useMemo(() => translations[language]?.guide.features, [language]);

  const titles = useMemo(() => {
    if (!guideContent) {
      return [];
    }
    return guideContent.map((topic) => {
      let additionalHeadings = [];
      if (topic.content) {
        additionalHeadings = topic.content
          .map((subfeature) => subfeature.heading)
          .filter((f) => f && f !== "");
      }
      return {
        label: topic.label,
        sub_features: additionalHeadings,
      };
    });
  }, [guideContent]);

  const handleScroll = () => {
    const ids = titles.map((item) => [item.label, ...item.sub_features]).flat();
    const distances = ids.map((label) => {
      const distance = document
        .getElementById(renderId(label))
        ?.getBoundingClientRect().top;
      return distance > 150 ? Number.POSITIVE_INFINITY : distance; // 1550 for the header
    });
    const closestToZero = distances.reduce((a, b) => {
      return Math.abs(b + 0) < Math.abs(a + 0) ? b : a;
    });
    const activeIdx = distances.findIndex((dist) => dist === closestToZero);
    ids.forEach((id) => {
      if (id === ids[activeIdx]) {
        const activated = document.getElementById(renderScrollerId(id));
        activated?.classList.add("text-blue-600");
      } else {
        const deactivated = document.getElementById(renderScrollerId(id));
        deactivated?.classList.remove("text-blue-600");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const md = new Remarkable();
  md.set({
    html: true,
    breaks: true,
  });

  return (
    <>
      <div className="relative z-0">
        <header className="justify-center px-4 hidden md:flex">
          <Header className="container lg  text-gray py-1 justify-end"></Header>
        </header>
        <main>
          <div className="flex flex-col items-center relative px-4 pt-12 bg-gradient-to-r from-blue-600 to-blue-light text-white z-10">
            <div className="container lg">
              <div className="flex justify-end mb-12">
                <Link href={"/" + language}>
                  <MapsetLogo />
                </Link>
              </div>
              <div className="flex justify-between overflow-hidden flex-wrap md:flex-nowrap">
                <div className="flex flex-col gap-6 pb-12">
                  <H1>{t("guide.title")}</H1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            {!isMobile ? (
              <nav
                style={{
                  height: "calc(100vh - 0px)",
                }}
                className="guide-scroller w-[280px] max-w-[280px] sticky top-0 bottom-0 overflow-y-auto pl-4 pb-[174px] py-6"
              >
                <NavTitles titles={titles} />
              </nav>
            ) : null}
            <div className="px-4 md:pl-[220px] container mx-auto max-w-[1440px] flex flex-col gap-4 py-12 md:py-24 md:pl-12 lg:pl-24">
              <p>
                {t("guide.links_ch")}
                <br />
                <Link
                  href="https://editor.mapset.ch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600 hover:text-blue-900"
                >
                  https://editor.mapset.ch/
                </Link>
              </p>
              <p className="mb-12">
                {t("guide.links_io")}
                <br />
                <Link
                  href="https://editor.mapset.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600 hover:text-blue-900"
                >
                  https://editor.mapset.io/
                </Link>
              </p>
              <div className="guide-content relative">
                {isMobile ? <NavDropDown titles={titles} /> : null}
                {(guideContent || []).map((topic) => {
                  const text = md.render(topic.label);
                  return (
                    <div
                      id={renderId(topic.label)}
                      key={renderId(topic.label)}
                      className="scroll-mt-[90px]"
                    >
                      <GuideH4 icon={topic.mapset_icon} text={text} />
                      {topic.content.map((f) => {
                        const text = md.render(f.heading);
                        return (
                          <div
                            key={renderId(f.heading)}
                            id={renderId(f.heading)}
                            className="px-12 py-6 scroll-mt-[90px]"
                          >
                            <GuideH4 icon={f.mapset_icon} text={text} />

                            {!!f.login_restricted && (
                              <p className="flex gap-2 text-blue-600">
                                <WarningIcon />
                                <i>{t("guide.login_restricted")}</i>
                              </p>
                            )}

                            {!!f.cd_restricted && (
                              <p className="flex gap-2 text-blue-600">
                                <WarningIcon />
                                <i>{t("guide.cd_restricted")}</i>
                              </p>
                            )}
                            <div
                              // className="pl-12"
                              dangerouslySetInnerHTML={{
                                __html: md.render(f.text),
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              <H2 className="is-bolder guideHeader">
                {t("guide.more_questions")}
              </H2>
              <Contact region={domain} />
            </div>
          </div>
        </main>
        <Footer className="z-30 relative" />
      </div>
    </>
  );
};

export default Guide;
