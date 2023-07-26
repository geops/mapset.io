import LanguageLinks from "./LanguageLinks";
import VerticalSeparator from "./ui/VerticalSeparator";
import DomainLinks from "./DomainLinks";
import UserManualLink from "./UserManualLink";
import EllipseSeparator from "./ui/EllipseSeparator";
import LoginLink from "./LoginLink";

function Header({ className = "" }) {
  return (
    <div
      className={`flex items-center text-normal text-slate-500 font-medium  ${className}`}
    >
      <LanguageLinks linkClassName="hover:text-slate-700" />
      <VerticalSeparator />
      <DomainLinks linkClassName="hover:text-slate-700" />
      <VerticalSeparator />
      <UserManualLink className="hover:text-slate-700" />
      <EllipseSeparator />
      <LoginLink className="hover:text-slate-700" />
    </div>
  );
}

export default Header;
