import Link from "next/link";
import { useI18n } from "./I18n";
import { MouseEventHandler } from "react";

const ids = ["features", "pricing", "testimonials", "contact"];

export const onClickSmoothScroll: MouseEventHandler<
  HTMLAnchorElement | HTMLButtonElement
> = (evt) => {
  evt.preventDefault();
  const href = (evt.target as HTMLAnchorElement).href;
  let elt: HTMLElement | null = evt.target as HTMLElement;

  if (href) {
    try {
      elt = document.getElementById(decodeURIComponent(href).split("#")[1]);
    } catch (err) {
      console.error(err);
    }
  }
  if (elt) {
    (elt as HTMLDivElement).scrollIntoView({ behavior: "smooth" });

    if (elt.id) {
      window.setTimeout(() => {
        if (elt?.id) {
          window.location.hash = elt.id;
        }
      }, 500);
    }
  }
};

function NavLinks({
  selected,
  className = "",
  selectedClassName = "bg-blue-800",
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  selected?: string;
  className?: string;
  selectedClassName?: string;
}) {
  const { t, language } = useI18n();

  return (
    <>
      {ids.map((id) => {
        return (
          <Link
            href={`/${language}/#${id}`}
            key={id}
            className={`py-4 px-2 ${
              selected === id ? selectedClassName : ""
            } ${className}`}
            onClick={onClickSmoothScroll}
            {...props}
          >
            {t(`${id}.section`)}
          </Link>
        );
      })}
    </>
  );
}
export default NavLinks;
