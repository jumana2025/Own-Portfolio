import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

const projects = [
    {
        number: "01",
        title: "FOLLOWUP CRM",
        category: "CRM / FULL STACK",
        year: "2026",
        image: "/Thushk.png",
        description:
            "A complete CRM platform designed to manage customers, follow-ups and business operations through a clean and efficient interface.",
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
        category: "READING COMMUNITY",
        year: "2026",
        image: "/Bookma.png",
        description:
            "A reader community platform where users can discover books, share their reading interests and connect with other readers.",
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
            "A modern web application focused on clean interaction, responsive design and a simple user experience.",
        technologies: [
            "React",
            "JavaScript",
            "Tailwind CSS",
        ],
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section
            id="projects"
            className="
                relative
                w-full
                overflow-hidden
                bg-[#F4EBDD]
                px-6
                py-24
                text-[#241814]

                sm:px-10
                md:px-16
                lg:px-20
            "
        >

            {/* =====================================================
                SUBTLE BACKGROUND DECORATION
            ===================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    right-[-180px]
                    top-1/2

                    h-[450px]
                    w-[450px]

                    -translate-y-1/2

                    rounded-full

                    bg-[#7A263A]/[0.035]

                    blur-3xl
                "
            />


            {/* ================= HEADER ================= */}

            <div
                className="
                    relative
                    z-10
                    flex
                    items-end
                    justify-between
                "
            >

                <div>

                    {/* SMALL LABEL */}

                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 15,
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
                            text-[8px]
                            uppercase
                            tracking-[0.4em]
                            text-[#7A263A]
                        "
                    >
                        (03) Selected Work
                    </motion.p>


                    {/* HEADING */}

                    <motion.h2
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.7,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="
                            mt-7

                            font-black
                            uppercase
                            leading-[0.85]
                            tracking-[-0.06em]

                            text-[13vw]

                            sm:text-[10vw]

                            md:text-[7vw]

                            lg:text-[5.5vw]
                        "
                    >
                        Selected{" "}

                        <span className="text-[#7A263A]/35">
                            Projects.
                        </span>
                    </motion.h2>

                </div>


                {/* SMALL DESCRIPTION */}

                <p
                    className="
                        hidden
                        max-w-[180px]
                        text-right
                        text-[8px]
                        uppercase
                        leading-5
                        tracking-[0.15em]
                        text-[#241814]/35

                        md:block
                    "
                >
                    Three projects.
                    <br />
                    One developer.
                </p>

            </div>


            {/* ================= PROJECT GRID ================= */}

            <div
                className="
                    relative
                    z-10

                    mt-14

                    grid
                    grid-cols-1
                    gap-10

                    md:grid-cols-3
                "
            >

                {projects.map((project, index) => (

                    <motion.button
                        key={project.title}
                        type="button"

                        initial={{
                            opacity: 0,
                            y: 35,
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
                            duration: 0.6,
                            delay: index * 0.1,
                            ease: [0.16, 1, 0.3, 1],
                        }}

                        onClick={() =>
                            setSelectedProject(project)
                        }

                        className="
                            group
                            w-full

                            border-none
                            bg-transparent
                            p-0

                            text-left
                            outline-none
                            focus:outline-none
                        "
                    >

                        {/* ================= IMAGE ================= */}

                        <div
                            className="
                                relative
                                aspect-[4/3]
                                w-full
                                overflow-hidden

                                bg-[#E8DCCF]

                                border
                                border-[#241814]/10
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


                            {/* IMAGE OVERLAY */}

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    inset-0

                                    bg-[#7A263A]/0

                                    transition-all
                                    duration-500

                                    group-hover:bg-[#7A263A]/10
                                "
                            />


                            {/* NUMBER */}

                            <span
                                className="
                                    absolute
                                    left-4
                                    top-4

                                    flex
                                    h-7
                                    w-7
                                    items-center
                                    justify-center

                                    rounded-full

                                    bg-[#F4EBDD]/95

                                    text-[8px]
                                    font-semibold

                                    text-[#7A263A]

                                    backdrop-blur-sm
                                "
                            >
                                {project.number}
                            </span>


                            {/* ARROW */}

                            <span
                                className="
                                    absolute
                                    bottom-4
                                    right-4

                                    flex
                                    h-9
                                    w-9

                                    translate-y-3
                                    items-center
                                    justify-center

                                    rounded-full

                                    bg-[#7A263A]
                                    text-[#F4EBDD]

                                    opacity-0

                                    transition-all
                                    duration-300

                                    group-hover:translate-y-0
                                    group-hover:opacity-100
                                "
                            >
                                <ArrowUpRight size={14} />
                            </span>

                        </div>


                        {/* ================= PROJECT INFO ================= */}

                        <div className="pt-4">

                            <div
                                className="
                                    flex
                                    items-start
                                    justify-between
                                    gap-4
                                "
                            >

                                <div>

                                    {/* CATEGORY */}

                                    <p
                                        className="
                                            text-[7px]
                                            uppercase
                                            tracking-[0.25em]
                                            text-[#7A263A]
                                        "
                                    >
                                        {project.category}
                                    </p>


                                    {/* TITLE */}

                                    <h3
                                        className="
                                            mt-1.5

                                            text-[15px]
                                            font-bold
                                            uppercase
                                            tracking-[-0.02em]

                                            text-[#241814]

                                            transition-colors
                                            duration-300

                                            group-hover:text-[#7A263A]
                                        "
                                    >
                                        {project.title}
                                    </h3>

                                </div>


                                {/* YEAR */}

                                <span
                                    className="
                                        pt-1

                                        text-[8px]

                                        text-[#241814]/30
                                    "
                                >
                                    {project.year}
                                </span>

                            </div>

                        </div>

                    </motion.button>

                ))}

            </div>


            {/* =====================================================
                PROJECT DETAILS MODAL
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

                        onClick={() =>
                            setSelectedProject(null)
                        }

                        className="
                            fixed
                            inset-0
                            z-[100]

                            flex
                            items-center
                            justify-center

                            bg-[#241814]/70

                            p-4

                            backdrop-blur-md
                        "
                    >

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 40,
                                scale: 0.96,
                            }}

                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}

                            exit={{
                                opacity: 0,
                                y: 30,
                                scale: 0.97,
                            }}

                            transition={{
                                duration: 0.4,
                                ease: [0.16, 1, 0.3, 1],
                            }}

                            onClick={(event) =>
                                event.stopPropagation()
                            }

                            className="
                                relative

                                max-h-[90vh]
                                w-full
                                max-w-[850px]

                                overflow-y-auto

                                bg-[#F4EBDD]

                                p-6

                                sm:p-8
                                md:p-10
                            "
                        >

                            {/* CLOSE BUTTON */}

                            <button
                                type="button"

                                onClick={() =>
                                    setSelectedProject(null)
                                }

                                aria-label="Close project"

                                className="
                                    absolute
                                    right-5
                                    top-5
                                    z-20

                                    flex
                                    h-8
                                    w-8
                                    items-center
                                    justify-center

                                    rounded-full

                                    bg-[#7A263A]
                                    text-[#F4EBDD]

                                    transition-all
                                    duration-300

                                    hover:bg-[#241814]
                                    hover:scale-110
                                "
                            >
                                <X size={14} />
                            </button>


                            {/* PROJECT NUMBER */}

                            <p
                                className="
                                    text-[8px]
                                    uppercase
                                    tracking-[0.35em]

                                    text-[#7A263A]
                                "
                            >
                                Project {selectedProject.number}
                            </p>


                            {/* TITLE */}

                            <h2
                                className="
                                    mt-5
                                    max-w-[700px]

                                    font-black
                                    uppercase
                                    leading-[0.85]
                                    tracking-[-0.06em]

                                    text-[#241814]
                                "
                                style={{
                                    fontFamily:
                                        "Arial Narrow, Impact, sans-serif",
                                    fontSize:
                                        "clamp(2.5rem, 6vw, 5rem)",
                                }}
                            >
                                {selectedProject.title}

                                <span className="text-[#7A263A]/40">
                                    .
                                </span>
                            </h2>


                            {/* IMAGE */}

                            <div
                                className="
                                    mt-8
                                    overflow-hidden

                                    bg-[#E8DCCF]

                                    border
                                    border-[#241814]/10
                                "
                            >

                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}

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

                                {/* ABOUT */}

                                <div>

                                    <p
                                        className="
                                            text-[8px]
                                            font-bold
                                            uppercase
                                            tracking-[0.3em]

                                            text-[#7A263A]
                                        "
                                    >
                                        About
                                    </p>


                                    <p
                                        className="
                                            mt-3
                                            max-w-[450px]

                                            text-xs
                                            leading-6

                                            text-[#241814]/60
                                        "
                                    >
                                        {selectedProject.description}
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

                                            text-[#7A263A]
                                        "
                                    >
                                        Technologies
                                    </p>


                                    <div
                                        className="
                                            mt-3
                                            flex
                                            flex-wrap
                                            gap-2
                                        "
                                    >

                                        {selectedProject.technologies.map(
                                            (technology) => (

                                                <span
                                                    key={technology}

                                                    className="
                                                        rounded-full

                                                        border
                                                        border-[#7A263A]/30

                                                        bg-[#7A263A]

                                                        px-3
                                                        py-1.5

                                                        text-[7px]
                                                        uppercase
                                                        tracking-[0.12em]

                                                        text-[#F4EBDD]
                                                    "
                                                >
                                                    {technology}
                                                </span>

                                            )
                                        )}

                                    </div>

                                </div>

                            </div>


                            {/* CLOSE */}

                            <button
                                type="button"

                                onClick={() =>
                                    setSelectedProject(null)
                                }

                                className="
                                    mt-10

                                    text-[8px]
                                    uppercase
                                    tracking-[0.25em]

                                    text-[#7A263A]

                                    transition-colors
                                    duration-300

                                    hover:text-[#241814]
                                "
                            >
                                Close Project
                            </button>

                        </motion.div>

                    </motion.div>

                )}

            </AnimatePresence>

        </section>
    );
};

export default Projects;