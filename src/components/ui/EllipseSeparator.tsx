import React from "react";
import EllipseIcon from "../images/EllipseIcon";

function EllipseSeparator({ className = "" }) {
  return (
    <div
      className={`w-[4px] h-[4px] mx-[15px] my-2 flex items-center ${className}`}
    >
      <EllipseIcon />
    </div>
  );
}

export default EllipseSeparator;
