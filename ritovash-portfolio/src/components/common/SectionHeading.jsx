export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="text-sm uppercase tracking-[0.24em] text-amber-200/80">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
