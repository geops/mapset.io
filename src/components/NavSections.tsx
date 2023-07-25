import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";

const ids = ["features", "pricing", "testimonials", "contact"];
function NavSections({ className }: { className?: string }) {
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
        <NavLinks selected={selected} />
      </div>
    </div>
  );
}
export default NavSections;
