import { useTypingEffect } from "../hooks/useTypingEffect";
import { TYPING_WORDS } from "../data/portfolio";
import { assetPath } from "../utils/assetPath";

export default function Hero() {
  const typed = useTypingEffect(TYPING_WORDS);

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen max-w-[1200px] flex-col-reverse items-center justify-center gap-10 px-6 pb-12 pt-32 md:flex-row md:justify-between md:gap-16 md:pt-32"
    >
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[800px] w-[800px] rounded-full opacity-70"
        style={{ background: "radial-gradient(circle, rgba(125,211,252,0.08) 0%, transparent 60%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full opacity-70"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 60%)" }}
      />

      <div className="relative z-10 flex-1 text-center md:text-left">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/10 bg-accent/10 px-5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-widest text-accent">
          <i className="fa-solid fa-shield-halved" /> Cybersecurity Student
        </span>
        <h1 className="hero-title mb-5 min-h-[1.2em] text-4xl font-black leading-tight tracking-tight text-text-primary sm:text-5xl md:text-[4.2rem]">
          <span className="border-r-4 border-accent pr-2 text-accent drop-shadow-[0_0_40px_rgba(125,211,252,0.35)]">
            {typed}
            <span className="opacity-0">|</span>
          </span>
        </h1>
        <p className="mx-auto mb-10 max-w-[520px] text-base leading-8 text-text-secondary md:mx-0 md:text-lg">
          <strong className="font-semibold text-text-primary">Cybersecurity &amp; Networking Student</strong> ·
          Ethical Hacking · Secure System Design ·
          <br className="hidden md:block" /> Building resilient digital infrastructure.
        </p>
        <div className="hero-actions flex flex-wrap justify-center gap-4 md:justify-start">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-9 py-3.5 text-sm font-bold text-[#0a0e17] shadow-[0_8px_32px_rgba(125,211,252,0.25)] transition-all hover:-translate-y-1 hover:bg-accent-dark hover:shadow-[0_12px_48px_rgba(125,211,252,0.4)]"
          >
            <i className="fa-solid fa-paper-plane" /> Say Hello
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-9 py-3.5 text-sm font-medium text-text-primary backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-accent hover:bg-accent/5"
          >
            <i className="fa-solid fa-code" /> View Projects
          </a>
        </div>
      </div>

      <div className="relative z-10 flex-shrink-0">
        <div className="relative h-[220px] w-[220px] sm:h-[260px] sm:w-[260px] md:h-[280px] md:w-[280px]">
          <div className="animate-pulse-glow absolute -inset-5 -z-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(125,211,252,0.15)_0%,transparent_70%)]" />
          <img
            src={assetPath("images/profileeee.jpeg")}
            alt="Bijay Kumar Yadav"
            className="h-full w-full rounded-full border-2 border-accent/20 object-cover shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_80px_rgba(125,211,252,0.06)] transition-all hover:scale-[1.02] hover:border-accent"
          />
        </div>
      </div>
    </section>
  );
}
