export default function StatCard({ label, value, note }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-glow">
      <p className="text-sm text-white/50">{label}</p>
      <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white">{value}</h3>
      <p className="mt-2 text-sm leading-6 text-white/60">{note}</p>
    </div>
  );
}
