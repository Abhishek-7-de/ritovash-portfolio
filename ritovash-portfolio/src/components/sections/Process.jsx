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

      <div className="grid gap-6 lg:grid-cols-5 relative">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block -z-10"></div>
        {process.map((step, index) => (
          <div
            key={step}
            className="group rounded-[28px] border border-white/5 bg-surface/50 p-6 shadow-glass backdrop-blur-sm transition-all hover:-translate-y-2 hover:border-primary/20 hover:bg-surface/80"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-lg font-black text-primary font-display border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">
              {index + 1}
            </div>
            <p className="text-base leading-relaxed text-gray-400 font-light group-hover:text-gray-300">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
