import SectionHeader from "./SectionHeader";
import { BLOG_POSTS } from "../data/portfolio";

export default function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-[1200px] border-t border-white/5 px-6 py-20">
      <SectionHeader
        icon="fa-solid fa-pen-fancy"
        tag="Writing"
        title="Blog"
        accent="Posts"
        description="Walkthroughs, security concepts, and practical insights from my learning journey."
      />
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.title}
            className="glass-card rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/10 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5),0_0_40px_rgba(212,163,115,0.04)]"
          >
            <div className="mb-2 flex items-center gap-3 text-[0.7rem] uppercase tracking-wide text-text-muted">
              <i className={`${post.platformIcon ?? "fa-brands fa-medium"} text-accent`} />
              <span>{post.date}</span>
            </div>
            <h3 className="mb-1 text-lg font-bold text-text-primary">
              <a href={post.link} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
                {post.title}
              </a>
            </h3>
            <p className="mb-3 text-sm leading-7 text-text-secondary">{post.description}</p>
            <div className="mb-3 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-accent/5 bg-accent/[0.06] px-3 py-0.5 text-[0.6rem] font-medium uppercase tracking-wide text-text-muted transition-colors hover:border-accent/15 hover:bg-accent/10 hover:text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={post.link}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all hover:gap-3"
            >
              {post.linkLabel ?? "Read on Medium"} <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
