import React from "react";

export const Stamp = () => {
  return (
    <div className="h-44 overflow-hidden opacity-60">
      <img
        src={new URL("../assets/stamp.webp", import.meta.url).toString()}
        className="w-36"
      />
    </div>
  );
};
