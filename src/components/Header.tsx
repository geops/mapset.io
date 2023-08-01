import LanguageLinks from "./LanguageLinks";
import VerticalSeparator from "./ui/VerticalSeparator";
import DomainLinks from "./DomainLinks";
import UserManualLink from "./UserManualLink";
import EllipseSeparator from "./ui/EllipseSeparator";
import LoginLink from "./LoginLink";

function Header({
  className = "",
  linkClassName = "hover:text-slate-700",
  selectedClassName = "text-slate-700 font-semibold",
}: {
  className?: string;
  linkClassName?: string;
  selectedClassName?: string;
}) {
  return (
    <nav
      className={`flex items-center text-normal text-slate-500 h-[52px] font-medium  ${className}`}
    >
      <LanguageLinks
        className={`w-[125px]`}
        linkClassName={linkClassName}
        selectedClassName={selectedClassName}
      />
      <VerticalSeparator />
      <DomainLinks
        className={`w-[227px] px-2`}
        linkClassName={linkClassName}
        selectedClassName={selectedClassName}
      />
      <VerticalSeparator />
      <UserManualLink
        className="w-[175px]"
        linkClassName={`overflow-hidden text-ellipsis ${linkClassName}`}
      />
      <EllipseSeparator />
      <LoginLink
        className="w-[72px]"
        linkClassName={`overflow-hidden text-ellipsis ` + linkClassName}
      />
    </nav>
  );
}

export default Header;
