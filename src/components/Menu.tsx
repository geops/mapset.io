import { useState } from "react";
import IconButtonBlue from "./ui/IconButtonBlue";
import CloseIcon from "./images/CloseIcon";
import MenuIcon from "./images/MenuIcon";
import LanguageLinks from "./LanguageLinks";
import DomainLinks from "./DomainLinks";
import UserManualLink from "./UserManualLink";
import LoginLink from "./LoginLink";

function Menu({ className = "" }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={className}>
      <div
        hidden={!open}
        className={`${
          open ? "flex" : ""
        }  fixed top-0 bottom-0 left-0 right-0 bg-blue-dark w-full h-full`}
      >
        <div className="flex flex-col text-white items-start justify-start text-normal font-medium  divide-y divide-blue-light w-full">
          <LanguageLinks className="px-6 py-2 w-full" />
          <DomainLinks className="px-6 py-2 w-full" />
          <UserManualLink className="px-6 py-2 w-full" />
          <LoginLink className="px-6 py-2 w-full" />
        </div>
      </div>
      <div className="fixed flex bottom-2 right-2">
        <IconButtonBlue onClick={() => setOpen(!open)}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButtonBlue>
      </div>
    </div>
  );
}

export default Menu;
