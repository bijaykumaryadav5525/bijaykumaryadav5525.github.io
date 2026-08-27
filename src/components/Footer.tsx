const QUICK_LINKS = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Experience", href: "#experience" },
    { label: "Blog", href: "#blog" },
    { label: "Certifications", href: "#certifications" },
    { label: "Education", href: "#education" },
];

// ✅ Updated socials: GitHub, LinkedIn, Medium, Facebook, Instagram
const SOCIALS = [
    {
        icon: "fa-brands fa-github",
        href: "https://github.com/bijaykumaryadav5525",
        label: "GitHub",
    },
    {
        icon: "fa-brands fa-linkedin-in",
        href: "https://www.linkedin.com/in/bijay-kumar-yadav-6a2b3b369/", // replace with your LinkedIn URL
        label: "LinkedIn",
    },
    {
        icon: "fa-brands fa-medium-m",
        href: "https://medium.com/@bjxyz98", // replace with your Medium URL
        label: "Medium",
    },
    {
        icon: "fa-brands fa-facebook-f",
        href: "https://www.facebook.com/bijay.yadav.57459", // replace with your Facebook URL
        label: "Facebook",
    },
    {
        icon: "fa-brands fa-instagram",
        href: "https://www.instagram.com/bijayyadav413/", // replace with your Instagram URL
        label: "Instagram",
    },
];

export default function Footer() {
    return (
        <footer
            id="contact"
            className="mt-4 border-t border-[#3a302d] bg-[#2a2726] pb-10 pt-16 shadow-[0_-12px_30px_rgba(0,0,0,0.18)]"
        >
            <div className="mx-auto max-w-[1200px] px-6">
                <div className="mb-10 grid grid-cols-1 gap-10 text-center md:grid-cols-[2fr_1fr_1fr] md:text-left">
                    {/* ——— Brand ——— */}
                    <div>
                        <h2 className="mb-2 text-2xl font-extrabold text-white">
                            Bijay<span className="text-[#f59b63]">.</span>
                        </h2>
                        <p className="mx-auto max-w-[320px] text-sm font-medium leading-7 text-gray-200 md:mx-0">
                            Cybersecurity &amp; Networking student passionate about ethical hacking, network defense, and
                            secure system design. Writing about security on Medium.
                        </p>
                        <p className="mt-4 text-xs font-semibold tracking-wide text-gray-300">
                            <i className="fa-solid fa-shield-halved mr-1 text-[#f59b63]" />
                            Securing tomorrow, one line of code at a time.
                        </p>
                    </div>

                    {/* ——— Quick Links ——— */}
                    <div>
                        <h4 className="mb-4 text-xs font-bold uppercase tracking-[1.2px] text-gray-300">
                            Quick Links
                        </h4>
                        <ul className="flex flex-col items-center gap-2.5 md:items-start">
                            {QUICK_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm font-medium text-gray-200 transition-all duration-200 hover:text-[#f59b63] hover:underline hover:bg-[#f59b63]/10 hover:px-1 hover:rounded-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ——— Connect ——— */}
                    <div>
                        <h4 className="mb-4 text-xs font-bold uppercase tracking-[1.2px] text-gray-300">
                            Connect
                        </h4>
                        <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                            {SOCIALS.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.label}
                                    className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-lg text-gray-200 transition-all hover:-translate-y-1 hover:border-[#f59b63]/50 hover:bg-[#f59b63]/15 hover:text-[#f59b63]"
                                >
                                    <i className={social.icon} />
                                    {/* Icon Name Tooltip */}
                                    <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#1d1d1d] px-3 py-1 text-xs font-medium text-white shadow-lg opacity-0 transition-all duration-300 group-hover:opacity-100">
                                        {social.label}
                                    </span>
                                </a>
                            ))}
                        </div>

                        <div className="mt-5 flex flex-col items-center gap-2 md:items-start">
                            <div className="flex items-center gap-2 text-sm font-medium text-gray-200">
                                <i className="fa-solid fa-envelope w-5 text-center text-[#f59b63]" />
                                bijayyadav5525@gmail.com
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium text-gray-200">
                                <i className="fa-solid fa-phone w-5 text-center text-[#f59b63]" />
                                +977-9827717552
                            </div>
                        </div>
                    </div>
                </div>

                {/* ——— Footer Bar ——— */}
                <div className="border-t border-white/10 pt-7 text-center text-sm font-medium text-gray-300">
                    &copy; 2026{" "}
                    <span className="font-extrabold text-[#f59b63]">Bijay Kumar Yadav</span>
                    &nbsp;·&nbsp; Built with{" "}
                    <i className="fa-solid fa-heart text-[0.7rem] text-[#f59b63]" />
                    &nbsp;for cybersecurity
                </div>
            </div>
        </footer>
    );
}