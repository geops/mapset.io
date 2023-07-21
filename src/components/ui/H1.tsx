import React from "react";

function H1({
  className = "",
  children = null,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`text-8xl leading-[1.05em] font-black uppercase ${className}`}
    >
      {children}
    </h1>
  );
}
export default H1;
