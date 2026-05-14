export default function Contact() {
  return (
    <section id="contact" className="py-[78px]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="glass-card rounded-[32px] p-7">
          <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-11">

            <div>
              <p className="text-[#67e8f9] uppercase tracking-[0.18em] text-[13px] font-black mb-3.5">
                Contact
              </p>
              <h2 className="text-[clamp(34px,4.5vw,52px)] leading-[1.04] tracking-[-0.045em] m-0">
                Have a vector concept that needs a stronger architecture?
              </h2>
              <p className="text-slate-300 text-lg leading-[1.75] mt-5">
                Endless Vectors Bioscience works with academic researchers, biotech teams, and
                early-stage programs developing ccrAAV, scarless circRNA, and viral vector
                technologies.
              </p>
            </div>

            <div className="dark-inset rounded-3xl p-6">
              <h3 className="mt-0 text-2xl font-semibold">Start the conversation</h3>
              <p className="text-slate-300 leading-[1.65]">
                Replace this placeholder with your company email, intake form, or scheduling link.
              </p>
              <a
                href="mailto:contact@endlessvectors.bio"
                className="inline-flex items-center justify-center w-full rounded-2xl bg-[#67e8f9] text-[#08111f] px-5 py-3 font-bold no-underline box-border"
              >
                contact@endlessvectors.bio
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}