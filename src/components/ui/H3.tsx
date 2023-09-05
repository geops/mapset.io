import React from "react";

function H3({
  className = "",
  children = null,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`text-blue-600 text-2xl leading-[1.25em] font-bold ${className}`}
    >
      {children}
    </h3>
  );
}
export default H3;
