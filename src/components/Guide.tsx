// @ts-nocheck
"use client";

import { useEffect, useMemo, useState } from "react";
import { useI18n } from "./I18n";
import Link from "next/link";
import { Remarkable } from "remarkable";
import Contact from "@/components/Contact";
import WarningIcon from "./images/WarningIcon";
import translations from "../content/guide/de.json";
import Footer from "./Footer.tsx";
import Header from "./Header";
import MapsetLogo from "./MapsetLogo";
import H2 from "./ui/H2";
import DotIcon from "./images/DotIcon";
import GuideH4 from "./GuideH4";
import { onClickSmoothScroll } from "./NavLinks";
import SquareIcon from "./images/SquareIcon";
import H1 from "./ui/H1";

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

export const Guide = () => {
  const { t, language } = useI18n();
  const locale = language;
  const [icons, setIcons] = useState([]);
  const guideContent = translations.guide.features;

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
    const distances = ids.map((label, idx) => {
      const distance = document
        .getElementById(renderId(label))
        .getBoundingClientRect().top;
      console.log(label, idx, distance);
      return distance > 150 ? Number.POSITIVE_INFINITY : distance; // 1550 for the header
    });
    const closestToZero = distances.reduce((a, b) => {
      console.log(a, b);
      return Math.abs(b + 0) < Math.abs(a + 0) ? b : a;
    });
    const activeIdx = distances.findIndex((dist) => dist === closestToZero);
    console.log(activeIdx, closestToZero);
    ids.forEach((id) => {
      if (id === ids[activeIdx]) {
        const activated = document.getElementById(renderScrollerId(id));
        activated.classList.add("text-blue-600");
      } else {
        const deactivated = document.getElementById(renderScrollerId(id));
        deactivated.classList.remove("text-blue-600");
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
              <div className="flex justify-between mb-12">
                <div></div>
                <Link href={"/" + language}>
                  <MapsetLogo />
                </Link>
              </div>
              <div className="flex justify-between overflow-hidden flex-wrap md:flex-nowrap">
                <div className="flex flex-col gap-6 pb-12">
                  <H1>{t("guide.title")}</H1>
                  {/* <p className="max-w-[646px] text-2xl">
                    {t("guide.subtitle")}
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <nav
              style={{
                height: "calc(100vh - 0px)",
              }}
              className="guide-scroller w-[220px] max-w-[220px] sticky top-0 bottom-0 overflow-y-auto pl-4 pb-[174px]"
            >
              {titles.map((feature) => {
                return (
                  <>
                    <Link
                      href={`#${renderId(feature.label)}`}
                      id={renderScrollerId(feature.label)}
                      title={feature.label}
                      className="flex items-center gap-2 py-2 hover:text-blue-600 scroll-mt-[90px]"
                      onClick={onClickSmoothScroll}
                    >
                      <DotIcon />
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
                          className="flex items-center gap-2 py-2 pl-4 hover:text-blue-600 scroll-mt-[90px]"
                          onClick={onClickSmoothScroll}
                        >
                          <SquareIcon />
                          <span className="text-ellipsis overflow-hidden pointer-events-none">
                            {feat}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </>
                );
              })}
            </nav>
            <div className="pl-[220px] container mx-auto max-w-[1440px]  flex flex-col gap-4 py-24 md:pl-12 lg:pl-24">
              {/* <H2 className="is-bolder guideHeader">{t("guide.title")}</H2> */}
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

              <H2 className="is-bolder guideHeader">
                {t("guide.more_questions")}
              </H2>
              <Contact region={domain} />
            </div>
          </div>
        </main>
        <Footer className="z-[1000] relative" />
      </div>
    </>
  );
};

export default Guide;
