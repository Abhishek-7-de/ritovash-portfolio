export default function Tag({ children }) {
  return (
    <span className="inline-flex items-center justify-center bg-surface border-2 border-white/20 px-3 py-1.5 text-[10px] font-pixel text-gray-400 shadow-[0_4px_0_rgba(255,255,255,0.1)] pixel-borders transition-all hover:-translate-y-1 hover:border-primary/50 hover:text-white cursor-default hover:shadow-none">
      {children}
    </span>
  );
}
