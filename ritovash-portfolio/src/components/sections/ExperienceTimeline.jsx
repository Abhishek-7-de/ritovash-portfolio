import SectionHeading from "../common/SectionHeading";
import experience from "../../data/experience";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <SectionHeading
        eyebrow="My Experience"
        title="Career timeline"
        description="Roles across digital growth, paid media, brand building, and funnel-led execution."
      />

      <div className="space-y-6">
        {experience.map((item) => (
          <div
            key={`${item.company}-${item.period}`}
            className="group relative rounded-[28px] border border-white/5 bg-surface/50 p-8 shadow-glass backdrop-blur-sm transition-all hover:border-primary/20 hover:bg-surface/80"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 rounded-l-[28px] transition-colors group-hover:bg-primary"></div>
            <p className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-display tracking-widest uppercase text-primary border border-primary/20">{item.period}</p>
            <h3 className="mt-4 text-2xl font-bold text-white font-display group-hover:text-primary transition-colors">{item.title}</h3>
            <p className="mt-1 text-gray-400 font-medium">{item.company}</p>

            <ul className="mt-6 space-y-3">
              {item.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-6 text-gray-400 font-light group-hover:text-gray-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50 group-hover:bg-primary shadow-[0_0_10px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all" />
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
