import SectionHeading from "../common/SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <SectionHeading
        eyebrow="About"
        title="A performance marketer with content instincts"
        description="Built around execution across paid media, content systems, local growth, lead generation, and analytics. The useful kind of marketing, not decorative nonsense."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <h3 className="text-xl font-semibold text-white">What he brings</h3>
          <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
            Ritovash works at the intersection of media buying, content planning,
            outlet-level growth, reporting, and conversion systems. That means he can
            build campaigns that do not just look active, but actually move metrics.
          </p>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <h3 className="text-xl font-semibold text-white">Core strength</h3>
          <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
            Strong across Meta and Google ad execution, funnel thinking, WhatsApp-led
            lead generation, multi-location visibility, and reporting systems using
            GA4, Looker Studio, and Excel.
          </p>
        </div>
      </div>
    </section>
  );
}
