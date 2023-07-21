import React from "react";

function H2({
  className = "",
  children = null,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`text-7xl leading-[1.15em] font-extrabold ${className}`}>
      {children}
    </h2>
  );
}
export default H2;
