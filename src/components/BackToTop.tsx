import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`glass-card fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full text-lg text-text-primary transition-all duration-300 hover:scale-110 hover:border-accent hover:bg-accent hover:text-[#0a0e17] hover:shadow-[0_0_40px_rgba(212,163,115,0.2)] ${
        visible ? "visible opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <i className="fa-solid fa-arrow-up" />
    </button>
  );
}
