import React from "react";

const sciencePlatforms = [
  {
    title: "ccrAAV Platform",
    eyebrow: "SBIR grant-supported lead platform",
    text: "Our core program is a cell-cycle-dependent replicating AAV platform designed to address episomal dilution and improve durability of gene expression in proliferative tissues while preserving the advantages of non-integrating AAV delivery.",
  },
  {
    title: "Scarless circRNA Platform",
    eyebrow: "circRNA without production-added extraneous sequence",
    text: "Our scarless circRNA approach is designed to generate circRNA without extraneous sequence added during production, supporting cleaner RNA architecture for research and preclinical development.",
  },
  {
    title: "AAV Cassette Engineering",
    eyebrow: "Expression cassette optimization",
    text: "We support promoter selection, enhancer strategy, polyA architecture, payload sizing, and AAV-compatible expression cassette design across vector platforms.",
  },
  {
    title: "Vector Manufacturability and Analytics",
    eyebrow: "Buildable, testable vector design",
    text: "We evaluate sequence risks, packaging constraints, durability considerations, and analytical readouts so early platform concepts can move toward practical experimental validation.",
  },
];

const workflow = [
  "Define the therapeutic or research context",
  "Map payload, tissue, and delivery constraints",
  "Design the vector architecture",
  "Review durability, safety, and manufacturability risks",
  "Support production, analytics, and iteration",
];

const scienceBackground = `Endless Vectors Bioscience is developing complementary gene therapy modalities designed to improve durability, precision, and manufacturability of genetic medicines. Our lead platform, ccrAAV, addresses a central limitation of conventional recombinant AAV therapy: after transduction, AAV genomes persist primarily as non-integrating episomes, supporting safety but limiting long-term efficacy in proliferating tissues because episomes are diluted as cells divide. This challenge is especially important for pediatric liver diseases and inborn errors of metabolism, where hepatocyte proliferation can erode therapeutic vector copy number over time. ccrAAV is designed as a cell-cycle-dependent replicating AAV platform that combines scaffold/matrix attachment regions for nuclear retention with replication initiation regions that recruit host replication machinery, enabling episomal copy-number maintenance without permanent genomic integration. Preliminary studies show that optimized IR–S/MAR pairing can support durable episomal persistence and transgene expression in proliferating cells, supporting a lower-dose strategy for diseases that require long-term hepatic correction.

The company is also developing a scarless circRNA production platform. Current circRNA manufacturing methods can be inefficient or leave extraneous production-derived sequences that may alter RNA structure or increase immunogenicity. Our optimized group I intron and IRES-based approach is designed to generate coding circRNAs without extraneous sequence added during production, preserving native RNA architecture while improving scalability for research and preclinical development across neurological and genetic disease programs.`;

const styles = {
  page: {
    minHeight: "100vh",
    background: "#08111f",
    color: "white",
    fontFamily: "Inter, Arial, sans-serif",
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    background: "rgba(8, 17, 31, 0.92)",
    borderBottom: "1px solid rgba(255,255,255,0.12)",
    backdropFilter: "blur(12px)",
  },
  container: {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "0 24px",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "18px 0",
    gap: 24,
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    textDecoration: "none",
    color: "white",
  },
  logo: {
    width: 42,
    height: 42,
    borderRadius: 16,
    display: "grid",
    placeItems: "center",
    background: "rgba(103, 232, 249, 0.14)",
    border: "1px solid rgba(103, 232, 249, 0.35)",
    color: "#67e8f9",
    fontWeight: 800,
  },
  navLinks: {
    display: "flex",
    gap: 26,
    fontSize: 14,
  },
  navLink: {
    color: "#cbd5e1",
    textDecoration: "none",
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    background: "#67e8f9",
    color: "#08111f",
    padding: "13px 20px",
    fontWeight: 700,
    textDecoration: "none",
    border: 0,
  },
  outlineButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    background: "rgba(255,255,255,0.06)",
    color: "white",
    padding: "13px 20px",
    fontWeight: 700,
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.18)",
  },
  hero: {
    position: "relative",
    overflow: "hidden",
    padding: "92px 0 86px",
  },
  glowOne: {
    position: "absolute",
    width: 520,
    height: 520,
    borderRadius: "50%",
    background: "rgba(34, 211, 238, 0.20)",
    filter: "blur(80px)",
    top: -180,
    left: "35%",
  },
  glowTwo: {
    position: "absolute",
    width: 360,
    height: 360,
    borderRadius: "50%",
    background: "rgba(99, 102, 241, 0.18)",
    filter: "blur(80px)",
    right: -90,
    top: 160,
  },
  heroGrid: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.1fr) minmax(320px, 0.9fr)",
    gap: 44,
    alignItems: "center",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    color: "#cffafe",
    border: "1px solid rgba(103,232,249,0.35)",
    background: "rgba(103,232,249,0.10)",
    borderRadius: 999,
    padding: "9px 14px",
    fontSize: 14,
    marginBottom: 22,
  },
  h1: {
    fontSize: "clamp(44px, 7vw, 78px)",
    lineHeight: 0.94,
    letterSpacing: "-0.06em",
    margin: 0,
    maxWidth: 900,
  },
  lead: {
    color: "#cbd5e1",
    fontSize: 19,
    lineHeight: 1.75,
    maxWidth: 700,
    marginTop: 24,
  },
  ctaRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 14,
    marginTop: 32,
  },
  glassCard: {
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.08)",
    borderRadius: 32,
    padding: 28,
    boxShadow: "0 28px 80px rgba(0,0,0,0.35)",
  },
  darkInset: {
    background: "rgba(8,17,31,0.78)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 24,
    padding: 24,
  },
  checkItem: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 18,
    padding: "13px 14px",
    marginTop: 12,
    color: "#e2e8f0",
    fontSize: 14,
  },
  section: {
    padding: "78px 0",
  },
  twoCol: {
    display: "grid",
    gridTemplateColumns: "0.8fr 1.2fr",
    gap: 44,
  },
  label: {
    color: "#67e8f9",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    fontSize: 13,
    fontWeight: 800,
    marginBottom: 14,
  },
  h2: {
    fontSize: "clamp(34px, 4.5vw, 52px)",
    lineHeight: 1.04,
    letterSpacing: "-0.045em",
    margin: 0,
  },
  bodyText: {
    color: "#cbd5e1",
    fontSize: 18,
    lineHeight: 1.75,
    marginTop: 0,
  },
  band: {
    borderTop: "1px solid rgba(255,255,255,0.10)",
    borderBottom: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.035)",
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 18,
    marginTop: 42,
  },
  card: {
    background: "rgba(15,23,42,0.72)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 28,
    padding: 24,
    minHeight: 310,
  },
  leadCard: {
    background: "linear-gradient(145deg, rgba(103,232,249,0.18), rgba(15,23,42,0.76))",
    border: "1px solid rgba(103,232,249,0.32)",
  },
  icon: {
    width: 46,
    height: 46,
    borderRadius: 16,
    background: "rgba(103,232,249,0.14)",
    color: "#67e8f9",
    display: "grid",
    placeItems: "center",
    fontWeight: 900,
    marginBottom: 18,
  },
  cardEyebrow: {
    color: "#67e8f9",
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    margin: "0 0 10px",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 800,
    margin: "0 0 10px",
  },
  cardText: {
    color: "#cbd5e1",
    lineHeight: 1.6,
    fontSize: 14,
  },
  workflowBox: {
    display: "flex",
    gap: 15,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.045)",
    borderRadius: 22,
    padding: 18,
    marginBottom: 14,
  },
  number: {
    width: 40,
    height: 40,
    borderRadius: 15,
    background: "#67e8f9",
    color: "#08111f",
    display: "grid",
    placeItems: "center",
    fontWeight: 900,
    flexShrink: 0,
  },
  cyanBand: {
    background: "#67e8f9",
    color: "#08111f",
    padding: "56px 0",
  },
  metrics: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 30,
  },
  footer: {
    borderTop: "1px solid rgba(255,255,255,0.10)",
    padding: "30px 0",
    color: "#94a3b8",
    fontSize: 14,
  },
};

function CheckItem({ children }) {
  return (
    <div style={styles.checkItem}>
      <span style={{ color: "#67e8f9", fontWeight: 900 }}>✓</span>
      <span>{children}</span>
    </div>
  );
}

function ResponsiveNote() {
  return (
    <style>{`
      @media (max-width: 900px) {
        .hero-grid, .two-col, .cards, .metrics { grid-template-columns: 1fr !important; }
        .nav-links { display: none !important; }
      }
    `}</style>
  );
}

export default function EndlessVectorsWebsite() {
  return (
    <div style={styles.page}>
      <ResponsiveNote />

      <header style={styles.header}>
        <div style={styles.container}>
          <div style={styles.nav}>
            <a href="#top" style={styles.brand}>
              <div style={styles.logo}>EV</div>
              <div>
                <div style={{ fontWeight: 800 }}>Endless Vectors Bioscience</div>
                <div style={{ color: "#94a3b8", fontSize: 12 }}>Durable vector technologies</div>
              </div>
            </a>

            <nav className="nav-links" style={styles.navLinks}>
              <a href="#platform" style={styles.navLink}>Platform</a>
              <a href="#science" style={styles.navLink}>Our Science</a>
              <a href="#workflow" style={styles.navLink}>Workflow</a>
              <a href="#contact" style={styles.navLink}>Contact</a>
            </nav>

            <a href="#contact" style={styles.button}>Start a Project</a>
          </div>
        </div>
      </header>

      <main id="top">
        <section style={styles.hero}>
          <div style={styles.glowOne} />
          <div style={styles.glowTwo} />

          <div style={styles.container}>
            <div className="hero-grid" style={styles.heroGrid}>
              <div>
                <div style={styles.badge}>SBIR grant-supported ccrAAV platform and scarless circRNA science</div>
                <h1 style={styles.h1}>Durable vector systems for next-generation gene therapy research.</h1>
                <p style={styles.lead}>
                  Endless Vectors Bioscience is building multiple gene therapy modalities, including ccrAAV, an SBIR grant-supported cell-cycle-dependent replicating AAV platform, scarless circRNA, and AAV cassette engineering technologies for durable, programmable gene expression.
                </p>
                <div style={styles.ctaRow}>
                  <a href="#contact" style={styles.button}>Discuss a Collaboration →</a>
                  <a href="#science" style={styles.outlineButton}>Explore Our Science</a>
                </div>
              </div>

              <div style={styles.glassCard}>
                <div style={styles.darkInset}>
                  <p style={{ color: "#94a3b8", margin: 0 }}>Lead platform</p>
                  <h3 style={{ fontSize: 28, margin: "6px 0 12px" }}>ccrAAV</h3>
                  <p style={{ color: "#cbd5e1", lineHeight: 1.65, marginTop: 0 }}>
                    A cell-cycle-responsive AAV platform designed to address episomal dilution in proliferative tissues and support durable expression without relying on permanent genome integration.
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

        <section id="platform" style={styles.section}>
          <div style={styles.container}>
            <div className="two-col" style={styles.twoCol}>
              <div>
                <div style={styles.label}>Platform</div>
                <h2 style={styles.h2}>Solving the durability problem in gene delivery.</h2>
              </div>
              <div>
                <p style={styles.bodyText}>
                  Many therapeutic vector systems are limited not only by delivery, but by what happens after delivery: episomal dilution, cassette silencing, payload-size constraints, tissue turnover, and manufacturing complexity.
                </p>
                <p style={styles.bodyText}>
                  Our lead program, ccrAAV, is designed around the biology of persistence. It is being developed to help AAV vectors maintain durable expression in settings where conventional episomal AAV genomes may be lost as cells divide.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="science" style={{ ...styles.section, ...styles.band }}>
          <div style={styles.container}>
            <div style={styles.label}>Our Science</div>
            <h2 style={{ ...styles.h2, maxWidth: 880 }}>Multiple modalities for compact, durable, and programmable gene therapy solutions.</h2>
            <p style={{ ...styles.bodyText, maxWidth: 980, marginTop: 22, whiteSpace: "pre-line" }}>
              {scienceBackground}
            </p>

            <div className="cards" style={styles.cards}>
              {sciencePlatforms.map((item, index) => (
                <div key={item.title} style={index === 0 ? { ...styles.card, ...styles.leadCard } : styles.card}>
                  <div style={styles.icon}>{index + 1}</div>
                  <p style={styles.cardEyebrow}>{item.eyebrow}</p>
                  <h3 style={styles.cardTitle}>{item.title}</h3>
                  <p style={styles.cardText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" style={styles.section}>
          <div style={styles.container}>
            <div className="two-col" style={styles.twoCol}>
              <div>
                <div style={styles.label}>Workflow</div>
                <h2 style={styles.h2}>From biological problem to testable vector design.</h2>
                <p style={styles.bodyText}>
                  We translate therapeutic ideas into buildable vector plans with clear assumptions, practical constraints, and validation-ready next steps.
                </p>
              </div>

              <div>
                {workflow.map((step, index) => (
                  <div key={step} style={styles.workflowBox}>
                    <div style={styles.number}>{index + 1}</div>
                    <div>
                      <h3 style={{ margin: "0 0 5px", fontSize: 18 }}>{step}</h3>
                      <p style={{ color: "#94a3b8", margin: 0, lineHeight: 1.6 }}>
                        Documented technical choices and practical experimental considerations.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={styles.cyanBand}>
          <div style={styles.container}>
            <div className="metrics" style={styles.metrics}>
              <div>
                <h3 style={{ fontSize: 42, margin: 0 }}>Durable</h3>
                <p>Focused on expression persistence in biological settings where conventional vector genomes may be diluted or silenced.</p>
              </div>
              <div>
                <h3 style={{ fontSize: 42, margin: 0 }}>Scarless circRNA</h3>
                <p>Designed to produce circRNA without extraneous sequence added during production.</p>
              </div>
              <div>
                <h3 style={{ fontSize: 42, margin: 0 }}>Compact</h3>
                <p>Designed with payload limits, vector packaging, and manufacturability in mind.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" style={styles.section}>
          <div style={styles.container}>
            <div style={styles.glassCard}>
              <div className="two-col" style={styles.twoCol}>
                <div>
                  <div style={styles.label}>Contact</div>
                  <h2 style={styles.h2}>Have a vector concept that needs a stronger architecture?</h2>
                  <p style={styles.bodyText}>
                    Endless Vectors Bioscience works with academic researchers, biotech teams, and early-stage programs developing ccrAAV, scarless circRNA, and viral vector technologies.
                  </p>
                </div>
                <div style={styles.darkInset}>
                  <h3 style={{ marginTop: 0, fontSize: 24 }}>Start the conversation</h3>
                  <p style={{ color: "#cbd5e1", lineHeight: 1.65 }}>
                    Replace this placeholder with your company email, intake form, or scheduling link.
                  </p>
                  <a href="mailto:contact@endlessvectors.bio" style={{ ...styles.button, width: "100%", boxSizing: "border-box" }}>
                    contact@endlessvectors.bio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <div style={{ ...styles.container, display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "space-between" }}>
          <span>© 2026 Endless Vectors Bioscience. All rights reserved.</span>
          <span>Research-use and preclinical development support. Not for clinical use.</span>
        </div>
      </footer>
    </div>
  );
}
