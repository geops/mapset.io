export type ButtonVariant = "contained" | "outlined";

function ButtonBlue({
  children,
  variant = "contained",
  ...props
}: React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> & {
  children: React.ReactNode;
  variant?: ButtonVariant;
}) {
  const contained = "";
  const outlined = " border-[3px]";
  const className =
    "flex items-center uppercase px-8 py-4 bg-blue text-white font-bold rounded-[42px]" +
    (variant === "contained" ? contained : outlined);
  // @ts-ignore
  if (props.href) {
    return (
      <a className={className} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

export default ButtonBlue;
