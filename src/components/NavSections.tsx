import Link from "next/link";
import { useI18n } from "./I18n";
import H4 from "./ui/H4";
import { useEffect, useState } from "react";

const selectedClassName = "bg-blue-darke";
const ids = ["features", "pricing", "testimonials", "contact"];
function NavSections({ className }: { className?: string }) {
  const { t } = useI18n();
  const [selected, setSelected] = useState("");
  const [position, setPosition] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const sections: {
        id: string;
        top: number;
        bottom: number;
      }[] = ids.map((id) => {
        const elt = document.getElementById(id) as HTMLElement;
        const rect = elt.getBoundingClientRect();
        return {
          id: id,
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
        };
      });

      if (window.scrollY > 160) {
        setPosition("fixed top-4");
      } else {
        setPosition("");
      }

      const centerScreenY = window.scrollY + window.innerHeight / 2;
      const section = sections.find((section) => {
        if (section.top < centerScreenY && centerScreenY < section.bottom) {
          return section;
        }
      });
      setSelected(section?.id || "");
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={`flex ${position} ${className}`}>
      <div className="bg-blue-dark rounded-full flex gap-4 items-center px-6  ">
        {ids.map((id) => {
          return (
            <Link
              href={`#${id}`}
              key={id}
              className={`py-4 px-2 ${
                selected === id ? selectedClassName : ""
              }`}
            >
              <H4 className={`text-white leading-none `}>
                {t(`${id}.section`)}
              </H4>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default NavSections;
