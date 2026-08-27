import SectionHeader from "./SectionHeader";
import { CASE_STUDIES } from "../data/portfolio";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto max-w-[1200px] border-t border-white/5 px-6 py-20">
      <SectionHeader
        icon="fa-solid fa-magnifying-glass-chart"
        tag="Analysis"
        title="Case"
        accent="Studies"
        description="In-depth security analyses from real-world incidents and attacks."
      />
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        {CASE_STUDIES.map((study) => (
          <a
            key={study.title}
            href={study.link}
            target="_blank"
            rel="noreferrer"
            className="glass-card cursor-pointer rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/10 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5),0_0_40px_rgba(212,163,115,0.04)]"
          >
            <div className="mb-3 text-2xl text-accent">
              <i className={study.icon} />
            </div>
            <h3 className="mb-2 text-lg font-bold text-text-primary">{study.title}</h3>
            <p className="mb-3 text-sm leading-7 text-text-secondary">{study.description}</p>
            <span className="inline-block text-[0.7rem] font-medium tracking-wide text-accent opacity-70">
              {study.tag}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
