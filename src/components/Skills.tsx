import SectionHeader from "./SectionHeader";
import { SKILL_GROUPS } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1200px] border-t border-white/5 px-6 py-20">
      <SectionHeader
        icon="fa-solid fa-microchip"
        tag="Expertise"
        title="Core"
        accent="Skills"
        description="Technologies and tools I work with to build secure, resilient systems."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.title}
            className="glass-card rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/10 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(212,163,115,0.04)]"
          >
            <h4 className="mb-5 flex items-center gap-2 text-[0.8rem] font-bold uppercase tracking-wide text-accent">
              <i className={group.icon} />
              {group.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {group.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/[0.04] bg-white/[0.03] px-4 py-1 text-[0.72rem] text-text-secondary transition-all hover:border-accent/10 hover:bg-accent/[0.06] hover:text-text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
