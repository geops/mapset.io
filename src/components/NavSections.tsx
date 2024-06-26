import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";

let hideTimeout: NodeJS.Timeout;
const hiddenClasses = "opacity-0 pointer-events-none";

const ids = ["features", "pricing", "testimonials", "contact"];
function NavSections({ className }: { className?: string }) {
  const [selected, setSelected] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [hidden, setHidden] = useState<boolean>(false);

  const handleHideNav = (stateHidden: boolean) => {
    clearTimeout(hideTimeout);
    if (stateHidden) {
      hideTimeout = setTimeout(() => {
        setHidden(true);
      }, 2000);
      return;
    }
    setHidden(false);
  };

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
      handleHideNav(false);

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
      handleHideNav(true);
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={`flex ${position} ${className} transition-opacity ease-in-out duration-300 ${
        hidden ? hiddenClasses : ""
      }`}
      onMouseOver={() => handleHideNav(false)}
      onMouseOut={() => handleHideNav(true)}
    >
      <nav className="bg-blue-700 rounded-full flex gap-0 items-center px-6  text-sm font-semibold tracking-[.14px] leading-6 uppercase font-hero">
        <NavLinks
          selected={selected}
          className="px-4 pt-[17px] pb-[13px] hover:bg-blue-800"
        />
      </nav>
    </div>
  );
}
export default NavSections;
