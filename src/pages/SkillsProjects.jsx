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
                overflow-hidden
                bg-[#f8f8f6]
                text-[#111]
            "
        >

            {/* =====================================================
                SKILLS SECTION
            ====================================================== */}

            <section
                id="skills"
                className="border-t border-black"
            >

                {/* HEADER */}

                <div
                    className="
                        px-6
                        pt-16
                        sm:px-10
                        md:px-16
                        lg:px-20
                    "
                >

                    <div className="flex items-center justify-between">

                        <p
                            className="
                                text-[8px]
                                font-medium
                                uppercase
                                tracking-[0.4em]
                            "
                        >
                            (02) Skills
                        </p>

                        <p
                            className="
                                hidden
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


                    {/* SMALL HEADING */}

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
                            mt-8
                            max-w-[700px]
                            font-black
                            uppercase
                            leading-[0.85]
                            tracking-[-0.06em]
                        "
                        style={{
                            fontFamily:
                                "Arial Narrow, Impact, sans-serif",

                            fontSize:
                                "clamp(2.8rem, 5vw, 5rem)",
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
                        mt-10
                        overflow-hidden
                        border-y
                        border-black
                        py-5
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
                            w-20
                            bg-gradient-to-r
                            from-[#f8f8f6]
                            to-transparent
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
                            w-20
                            bg-gradient-to-l
                            from-[#f8f8f6]
                            to-transparent
                        "
                    />


                    {/* MOVING TRACK */}

                    <motion.div
                        className="flex w-max"
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
                                            items-center
                                            gap-3
                                            border-r
                                            border-black/10
                                            px-6
                                            sm:px-8
                                            md:px-10
                                        "
                                    >

                                        {/* ICON */}

                                        <div
                                            className="
                                                flex
                                                h-8
                                                w-8
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
                                            "
                                        >

                                            <Icon className="text-sm" />

                                        </div>


                                        {/* NAME + DESCRIPTION */}

                                        <div className="flex flex-col">

                                            <span
                                                className="
                                                    whitespace-nowrap
                                                    text-xs
                                                    font-semibold
                                                    uppercase
                                                    tracking-tight
                                                    md:text-sm
                                                "
                                            >
                                                {skill.name}
                                            </span>

                                            <span
                                                className="
                                                    mt-0.5
                                                    whitespace-nowrap
                                                    text-[7px]
                                                    uppercase
                                                    tracking-[0.18em]
                                                    text-black/35
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
                    px-6
                    py-16
                    sm:px-10
                    md:px-16
                    lg:px-20
                "
            >

                {/* HEADER */}

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

                    <div>

                        <p
                            className="
                                text-[8px]
                                font-medium
                                uppercase
                                tracking-[0.4em]
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
                                mt-6
                                font-black
                                uppercase
                                leading-[0.85]
                                tracking-[-0.06em]
                            "
                            style={{
                                fontFamily:
                                    "Arial Narrow, Impact, sans-serif",

                                fontSize:
                                    "clamp(2.8rem, 5vw, 5rem)",
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
                            text-[8px]
                            uppercase
                            leading-5
                            tracking-[0.18em]
                            text-black/35
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
                        mt-10
                        grid
                        grid-cols-1
                        gap-5
                        md:grid-cols-3
                    "
                >

                    {projects.map(
                        (project, index) => (

                            <motion.button
                                key={project.title}
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
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                onClick={() =>
                                    setSelectedProject(
                                        project
                                    )
                                }
                                className="
                                    group
                                    w-full
                                    text-left
                                    outline-none
                                "
                            >

                                {/* IMAGE */}

                                <div
                                    className="
                                        relative
                                        aspect-[4/3]
                                        overflow-hidden
                                        bg-[#e9e9e6]
                                    "
                                >

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        draggable="false"
                                        className="
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
                                            h-7
                                            w-7
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-white
                                            text-[8px]
                                            font-bold
                                        "
                                    >
                                        {project.number}
                                    </div>


                                    {/* OPEN BUTTON */}

                                    <div
                                        className="
                                            absolute
                                            bottom-4
                                            right-4
                                            flex
                                            h-9
                                            w-9
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
                                        "
                                    >
                                        ↗
                                    </div>

                                </div>


                                {/* PROJECT INFO */}

                                <div
                                    className="
                                        mt-4
                                        border-b
                                        border-black
                                        pb-4
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            items-start
                                            justify-between
                                        "
                                    >

                                        <div>

                                            <p
                                                className="
                                                    text-[7px]
                                                    font-medium
                                                    uppercase
                                                    tracking-[0.25em]
                                                    text-black/40
                                                "
                                            >
                                                {project.category}
                                            </p>

                                            <h3
                                                className="
                                                    mt-1.5
                                                    text-base
                                                    font-bold
                                                    uppercase
                                                    tracking-[-0.02em]
                                                    md:text-lg
                                                "
                                            >
                                                {project.title}
                                            </h3>

                                        </div>


                                        <span
                                            className="
                                                text-[8px]
                                                text-black/30
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
                        className="
                            fixed
                            inset-0
                            z-[100]
                            flex
                            items-center
                            justify-center
                            bg-black/60
                            p-4
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
                                max-h-[90vh]
                                w-full
                                max-w-[900px]
                                overflow-y-auto
                                bg-[#f8f8f6]
                                p-5
                                sm:p-8
                                md:p-10
                            "
                        >

                            {/* CLOSE */}

                            <button
                                onClick={() =>
                                    setSelectedProject(
                                        null
                                    )
                                }
                                className="
                                    absolute
                                    right-4
                                    top-4
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
                                "
                            >
                                ×
                            </button>


                            {/* TOP INFO */}

                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                "
                            >

                                <p
                                    className="
                                        text-[8px]
                                        uppercase
                                        tracking-[0.35em]
                                        text-black/40
                                    "
                                >
                                    Project{" "}
                                    {selectedProject.number}
                                </p>

                                <p
                                    className="
                                        text-[8px]
                                        uppercase
                                        tracking-[0.25em]
                                        text-black/40
                                    "
                                >
                                    {selectedProject.year}
                                </p>

                            </div>


                            {/* TITLE */}

                            <h2
                                className="
                                    mt-6
                                    pr-10
                                    font-black
                                    uppercase
                                    leading-[0.85]
                                    tracking-[-0.06em]
                                "
                                style={{
                                    fontFamily:
                                        "Arial Narrow, Impact, sans-serif",

                                    fontSize:
                                        "clamp(2.8rem, 6vw, 5.5rem)",
                                }}
                            >
                                {selectedProject.title}
                                <span className="text-black/20">
                                    .
                                </span>
                            </h2>


                            {/* IMAGE */}

                            <div
                                className="
                                    mt-7
                                    overflow-hidden
                                    bg-[#e9e9e6]
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
                                        w-full
                                        object-cover
                                    "
                                />

                            </div>


                            {/* DETAILS */}

                            <div
                                className="
                                    mt-8
                                    grid
                                    gap-8
                                    md:grid-cols-2
                                "
                            >

                                {/* DESCRIPTION */}

                                <div>

                                    <p
                                        className="
                                            text-[8px]
                                            font-bold
                                            uppercase
                                            tracking-[0.3em]
                                        "
                                    >
                                        About
                                    </p>

                                    <p
                                        className="
                                            mt-3
                                            max-w-[500px]
                                            text-xs
                                            leading-6
                                            text-black/55
                                        "
                                    >
                                        {
                                            selectedProject.description
                                        }
                                    </p>

                                </div>


                                {/* TECHNOLOGIES */}

                                <div>

                                    <p
                                        className="
                                            text-[8px]
                                            font-bold
                                            uppercase
                                            tracking-[0.3em]
                                        "
                                    >
                                        Built with
                                    </p>

                                    <div
                                        className="
                                            mt-3
                                            flex
                                            flex-wrap
                                            gap-2
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
                                                            rounded-full
                                                            border
                                                            border-black/15
                                                            px-3
                                                            py-1.5
                                                            text-[7px]
                                                            uppercase
                                                            tracking-[0.12em]
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


            {/* =====================================================
                MARQUEE ANIMATION
            ====================================================== */}

            <style>{`

                @keyframes skillsMarquee {

                    from {
                        transform: translateX(0);
                    }

                    to {
                        transform: translateX(-50%);
                    }

                }

            `}</style>

        </main>
    );
};

export default SkillsProjects;