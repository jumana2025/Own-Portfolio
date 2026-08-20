import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const closeOnEscape = (event) => {
            if (event.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", closeOnEscape);
        return () => window.removeEventListener("keydown", closeOnEscape);
    }, []);

    const closeMenu = () => setIsOpen(false);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-0 top-0 z-50 w-full border-b border-[#241814]/10 bg-[#F4EBDD]/90 px-5 py-4 text-[#241814] backdrop-blur-md sm:px-6 md:px-12 md:py-5 lg:px-16"
        >
            <div className="flex items-center justify-between">
                <a href="#home" onClick={closeMenu} className="text-lg font-black tracking-[-0.06em] md:text-xl">
                    Jumanap<span className="font-light">.</span>
                </a>

                <div className="hidden items-center gap-7 text-[9px] font-medium uppercase tracking-[0.18em] md:flex">
                    {links.map((link) => (
                        <a key={link.href} href={link.href} className="transition-opacity duration-300 hover:opacity-50">
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="hidden items-center gap-2 text-[9px] uppercase tracking-[0.2em] md:flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7A263A]" />
                    Available
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen((open) => !open)}
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#241814]/20 transition-colors hover:bg-[#7A263A] hover:text-[#F4EBDD] md:hidden"
                >
                    {isOpen ? <X size={19} /> : <Menu size={20} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-navigation"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden md:hidden"
                    >
                        <div className="flex flex-col gap-1 py-4 text-sm font-semibold uppercase tracking-[0.16em]">
                            {links.map((link) => (
                                <a key={link.href} href={link.href} onClick={closeMenu} className="rounded-md px-3 py-3 transition-colors hover:bg-[#7A263A] hover:text-[#F4EBDD]">
                                    {link.label}
                                </a>
                            ))}
                            <p className="mt-2 flex items-center gap-2 px-3 text-[9px] font-medium tracking-[0.2em] text-[#241814]/55">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#7A263A]" /> Available for work
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
