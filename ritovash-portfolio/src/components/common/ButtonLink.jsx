export default function ButtonLink({ href, children, variant = "primary", target }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition";

  const styles = {
    primary: "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg shadow-cyan-200/50 hover:from-sky-600 hover:to-cyan-600 border-2 border-sky-600 font-['Press_Start_2P'] text-xs",
    secondary: "bg-white text-slate-900 border-2 border-slate-300 hover:bg-slate-100 font-['Press_Start_2P'] text-xs",
  };

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </a>
  );
}
