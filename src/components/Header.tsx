import LanguageLinks from "./LanguageLinks";
import VerticalSeparator from "./ui/VerticalSeparator";
import DomainLinks from "./DomainLinks";
import UserManualLink from "./UserManualLink";
import LoginLink from "./LoginLink";

const isBrowser = typeof window !== "undefined";
function Header({
  className = "",
  linkClassName = "hover:text-slate-700 hover:font-bold",
  selectedClassName = "text-slate-700 font-bold",
}: {
  className?: string;
  linkClassName?: string;
  selectedClassName?: string;
}) {
  const isGuidePage = isBrowser && window.location.pathname.endsWith("/guide");
  return (
    <nav
      className={`flex items-center text-sm text-slate-500 h-[52px] font-medium  ${className}`}
    >
      <LanguageLinks
        className={`w-[105px]`}
        linkClassName={linkClassName}
        selectedClassName={selectedClassName}
      />
      <VerticalSeparator />
      <DomainLinks
        className={`w-[180px]`}
        linkClassName={linkClassName}
        selectedClassName={selectedClassName}
      />
      <VerticalSeparator />
      {!isGuidePage && (
        <>
          <UserManualLink
          className="w-[115px]"
          linkClassName={`overflow-hidden text-ellipsis ${linkClassName}`}
          />
          <VerticalSeparator />
        </>
      )}
      <LoginLink
        // className="w-[72px]"
        linkClassName={`overflow-hidden text-ellipsis ` + linkClassName}
      />
    </nav>
  );
}

export default Header;
