export type ButtonVariant = "contained" | "outlined";

function ButtonWhite({
  className = "",
  children,
  variant = "contained",
  href,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
    variant?: ButtonVariant;
    href?: string;
  }) {
  const contained = "";
  const outlined = " border-[3px]";
  const classNam =
    "flex items-center uppercase px-8 py-4 bg-white text-blue font-bold rounded-[42px] gap-2 " +
    className +
    (variant === "contained" ? contained : outlined);
  // @ts-ignore
  if (href) {
    return (
      <a className={classNam} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={classNam} {...props}>
      {children}
    </button>
  );
}

export default ButtonWhite;
