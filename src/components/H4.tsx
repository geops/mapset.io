import React from "react";

function H4({
  className = "",
  children = null,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={`uppercase text-blue-darker leading-4 font-bold ${className}`}
      {...props}
    >
      {children}
    </h4>
  );
}
export default H4;
