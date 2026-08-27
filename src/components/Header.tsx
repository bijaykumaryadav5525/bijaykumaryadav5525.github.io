import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/portfolio";
import { assetPath } from "../utils/assetPath";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  const iconColor = scrolled ? "text-white" : "text-[#1a1a2e]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-[#d64d12] transition-all duration-300 ${
        scrolled
          ? "bg-[#e55b1c] shadow-[0_10px_24px_rgba(229,91,28,0.25)]"
          : "bg-[#e55b1c]"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center py-2.5">
          {/* Logo — compact */}
          <a href="#top" className="flex flex-shrink-0 items-center gap-3 -ml-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-extrabold text-[#e55b1c] shadow-[0_0_16px_rgba(255,255,255,0.35)]">
              BKY
            </span>
            <span className="hidden text-lg font-extrabold tracking-tight text-white sm:inline">
              Bijay Kumar Yadav
            </span>
          </a>

          {/* Right side: nav links + buttons */}
          <div className="ml-auto flex items-center gap-5">
            {/* Desktop nav links */}
            <ul className="hidden items-center gap-5 lg:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group relative text-xs font-semibold uppercase tracking-[0.08em] text-white/85 transition-colors hover:text-[#ffd1b8] whitespace-nowrap"
                  >
                    {link.label}
                    <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded bg-[#ffd1b8] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Action buttons — compact */}
            <div className="hidden items-center gap-2.5 lg:flex">
              <a
                href="#contact"
                className="rounded-full border border-white/60 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white transition-all hover:bg-white/10 whitespace-nowrap"
              >
                Contact
              </a>
              <a
                href={assetPath("pdf/Bijay Kumar YadavCV.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full bg-[#1d1d1d] px-4 py-1.5 text-xs font-bold text-white shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-all hover:scale-105 whitespace-nowrap"
              >
                <i className={`fa-solid fa-download ${iconColor}`} />
                CV
              </a>
              {/* Cyber Quiz Button - Desktop with Large Tooltip */}
              <div className="group relative">
                <a
                  href="https://netsec.bijaykumaryadav78.com.np/"   // ✅ FIXED URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-[#e55b1c] shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] whitespace-nowrap"
                >
                  <i className="fa-solid fa-brain" />
                  Network/Cyber Quiz
                </a>
                {/* Tooltip - Now larger */}
                <span className="pointer-events-none absolute top-full left-1/2 z-50 mt-2 w-max max-w-[320px] -translate-x-1/2 rounded-md bg-[#1d1d1d] px-4 py-3 text-center text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Practice MCQs about networking and cyber security (NetSec)
                </span>
              </div>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button
            className={`ml-3 text-2xl lg:hidden ${iconColor}`}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <ul className="flex flex-col gap-1 rounded-b-2xl border-t border-[#d64d12] bg-[#e55b1c] pb-4 pt-2 lg:hidden">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-sm font-semibold uppercase tracking-[0.1em] text-white/90 hover:text-[#ffd1b8] hover:underline hover:decoration-[#ffd1b8] hover:decoration-2 hover:underline-offset-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-2 px-4">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="rounded-full border border-white/60 bg-white/5 px-5 py-2 text-center text-sm font-semibold text-white"
              >
                Contact
              </a>
              <a
                href={assetPath("pdf/Bijay Kumar YadavCV.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2 rounded-full bg-[#1d1d1d] px-5 py-2 text-center text-sm font-bold text-white"
              >
                <i className={`fa-solid fa-download ${iconColor}`} />
                CV
              </a>
              {/* Cyber Quiz Button - Mobile with Large Tooltip */}
              <div className="group relative">
                <a
                  href="https://netsec.bijaykumaryadav78.com.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2 text-center text-sm font-bold text-[#e55b1c] shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  <i className="fa-solid fa-brain" />
                  Cyber Quiz
                </a>
                {/* Tooltip - Now larger */}
                <span className="pointer-events-none absolute top-full left-1/2 z-50 mt-2 w-max max-w-[320px] -translate-x-1/2 rounded-md bg-[#1d1d1d] px-4 py-3 text-center text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Practice MCQs about networking and cyber security (NetSec)
                </span>
              </div>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
