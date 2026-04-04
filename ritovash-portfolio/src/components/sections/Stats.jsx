import stats from "../../data/stats";
import StatCard from "../common/StatCard";

export default function Stats() {
  return (
    <section className="py-6 md:py-8">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <StatCard
            key={item.label}
            label={item.label}
            value={item.value}
            note={item.note}
          />
        ))}
      </div>
    </section>
  );
}
