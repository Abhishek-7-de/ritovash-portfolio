import personal from "../../data/personal";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-300/40 bg-white/95 backdrop-blur-xl shadow-sm shadow-slate-300/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-600 font-['Press_Start_2P']">Portfolio</p>
          <h1 className="text-lg font-semibold text-slate-900 font-['Press_Start_2P']">{personal.name}</h1>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-slate-700 transition hover:text-slate-900 font-['Press_Start_2P'] text-xs"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
