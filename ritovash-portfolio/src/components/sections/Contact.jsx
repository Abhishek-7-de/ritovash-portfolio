import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import personal from "../../data/personal";
import SectionHeading from "../common/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="rounded-[34px] border border-slate-300 bg-gradient-to-br from-slate-50 via-cyan-50 to-sky-50 p-6 sm:p-8 lg:p-10 shadow-sm shadow-slate-300/20">
        <SectionHeading
          eyebrow="Level 4: Contact"
          title="Let’s build growth that actually shows up in the numbers."
          description={personal.availability}
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <a href={`mailto:${personal.email}`} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:bg-slate-100">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-sky-600" />
              <span className="text-sm text-slate-900 font-['Press_Start_2P'] text-xs">Email</span>
            </div>
            <p className="mt-3 break-all text-base font-medium text-slate-900">{personal.email}</p>
          </a>

          <a href={`tel:${personal.phone}`} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:bg-slate-100">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-cyan-600" />
              <span className="text-sm text-slate-900 font-['Press_Start_2P'] text-xs">Phone</span>
            </div>
            <p className="mt-3 text-base font-medium text-slate-900">{personal.phone}</p>
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:bg-slate-100"
          >
            <div className="flex items-center gap-3">
              <Linkedin className="h-5 w-5 text-sky-600" />
              <span className="text-sm text-slate-900 font-['Press_Start_2P'] text-xs">LinkedIn</span>
            </div>
            <p className="mt-3 text-base font-medium text-slate-900">linkedin.com/in/ritovash</p>
          </a>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-slate-700" />
              <span className="text-sm text-slate-900 font-['Press_Start_2P'] text-xs">Location</span>
            </div>
            <p className="mt-3 text-base font-medium text-slate-900">{personal.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
