"use client";

import { useEffect, useMemo, useState } from "react";
import { useI18n } from "./I18n";
import Link from "next/link";
import { Remarkable } from "remarkable";
import Contact from "@/components/Contact";
import WarningIcon from "./WarningIcon";
import guide from "../content/guide/de.json";
import isSvg from "is-svg";
import Footer from "./Footer";
import Header from "./Header";
import MapsetLogo from "./MapsetLogo";

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

export const Guide = () => {
  const { t, language: locale } = useI18n();
  const [icons, setIcons] = useState([]);
  const guideContent = guide.features;

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
        subFeatures: additionalHeadings,
      };
    });
  }, [guideContent]);

  const handleScroll = () => {
    const ids = titles.map((item) => [item.label, ...item.subFeatures]).flat();
    const distances = ids.map((label) => {
      const distance = document
        .getElementById(renderId(label))
        .getBoundingClientRect().top;
      return distance > 0 ? Number.POSITIVE_INFINITY : distance;
    });
    const closestToZero = distances.reduce((a, b) => {
      return Math.abs(b - 0) < Math.abs(a - 0) ? b : a;
    });
    const activeIdx = distances.findIndex((dist) => dist === closestToZero);

    ids.forEach((id) => {
      if (id === ids[activeIdx]) {
        const activated = document.getElementById(renderScrollerId(id));
        activated.classList.add("active");
      } else {
        const deactivated = document.getElementById(renderScrollerId(id));
        deactivated.classList.remove("active");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    if (guideContent) {
      const headingIconFeatures = guideContent.filter((f) => f.mapsetIcon);
      const contentIconFeatures = guideContent
        .filter((f) => f.content)
        .map((f) => f.content)
        .flat()
        .filter((f) => f.mapsetIcon);
      const iconFeatures = [...headingIconFeatures, ...contentIconFeatures];
      Promise.all(
        iconFeatures.map((f) =>
          fetch(`https://editor.mapset.io/static/icons/${f.mapsetIcon}.svg`),
        ),
      )
        .then((responses) => {
          // Get a JSON object from each of the responses
          return Promise.all(
            responses.map((response) => {
              return response.text();
            }),
          );
        })
        .then((dataArray) => {
          const icons = [];
          iconFeatures.forEach((g, idx) => {
            if (isSvg(dataArray[idx])) {
              icons.push({
                key: g.mapsetIcon,
                svg: dataArray[idx],
              });
            } else {
              icons.push({
                key: null,
                svg: null,
              });
            }
          });
          setIcons(icons);
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
    <div>
      <div className="bg-blue text-white  z-[1000] flex sticky t-0 px-12 py-2">
        <div className="container lg flex justify-between items-center">
          <Link href={"/" + locale}>
            <MapsetLogo />
          </Link>
          <Header></Header>
        </div>
      </div>
      <div className="guide-scroller">
        <div className="guide-scroller-scrollable">
          {titles.map((feature) => {
            return (
              <>
                <a
                  href={`#${renderId(feature.label)}`}
                  id={renderScrollerId(feature.label)}
                  title={feature.label}
                >
                  <svg
                    className="listNavImage"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                  >
                    <path fill="none" d="M24 24H0V0h24v24z" />
                    <circle fill="currentColor" cx="12" cy="12" r="8" />
                  </svg>
                  <span>{feature.label}</span>
                </a>
                {feature.subFeatures ? (
                  <div className="guide-scroller-sub">
                    {feature.subFeatures.map((feat) => (
                      <Link
                        href={`#${renderId(feat)}`}
                        id={renderScrollerId(feat)}
                        key={renderScrollerId(feat)}
                        title={feat}
                      >
                        <svg
                          className="listNavImage"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                        >
                          <path fill="none" d="M24 24H0V0h24v24z" />
                          <circle fill="currentColor" cx="12" cy="12" r="8" />
                        </svg>
                        <span>{feat}</span>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </>
            );
          })}
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <section className="guideSection" id="guide">
          <div className="guideContent rightColumn">
            <div className="container">
              <h1 className="is-bolder guideHeader">{t("guide.Guide")}</h1>
              <p>
                {t("guide.Links-ch")}
                <br />
                <Link
                  href="https://editor.mapset.ch/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://editor.mapset.ch/
                </Link>
              </p>
              <p>
                {t("guide.Links-io")}
                <br />
                <Link
                  href="https://editor.mapset.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://editor.mapset.io/
                </Link>
              </p>
              <div>
                {guideContent &&
                  guideContent.map((topic) => {
                    return (
                      <div
                        className="guideFeature"
                        id={renderId(topic.label)}
                        key={renderId(topic.label)}
                      >
                        <h3 className="guideH3">
                          {topic.mapsetIcon && icons ? (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: icons.find(
                                  (f) => f.key === topic.mapsetIcon,
                                )?.svg,
                              }}
                            />
                          ) : null}
                          <b
                            dangerouslySetInnerHTML={{
                              __html: md.render(topic.label),
                            }}
                          />
                        </h3>
                        {topic.content.map((f) => (
                          <div
                            key={renderId(f.heading)}
                            className="guideContent"
                            id={renderId(f.heading)}
                          >
                            {f.heading ? (
                              <h4 className="guideH4">
                                {f.mapsetIcon ? (
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: icons.find(
                                        (subFeature) =>
                                          subFeature.key === f.mapsetIcon,
                                      )?.svg,
                                    }}
                                  />
                                ) : null}
                                <b
                                  dangerouslySetInnerHTML={{
                                    __html: md.render(f.heading),
                                  }}
                                />
                              </h4>
                            ) : null}
                            {f.loginRestricted ? (
                              <p className="loginRestricted">
                                <WarningIcon />
                                <i>{t("guide.login-restricted")}</i>
                              </p>
                            ) : null}
                            {f.cdRestricted ? (
                              <p className="cdRestricted">
                                <WarningIcon />
                                <i>{t("guide.cd-restricted")}</i>
                              </p>
                            ) : null}
                            <span
                              className="subContent"
                              dangerouslySetInnerHTML={{
                                __html: md.render(f.text),
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    );
                  })}
              </div>
              <h1 className="is-bolder guideHeader">
                {t("generic.Noch Fragen ?")}
              </h1>
              <section className="contactSection" id="contact">
                <Contact region={process.env.NEXT_PUBLIC_DOMAIN} />
              </section>
            </div>
          </div>
        </section>
      </div>
      <Footer className="z-[1000] relative" onlyPrivacyLink />
    </div>
  );
};

export default Guide;
