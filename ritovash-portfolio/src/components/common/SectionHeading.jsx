export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-12 relative">
      <div className="absolute -top-10 -left-10 h-32 w-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      {eyebrow && (
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="h-1.5 w-1.5 bg-primary pixel-borders"></span>
          <p className="text-[10px] uppercase text-primary font-pixel leading-tight pt-1">{eyebrow}</p>
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white font-display mb-6">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-lg leading-relaxed text-gray-400 font-light">
          {description}
        </p>
      )}
    </div>
  );
}
