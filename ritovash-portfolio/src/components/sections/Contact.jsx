import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import personal from "../../data/personal";
import SectionHeading from "../common/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="rounded-[34px] border-4 border-red-500 bg-gradient-to-br from-red-500/10 to-red-500/5 p-6 sm:p-8 lg:p-10">
        <SectionHeading
          eyebrow="Level 4: Contact"
          title="Let’s build growth that actually shows up in the numbers."
          description={personal.availability}
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <a href={`mailto:${personal.email}`} className="rounded-2xl border-2 border-yellow-500 bg-yellow-500/10 p-5 transition hover:bg-yellow-500/20">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-yellow-600" />
              <span className="text-sm text-black font-['Press_Start_2P'] text-xs">Email</span>
            </div>
            <p className="mt-3 break-all text-base font-medium text-black">{personal.email}</p>
          </a>

          <a href={`tel:${personal.phone}`} className="rounded-2xl border-2 border-blue-500 bg-blue-500/10 p-5 transition hover:bg-blue-500/20">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-black font-['Press_Start_2P'] text-xs">Phone</span>
            </div>
            <p className="mt-3 text-base font-medium text-black">{personal.phone}</p>
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border-2 border-green-500 bg-green-500/10 p-5 transition hover:bg-green-500/20"
          >
            <div className="flex items-center gap-3">
              <Linkedin className="h-5 w-5 text-green-600" />
              <span className="text-sm text-black font-['Press_Start_2P'] text-xs">LinkedIn</span>
            </div>
            <p className="mt-3 text-base font-medium text-black">linkedin.com/in/ritovash</p>
          </a>

          <div className="rounded-2xl border-2 border-red-500 bg-red-500/10 p-5">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-red-600" />
              <span className="text-sm text-black font-['Press_Start_2P'] text-xs">Location</span>
            </div>
            <p className="mt-3 text-base font-medium text-black">{personal.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
