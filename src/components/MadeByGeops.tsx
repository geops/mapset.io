import Link from "next/link";
import GeopsLogo from "./images/GeopsLogo";
import { useI18n } from "./I18n";

function MadeByGeops() {
  const { language } = useI18n();
  return (
    <div className="flex justify-center items-center">
      <span className="text-xs font-medium px-1 pt-2">made by</span>
      <Link
        href={`https://geops.com/${/(en|fr)/.test(language) ? "/en" : ""}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GeopsLogo />
      </Link>
    </div>
  );
}

export default MadeByGeops;
