import Button from "./Button";

export type ButtonVariant = "contained" | "outlined";

function ButtonBlue({
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
    "flex items-center uppercase px-8 py-4 font-hero bg-blue-600 hover:bg-blue-900 text-white text-xl font-bold rounded-[42px] " +
    className +
    (variant === "contained" ? contained : outlined);

  return (
    <Button className={classNam} {...props}>
      {children}
    </Button>
  );
}

export default ButtonBlue;
