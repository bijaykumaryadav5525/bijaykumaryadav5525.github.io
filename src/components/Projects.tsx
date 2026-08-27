import SectionHeader from "./SectionHeader";
import { PROJECTS } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[1200px] border-t border-white/5 px-6 py-20">
      <SectionHeader
        icon="fa-solid fa-folder-open"
        tag="Work"
        title="Projects"
        description="Development work and hands-on security implementations."
      />

      <h3 className="mb-7 flex items-center gap-2 text-lg font-semibold text-text-primary">
        <i className="fa-solid fa-code text-accent drop-shadow-[0_0_20px_rgba(212,163,115,0.35)]" /> Featured
        Projects
      </h3>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="glass-card flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/10 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5),0_0_40px_rgba(212,163,115,0.04)]"
          >
            <div className="mb-3 text-3xl" style={{ color: project.color }}>
              <i className={project.icon} />
            </div>
            <h3 className="mb-1 text-lg font-bold text-text-primary">{project.title}</h3>
            <div className="mb-3 text-xs font-medium tracking-wide text-text-muted">{project.tech}</div>
            <p className="mb-5 flex-1 text-sm leading-7 text-text-secondary">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/10 bg-accent/[0.06] px-5 py-1.5 text-[0.78rem] font-medium text-text-primary transition-all hover:border-accent hover:bg-accent hover:text-[#0a0e17] hover:shadow-[0_0_30px_rgba(212,163,115,0.15)]"
            >
              GitHub <i className="fa-brands fa-github" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
