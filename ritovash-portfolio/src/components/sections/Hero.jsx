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
        className="space-y-8 rounded-[32px] border border-slate-300/60 bg-white/90 p-8 shadow-lg shadow-slate-400/20"
      >
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1 text-xs font-['Press_Start_2P'] text-slate-900">
            Performance Marketing Portfolio
          </span>
          <span className="rounded-full border border-lime-500/30 bg-lime-500/10 px-4 py-1 text-xs font-['Press_Start_2P'] text-slate-900">
            5+ Years Experience
          </span>
        </div>

        <div className="space-y-5">
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl lg:text-7xl font-['Press_Start_2P']">
            {personal.subtitle}
          </h2>
          <p className="max-w-2xl text-base leading-7 text-gray-800 sm:text-lg">
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
        <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-yellow-400/20 blur-3xl" />
        <div className="absolute -right-4 bottom-8 h-32 w-32 rounded-full bg-green-400/10 blur-3xl" />

        <div className="overflow-hidden rounded-[32px] border-4 border-green-500 bg-green-500/5 shadow-glow">
          <img
            src={personal.heroImage}
            alt={personal.name}
            className="h-full max-h-[620px] w-full object-cover"
          />
        </div>

        {/* Mario Pipes */}
        <div className="absolute bottom-0 left-0 w-8 h-16 bg-green-600 border-2 border-green-800"></div>
        <div className="absolute bottom-0 right-0 w-8 h-20 bg-green-600 border-2 border-green-800"></div>
      </motion.div>
    </section>
  );
}
