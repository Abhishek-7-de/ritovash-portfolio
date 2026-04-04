export default function Tag({ children }) {
  return (
    <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
      {children}
    </span>
  );
}
