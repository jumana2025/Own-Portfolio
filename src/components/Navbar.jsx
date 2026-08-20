import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav
            initial={{
                opacity: 0,
                y: -20,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
            }}
            className="
                fixed
                left-0
                top-0
                z-50
                flex
                w-full
                items-center
                justify-between
                px-6
                py-5
                md:px-12
                lg:px-16
            "
        >

            {/* ================= LOGO ================= */}

            <a
                href="#home"
                className="
                    text-lg
                    font-black
                    tracking-[-0.06em]
                    md:text-xl
                "
            >
                Jumanap<span className="font-light">.</span>
            </a>


            {/* ================= MENU ================= */}

            <div
                className="
                    hidden
                    items-center
                    gap-7
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    md:flex
                "
            >

                <a
                    href="#home"
                    className="
                        relative
                        transition-opacity
                        duration-300
                        hover:opacity-50
                    "
                >
                    Home
                </a>

                <a
                    href="#about"
                    className="
                        relative
                        transition-opacity
                        duration-300
                        hover:opacity-50
                    "
                >
                    About
                </a>

                <a
                    href="#skills"
                    className="
                        relative
                        transition-opacity
                        duration-300
                        hover:opacity-50
                    "
                >
                    Skills
                </a>

                <a
                    href="#projects"
                    className="
                        relative
                        transition-opacity
                        duration-300
                        hover:opacity-50
                    "
                >
                    Projects
                </a>

                <a
                    href="#contact"
                    className="
                        relative
                        transition-opacity
                        duration-300
                        hover:opacity-50
                    "
                >
                    Contact
                </a>

            </div>


            {/* ================= AVAILABLE ================= */}

            <div
                className="
                    flex
                    items-center
                    gap-2
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    md:text-[9px]
                "
            >

                <span
                    className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-black
                    "
                />

                Available

            </div>

        </motion.nav>
    );
};

export default Navbar;