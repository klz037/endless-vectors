export default function WorkflowStep({ step, index }) {
  return (
    <div className="workflow-box flex gap-4 rounded-[22px] p-[18px] mb-3.5">
      <div className="w-10 h-10 rounded-[15px] bg-[#67e8f9] text-[#08111f] grid place-items-center font-black shrink-0">
        {index + 1}
      </div>
 
      <div>
        <h3 className="text-lg font-semibold mb-1">{step}</h3>
        <p className="text-slate-400 leading-relaxed text-sm m-0">
          Documented technical choices and practical experimental considerations.
        </p>
      </div>
    </div>
  );
}
