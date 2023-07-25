import LanguageLinks from "./LanguageLinks";
import VerticalSeparator from "./ui/VerticalSeparator";
import DomainLinks from "./DomainLinks";
import UserManualLink from "./UserManualLink";
import EllipseSeparator from "./ui/EllipseSeparator";
import LoginLink from "./LoginLink";

function Header({ className = "" }) {
  return (
    <div className={`flex items-center text-normal font-medium  ${className}`}>
      <LanguageLinks />
      <VerticalSeparator />
      <DomainLinks />
      <VerticalSeparator />
      <UserManualLink />
      <EllipseSeparator />
      <LoginLink />
    </div>
  );
}

export default Header;
