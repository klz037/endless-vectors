
export default function ScienceCard({ title, eyebrow, text, index }) {
  const isLead = index === 0;
 
  return (
    <div
      className={`rounded-[28px] p-6 min-h-[310px] ${
        isLead ? "science-card-lead" : "science-card"
      }`}
    >
      {/* Numbered icon */}
      <div className="icon-box w-[46px] h-[46px] rounded-2xl grid place-items-center font-black text-base mb-4">
        {index + 1}
      </div>
 
      <p className="text-[#67e8f9] text-xs font-black tracking-widest uppercase mb-2">
        {eyebrow}
      </p>
 
      <h3 className="text-xl font-black mb-2">{title}</h3>
 
      <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
    </div>
  );
}
 
