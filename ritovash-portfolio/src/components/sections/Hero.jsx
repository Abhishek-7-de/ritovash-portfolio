import { ArrowRight, ChevronRight, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";
import personal from "../../data/personal";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 z-10"
        >
          {/* Level Up Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm bg-retroGreen/10 border-2 border-retroGreen/30 text-xs font-pixel text-retroGreen shadow-[0_0_15px_rgba(0,204,0,0.2)] animate-mario-float" style={{ animationDuration: '4s' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full bg-retroGreen opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 bg-retroGreen pixel-borders"></span>
            </span>
            <span className="pt-0.5">PLAYER 1 READY</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight leading-[1.1]">
              <span className="block text-white">Performance</span>
              <span className="block text-gradient-primary drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">Marketing & Growth</span>
            </h1>
            <p className="max-w-xl text-lg sm:text-xl text-gray-400 leading-relaxed font-light">
              {personal.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#work" className="group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:-translate-y-1 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
              Start Game <Gamepad2 className="h-4 w-4 transition-transform group-hover:rotate-12" />
            </a>
            <a href={personal.resumeLink} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20">
              View Stats <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-white" />
            </a>
          </div>
          
          {/* Pixel Stats */}
          <div className="pt-8 border-t border-white/5 flex gap-10">
            <div>
              <p className="text-2xl font-pixel text-retroCoin drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">5+</p>
              <p className="text-[10px] text-gray-500 font-pixel uppercase mt-3">Years Exp</p>
            </div>
            <div>
              <p className="text-2xl font-pixel text-retroCoin drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">$2M+</p>
              <p className="text-[10px] text-gray-500 font-pixel uppercase mt-3">Ad Spend Managed</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 hidden lg:block"
        >
          <div className="relative mx-auto max-w-md aspect-[4/5]">
            {/* Dark premium card frame with neon retro borders */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 via-surface/50 to-accent/20 border-2 border-primary/30 backdrop-blur-sm p-3 rotate-3 transform transition-transform hover:rotate-6 duration-500 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <div className="h-full w-full rounded-lg bg-surface border-2 border-white/10 overflow-hidden relative">
                 <img
                  src={personal.heroImage}
                  alt={personal.name}
                  className="h-full w-full object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent opacity-80" />
                {/* Scanline overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjIiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] pointer-events-none mix-blend-overlay"></div>
              </div>
            </div>
            
            {/* Retro Decal */}
            <div className="absolute -bottom-4 -left-8 bg-surface/90 backdrop-blur-md border-b-4 border-r-4 border-t border-l border-primary/50 px-5 py-4 shadow-neonCoin flex items-center gap-4 animate-mario-float" style={{ animationDuration: '3s' }}>
              <div>
                <p className="text-[10px] font-pixel text-white mb-1">TARGET ROI</p>
                <p className="text-sm font-pixel text-retroGreen drop-shadow-[0_0_5px_rgba(0,204,0,0.5)]">300% &uarr;</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
