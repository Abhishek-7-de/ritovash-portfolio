export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-base mt-12">
      <div className="mx-auto flex flex-col md:flex-row justify-between max-w-7xl px-4 py-8 text-sm text-gray-400 sm:px-6 lg:px-8 items-center gap-4">
        <p className="font-display">&copy; {new Date().getFullYear()} Ritovash Mazumder. All rights reserved.</p>
        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">Built for performance.</p>
      </div>
    </footer>
  );
}
