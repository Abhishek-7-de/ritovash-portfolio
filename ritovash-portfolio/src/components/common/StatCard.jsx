export default function StatCard({ label, value, note }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-surface/40 p-6 shadow-glass backdrop-blur-md transition-all hover:border-primary/30 hover:bg-surface/60">
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/20 blur-2xl transition-all group-hover:bg-primary/30"></div>
      <p className="text-sm font-medium tracking-wide text-gray-400 uppercase">{label}</p>
      <h3 className="mt-4 text-4xl font-black tracking-tight text-white font-display group-hover:text-primary transition-colors">{value}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-500 font-light">{note}</p>
    </div>
  );
}
