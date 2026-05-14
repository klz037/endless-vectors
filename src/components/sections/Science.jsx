import ScienceCard from "../ui/ScienceCard";
import { sciencePlatforms, scienceBackground } from "../../data/content";

export default function Science() {
  return (
    <section id="science" className="band-bg py-[78px]">
      <div className="max-w-[1180px] mx-auto px-6">

        <p className="text-[#67e8f9] uppercase tracking-[0.18em] text-[13px] font-black mb-3.5">
          Our Science
        </p>

        <h2 className="text-[clamp(34px,4.5vw,52px)] leading-[1.04] tracking-[-0.045em] m-0 max-w-[880px]">
          Multiple modalities for compact, durable, and programmable gene therapy solutions.
        </h2>

        <p className="text-slate-300 text-lg leading-[1.75] max-w-[980px] mt-5 whitespace-pre-line">
          {scienceBackground}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px] mt-10">
          {sciencePlatforms.map((item, index) => (
            <ScienceCard key={item.title} {...item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}