import React from "react";

function H5({
  className = "",
  children = null,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h5 className={`text-2xl leading-tight font-bold ${className}`} {...props}>
      {children}
    </h5>
  );
}
export default H5;
