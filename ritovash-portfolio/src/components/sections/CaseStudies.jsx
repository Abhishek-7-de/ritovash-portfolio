import SectionHeading from "../common/SectionHeading";
import caseStudies from "../../data/caseStudies";

export default function CaseStudies() {
  return (
    <section id="work" className="py-16 md:py-24">
      <SectionHeading
        eyebrow="My Work"
        title="Case studies built around outcomes"
        description="Projects covering multi-location growth, paid media execution, and lead generation systems. Numbers included, because feelings are not a reporting framework."
      />

      <div className="grid gap-8 xl:grid-cols-3">
        {caseStudies.map((item) => (
          <article
            key={item.company}
            className="group flex flex-col overflow-hidden rounded-[30px] border border-white/5 bg-surface/50 shadow-glass backdrop-blur-md transition-all hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_10px_40px_rgba(59,130,246,0.1)]"
          >
            <div className="relative overflow-hidden w-full aspect-[16/10]">
              <div className="absolute inset-0 bg-base/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                src={item.image}
                alt={item.company}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="flex-1 p-8">
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 font-display tracking-widest text-[10px] uppercase text-primary border border-primary/20">
                {item.role}
              </span>
              <h3 className="mt-4 text-2xl font-bold text-white font-display group-hover:text-primary transition-colors">{item.company}</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-400 font-light">{item.summary}</p>

              <div className="mt-8 border-t border-white/5 pt-6">
                <ul className="space-y-4">
                  {item.results.map((result) => (
                    <li key={result} className="flex items-start gap-3 text-sm leading-6 text-gray-300">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
