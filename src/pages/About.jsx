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
                w-full
                overflow-hidden
                bg-[#F4EBDD]
                text-[#241814]
            "
        >
            <div
                className="
                    mx-auto
                    w-full
                    max-w-[1600px]
                    px-5
                    py-16

                    sm:px-8
                    sm:py-20

                    md:px-12
                    md:py-24

                    lg:px-16
                    lg:py-28
                "
            >

                {/* HEADER */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-4
                    "
                >
                    <div className="flex min-w-0 items-center gap-2 sm:gap-3">

                        <span
                            className="
                                h-1.5
                                w-1.5
                                shrink-0
                                rounded-full
                                bg-[#7A263A]

                                sm:h-2
                                sm:w-2
                            "
                        />

                        <p
                            className="
                                whitespace-nowrap
                                text-[8px]
                                font-medium
                                uppercase
                                tracking-[0.2em]

                                sm:text-[10px]
                                sm:tracking-[0.3em]
                            "
                        >
                            About Me
                        </p>

                    </div>

                    <p
                        className="
                            shrink-0
                            whitespace-nowrap
                            text-[8px]
                            uppercase
                            tracking-[0.18em]
                            text-[#241814]/40

                            sm:text-[10px]
                            sm:tracking-[0.3em]
                        "
                    >
                        01 / 04
                    </p>
                </motion.div>


                {/* CONTENT */}

                <div
                    className="
                        mt-12

                        grid
                        grid-cols-1
                        gap-10

                        sm:mt-16
                        sm:gap-12

                        md:mt-20
                        md:grid-cols-12
                        md:items-center

                        lg:mt-24
                    "
                >

                    {/* IMAGE */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 70,
                            scale: 0.97,
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
                            mx-auto
                            w-full
                            max-w-[340px]
                            overflow-hidden

                            md:col-span-5
                            md:mx-0
                            md:max-w-none

                            lg:col-span-4
                        "
                    >
                        <div className="aspect-[4/5] w-full">

                            <img
                                src="/hero.jpeg"
                                alt="Full Stack Developer"
                                loading="lazy"
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

                        <div
                            className="
                                absolute
                                bottom-3
                                left-3

                                sm:bottom-5
                                sm:left-5
                            "
                        >
                            <p
                                className="
                                    text-[7px]
                                    uppercase
                                    tracking-[0.2em]
                                    text-[#F4EBDD]
                                    mix-blend-difference

                                    sm:text-[9px]
                                    sm:tracking-[0.3em]
                                "
                            >
                                Full Stack Developer
                            </p>
                        </div>
                    </motion.div>


                    {/* TEXT */}

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
                            w-full
                            min-w-0

                            md:col-span-6
                            md:col-start-7

                            lg:col-span-6
                            lg:col-start-6
                        "
                    >

                        <motion.h2
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 40,
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
                                w-full
                                max-w-2xl

                                text-[1.55rem]
                                font-medium
                                leading-[1.1]
                                tracking-[-0.035em]

                                sm:text-3xl

                                md:text-4xl

                                lg:text-5xl
                            "
                        >
                            I'm a{" "}
                            <span className="italic text-[#7A263A]">
                                Full Stack Developer
                            </span>{" "}
                            who loves turning ideas into modern digital
                            experiences.
                        </motion.h2>


                        <motion.p
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 30,
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
                                mt-6
                                max-w-xl

                                text-[12px]
                                leading-6
                                text-[#241814]/65

                                sm:mt-8
                                sm:text-sm
                                sm:leading-7

                                md:text-base
                            "
                        >
                            I enjoy creating clean, responsive and functional
                            web applications. I work across both frontend and
                            backend to turn ideas into complete digital products.
                        </motion.p>


                        <motion.p
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 30,
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
                                mt-3
                                max-w-xl

                                text-[12px]
                                leading-6
                                text-[#241814]/65

                                sm:text-sm
                                sm:leading-7

                                md:text-base
                            "
                        >
                            I focus on writing clean code, creating simple user
                            experiences and continuously learning new technologies.
                        </motion.p>


                        {/* BUTTONS */}

                        <motion.div
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 30,
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                },
                            }}
                            className="
                                mt-8
                                flex
                                w-full
                                flex-col
                                gap-3

                                sm:flex-row
                                sm:flex-wrap
                            "
                        >

                            <a
                                href="/jumanap.in.pdf"
                                download
                                className="
                                    group
                                    inline-flex
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2

                                    bg-[#7A263A]

                                    px-5
                                    py-3.5

                                    text-[8px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.14em]

                                    text-[#F4EBDD]

                                    transition-all
                                    duration-300

                                    hover:-translate-y-1
                                    hover:bg-[#241814]

                                    sm:w-auto
                                    sm:px-6
                                    sm:py-4
                                    sm:text-[10px]
                                "
                            >
                                Download Resume

                                <ArrowDownToLine
                                    size={14}
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:translate-y-1
                                    "
                                />
                            </a>


                            <a
                                href="#contact"
                                className="
                                    group
                                    inline-flex
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2

                                    border
                                    border-[#241814]

                                    px-5
                                    py-3.5

                                    text-[8px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.14em]

                                    transition-all
                                    duration-300

                                    hover:-translate-y-1
                                    hover:border-[#7A263A]
                                    hover:bg-[#7A263A]
                                    hover:text-[#F4EBDD]

                                    sm:w-auto
                                    sm:px-6
                                    sm:py-4
                                    sm:text-[10px]
                                "
                            >
                                Let's Talk

                                <ArrowUpRight
                                    size={14}
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


                {/* BOTTOM LINE */}

                <motion.div
                    initial={{
                        opacity: 0,
                        scaleX: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                        scaleX: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1,
                        delay: 0.3,
                    }}
                    className="
                        mt-16
                        h-px
                        w-full
                        origin-left
                        bg-[#241814]/10

                        sm:mt-20
                        md:mt-28
                    "
                />

            </div>
        </section>
    );
};

export default About;