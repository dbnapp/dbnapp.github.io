import React from "react";

export const Stamp = ({ className }: { className?: string }) => {
  return (
    <div
      className={`aspect-[3/4] overflow-hidden opacity-60 ${className ?? ""}`}
    >
      <img
        src={new URL("../assets/stamp.webp", import.meta.url).toString()}
        className="w-36"
      />
    </div>
  );
};
