import personal from "../../data/personal";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-base/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold font-display text-white tracking-tight">
            {personal.name.split(' ')[0]}<span className="text-primary">.</span>
          </h1>
          <p className="text-[8px] uppercase tracking-widest text-primary font-pixel mt-1">Performance</p>
        </div>

        <nav className="hidden items-center md:flex rounded-full border border-white/5 bg-surface/50 px-6 py-2 shadow-glass backdrop-blur-md">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="flex items-center">
          <a href="#contact" className="hidden md:inline-flex items-center justify-center rounded-sm border-2 border-white bg-white px-5 py-2 text-xs font-pixel text-black transition-transform hover:scale-105 pixel-borders shadow-[0_4px_0_rgba(255,255,255,0.3)] hover:shadow-none hover:translate-y-1">
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
}
