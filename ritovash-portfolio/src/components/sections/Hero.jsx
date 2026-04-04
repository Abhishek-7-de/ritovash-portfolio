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
        className="space-y-8"
      >
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-sm text-amber-200">
            Performance Marketing Portfolio
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/75">
            5+ Years Experience
          </span>
        </div>

        <div className="space-y-5">
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
            {personal.subtitle}
          </h2>
          <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
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
        <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute -right-4 bottom-8 h-32 w-32 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-glow">
          <img
            src={personal.heroImage}
            alt={personal.name}
            className="h-full max-h-[620px] w-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
