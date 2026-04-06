export default function StatCard({ label, value, note }) {
  return (
    <div className="rounded-3xl border border-slate-300 bg-white p-5 shadow-lg shadow-slate-300/20">
      <p className="text-sm text-slate-500">{label}</p>
      <h3 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{value}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{note}</p>
    </div>
  );
}
