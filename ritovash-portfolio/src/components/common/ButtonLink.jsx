export default function ButtonLink({ href, children, variant = "primary", target }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition";

  const styles = {
    primary: "bg-white text-black hover:bg-white/90",
    secondary: "border border-white/15 bg-white/5 text-white hover:bg-white/10",
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
