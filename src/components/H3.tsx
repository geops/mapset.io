import React from "react";

function H3({
  className = "",
  children = null,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`text-2xl leading-[1.25em] font-bold ${className}`}>
      {children}
    </h2>
  );
}
export default H3;
