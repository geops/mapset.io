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
    <h5
      className={`font-hero text-2xl leading-tight font-bold pb-2 ${className}`}
      {...props}
      style={{ fontSize: "clamp(1.375rem, 2vw + 0.75rem, 1.5rem)" }}
    >
      {children}
    </h5>
  );
}
export default H5;
