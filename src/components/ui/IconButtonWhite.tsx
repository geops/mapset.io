import React from "react";
import Button from "./Button";

function IconButton({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
    className?: string;
  }) {
  return (
    <Button
      className={`flex items-center justify-center hover:bg-slate-300 text-blue-600 border-blue-600 disabled:text-blue-light disabled:border-blue-light border-2 w-[56px] h-[56px] rounded-full ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}
export default IconButton;
