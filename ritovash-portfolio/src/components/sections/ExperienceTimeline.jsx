import SectionHeading from "../common/SectionHeading";
import experience from "../../data/experience";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <SectionHeading
        eyebrow="Level 3: Experience"
        title="Career timeline"
        description="Roles across digital growth, paid media, brand building, and funnel-led execution."
      />

      <div className="space-y-6">
        {experience.map((item) => (
          <div
            key={`${item.company}-${item.period}`}
            className="rounded-[28px] border-4 border-green-500 bg-green-500/5 p-6 md:p-7"
          >
            <p className="text-sm text-blue-600 font-['Press_Start_2P'] text-xs">{item.period}</p>
            <h3 className="mt-2 text-2xl font-semibold text-black font-['Press_Start_2P']">{item.title}</h3>
            <p className="mt-1 text-gray-800">{item.company}</p>

            <ul className="mt-6 space-y-3">
              {item.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-6 text-gray-800">
                  <span className="mt-2 h-2 w-2 rounded-full bg-green-500" />
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
