import WorkflowStep from "../ui/WorkflowStep";
import { workflow } from "../../data/content";

export default function Workflow() {
  return (
    <section id="workflow" className="py-[78px]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-11">

          <div>
            <p className="text-[#67e8f9] uppercase tracking-[0.18em] text-[13px] font-black mb-3.5">
              Workflow
            </p>
            <h2 className="text-[clamp(34px,4.5vw,52px)] leading-[1.04] tracking-[-0.045em] m-0">
              From biological problem to testable vector design.
            </h2>
            <p className="text-slate-300 text-lg leading-[1.75] mt-5">
              We translate therapeutic ideas into buildable vector plans with clear assumptions,
              practical constraints, and validation-ready next steps.
            </p>
          </div>

          <div>
            {workflow.map((step, index) => (
              <WorkflowStep key={step} step={step} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}