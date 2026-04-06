import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import personal from "../../data/personal";
import ButtonLink from "../common/ButtonLink";

export default function Hero() {
  return (
    <section className="grid gap-10 pb-14 pt-12 md:pb-20 md:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8 rounded-[32px] border border-slate-300/50 bg-white/95 p-8 shadow-[0_32px_64px_rgba(15,23,42,0.12)]"
      >
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full border border-sky-500/50 bg-sky-500/10 px-4 py-1 text-xs font-['Press_Start_2P'] text-slate-900">
            Performance Marketing Portfolio
          </span>
          <span className="rounded-full border border-cyan-500/50 bg-cyan-500/10 px-4 py-1 text-xs font-['Press_Start_2P'] text-slate-900">
            5+ Years Experience
          </span>
        </div>

        <div className="space-y-5">
          <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            <span className="block bg-gradient-to-r from-slate-900 via-sky-700 to-cyan-700 bg-clip-text text-transparent">
              {personal.subtitle}
            </span>
          </h2>
          <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            {personal.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <ButtonLink href="#work">
            View case studies <ArrowUpRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <ButtonLink href={personal.resumeLink} variant="secondary" target="_blank">
            Download resume
          </ButtonLink>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.65, delay: 0.1 }}
        className="relative"
      >
        <div className="absolute -left-10 top-8 h-24 w-24 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute -right-10 bottom-8 h-32 w-32 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="overflow-hidden rounded-[32px] border-4 border-sky-500 bg-gradient-to-br from-slate-50 to-cyan-100 shadow-[0_20px_60px_rgba(14,165,233,0.15)]">
          <img
            src={personal.heroImage}
            alt={personal.name}
            className="h-full max-h-[620px] w-full object-cover"
          />
        </div>

        <div className="absolute bottom-4 left-4 flex items-end gap-3">
          <div className="h-16 w-16 rounded-t-3xl bg-slate-900 border-4 border-slate-800" />
          <div className="h-12 w-12 rounded-t-3xl bg-slate-700 border-4 border-slate-800" />
        </div>

        <div className="absolute top-12 right-8 h-8 w-8 rounded-full bg-yellow-300 border-2 border-yellow-400 animate-[floatUpDown_3s_ease-in-out_infinite] shadow-lg shadow-yellow-300/30" />
        <div className="absolute top-28 right-20 h-8 w-8 rounded-full bg-yellow-300 border-2 border-yellow-400 animate-[floatUpDown_3s_ease-in-out_infinite] shadow-lg shadow-yellow-300/30" />
      </motion.div>
    </section>
  );
}
