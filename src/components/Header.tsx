import LanguageLinks from "./LanguageLinks";
import VerticalSeparator from "./ui/VerticalSeparator";
import DomainLinks from "./DomainLinks";
import UserManualLink from "./UserManualLink";
import EllipseSeparator from "./ui/EllipseSeparator";
import LoginLink from "./LoginLink";

function Header({
  className = "",
  linkClassName = "hover:text-slate-700",
  selectedClassName = "",
}: {
  className?: string;
  linkClassName?: string;
  selectedClassName?: string;
}) {
  return (
    <nav
      className={`flex items-center text-normal text-slate-500 font-medium  ${className}`}
    >
      <LanguageLinks
        linkClassName={linkClassName}
        selectedClassName={selectedClassName}
      />
      <VerticalSeparator />
      <DomainLinks
        linkClassName={linkClassName}
        selectedClassName={selectedClassName}
      />
      <VerticalSeparator />
      <UserManualLink className={linkClassName} />
      <EllipseSeparator />
      <LoginLink className={linkClassName} />
    </nav>
  );
}

export default Header;
