import React from "react";
import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";

const About = () => {
    return (
        <section
            id="about"
            className="
                relative
                z-20
                -mt-6
                overflow-hidden

                bg-[#F4EBDD]
                text-[#241814]
            "
        >
            <div className="px-6 py-20 md:px-12 md:py-28 lg:px-16">

                {/* ================= HEADER ================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                        flex
                        items-center
                        justify-between
                    "
                >
                    <div className="flex items-center gap-3">

                        <span
                            className="
                                h-2
                                w-2
                                rounded-full
                                bg-[#7A263A]
                            "
                        />

                        <p
                            className="
                                text-[10px]
                                font-medium
                                uppercase
                                tracking-[0.3em]
                                text-[#241814]
                            "
                        >
                            About Me
                        </p>

                    </div>

                    <p
                        className="
                            text-[10px]
                            uppercase
                            tracking-[0.3em]
                            text-[#241814]/40
                        "
                    >
                        01 / 04
                    </p>

                </motion.div>


                {/* ================= CONTENT ================= */}

                <div
                    className="
                        mt-16
                        grid
                        grid-cols-1
                        gap-12

                        md:mt-24
                        md:grid-cols-12
                        md:items-center
                    "
                >

                    {/* =================================================
                        IMAGE
                    ================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 100,
                            scale: 0.96,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 1,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="
                            group
                            relative
                            overflow-hidden

                            bg-[#241814]/10

                            md:col-span-4
                        "
                    >

                        <div className="aspect-[4/5]">

                            <img
                                src="/hero.jpeg"
                                alt="Full Stack Developer"
                                className="
                                    h-full
                                    w-full
                                    object-cover

                                    transition-transform
                                    duration-1000

                                    group-hover:scale-105
                                "
                            />

                        </div>


                        {/* IMAGE OVERLAY */}

                        <div
                            className="
                                absolute
                                inset-0

                                bg-[#7A263A]/0

                                transition-all
                                duration-500

                                group-hover:bg-[#7A263A]/10
                            "
                        />


                        {/* IMAGE LABEL */}

                        <div
                            className="
                                absolute
                                bottom-5
                                left-5
                            "
                        >
                            <p
                                className="
                                    text-[9px]
                                    uppercase
                                    tracking-[0.3em]

                                    text-[#F4EBDD]

                                    mix-blend-difference
                                "
                            >
                                Full Stack Developer
                            </p>
                        </div>

                    </motion.div>


                    {/* =================================================
                        DESCRIPTION
                    ================================================= */}

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.15,
                                },
                            },
                        }}
                        className="
                            md:col-span-6
                            md:col-start-6
                        "
                    >

                        {/* =================================================
                            MAIN DESCRIPTION
                        ================================================= */}

                        <motion.h2
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 50,
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.8,
                                        ease: [0.16, 1, 0.3, 1],
                                    },
                                },
                            }}
                            className="
                                max-w-2xl

                                text-2xl
                                font-medium
                                leading-[1.05]
                                tracking-[-0.03em]

                                text-[#241814]

                                md:text-4xl
                                lg:text-5xl
                            "
                        >
                            I'm a{" "}
                            <span className="italic text-[#7A263A]">
                                Full Stack Developer
                            </span>{" "}
                            who loves turning ideas into modern digital experiences.
                        </motion.h2>


                        {/* =================================================
                            PARAGRAPH 1
                        ================================================= */}

                        <motion.p
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 40,
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.7,
                                    },
                                },
                            }}
                            className="
                                mt-8
                                max-w-xl

                                text-sm
                                leading-7

                                text-[#241814]/65

                                md:text-base
                            "
                        >
                            I enjoy creating clean, responsive and functional web
                            applications. I work across both frontend and backend to turn
                            ideas into complete digital products.
                        </motion.p>


                        {/* =================================================
                            PARAGRAPH 2
                        ================================================= */}

                        <motion.p
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 40,
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.7,
                                    },
                                },
                            }}
                            className="
                                mt-4
                                max-w-xl

                                text-sm
                                leading-7

                                text-[#241814]/65

                                md:text-base
                            "
                        >
                            I focus on writing clean code, creating simple user experiences
                            and continuously learning new technologies.
                        </motion.p>


                        {/* =================================================
                            BUTTONS
                        ================================================= */}

                        <motion.div
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 40,
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.7,
                                    },
                                },
                            }}
                            className="
                                mt-10
                                flex
                                flex-wrap
                                gap-3
                            "
                        >

                            {/* =================================================
                                RESUME
                            ================================================= */}

                            <a
                                href="/jumanap.in.pdf"
                                download
                                className="
                                    group

                                    inline-flex
                                    items-center
                                    gap-3

                                    bg-[#7A263A]

                                    px-6
                                    py-4

                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]

                                    text-[#F4EBDD]

                                    transition-all
                                    duration-300

                                    hover:-translate-y-1

                                    hover:bg-[#241814]
                                "
                            >
                                Download Resume

                                <ArrowDownToLine
                                    size={15}
                                    className="
                                        transition-transform
                                        duration-300

                                        group-hover:translate-y-1
                                    "
                                />

                            </a>


                            {/* =================================================
                                CONTACT
                            ================================================= */}

                            <a
                                href="#contact"
                                className="
                                    group

                                    inline-flex
                                    items-center
                                    gap-3

                                    border
                                    border-[#241814]

                                    px-6
                                    py-4

                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]

                                    text-[#241814]

                                    transition-all
                                    duration-300

                                    hover:-translate-y-1

                                    hover:border-[#7A263A]
                                    hover:bg-[#7A263A]
                                    hover:text-[#F4EBDD]
                                "
                            >
                                Let's Talk

                                <ArrowUpRight
                                    size={15}
                                    className="
                                        transition-transform
                                        duration-300

                                        group-hover:translate-x-1
                                        group-hover:-translate-y-1
                                    "
                                />

                            </a>

                        </motion.div>

                    </motion.div>

                </div>


                {/* ================= BOTTOM LINE ================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        scaleX: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                        scaleX: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.3,
                    }}
                />

            </div>
        </section>
    );
};

export default About;