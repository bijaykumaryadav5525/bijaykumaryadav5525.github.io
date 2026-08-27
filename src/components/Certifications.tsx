import SectionHeader from "./SectionHeader";
import { CERTIFICATIONS } from "../data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-[1200px] border-t border-white/5 px-6 py-20">
      <SectionHeader
        icon="fa-solid fa-certificate"
        tag="Credentials"
        title="Certifications &"
        accent="Training"
        description="Professional development and continuous learning in cybersecurity and cloud."
      />
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {CERTIFICATIONS.map((cert) => (
          <a
            key={cert.name}
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className="glass-card flex flex-wrap items-center justify-between gap-1 rounded-xl border-l-[3px] border-l-accent px-5 py-3 transition-all duration-300 hover:border-l-accent-dark hover:shadow-[0_0_30px_rgba(212,163,115,0.04)]"
          >
            <div>
              <div className="text-sm font-medium text-text-primary">{cert.name}</div>
              <div className="text-xs text-text-muted">{cert.org}</div>
            </div>
            <span className="rounded-full border border-white/5 bg-white/[0.04] px-3 py-0.5 text-[0.65rem] text-text-secondary">
              {cert.year}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
