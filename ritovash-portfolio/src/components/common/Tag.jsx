export default function Tag({ children }) {
  return (
    <span className="inline-flex rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-sm text-slate-700">
      {children}
    </span>
  );
}
