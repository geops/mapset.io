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
      className={`font-hero text-7xl leading-[1.15em] font-extrabold text-blue -tracking-[1.34px] pb-5 ${className}`}
    >
      {children}
    </h2>
  );
}
export default H2;
