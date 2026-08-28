import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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


/* =========================================================
   SKILLS
========================================================= */

const skills = [
    {
        name: "Python",
        description: "Backend",
        icon: FaPython,
    },
    {
        name: "Django",
        description: "Web Framework",
        icon: SiDjango,
    },
    {
        name: "React",
        description: "Frontend",
        icon: FaReact,
    },
    {
        name: "JavaScript",
        description: "Interaction",
        icon: FaJs,
    },
    {
        name: "Django REST",
        description: "APIs",
        icon: SiDjango,
    },
    {
        name: "PostgreSQL",
        description: "Database",
        icon: SiPostgresql,
    },
    {
        name: "Redis",
        description: "Caching",
        icon: SiRedis,
    },
    {
        name: "Celery",
        description: "Background Tasks",
        icon: SiCelery,
    },
    {
        name: "Docker",
        description: "Containers",
        icon: SiDocker,
    },
    {
        name: "Tailwind CSS",
        description: "UI Styling",
        icon: SiTailwindcss,
    },
    {
        name: "Git",
        description: "Version Control",
        icon: FaGitAlt,
    },
];


/* =========================================================
   PROJECTS
========================================================= */

const projects = [
    {
        number: "01",
        title: "FOLLOWUP CRM",
        category: "FULL STACK / CRM",
        year: "2026",
        image: "/Thushk.png",

        description:
            "A complete CRM platform designed to simplify customer management, follow-ups and business operations through a clean and efficient interface.",

        technologies: [
            "React",
            "Python",
            "Django",
            "PostgreSQL",
        ],
    },

    {
        number: "02",
        title: "BOOKMA",
        category: "COMMUNITY / BOOKS",
        year: "2026",
        image: "/Bookma.png",

        description:
            "A modern reader community platform where users can discover books, share their reading interests and connect with other readers.",

        technologies: [
            "React",
            "Django",
            "REST API",
            "PostgreSQL",
        ],
    },

    {
        number: "03",
        title: "STHALAM",
        category: "WEB APPLICATION",
        year: "2026",
        image: "/sthalam.png",

        description:
            "A modern location-based web experience focused on clean interaction, responsive design and a simple user journey.",

        technologies: [
            "React",
            "JavaScript",
            "Tailwind CSS",
        ],
    },
];


const SkillsProjects = () => {

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <main
            className="
                w-full
                max-w-full
                overflow-x-hidden
                bg-[#f8f8f6]
                text-[#111]
            "
        >

            {/* =====================================================
                SKILLS SECTION
            ====================================================== */}

            <section
                id="skills"
                className="
                    w-full
                    border-t
                    border-black
                "
            >

                {/* =================================================
                    HEADER
                ================================================= */}

                <div
                    className="
                        w-full
                        px-5
                        pt-14

                        sm:px-8
                        sm:pt-16

                        md:px-16

                        lg:px-20
                    "
                >

                    <div
                        className="
                            flex
                            w-full
                            items-center
                            justify-between
                            gap-4
                        "
                    >

                        <p
                            className="
                                shrink-0

                                text-[7px]
                                font-medium
                                uppercase
                                tracking-[0.35em]

                                sm:text-[8px]
                                sm:tracking-[0.4em]
                            "
                        >
                            (02) Skills
                        </p>


                        <p
                            className="
                                hidden

                                max-w-[180px]

                                text-right
                                text-[8px]
                                uppercase
                                tracking-[0.3em]
                                text-black/35

                                sm:block
                            "
                        >
                            Technologies I work with
                        </p>

                    </div>


                    {/* =================================================
                        HEADING
                    ================================================= */}

                    <motion.h2
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="
                            mt-7
                            max-w-[700px]

                            font-black
                            uppercase
                            leading-[0.85]
                            tracking-[-0.06em]

                            text-[clamp(2.8rem,13vw,5rem)]

                            sm:mt-8
                            sm:text-[clamp(3rem,8vw,5rem)]
                        "
                        style={{
                            fontFamily:
                                "Arial Narrow, Impact, sans-serif",
                        }}
                    >
                        Tools I use
                        <span className="text-black/25">
                            .
                        </span>
                    </motion.h2>

                </div>


                {/* =================================================
                    SKILLS MARQUEE
                ================================================== */}

                <div
                    className="
                        relative
                        mt-8
                        w-full
                        overflow-hidden

                        border-y
                        border-black

                        py-4

                        sm:mt-10
                        sm:py-5
                    "
                >

                    {/* LEFT FADE */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            left-0
                            top-0
                            z-10
                            h-full

                            w-10

                            bg-gradient-to-r
                            from-[#f8f8f6]
                            to-transparent

                            sm:w-20
                        "
                    />


                    {/* RIGHT FADE */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            right-0
                            top-0
                            z-10
                            h-full

                            w-10

                            bg-gradient-to-l
                            from-[#f8f8f6]
                            to-transparent

                            sm:w-20
                        "
                    />


                    {/* MOVING TRACK */}

                    <motion.div
                        className="
                            flex
                            w-max
                            will-change-transform
                        "
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            duration: 28,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >

                        {[...skills, ...skills].map(
                            (skill, index) => {

                                const Icon = skill.icon;

                                return (

                                    <div
                                        key={`${skill.name}-${index}`}
                                        className="
                                            group
                                            flex
                                            shrink-0
                                            items-center
                                            gap-2

                                            border-r
                                            border-black/10

                                            px-4

                                            sm:gap-3
                                            sm:px-8

                                            md:px-10
                                        "
                                    >

                                        {/* ICON */}

                                        <div
                                            className="
                                                flex
                                                h-7
                                                w-7
                                                shrink-0
                                                items-center
                                                justify-center

                                                rounded-full

                                                border
                                                border-black/15

                                                transition-all
                                                duration-300

                                                group-hover:border-black
                                                group-hover:bg-black
                                                group-hover:text-white

                                                sm:h-8
                                                sm:w-8
                                            "
                                        >

                                            <Icon
                                                className="
                                                    text-[13px]

                                                    sm:text-sm
                                                "
                                            />

                                        </div>


                                        {/* NAME + DESCRIPTION */}

                                        <div
                                            className="
                                                flex
                                                min-w-0
                                                flex-col
                                            "
                                        >

                                            <span
                                                className="
                                                    whitespace-nowrap

                                                    text-[10px]
                                                    font-semibold
                                                    uppercase
                                                    tracking-tight

                                                    sm:text-xs

                                                    md:text-sm
                                                "
                                            >
                                                {skill.name}
                                            </span>


                                            <span
                                                className="
                                                    mt-0.5
                                                    whitespace-nowrap

                                                    text-[6px]
                                                    uppercase
                                                    tracking-[0.15em]
                                                    text-black/35

                                                    sm:text-[7px]
                                                    sm:tracking-[0.18em]
                                                "
                                            >
                                                {skill.description}
                                            </span>

                                        </div>

                                    </div>

                                );
                            }
                        )}

                    </motion.div>

                </div>

            </section>


            {/* =====================================================
                PROJECTS SECTION
            ====================================================== */}

            <section
                id="projects"
                className="
                    w-full

                    px-5
                    py-14

                    sm:px-8
                    sm:py-16

                    md:px-16

                    lg:px-20
                "
            >

                {/* =================================================
                    PROJECT HEADER
                ================================================= */}

                <div
                    className="
                        flex
                        flex-col
                        justify-between
                        gap-5

                        md:flex-row
                        md:items-end
                    "
                >

                    <div
                        className="
                            min-w-0
                        "
                    >

                        <p
                            className="
                                text-[7px]
                                font-medium
                                uppercase
                                tracking-[0.35em]

                                sm:text-[8px]
                                sm:tracking-[0.4em]
                            "
                        >
                            (03) Selected Work
                        </p>


                        <motion.h2
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.6,
                            }}
                            className="
                                mt-5

                                max-w-full

                                font-black
                                uppercase
                                leading-[0.85]
                                tracking-[-0.06em]

                                text-[clamp(2.8rem,13vw,5rem)]

                                sm:mt-6
                                sm:text-[clamp(3rem,8vw,5rem)]
                            "
                            style={{
                                fontFamily:
                                    "Arial Narrow, Impact, sans-serif",
                            }}
                        >
                            Selected
                            <span className="text-black/25">
                                {" "}Projects.
                            </span>
                        </motion.h2>

                    </div>


                    <p
                        className="
                            max-w-[200px]

                            text-[7px]
                            uppercase
                            leading-5
                            tracking-[0.15em]
                            text-black/35

                            sm:text-[8px]
                            sm:tracking-[0.18em]
                        "
                    >
                        Three projects.
                        <br />
                        Three different ideas.
                        <br />
                        One developer.
                    </p>

                </div>


                {/* =================================================
                    THREE PROJECTS
                ================================================== */}

                <div
                    className="
                        mt-8

                        grid
                        grid-cols-1
                        gap-8

                        sm:mt-10
                        sm:gap-5

                        md:grid-cols-3
                    "
                >

                    {projects.map(
                        (project, index) => (

                            <motion.button
                                key={project.title}

                                type="button"

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
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}

                                onClick={() =>
                                    setSelectedProject(project)
                                }

                                className="
                                    group
                                    block
                                    w-full
                                    min-w-0
                                    text-left
                                    outline-none
                                    focus:outline-none
                                "
                            >

                                {/* =================================================
                                    IMAGE
                                ================================================== */}

                                <div
                                    className="
                                        relative
                                        w-full
                                        overflow-hidden
                                        bg-[#e9e9e6]

                                        aspect-[4/3]
                                    "
                                >

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        draggable="false"

                                        className="
                                            block
                                            h-full
                                            w-full
                                            object-cover

                                            grayscale

                                            transition-all
                                            duration-700
                                            ease-out

                                            group-hover:scale-[1.04]
                                            group-hover:grayscale-0
                                        "
                                    />


                                    {/* NUMBER */}

                                    <div
                                        className="
                                            absolute
                                            left-3
                                            top-3

                                            flex
                                            h-6
                                            w-6

                                            items-center
                                            justify-center

                                            rounded-full

                                            bg-white

                                            text-[7px]
                                            font-bold

                                            sm:h-7
                                            sm:w-7
                                            sm:text-[8px]
                                        "
                                    >
                                        {project.number}
                                    </div>


                                    {/* OPEN BUTTON */}

                                    <div
                                        className="
                                            absolute
                                            bottom-3
                                            right-3

                                            flex
                                            h-8
                                            w-8

                                            translate-y-2

                                            items-center
                                            justify-center

                                            rounded-full

                                            bg-black
                                            text-sm
                                            text-white

                                            opacity-0

                                            transition-all
                                            duration-300

                                            group-hover:translate-y-0
                                            group-hover:opacity-100

                                            sm:bottom-4
                                            sm:right-4
                                            sm:h-9
                                            sm:w-9
                                        "
                                    >
                                        ↗
                                    </div>

                                </div>


                                {/* =================================================
                                    PROJECT INFO
                                ================================================== */}

                                <div
                                    className="
                                        mt-3

                                        border-b
                                        border-black

                                        pb-4

                                        sm:mt-4
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            min-w-0
                                            items-start
                                            justify-between
                                            gap-3
                                        "
                                    >

                                        <div
                                            className="
                                                min-w-0
                                            "
                                        >

                                            <p
                                                className="
                                                    break-words

                                                    text-[6px]
                                                    font-medium
                                                    uppercase
                                                    tracking-[0.2em]
                                                    text-black/40

                                                    sm:text-[7px]
                                                    sm:tracking-[0.25em]
                                                "
                                            >
                                                {project.category}
                                            </p>


                                            <h3
                                                className="
                                                    mt-1.5

                                                    break-words

                                                    text-sm
                                                    font-bold
                                                    uppercase
                                                    tracking-[-0.02em]

                                                    sm:text-base

                                                    md:text-lg
                                                "
                                            >
                                                {project.title}
                                            </h3>

                                        </div>


                                        <span
                                            className="
                                                shrink-0
                                                pt-0.5

                                                text-[7px]
                                                text-black/30

                                                sm:text-[8px]
                                            "
                                        >
                                            {project.year}
                                        </span>

                                    </div>

                                </div>

                            </motion.button>

                        )
                    )}

                </div>

            </section>


            {/* =====================================================
                PROJECT DETAIL MODAL
            ====================================================== */}

            <AnimatePresence>

                {selectedProject && (

                    <motion.div
                        initial={{
                            opacity: 0,
                        }}

                        animate={{
                            opacity: 1,
                        }}

                        exit={{
                            opacity: 0,
                        }}

                        transition={{
                            duration: 0.25,
                        }}

                        className="
                            fixed
                            inset-0
                            z-[100]

                            flex
                            items-center
                            justify-center

                            bg-black/60

                            p-3

                            backdrop-blur-sm

                            sm:p-6
                        "

                        onClick={() =>
                            setSelectedProject(null)
                        }
                    >

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 40,
                                scale: 0.98,
                            }}

                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}

                            exit={{
                                opacity: 0,
                                y: 30,
                                scale: 0.98,
                            }}

                            transition={{
                                duration: 0.4,
                            }}

                            onClick={(e) =>
                                e.stopPropagation()
                            }

                            className="
                                relative

                                max-h-[92vh]
                                w-full
                                max-w-[900px]

                                overflow-x-hidden
                                overflow-y-auto

                                bg-[#f8f8f6]

                                p-4

                                sm:max-h-[90vh]
                                sm:p-8

                                md:p-10
                            "
                        >

                            {/* =================================================
                                CLOSE BUTTON
                            ================================================== */}

                            <button
                                type="button"

                                aria-label="Close project"

                                onClick={() =>
                                    setSelectedProject(null)
                                }

                                className="
                                    absolute
                                    right-3
                                    top-3
                                    z-20

                                    flex
                                    h-8
                                    w-8

                                    items-center
                                    justify-center

                                    rounded-full

                                    border
                                    border-black

                                    text-base

                                    transition-all
                                    duration-300

                                    hover:bg-black
                                    hover:text-white

                                    sm:right-4
                                    sm:top-4
                                "
                            >
                                ×
                            </button>


                            {/* =================================================
                                TOP INFO
                            ================================================== */}

                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    gap-4
                                    pr-10
                                "
                            >

                                <p
                                    className="
                                        text-[7px]
                                        uppercase
                                        tracking-[0.3em]
                                        text-black/40

                                        sm:text-[8px]
                                        sm:tracking-[0.35em]
                                    "
                                >
                                    Project{" "}
                                    {selectedProject.number}
                                </p>


                                <p
                                    className="
                                        shrink-0

                                        text-[7px]
                                        uppercase
                                        tracking-[0.2em]
                                        text-black/40

                                        sm:text-[8px]
                                        sm:tracking-[0.25em]
                                    "
                                >
                                    {selectedProject.year}
                                </p>

                            </div>


                            {/* =================================================
                                TITLE
                            ================================================== */}

                            <h2
                                className="
                                    mt-5
                                    max-w-full
                                    break-words
                                    pr-8

                                    font-black
                                    uppercase
                                    leading-[0.85]
                                    tracking-[-0.06em]

                                    text-[clamp(2.5rem,12vw,5.5rem)]

                                    sm:mt-6
                                    sm:text-[clamp(2.8rem,7vw,5.5rem)]
                                "
                                style={{
                                    fontFamily:
                                        "Arial Narrow, Impact, sans-serif",
                                }}
                            >
                                {selectedProject.title}

                                <span className="text-black/20">
                                    .
                                </span>
                            </h2>


                            {/* =================================================
                                IMAGE
                            ================================================== */}

                            <div
                                className="
                                    mt-6
                                    w-full
                                    overflow-hidden
                                    bg-[#e9e9e6]

                                    sm:mt-7
                                "
                            >

                                <img
                                    src={
                                        selectedProject.image
                                    }
                                    alt={
                                        selectedProject.title
                                    }

                                    className="
                                        block
                                        h-auto
                                        max-h-[45vh]
                                        w-full
                                        object-cover

                                        sm:max-h-none
                                    "
                                />

                            </div>


                            {/* =================================================
                                DETAILS
                            ================================================== */}

                            <div
                                className="
                                    mt-7

                                    grid
                                    grid-cols-1
                                    gap-7

                                    sm:mt-8
                                    sm:gap-8

                                    md:grid-cols-2
                                "
                            >

                                {/* DESCRIPTION */}

                                <div
                                    className="
                                        min-w-0
                                    "
                                >

                                    <p
                                        className="
                                            text-[7px]
                                            font-bold
                                            uppercase
                                            tracking-[0.25em]

                                            sm:text-[8px]
                                            sm:tracking-[0.3em]
                                        "
                                    >
                                        About
                                    </p>


                                    <p
                                        className="
                                            mt-2.5

                                            max-w-[500px]

                                            text-[11px]
                                            leading-5

                                            text-black/55

                                            sm:mt-3
                                            sm:text-xs
                                            sm:leading-6
                                        "
                                    >
                                        {
                                            selectedProject.description
                                        }
                                    </p>

                                </div>


                                {/* TECHNOLOGIES */}

                                <div
                                    className="
                                        min-w-0
                                    "
                                >

                                    <p
                                        className="
                                            text-[7px]
                                            font-bold
                                            uppercase
                                            tracking-[0.25em]

                                            sm:text-[8px]
                                            sm:tracking-[0.3em]
                                        "
                                    >
                                        Built with
                                    </p>


                                    <div
                                        className="
                                            mt-3
                                            flex
                                            flex-wrap
                                            gap-1.5

                                            sm:gap-2
                                        "
                                    >

                                        {
                                            selectedProject.technologies.map(
                                                (
                                                    technology
                                                ) => (

                                                    <span
                                                        key={
                                                            technology
                                                        }

                                                        className="
                                                            max-w-full

                                                            break-words

                                                            rounded-full

                                                            border
                                                            border-black/15

                                                            px-2.5
                                                            py-1.5

                                                            text-[6px]
                                                            uppercase
                                                            tracking-[0.1em]

                                                            sm:px-3
                                                            sm:text-[7px]
                                                            sm:tracking-[0.12em]
                                                        "
                                                    >
                                                        {
                                                            technology
                                                        }
                                                    </span>

                                                )
                                            )
                                        }

                                    </div>

                                </div>

                            </div>

                        </motion.div>

                    </motion.div>

                )}

            </AnimatePresence>

        </main>
    );
};

export default SkillsProjects;