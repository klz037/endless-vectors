export default function Platform() {
  return (
    <section id="platform" className="py-[78px]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-11">

          <div>
            <p className="text-[#67e8f9] uppercase tracking-[0.18em] text-[13px] font-black mb-3.5">
              Platform
            </p>
            <h2 className="text-[clamp(34px,4.5vw,52px)] leading-[1.04] tracking-[-0.045em] m-0">
              Solving the durability problem in gene delivery.
            </h2>
          </div>

          <div>
            <p className="text-slate-300 text-lg leading-[1.75]">
              Many therapeutic vector systems are limited not only by delivery, but by what
              happens after delivery: episomal dilution, cassette silencing, payload-size
              constraints, tissue turnover, and manufacturing complexity.
            </p>
            <p className="text-slate-300 text-lg leading-[1.75]">
              Our lead program, ccrAAV, is designed around the biology of persistence. It is
              being developed to help AAV vectors maintain durable expression in settings where
              conventional episomal AAV genomes may be lost as cells divide.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}