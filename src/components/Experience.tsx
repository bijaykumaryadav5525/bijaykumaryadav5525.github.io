import SectionHeader from "./SectionHeader";
import { EXPERIENCE } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1200px] border-t border-white/5 px-6 py-20">
      <SectionHeader
        icon="fa-solid fa-briefcase"
        tag="Career"
        title="Professional"
        accent="Experience"
        description="Hands-on industry exposure in network security and infrastructure."
      />
      <div className="flex flex-col gap-6">
        {EXPERIENCE.map((exp) => (
          <div
            key={exp.role}
            className="glass-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/10 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5),0_0_40px_rgba(212,163,115,0.04)]"
          >
            <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
              <h3 className="text-xl font-bold text-text-primary">{exp.role}</h3>
              <div className="flex flex-col items-end">
                <span className="text-sm font-medium text-accent">{exp.company}</span>
                <a
                  href={exp.companyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 text-sm font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-text-primary"
                >
                  LINK
                </a>
              </div>
            </div>
            <div className="mb-5 flex flex-wrap gap-5 border-b border-white/5 pb-4 text-sm text-text-muted">
              <span>
                <i className="fa-solid fa-location-dot mr-2 w-5 text-center text-accent" />
                {exp.location}
              </span>
              <span>
                <i className="fa-solid fa-calendar-days mr-2 w-5 text-center text-accent" />
                {exp.period}
              </span>
            </div>
            <ul className="flex flex-col gap-2.5">
              {exp.points.map((point) => (
                <li key={point} className="relative pl-6 text-sm leading-7 text-text-secondary">
                  <span className="absolute left-0 text-accent">▹</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
