import React from "react";

function IconButton({
  className,
  children,
  ...props
}: React.HtmlHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`flex items-center justify-center text-blue disabled:text-blue-light border-2 w-[56px] h-[56px] rounded-full ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
export default IconButton;
