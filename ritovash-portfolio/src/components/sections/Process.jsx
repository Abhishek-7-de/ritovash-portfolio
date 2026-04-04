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
            className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm font-semibold text-white/85">
              {index + 1}
            </div>
            <p className="text-sm leading-6 text-white/75">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
