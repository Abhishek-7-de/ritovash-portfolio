export default function ButtonLink({ href, children, variant = "primary", target }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition";

  const styles = {
    primary: "bg-red-500 text-white hover:bg-red-600 border-2 border-red-700 font-['Press_Start_2P'] text-xs",
    secondary: "border-2 border-blue-500 bg-blue-500/10 text-blue-800 hover:bg-blue-500/20 font-['Press_Start_2P'] text-xs",
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
