import React from "react";
import { motion } from "framer-motion";

import {
    FaReact,
    FaJs,
    FaPython,
    FaGitAlt,
} from "react-icons/fa";

import {
    SiDjango,
    SiPostgresql,
    SiRedis,
    SiCelery,
    SiDocker,
    SiTailwindcss,
} from "react-icons/si";

const skills = [
    {
        name: "Python",
        description:
            "Used for building backend logic, handling data and developing scalable applications.",
        icon: FaPython,
    },
    {
        name: "Django",
        description:
            "A Python framework I use to build secure and structured backend applications.",
        icon: SiDjango,
    },
    {
        name: "React",
        description:
            "Used to create responsive, interactive and component-based user interfaces.",
        icon: FaReact,
    },
    {
        name: "JavaScript",
        description:
            "Used to add functionality, interactions and dynamic behaviour to web applications.",
        icon: FaJs,
    },
    {
        name: "Django REST",
        description:
            "Used to create REST APIs that connect the frontend with the backend.",
        icon: SiDjango,
    },
    {
        name: "PostgreSQL",
        description:
            "A relational database I use to store and manage application data.",
        icon: SiPostgresql,
    },
    {
        name: "Redis",
        description:
            "Used as an in-memory data store and message broker for background tasks.",
        icon: SiRedis,
    },
    {
        name: "Celery",
        description:
            "Used to run background and scheduled tasks asynchronously.",
        icon: SiCelery,
    },
    {
        name: "Docker",
        description:
            "Used to containerize applications and keep development environments consistent.",
        icon: SiDocker,
    },
    {
        name: "Tailwind CSS",
        description:
            "Used to build clean, responsive and modern interfaces quickly.",
        icon: SiTailwindcss,
    },
    {
        name: "Git",
        description:
            "Used for version control, tracking changes and managing project code.",
        icon: FaGitAlt,
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="
                relative
                overflow-hidden
                bg-[#F4EBDD]
                text-[#241814]
            "
        >

            {/* =====================================================
                MAIN CONTAINER
            ===================================================== */}

            <div
                className="
                    mx-auto
                    max-w-[1400px]
                    px-6
                    py-20

                    md:px-12
                    md:py-24

                    lg:px-16
                    lg:py-28
                "
            >

                {/* =================================================
                    HEADER
                ================================================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
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
                        duration: 0.7,
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
                                text-[9px]
                                font-medium
                                uppercase
                                tracking-[0.3em]
                                text-[#7A263A]
                            "
                        >
                            Skills
                        </p>

                    </div>


                    <p
                        className="
                            hidden
                            text-[9px]
                            uppercase
                            tracking-[0.3em]
                            text-[#241814]/40

                            sm:block
                        "
                    >
                        Technologies
                    </p>

                </motion.div>


                {/* =================================================
                    TITLE
                ================================================= */}

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
                        delay: 0.1,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="mt-8"
                >

                    <h2
                        className="
                            font-black
                            uppercase
                            leading-[0.82]
                            tracking-[-0.07em]

                            text-[13vw]

                            sm:text-[11vw]

                            md:text-[8vw]

                            lg:text-[6vw]
                        "
                    >
                        My
                        <span className="text-[#7A263A]">
                            {" "}Skills.
                        </span>
                    </h2>


                    <p
                        className="
                            mt-6
                            max-w-2xl

                            text-sm
                            leading-7

                            text-[#241814]/65

                            md:text-base
                        "
                    >
                        A combination of frontend, backend and development
                        tools I use to build complete, responsive and
                        functional web applications.
                    </p>

                </motion.div>


                {/* =================================================
                    SKILLS GRID
                ================================================= */}

                <div
                    className="
                        mt-12

                        grid
                        grid-cols-1
                        gap-3

                        sm:grid-cols-2

                        lg:grid-cols-3
                    "
                >

                    {skills.map((skill, index) => {

                        const Icon = skill.icon;

                        return (
                            <motion.div
                                key={skill.name}

                                initial={{
                                    opacity: 0,
                                    y: 30,
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}

                                viewport={{
                                    once: true,
                                    amount: 0.15,
                                }}

                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.05,
                                    ease: [0.16, 1, 0.3, 1],
                                }}

                                className="
                                    group
                                    relative

                                    border
                                    border-[#241814]/10

                                    bg-[#F4EBDD]

                                    p-5

                                    transition-all
                                    duration-300

                                    hover:-translate-y-1
                                    hover:border-[#7A263A]/40
                                    hover:bg-[#7A263A]
                                "
                            >

                                {/* =================================================
                                    TOP ROW
                                ================================================= */}

                                <div
                                    className="
                                        flex
                                        items-start
                                        justify-between
                                    "
                                >

                                    {/* ICON */}

                                    <div
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center

                                            rounded-full

                                            border
                                            border-[#7A263A]/25

                                            text-[#7A263A]

                                            transition-all
                                            duration-300

                                            group-hover:border-[#F4EBDD]/40
                                            group-hover:text-[#F4EBDD]
                                        "
                                    >
                                        <Icon size={18} />
                                    </div>


                                    {/* NUMBER */}

                                    <span
                                        className="
                                            text-[8px]
                                            font-medium
                                            tracking-[0.2em]

                                            text-[#241814]/30

                                            transition-colors
                                            duration-300

                                            group-hover:text-[#F4EBDD]/50
                                        "
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                </div>


                                {/* =================================================
                                    NAME
                                ================================================= */}

                                <h3
                                    className="
                                        mt-6

                                        text-sm
                                        font-bold
                                        uppercase
                                        tracking-[0.08em]

                                        text-[#241814]

                                        transition-colors
                                        duration-300

                                        group-hover:text-[#F4EBDD]
                                    "
                                >
                                    {skill.name}
                                </h3>


                                {/* =================================================
                                    DESCRIPTION
                                ================================================= */}

                                <p
                                    className="
                                        mt-3

                                        text-xs
                                        leading-6

                                        text-[#241814]/55

                                        transition-colors
                                        duration-300

                                        group-hover:text-[#F4EBDD]/75
                                    "
                                >
                                    {skill.description}
                                </p>


                                {/* =================================================
                                    BOTTOM LINE
                                ================================================= */}

                                <div
                                    className="
                                        mt-5
                                        h-px
                                        w-8

                                        bg-[#7A263A]/40

                                        transition-all
                                        duration-300

                                        group-hover:w-full
                                        group-hover:bg-[#F4EBDD]/40
                                    "
                                />

                            </motion.div>
                        );
                    })}

                </div>


                {/* =================================================
                    BOTTOM NOTE
                ================================================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.3,
                    }}
                    className="
                        mt-10
                        flex
                        items-center
                        gap-3
                    "
                >

                    <span
                        className="
                            h-px
                            w-10
                            bg-[#7A263A]
                        "
                    />

                    <p
                        className="
                            text-[8px]
                            uppercase
                            tracking-[0.25em]
                            text-[#241814]/40
                        "
                    >
                        Always learning · Always building
                    </p>

                </motion.div>

            </div>

        </section>
    );
};

export default Skills;