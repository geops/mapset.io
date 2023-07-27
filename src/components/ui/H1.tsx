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
      className={`text-8xl leading-[1.05em] font-hero font-black uppercase max-w-[541px] ${className}`}
      style={{
        fontSize: "clamp(2.75rem, 5vw + 1.5rem, 5.375rem)",
      }}
    >
      {children}
    </h1>
  );
}
export default H1;
