export default function Footer() {
  return (
    <footer className="border-t border-slate-300/40 bg-white/80">
      <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-slate-600 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Ritovash Mazumder. Built for performance-led portfolio presentation.
      </div>
    </footer>
  );
}
