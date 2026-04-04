import SectionHeading from "../common/SectionHeading";
import experience from "../../data/experience";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Career timeline"
        description="Roles across digital growth, paid media, brand building, and funnel-led execution."
      />

      <div className="space-y-6">
        {experience.map((item) => (
          <div
            key={`${item.company}-${item.period}`}
            className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 md:p-7"
          >
            <p className="text-sm text-amber-200/85">{item.period}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-1 text-white/65">{item.company}</p>

            <ul className="mt-6 space-y-3">
              {item.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-6 text-white/75">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white/70" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
