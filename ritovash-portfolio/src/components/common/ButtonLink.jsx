export default function ButtonLink({ href, children, variant = "primary", target }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all group";

  const styles = {
    primary: "bg-primary text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:bg-primary/90 hover:scale-105",
    secondary: "bg-white/5 text-white border border-white/10 hover:bg-white/10",
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
