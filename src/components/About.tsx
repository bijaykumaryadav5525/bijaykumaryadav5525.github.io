import { assetPath } from "../utils/assetPath";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1200px] border-t border-white/5 px-6 py-20">
      <div className="flex flex-col items-center gap-12 text-center md:flex-row md:text-left lg:gap-20">
        <div className="flex-shrink-0">
          <img
            src={assetPath("images/profileeee.jpeg")}
            alt="Bijay Kumar Yadav"
            className="mx-auto h-[220px] w-[220px] rounded-2xl border border-white/5 object-cover shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all hover:scale-[1.02] hover:border-accent/20"
          />
        </div>
        <div className="flex-1">
          <h3 className="mb-3 text-2xl font-bold text-text-primary sm:text-3xl">
            About <span className="text-accent">Me</span>
          </h3>
          <p className="mb-4 text-base leading-8 text-text-secondary">
            I'm <strong className="text-text-primary">Bijay Kumar Yadav</strong>, a passionate cybersecurity &amp;
            networking student at <strong className="text-text-primary">Islington College</strong> (affiliated with
            London Metropolitan University). My journey into the world of security began with a simple curiosity
            about how systems work — and how they break. Today, I'm dedicated to mastering the art of{" "}
            <strong className="text-text-primary">ethical hacking, network defense, and secure system design</strong>.
          </p>
          <p className="mb-4 text-base leading-8 text-text-secondary">
            I believe that cybersecurity is not just about tools — it's about{" "}
            <strong className="text-text-primary">mindset</strong>. I enjoy dissecting complex systems, uncovering
            vulnerabilities, and building solutions that make the digital world safer. I regularly write about my
            learnings on <strong className="text-text-primary">Medium</strong>, sharing walkthroughs, security
            concepts, and practical insights with the community.
          </p>
          <p className="mb-6 text-base leading-8 text-text-secondary">
            My long-term vision is to become a{" "}
            <strong className="text-text-primary">cybersecurity and network security specialist</strong> who
            bridges the gap between technical depth and strategic thinking — helping organizations stay ahead of
            evolving threats while fostering a culture of security-first design.
          </p>
          <div className="flex justify-center gap-10 border-t border-white/5 pt-7 md:justify-start">
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight text-accent drop-shadow-[0_0_30px_rgba(125,211,252,0.35)]">
               8+
              </span>
              <span className="text-xs uppercase tracking-wide text-text-muted">Projects</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight text-accent drop-shadow-[0_0_30px_rgba(125,211,252,0.35)]">
                11+
              </span>
              <span className="text-xs uppercase tracking-wide text-text-muted">Certifications</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight text-accent drop-shadow-[0_0_30px_rgba(125,211,252,0.35)]">
                10+
              </span>
              <span className="text-xs uppercase tracking-wide text-text-muted">Blog Posts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
