import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import personal from "../../data/personal";
import SectionHeading from "../common/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="rounded-[34px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-6 sm:p-8 lg:p-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build growth that actually shows up in the numbers."
          description={personal.availability}
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <a href={`mailto:${personal.email}`} className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:bg-black/30">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-amber-200" />
              <span className="text-sm text-white/50">Email</span>
            </div>
            <p className="mt-3 break-all text-base font-medium text-white">{personal.email}</p>
          </a>

          <a href={`tel:${personal.phone}`} className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:bg-black/30">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-amber-200" />
              <span className="text-sm text-white/50">Phone</span>
            </div>
            <p className="mt-3 text-base font-medium text-white">{personal.phone}</p>
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:bg-black/30"
          >
            <div className="flex items-center gap-3">
              <Linkedin className="h-5 w-5 text-amber-200" />
              <span className="text-sm text-white/50">LinkedIn</span>
            </div>
            <p className="mt-3 text-base font-medium text-white">linkedin.com/in/ritovash</p>
          </a>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-amber-200" />
              <span className="text-sm text-white/50">Location</span>
            </div>
            <p className="mt-3 text-base font-medium text-white">{personal.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
