import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import personal from "../../data/personal";
import SectionHeading from "../common/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="relative overflow-hidden rounded-[40px] border border-white/5 bg-surface/50 p-8 sm:p-12 lg:p-16 shadow-glass backdrop-blur-xl">
        {/* Abstract glowing backgrounds for the contact section */}
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[50%] rounded-full bg-primary/10 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[40%] rounded-full bg-accent/10 blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10">
          <SectionHeading
            eyebrow="Open for Work"
            title="Let's build growth that actually shows up in the numbers."
            description={personal.availability}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <a href={`mailto:${personal.email}`} className="group rounded-3xl border border-white/5 bg-base/80 p-6 transition-all hover:border-primary/30 hover:bg-surface/80 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-6 transition-colors group-hover:bg-primary/20">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-display tracking-widest uppercase text-gray-500 mb-2">Email</p>
                <p className="break-all text-base font-semibold text-white group-hover:text-primary transition-colors">{personal.email}</p>
              </div>
            </a>

            <a href={`tel:${personal.phone}`} className="group rounded-3xl border border-white/5 bg-base/80 p-6 transition-all hover:border-secondary/30 hover:bg-surface/80 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 mb-6 transition-colors group-hover:bg-secondary/20">
                <Phone className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-xs font-display tracking-widest uppercase text-gray-500 mb-2">Phone</p>
                <p className="text-base font-semibold text-white group-hover:text-secondary transition-colors">{personal.phone}</p>
              </div>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-white/5 bg-base/80 p-6 transition-all hover:border-[#0A66C2]/30 hover:bg-surface/80 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A66C2]/10 mb-6 transition-colors group-hover:bg-[#0A66C2]/20">
                <Linkedin className="h-5 w-5 text-[#0A66C2]" />
              </div>
              <div>
                <p className="text-xs font-display tracking-widest uppercase text-gray-500 mb-2">LinkedIn</p>
                <p className="text-base font-semibold text-white group-hover:text-[#0A66C2] transition-colors">linkedin.com/in/ritovash</p>
              </div>
            </a>

            <div className="rounded-3xl border border-white/5 bg-base/80 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 mb-6">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <div>
                <p className="text-xs font-display tracking-widest uppercase text-gray-500 mb-2">Location</p>
                <p className="text-base font-semibold text-white">{personal.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
