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
                text-[#241814]

                px-5
                py-20

                sm:px-8
                sm:py-24

                md:px-12
                md:py-28

                lg:px-16
                xl:px-20
            "
        >

            {/* DECORATION */}

            <div
                className="
                    pointer-events-none
                    absolute
                    right-[-180px]
                    top-1/2
                    h-[300px]
                    w-[300px]
                    -translate-y-1/2
                    rounded-full
                    bg-[#7A263A]/[0.035]
                    blur-3xl

                    sm:h-[400px]
                    sm:w-[400px]

                    md:h-[450px]
                    md:w-[450px]
                "
            />


            {/* HEADER */}

            <div
                className="
                    relative
                    z-10
                    flex
                    flex-col
                    gap-6

                    md:flex-row
                    md:items-end
                    md:justify-between
                "
            >

                <div className="min-w-0">

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="
                            text-[8px]
                            uppercase
                            tracking-[0.3em]
                            text-[#7A263A]

                            sm:text-[9px]
                        "
                    >
                        (03) Selected Work
                    </motion.p>


                    <motion.h2
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="
                            mt-5
                            max-w-full
                            font-black
                            uppercase
                            leading-[0.85]
                            tracking-[-0.06em]

                            text-[clamp(3.5rem,13vw,10rem)]

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


                <p
                    className="
                        max-w-[180px]

                        text-left
                        text-[8px]
                        uppercase
                        leading-5
                        tracking-[0.15em]

                        text-[#241814]/35

                        md:text-right
                    "
                >
                    Three projects.
                    <br />
                    One developer.
                </p>

            </div>


            {/* PROJECT GRID */}

            <div
                className="
                    relative
                    z-10

                    mt-10

                    grid
                    grid-cols-1
                    gap-10

                    sm:mt-14
                    sm:gap-12

                    md:grid-cols-3
                    md:gap-6

                    lg:gap-8
                "
            >

                {projects.map((project, index) => (

                    <motion.button
                        key={project.title}
                        type="button"
                        onClick={() => setSelectedProject(project)}
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
                        }}
                        className="
                            group
                            w-full
                            min-w-0

                            border-none
                            bg-transparent
                            p-0

                            text-left
                            outline-none
                        "
                    >

                        {/* IMAGE */}

                        <div
                            className="
                                relative
                                aspect-[4/3]
                                w-full
                                overflow-hidden

                                border
                                border-[#241814]/10

                                bg-[#E8DCCF]
                            "
                        >

                            <img
                                src={project.image}
                                alt={project.title}
                                draggable="false"
                                loading="lazy"
                                className="
                                    h-full
                                    w-full
                                    object-cover
                                    grayscale

                                    transition-all
                                    duration-700

                                    group-hover:scale-[1.04]
                                    group-hover:grayscale-0
                                "
                            />


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
                                    left-3
                                    top-3

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

                                    sm:left-4
                                    sm:top-4
                                "
                            >
                                {project.number}
                            </span>


                            {/* ARROW */}

                            <span
                                className="
                                    absolute
                                    bottom-3
                                    right-3

                                    flex
                                    h-9
                                    w-9
                                    items-center
                                    justify-center

                                    rounded-full

                                    bg-[#7A263A]
                                    text-[#F4EBDD]

                                    sm:bottom-4
                                    sm:right-4

                                    md:translate-y-3
                                    md:opacity-0

                                    md:transition-all
                                    md:duration-300

                                    md:group-hover:translate-y-0
                                    md:group-hover:opacity-100
                                "
                            >
                                <ArrowUpRight size={14} />
                            </span>

                        </div>


                        {/* INFO */}

                        <div className="pt-4">

                            <div
                                className="
                                    flex
                                    items-start
                                    justify-between
                                    gap-3
                                "
                            >

                                <div className="min-w-0">

                                    <p
                                        className="
                                            truncate
                                            text-[7px]
                                            uppercase
                                            tracking-[0.2em]
                                            text-[#7A263A]
                                        "
                                    >
                                        {project.category}
                                    </p>

                                    <h3
                                        className="
                                            mt-1.5
                                            text-[14px]
                                            font-bold
                                            uppercase
                                            tracking-[-0.02em]

                                            transition-colors

                                            group-hover:text-[#7A263A]

                                            sm:text-[15px]
                                        "
                                    >
                                        {project.title}
                                    </h3>

                                </div>


                                <span
                                    className="
                                        shrink-0
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


            {/* MODAL */}

            <AnimatePresence>

                {selectedProject && (

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="
                            fixed
                            inset-0
                            z-[100]

                            flex
                            items-center
                            justify-center

                            overflow-y-auto

                            bg-[#241814]/70

                            p-3
                            backdrop-blur-md

                            sm:p-5
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
                            onClick={(e) => e.stopPropagation()}
                            className="
                                relative
                                my-4

                                max-h-[94vh]
                                w-full
                                max-w-[850px]

                                overflow-y-auto

                                bg-[#F4EBDD]

                                p-5

                                sm:p-8
                                md:p-10
                            "
                        >

                            {/* CLOSE */}

                            <button
                                type="button"
                                onClick={() =>
                                    setSelectedProject(null)
                                }
                                aria-label="Close project"
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

                                    bg-[#7A263A]
                                    text-[#F4EBDD]

                                    transition-all
                                    duration-300

                                    hover:bg-[#241814]
                                "
                            >
                                <X size={14} />
                            </button>


                            <p
                                className="
                                    pr-10

                                    text-[8px]
                                    uppercase
                                    tracking-[0.3em]
                                    text-[#7A263A]
                                "
                            >
                                Project {selectedProject.number}
                            </p>


                            <h2
                                className="
                                    mt-4
                                    pr-8

                                    font-black
                                    uppercase
                                    leading-[0.85]
                                    tracking-[-0.06em]

                                    text-[clamp(2.2rem,10vw,5rem)]
                                "
                            >
                                {selectedProject.title}
                                <span className="text-[#7A263A]/40">
                                    .
                                </span>
                            </h2>


                            {/* MODAL IMAGE */}

                            <div
                                className="
                                    mt-6
                                    w-full
                                    overflow-hidden

                                    border
                                    border-[#241814]/10
                                    bg-[#E8DCCF]

                                    sm:mt-8
                                "
                            >
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="
                                        block
                                        h-auto
                                        max-h-[55vh]
                                        w-full
                                        object-cover
                                    "
                                />
                            </div>


                            {/* DETAILS */}

                            <div
                                className="
                                    mt-7

                                    grid
                                    grid-cols-1
                                    gap-7

                                    sm:mt-8
                                    md:grid-cols-2
                                "
                            >

                                <div>

                                    <p
                                        className="
                                            text-[8px]
                                            font-bold
                                            uppercase
                                            tracking-[0.25em]
                                            text-[#7A263A]
                                        "
                                    >
                                        About
                                    </p>

                                    <p
                                        className="
                                            mt-3
                                            text-[11px]
                                            leading-5
                                            text-[#241814]/60

                                            sm:text-xs
                                            sm:leading-6
                                        "
                                    >
                                        {selectedProject.description}
                                    </p>

                                </div>


                                <div>

                                    <p
                                        className="
                                            text-[8px]
                                            font-bold
                                            uppercase
                                            tracking-[0.25em]
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
                                            gap-1.5
                                        "
                                    >

                                        {selectedProject.technologies.map(
                                            (technology) => (
                                                <span
                                                    key={technology}
                                                    className="
                                                        rounded-full
                                                        bg-[#7A263A]

                                                        px-2.5
                                                        py-1.5

                                                        text-[7px]
                                                        uppercase
                                                        tracking-[0.1em]

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


                            <button
                                type="button"
                                onClick={() =>
                                    setSelectedProject(null)
                                }
                                className="
                                    mt-8

                                    text-[8px]
                                    uppercase
                                    tracking-[0.2em]
                                    text-[#7A263A]

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