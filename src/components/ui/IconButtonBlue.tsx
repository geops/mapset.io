import React from "react";

function IconButtonBlue({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`flex items-center justify-center bg-blue text-white disabled:bg-blue-light w-[56px] h-[56px] rounded-full ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
export default IconButtonBlue;
