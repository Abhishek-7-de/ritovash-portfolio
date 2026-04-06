import { BarChart3, Globe, MousePointerClick, Target } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import expertise from "../../data/expertise";

const icons = [Target, MousePointerClick, BarChart3, Globe];

export default function Expertise() {
  return (
    <section className="py-16 md:py-24">
      <SectionHeading
        eyebrow="Expertise"
        title="What he does best"
        description="A focused set of performance and growth capabilities shaped by hands-on execution. Somehow, actual work still matters."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {expertise.map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
            <div
              key={item.title}
              className="rounded-[28px] border border-slate-300 bg-white p-6 shadow-sm shadow-slate-300/10"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100">
                <Icon className="h-5 w-5 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
