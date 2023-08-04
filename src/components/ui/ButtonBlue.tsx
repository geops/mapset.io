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
  const outlined = " border-[2px] md:border-[3px]";
  const classNam =
    "flex items-center text-center uppercase px-6 pt-[14px] pb-[10px] md:px-8 md:pt-[18px] md:pb-[14px] font-hero bg-blue-600 hover:bg-blue-900 text-white text-xl font-bold rounded-[42px] " +
    className +
    (variant === "contained" ? contained : outlined);

  return (
    <Button
      className={classNam}
      {...props}
      style={{ fontSize: "clamp(1rem, 1vw + 0.75rem, 1.25rem)" }}
    >
      {children}
    </Button>
  );
}

export default ButtonBlue;
