export type ButtonVariant = "contained" | "outlined";

function ButtonWhite({
  className = "",
  children,
  variant = "contained",
  ...props
}: React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> & {
  children: React.ReactNode;
  variant?: ButtonVariant;
}) {
  const contained = "";
  const outlined = " border-[3px]";
  const classNam =
    "flex items-center uppercase px-8 py-4 bg-white text-blue font-bold rounded-[42px] gap-2 " +
    className +
    (variant === "contained" ? contained : outlined);
  // @ts-ignore
  if (props.href) {
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
