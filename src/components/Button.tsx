export const Button = ({ label }: { label: string }) => {
  return (
    <button
      className="relative border-white/20 py-2 px-3 rounded-lg font-medium text-sm
  bg-gradient-to-b from-[#190D2E] to-[#4A208A]
  shadow-[0px_0px_10px_0px_rgba(140,69,255,0.70)_inset,0px_0px_12px_0px_#8C45FF]
  "
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 border border-white/20 rounded-lg [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="absolute inset-0 border border-white/40 rounded-lg [mask-image:linear-gradient(to_top,black,transparent)]"></div>
      </div>
      <span>{label}</span>
    </button>
  );
};
