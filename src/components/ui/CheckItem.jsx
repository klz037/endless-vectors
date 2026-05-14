export default function CheckItem({ children }) {
  return (
    <div className="check-item flex items-center gap-3 rounded-[18px] px-3.5 py-3 mt-3 text-slate-200 text-sm">
      <span className="text-[#67e8f9] font-black">✓</span>
      <span>{children}</span>
    </div>
  );
}
 
