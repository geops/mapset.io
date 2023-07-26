import { useCallback, useState } from "react";
import IconButtonBlue from "./ui/IconButtonBlue";
import CloseIcon from "./images/CloseIcon";
import MenuIcon from "./images/MenuIcon";
import LanguageLinks from "./LanguageLinks";
import DomainLinks from "./DomainLinks";
import UserManualLink from "./UserManualLink";
import LoginLink from "./LoginLink";
import ProductLink from "./ProductLink";
import ImprintLink from "./ImprintLink";
import PrivacyLink from "./PrivacyLink";
import NavLinks from "./NavLinks";
import MapsetLogo from "./MapsetLogo";

function Menu({ className = "" }) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className={className}>
      <div
        hidden={!open}
        className={`${
          open ? "flex justify-between" : ""
        }  fixed top-0 bottom-0 left-0 right-0 bg-blue-darke w-full h-full overflow-y-auto`}
      >
        <div className="flex flex-col text-white items-start text-normal font-medium   w-full">
          <div className="flex flex-1 px-6 pt-6 items-center justify-end w-full bg-blue-dark">
            <MapsetLogo />
          </div>
          <div className="divide-y divide-white divide-opacity-10 w-full bg-blue-dark">
            <LanguageLinks
              className="px-6 py-4 w-full"
              selectedClassName="text-white font-bold"
            />
            <DomainLinks
              className="px-6 py-4 w-full"
              selectedClassName="text-white font-bold"
            />
            <LoginLink className="px-6 py-4 w-full" />
            <UserManualLink className="px-6 py-4 w-full" />
          </div>
          <div className="flex flex-1 flex-col justify-between w-full">
            <div className="py-6 divide-y  divide-white divide-opacity-10  w-full">
              <NavLinks
                className="block !px-6 w-full text-2.5xl font-semibold tracking-[.14px] leading-6 uppercase font-hero"
                selectedClassName="font-extrabold"
                onClick={close}
              />
            </div>
            <div className="divide-y  divide-white divide-opacity-10  w-full">
              <ProductLink className="block px-6 py-4 w-full" onClick={close} />
              <ImprintLink className="block px-6 py-4 w-full" onClick={close} />
              <PrivacyLink className="block px-6 py-4 w-full" />
            </div>
          </div>
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
