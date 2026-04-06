import SectionHeading from "../common/SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <SectionHeading
        eyebrow="Level 1: About"
        title="A performance marketer with content instincts"
        description="Built around execution across paid media, content systems, local growth, lead generation, and analytics. The useful kind of marketing, not decorative nonsense."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[28px] border border-slate-300 bg-white p-6 md:p-8 shadow-sm shadow-slate-300/10">
          <div className="mb-4 inline-flex rounded-full bg-sky-500/10 px-3 py-1 text-xs font-['Press_Start_2P'] text-sky-700">
            What he brings
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Ritovash works at the intersection of media buying, content planning,
            outlet-level growth, reporting, and conversion systems. That means he can
            build campaigns that do not just look active, but actually move metrics.
          </p>
        </div>

        <div className="rounded-[28px] border border-slate-300 bg-white p-6 md:p-8 shadow-sm shadow-slate-300/10">
          <div className="mb-4 inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-['Press_Start_2P'] text-cyan-700">
            Core strength
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Strong across Meta and Google ad execution, funnel thinking, WhatsApp-led
            lead generation, multi-location visibility, and reporting systems using
            GA4, Looker Studio, and Excel.
          </p>
        </div>
      </div>
    </section>
  );
}
