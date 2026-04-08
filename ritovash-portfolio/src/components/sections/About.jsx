import SectionHeading from "../common/SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <SectionHeading
        eyebrow="Objective"
        title="A performance marketer with content instincts"
        description="Built around execution across paid media, content systems, local growth, lead generation, and analytics. The useful kind of marketing, not decorative nonsense."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="group rounded-3xl border border-white/5 bg-surface/50 p-8 shadow-glass backdrop-blur-md transition hover:border-primary/20 hover:bg-surface/80 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
          <div className="mb-6 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-display tracking-widest uppercase text-primary border border-primary/20">
            What I Bring
          </div>
          <p className="text-base leading-relaxed text-gray-400 font-light">
            Ritovash works at the intersection of media buying, content planning,
            outlet-level growth, reporting, and conversion systems. That means he can
            build campaigns that do not just look active, but actually move metrics.
          </p>
        </div>

        <div className="group rounded-3xl border border-white/5 bg-surface/50 p-8 shadow-glass backdrop-blur-md transition hover:border-accent/20 hover:bg-surface/80 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]">
          <div className="mb-6 inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-display tracking-widest uppercase text-accent border border-accent/20">
            Core Strength
          </div>
          <p className="text-base leading-relaxed text-gray-400 font-light">
            Strong across Meta and Google ad execution, funnel thinking, WhatsApp-led
            lead generation, multi-location visibility, and reporting systems using
            GA4, Looker Studio, and Excel.
          </p>
        </div>
      </div>
    </section>
  );
}
