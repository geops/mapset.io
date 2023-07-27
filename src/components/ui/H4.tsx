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
      className={`tracking-[0.8px] leading-[24px] pb-3 uppercase text-blue-800r font-hero font-bold  ${className}`}
      {...props}
    >
      {children}
    </h4>
  );
}
export default H4;
