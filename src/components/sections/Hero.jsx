import Badge from "../ui/Badge";
import CheckItem from "../ui/CheckItem";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-[92px] pb-[86px]">
      {/* glow blobs */}
      <div className="glow-cyan absolute w-[520px] h-[520px] rounded-full -top-[180px] left-[35%] pointer-events-none" />
      <div className="glow-indigo absolute w-[360px] h-[360px] rounded-full -right-[90px] top-[160px] pointer-events-none" />

      <div className="relative max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-11 items-center">

          {/* left headline copy */}
          <div>
            <Badge>SBIR grant-supported ccrAAV platform and scarless circRNA science</Badge>

            <h1 className="text-[clamp(44px,7vw,78px)] leading-[0.94] tracking-[-0.06em] m-0 max-w-[900px]">
              Durable vector systems for next-generation gene therapy research.
            </h1>

            <p className="text-slate-300 text-[19px] leading-[1.75] max-w-[700px] mt-6">
              Endless Vectors Bioscience is building multiple gene therapy modalities,
              including ccrAAV, an SBIR grant-supported cell-cycle-dependent replicating
              AAV platform, scarless circRNA, and AAV cassette engineering technologies
              for durable, programmable gene expression.
            </p>

            <div className="flex flex-wrap gap-3.5 mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-[#67e8f9] text-[#08111f] px-5 py-3 font-bold no-underline"
              >
                Discuss a Collaboration →
              </a>
              <a
                href="#science"
                className="inline-flex items-center justify-center rounded-2xl bg-white/[0.06] border border-white/[0.18] text-white px-5 py-3 font-bold no-underline"
              >
                Explore Our Science
              </a>
            </div>
          </div>

          {/* right glass card */}
          <div className="glass-card rounded-[32px] p-7">
            <div className="dark-inset rounded-3xl p-6">
              <p className="text-slate-400 m-0">Lead platform</p>
              <h3 className="text-[28px] mt-1.5 mb-3">ccrAAV</h3>
              <p className="text-slate-300 leading-[1.65] mt-0">
                A cell-cycle-responsive AAV platform designed to address episomal dilution
                in proliferative tissues and support durable expression without relying on
                permanent genome integration.
              </p>
              <CheckItem>SBIR-supported platform development</CheckItem>
              <CheckItem>Durability-oriented AAV genome architecture</CheckItem>
              <CheckItem>Designed for proliferative tissue challenges</CheckItem>
              <CheckItem>Built for research and preclinical translation</CheckItem>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}