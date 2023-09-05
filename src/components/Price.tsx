import { useI18n } from "./I18n";

const domain = process.env.NEXT_PUBLIC_DOMAIN;
function Price({ children }: { children: React.ReactNode }) {
  const { t } = useI18n();
  return (
    <span>
      {t(`pricing.currency.${domain}`)} {children}
    </span>
  );
}
export default Price;
