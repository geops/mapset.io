function Button({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
  }) {
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

export default Button;
