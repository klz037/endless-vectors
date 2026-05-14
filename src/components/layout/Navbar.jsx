const navLinks = ["Platform", "Our Science", "Workflow", "Contact"];
const hrefs   = ["#platform", "#science", "#workflow", "#contact"];

export default function Navbar() {
  return (
    <header className="nav-blur sticky top-0 z-10">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="flex items-center justify-between py-[18px] gap-6">

          {/* Brand */}
          <a href="#top" className="flex items-center gap-3 no-underline text-white">
            <div className="w-[42px] h-[42px] rounded-2xl grid place-items-center icon-box border border-[rgba(103,232,249,0.35)] font-black text-base">
              EV
            </div>
            <div>
              <div className="font-black">Endless Vectors Bioscience</div>
              <div className="text-slate-400 text-xs">Durable vector technologies</div>
            </div>
          </a>

          {/* Nav links — hidden on mobile via md: prefix */}
          <nav className="hidden md:flex gap-6 text-sm">
            {navLinks.map((label, i) => (
              <a
                key={label}
                href={hrefs[i]}
                className="text-slate-300 no-underline hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-2xl bg-[#67e8f9] text-[#08111f] px-5 py-3 font-bold no-underline text-sm"
          >
            Start a Project
          </a>
        </div>
      </div>
    </header>
  );
}