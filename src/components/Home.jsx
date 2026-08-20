import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import { ArrowUpRight } from "lucide-react";

const Home = () => {
  /* =====================================================
     MOUSE MOVEMENT
  ===================================================== */

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 2;

      setMousePosition({
        x,
        y,
      });
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
        min-h-screen
        overflow-hidden
        bg-[#F4EBDD]
        text-[#241814]
      "
    >
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section
        id="home"
        className="
          relative
          flex
          min-h-screen
          items-center
          justify-center
          overflow-hidden
          px-5
        "
      >

        {/* =================================================
            SMALL TOP TEXT
        ================================================= */}

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
            left-6
            top-28
            z-40

            text-[9px]
            font-medium
            uppercase
            tracking-[0.3em]

            text-[#7A263A]

            md:left-12
            lg:left-16
          "
        >
          Creative Developer
        </motion.div>


        {/* =================================================
            MAIN TYPOGRAPHY + IMAGE
        ================================================= */}

        <div
          className="
            relative
            z-10
            w-full
            max-w-[1400px]
            text-center
          "
        >

          {/* =================================================
              HOVER GROUP
          ================================================= */}

          <div
            className="
              group
              relative
              z-10
              cursor-default
            "
          >

            {/* ================= FULL STACK ================= */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 80,
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
                whitespace-nowrap

                text-[18vw]
                font-black
                uppercase
                leading-[0.72]
                tracking-[-0.07em]

                text-[#241814]

                transition-all
                duration-500
                ease-out

                group-hover:text-[#F4EBDD]
                group-hover:[-webkit-text-stroke:1.5px_#241814]

                md:text-[15vw]
                md:group-hover:[-webkit-text-stroke:2px_#241814]
              "
            >
              Full Stack
            </motion.h1>


            {/* ================= DEVELOPER ================= */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 100,
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
                whitespace-nowrap

                text-[17vw]
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

                md:text-[14vw]
                md:[-webkit-text-stroke:2px_#241814]
              "
            >
              Developer
            </motion.h2>


            {/* =================================================
                DEVELOPER IMAGE
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
                top-[46%]
                z-20

                h-[40vh]
                w-[55vw]

                -translate-x-1/2
                -translate-y-1/2

                md:h-[55vh]
                md:w-[35vw]

                lg:h-[65vh]
                lg:w-[30vw]
              "
            >

              <motion.img
                src="/me pro.png"
                alt="Full Stack Developer"
                draggable="false"

                animate={{
                  x: mousePosition.x * -18,

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
            bottom-8
            left-6
            z-50

            flex
            items-center
            gap-3

            md:left-12
            lg:left-16
          "
        >

          {/* ================= INSTAGRAM ================= */}

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
              items-center
              justify-center

              rounded-full

              border
              border-[#7A263A]

              bg-[#7A263A]
              text-[#F4EBDD]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-[#F4EBDD]
              hover:text-[#7A263A]

              hover:shadow-[0_8px_20px_rgba(122,38,58,0.18)]
            "
          >
            <FaInstagram
              size={15}
              className="
                text-[#F4EBDD]

                transition-all
                duration-300

                group-hover:scale-110
                group-hover:text-[#7A263A]
              "
            />
          </a>


          {/* ================= LINKEDIN ================= */}

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
              items-center
              justify-center

              rounded-full

              border
              border-[#7A263A]

              bg-[#7A263A]
              text-[#F4EBDD]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-[#F4EBDD]
              hover:text-[#7A263A]

              hover:shadow-[0_8px_20px_rgba(122,38,58,0.18)]
            "
          >
            <FaLinkedinIn
              size={15}
              className="
                text-[#F4EBDD]

                transition-all
                duration-300

                group-hover:scale-110
                group-hover:text-[#7A263A]
              "
            />
          </a>


          {/* ================= GITHUB ================= */}

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
              items-center
              justify-center

              rounded-full

              border
              border-[#7A263A]

              bg-[#7A263A]
              text-[#F4EBDD]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-[#F4EBDD]
              hover:text-[#7A263A]

              hover:shadow-[0_8px_20px_rgba(122,38,58,0.18)]
            "
          >
            <FaGithub
              size={15}
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
            bottom-8
            left-1/2
            z-50

            flex
            -translate-x-1/2
            gap-2
          "
        >

          {/* ================= VIEW MY WORK ================= */}

          <a
            href="#projects"

            className="
              group

              flex
              items-center
              gap-2

              border
              border-[#7A263A]

              bg-[#7A263A]

              px-5
              py-3

              text-[9px]
              font-semibold
              uppercase
              tracking-[0.15em]

              text-[#F4EBDD]

              transition-all
              duration-300

              hover:bg-[#241814]
              hover:border-[#241814]

              hover:shadow-[0_8px_25px_rgba(36,24,20,0.18)]
            "
          >
            View My Work

            <ArrowUpRight
              size={12}

              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />

          </a>


          {/* ================= LET'S CONNECT ================= */}

          <a
            href="#contact"

            className="
              group

              flex
              items-center
              gap-2

              border
              border-[#241814]

              bg-transparent

              px-5
              py-3

              text-[9px]
              font-semibold
              uppercase
              tracking-[0.15em]

              text-[#241814]

              transition-all
              duration-300

              hover:bg-[#241814]
              hover:text-[#F4EBDD]
            "
          >
            Let's Connect

            <ArrowUpRight
              size={12}

              className="
                opacity-0

                transition-all
                duration-300

                group-hover:translate-x-1
                group-hover:-translate-y-1
                group-hover:opacity-100
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
            bottom-9
            right-6
            z-50
            hidden

            text-[8px]
            font-medium
            uppercase
            tracking-[0.3em]

            text-[#7A263A]

            md:right-12
            md:block
            lg:right-16
          "
        >
          Scroll to explore
        </motion.div>


        {/* =====================================================
            SUBTLE BURGUNDY DECORATION
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2

            h-[500px]
            w-[500px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[#7A263A]/[0.035]

            blur-3xl
          "
        />

      </section>

    </main>
  );
};

export default Home;