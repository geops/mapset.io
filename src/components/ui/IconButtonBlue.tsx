import React from "react";
import Button from "./Button";

function IconButtonBlue({
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
      className={`flex items-center justify-center bg-blue text-white disabled:bg-blue-light w-[56px] h-[56px] rounded-full ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}
export default IconButtonBlue;
