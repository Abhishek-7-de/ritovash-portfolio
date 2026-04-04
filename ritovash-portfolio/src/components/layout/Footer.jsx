export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-white/45 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Ritovash Mazumder. Built for performance-led portfolio presentation.
      </div>
    </footer>
  );
}
