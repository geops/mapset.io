import Link from "next/link";
import { useI18n } from "./I18n";

const selectedClassName = "bg-blue-darke";
const ids = ["features", "pricing", "testimonials", "contact"];

function NavLinks({
  selected,
  className = "",
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  selected?: string;
  className?: string;
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
