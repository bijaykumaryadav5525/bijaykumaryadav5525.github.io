import SectionHeader from "./SectionHeader";
import { EDUCATION } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-[1200px] border-t border-white/5 px-6 py-20">
      <SectionHeader
        icon="fa-solid fa-graduation-cap"
        tag="Academics"
        title=""
        accent="Education"
        description="Academic background and qualifications."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {EDUCATION.map((edu) => (
          <a
            key={edu.title}
            href={edu.link}
            target="_blank"
            rel="noreferrer"
            className="education-card glass-card rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/10 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5),0_0_40px_rgba(212,163,115,0.04)]"
          >
            {edu.image && (
              <img
                src={edu.image}
                alt={edu.institute}
                className="mb-4 h-32 w-full rounded-xl object-cover"
              />
            )}
            <div className="mb-3 text-3xl text-accent opacity-80">
              <i className={edu.icon} />
            </div>
            <h4 className="mb-1 text-base font-bold text-text-primary">{edu.title}</h4>
            <div className="text-sm font-medium text-text-secondary">{edu.institute}</div>
            <div className="mt-2 text-xs text-text-muted">{edu.meta}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
