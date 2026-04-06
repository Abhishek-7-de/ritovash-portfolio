import SectionHeading from "../common/SectionHeading";
import caseStudies from "../../data/caseStudies";

export default function CaseStudies() {
  return (
    <section id="work" className="py-16 md:py-24">
      <SectionHeading
        eyebrow="Level 2: Work"
        title="Case studies built around outcomes"
        description="Projects covering multi-location growth, paid media execution, and lead generation systems. Numbers included, because feelings are not a reporting framework."
      />

      <div className="grid gap-6 xl:grid-cols-3">
        {caseStudies.map((item) => (
          <article
            key={item.company}
            className="overflow-hidden rounded-[30px] border border-slate-300 bg-white shadow-sm shadow-slate-300/10"
          >
            <img
              src={item.image}
              alt={item.company}
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-sky-700 font-['Press_Start_2P'] text-xs">{item.role}</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900">{item.company}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.summary}</p>

              <ul className="mt-6 space-y-3">
                {item.results.map((result) => (
                  <li key={result} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                    <span className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
