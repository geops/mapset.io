import Button from "./Button";

export type ButtonVariant = "contained" | "outlined";

function ButtonWhite({
  className = "",
  children,
  variant = "contained",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
    variant?: ButtonVariant;
  }) {
  const contained = "";
  const outlined = " border-[3px]";
  const classNam =
    "flex items-center uppercase px-8 py-4 font-hero bg-white hover:bg-slate-300 text-blue-600 text-xl font-bold rounded-[42px] gap-2 " +
    className +
    (variant === "contained" ? contained : outlined);

  return (
    <Button className={classNam} {...props}>
      {children}
    </Button>
  );
}

export default ButtonWhite;
