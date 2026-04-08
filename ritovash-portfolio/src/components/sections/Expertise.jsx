import { BarChart3, Globe, MousePointerClick, Target } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import expertise from "../../data/expertise";

const icons = [Target, MousePointerClick, BarChart3, Globe];

export default function Expertise() {
  return (
    <section id="expertise" className="py-16 md:py-24">
      <SectionHeading
        eyebrow="My Expertise"
        title="What I do best"
        description="A focused set of performance and growth capabilities shaped by hands-on execution. Somehow, actual work still matters."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {expertise.map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/5 bg-surface/50 p-6 shadow-glass backdrop-blur-md transition-all hover:-translate-y-2 hover:border-primary/20 hover:bg-surface/80"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 transition-all group-hover:bg-primary group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white font-display tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400 font-light">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
