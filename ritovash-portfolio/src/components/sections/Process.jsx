import SectionHeading from "../common/SectionHeading";
import process from "../../data/process";

export default function Process() {
  return (
    <section className="py-16 md:py-24">
      <SectionHeading
        eyebrow="Process"
        title="How campaigns are built"
        description="A clean working flow for strategy, paid execution, testing, and optimization. Miraculously, order helps."
      />

      <div className="grid gap-4 lg:grid-cols-5">
        {process.map((step, index) => (
          <div
            key={step}
            className="rounded-[28px] border border-slate-300 bg-white p-5 shadow-sm shadow-slate-300/10"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-sm font-semibold text-slate-700">
              {index + 1}
            </div>
            <p className="text-sm leading-6 text-slate-600">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
