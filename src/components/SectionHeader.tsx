import type { ReactNode } from "react";

export default function SectionHeader({
  icon,
  tag,
  title,
  accent,
  description,
}: {
  icon: string;
  tag: string;
  title: ReactNode;
  accent?: ReactNode;
  description: string;
}) {
  return (
    <div className="mb-14 text-center">
      <span className="mb-3 inline-block rounded-full border border-accent/5 bg-accent/[0.06] px-5 py-1 text-[0.7rem] font-semibold uppercase tracking-[1.5px] text-accent">
        <i className={`${icon} mr-2`} />
        {tag}
      </span>
      <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl md:text-[2.8rem]">
        {title} {accent && <span className="text-accent drop-shadow-[0_0_30px_rgba(125,211,252,0.35)]">{accent}</span>}
      </h2>
      <p className="mx-auto mt-3 max-w-[560px] text-base text-text-secondary">{description}</p>
    </div>
  );
}
