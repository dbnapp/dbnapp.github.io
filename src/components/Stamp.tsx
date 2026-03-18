import stampUrl from "/src/assets/stamp.webp";

export const Stamp = ({ className }: { className?: string }) => {
  return (
    <div
      className={`aspect-[3/4] overflow-hidden opacity-60 ${className ?? ""}`}
    >
      <img src={stampUrl} className="w-36" />
    </div>
  );
};
