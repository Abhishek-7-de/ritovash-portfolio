export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="text-sm uppercase tracking-[0.24em] text-sky-700 font-['Press_Start_2P'] text-xs">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl font-['Press_Start_2P'] bg-gradient-to-r from-slate-900 via-sky-700 to-cyan-700 bg-clip-text text-transparent">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
