import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main
      className="
        relative
        w-full
        max-w-full
        overflow-x-hidden
        bg-[#F4EBDD]
        text-[#241814]
      "
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="
          relative
          flex
          min-h-[100svh]
          w-full
          items-center
          justify-center
          overflow-hidden

          px-4
          pt-24
          pb-24

          sm:px-6
          sm:pt-28

          md:min-h-screen
          md:px-10
          md:pt-24
          md:pb-20

          lg:px-16
        "
      >
        {/* =====================================================
            TOP LABEL
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            absolute
            left-5
            top-24
            z-50

            text-[8px]
            font-medium
            uppercase
            tracking-[0.25em]

            text-[#7A263A]

            sm:left-7
            sm:top-28
            sm:text-[9px]

            md:left-12
            md:top-28

            lg:left-16
          "
        >
          Creative Developer
        </motion.div>

        {/* =====================================================
            CENTER CONTENT
        ===================================================== */}

        <div
          className="
            relative
            z-10

            flex
            w-full
            max-w-[1500px]
            items-center
            justify-center
          "
        >
          <div
            className="
              group
              relative

              flex
              w-full
              flex-col
              items-center
              justify-center

              text-center
            "
          >
            {/* =================================================
                FULL STACK
            ================================================= */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 70,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                z-10

                w-full

                whitespace-nowrap

                text-center

                text-[15.5vw]
                font-black
                uppercase
                leading-[0.76]
                tracking-[-0.075em]

                text-[#241814]

                transition-all
                duration-500
                ease-out

                group-hover:text-[#F4EBDD]
                group-hover:[-webkit-text-stroke:1.5px_#241814]

                sm:text-[15vw]

                md:text-[14vw]
                md:group-hover:[-webkit-text-stroke:2px_#241814]

                lg:text-[13vw]

                xl:text-[12vw]
              "
            >
              Full Stack
            </motion.h1>

            {/* =================================================
                DEVELOPER
            ================================================= */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 90,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                z-30

                w-full

                whitespace-nowrap

                text-center

                text-[14.5vw]
                font-black
                uppercase
                leading-[0.8]
                tracking-[-0.08em]

                text-transparent

                [-webkit-text-stroke:1.5px_#241814]

                transition-all
                duration-500
                ease-out

                group-hover:text-[#241814]
                group-hover:[-webkit-text-stroke:0px_#241814]

                sm:text-[14vw]

                md:text-[13vw]
                md:[-webkit-text-stroke:2px_#241814]

                lg:text-[12vw]

                xl:text-[11vw]
              "
            >
              Developer
            </motion.h2>

            {/* =================================================
                IMAGE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.2,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                pointer-events-none

                absolute
                left-1/2
                top-[51%]

                z-20

                h-[42vh]
                w-[72vw]

                -translate-x-1/2
                -translate-y-1/2

                sm:h-[48vh]
                sm:w-[60vw]

                md:top-[50%]
                md:h-[56vh]
                md:w-[40vw]

                lg:h-[65vh]
                lg:w-[32vw]

                xl:w-[30vw]
              "
            >
              <motion.img
                src="/me pro.png"
                alt="Full Stack Developer"
                draggable="false"
                animate={{
                  x: mousePosition.x * -12,

                  y: [0, -5, 0, 5, 0],

                  rotate: [
                    0,
                    -0.4,
                    0.4,
                    -0.3,
                    0,
                  ],
                }}
                transition={{
                  x: {
                    type: "spring",
                    stiffness: 80,
                    damping: 15,
                    mass: 0.5,
                  },

                  y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },

                  rotate: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="
                  h-full
                  w-full

                  select-none

                  object-contain
                  object-bottom
                "
              />
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            SOCIAL ICONS
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 1,
            duration: 0.7,
          }}
          className="
            absolute
            bottom-6
            left-5
            z-50

            flex
            items-center
            gap-2

            sm:bottom-7
            sm:left-7
            sm:gap-3

            md:bottom-8
            md:left-12

            lg:left-16
          "
        >
          {/* INSTAGRAM */}

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="
              group

              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center

              rounded-full

              border
              border-[#7A263A]

              bg-[#7A263A]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-[#F4EBDD]
            "
          >
            <FaInstagram
              size={14}
              className="
                text-[#F4EBDD]

                transition-all
                duration-300

                group-hover:scale-110
                group-hover:text-[#7A263A]
              "
            />
          </a>

          {/* LINKEDIN */}

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              group

              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center

              rounded-full

              border
              border-[#7A263A]

              bg-[#7A263A]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-[#F4EBDD]
            "
          >
            <FaLinkedinIn
              size={14}
              className="
                text-[#F4EBDD]

                transition-all
                duration-300

                group-hover:scale-110
                group-hover:text-[#7A263A]
              "
            />
          </a>

          {/* GITHUB */}

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              group

              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center

              rounded-full

              border
              border-[#7A263A]

              bg-[#7A263A]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-[#F4EBDD]
            "
          >
            <FaGithub
              size={14}
              className="
                text-[#F4EBDD]

                transition-all
                duration-300

                group-hover:scale-110
                group-hover:text-[#7A263A]
              "
            />
          </a>
        </motion.div>

        {/* =====================================================
            BUTTONS
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
          className="
            absolute
            bottom-6
            left-1/2
            z-50

            flex
            -translate-x-1/2

            items-center
            justify-center

            gap-2

            sm:bottom-7

            md:bottom-8
          "
        >
          {/* VIEW WORK */}

          <a
            href="#projects"
            className="
              group

              inline-flex
              shrink-0
              items-center
              justify-center
              gap-1.5

              border
              border-[#7A263A]

              bg-[#7A263A]

              px-3
              py-2.5

              text-[7px]
              font-semibold
              uppercase
              tracking-[0.1em]

              text-[#F4EBDD]

              transition-all
              duration-300

              hover:border-[#241814]
              hover:bg-[#241814]

              sm:px-4
              sm:py-3
              sm:text-[8px]

              md:px-5
              md:py-3
              md:text-[9px]
              md:tracking-[0.15em]
            "
          >
            <span className="whitespace-nowrap">
              View My Work
            </span>

            <ArrowUpRight
              size={11}
              className="
                shrink-0

                transition-transform
                duration-300

                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>

          {/* CONNECT */}

          <a
            href="#contact"
            className="
              group

              inline-flex
              shrink-0
              items-center
              justify-center
              gap-1.5

              border
              border-[#241814]

              bg-transparent

              px-3
              py-2.5

              text-[7px]
              font-semibold
              uppercase
              tracking-[0.1em]

              text-[#241814]

              transition-all
              duration-300

              hover:bg-[#241814]
              hover:text-[#F4EBDD]

              sm:px-4
              sm:py-3
              sm:text-[8px]

              md:px-5
              md:py-3
              md:text-[9px]
              md:tracking-[0.15em]
            "
          >
            <span className="whitespace-nowrap">
              Let's Connect
            </span>

            <ArrowUpRight
              size={11}
              className="
                shrink-0

                transition-all
                duration-300

                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>
        </motion.div>

        {/* =====================================================
            SCROLL TEXT
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.3,
          }}
          className="
            absolute
            bottom-8
            right-5
            z-50
            hidden

            text-[8px]
            font-medium
            uppercase
            tracking-[0.3em]

            text-[#7A263A]

            md:block
            md:right-12

            lg:right-16
          "
        >
          Scroll to explore
        </motion.div>

        {/* =====================================================
            BACKGROUND DECORATION
        ===================================================== */}

        <div
          className="
            pointer-events-none

            absolute
            left-1/2
            top-1/2

            z-0

            h-[280px]
            w-[280px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[#7A263A]/[0.035]

            blur-3xl

            sm:h-[400px]
            sm:w-[400px]

            md:h-[500px]
            md:w-[500px]
          "
        />
      </section>
    </main>
  );
};

export default Home;