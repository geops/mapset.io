import React from "react";

function H2({
  className = "",
  children = null,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-hero text-7xl leading-[1.15em] font-extrabold text-blue-600 -tracking-[1.34px] pb-5 ${className}`}
      style={{ fontSize: "clamp(2rem, 5vw + 0.75rem, 4.188rem)" }}
    >
      {children}
    </h2>
  );
}
export default H2;
