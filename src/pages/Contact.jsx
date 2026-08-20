import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Mail, Send } from "lucide-react";

export const Contact = () => {
    const form = useRef();

    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);

    /* =====================================================
       SEND EMAIL
    ===================================================== */

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setSent(false);
        setError(false);

        try {
            await emailjs.sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                form.current,
                {
                    publicKey: "YOUR_PUBLIC_KEY",
                }
            );

            setSent(true);

            form.current.reset();
        } catch (error) {
            console.error("EmailJS Error:", error);

            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main
            id="contact"
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-[#F4EBDD]
                text-[#241814]
            "
        >

            {/* =====================================================
                CONTACT SECTION
            ===================================================== */}

            <section
                className="
                    relative
                    mx-auto
                    flex
                    min-h-screen
                    max-w-[1400px]
                    items-center

                    px-6
                    py-24

                    md:px-12
                    lg:px-16
                "
            >

                {/* =================================================
                    BACKGROUND DECORATION
                ================================================= */}

                <div
                    className="
                        pointer-events-none

                        absolute
                        right-[-150px]
                        top-1/2

                        h-[500px]
                        w-[500px]

                        -translate-y-1/2

                        rounded-full

                        bg-[#7A263A]/[0.035]

                        blur-3xl
                    "
                />

                {/* =================================================
                    MAIN CONTENT
                ================================================= */}

                <div
                    className="
                        relative
                        z-10
                        w-full
                    "
                >

                    {/* =================================================
                        TOP LABEL
                    ================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -20,
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
                        }}
                        className="
                            mb-10

                            text-[9px]
                            font-medium
                            uppercase
                            tracking-[0.3em]

                            text-[#7A263A]
                        "
                    >
                        Get in touch
                    </motion.div>


                    {/* =================================================
                        CONTENT GRID
                    ================================================= */}

                    <div
                        className="
                            grid
                            gap-16

                            lg:grid-cols-[0.9fr_1.1fr]
                            lg:gap-24
                        "
                    >

                        {/* =================================================
                            LEFT SIDE
                        ================================================= */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -40,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                            className="
                                flex
                                flex-col
                            "
                        >

                            {/* =================================================
                                DESCRIPTION
                            ================================================= */}

                            <p
                                className="
                                    max-w-md

                                    text-sm
                                    leading-7

                                    text-[#241814]/70
                                "
                            >
                                Have a project in mind, a collaboration idea,
                                or just want to say hello? Send me a message
                                and I'll get back to you as soon as possible.
                            </p>


                            {/* =================================================
                                LET'S TALK
                            ================================================= */}

                            <motion.h2
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
                                    duration: 0.8,
                                    delay: 0.15,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="
                                    my-14

                                    text-[16vw]
                                    font-black
                                    uppercase
                                    leading-[0.78]
                                    tracking-[-0.07em]

                                    text-[#241814]

                                    md:text-[11vw]

                                    lg:text-[7vw]
                                "
                            >
                                Let's
                                <br />
                                talk.
                            </motion.h2>


                            {/* =================================================
                                EMAIL
                            ================================================= */}

                            <div>

                                <div
                                    className="
                                        mb-3

                                        flex
                                        items-center
                                        gap-3

                                        text-[9px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.2em]

                                        text-[#7A263A]
                                    "
                                >
                                    <Mail size={14} />

                                    Email
                                </div>


                                <a
                                    href="mailto:edv.jumana2007@gmail.com"
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2

                                        text-sm
                                        font-medium

                                        text-[#241814]

                                        transition-colors
                                        duration-300

                                        hover:text-[#7A263A]
                                    "
                                >
                                    edv.jumana2007@gmail.com

                                    <ArrowUpRight size={14} />
                                </a>

                            </div>

                        </motion.div>


                        {/* =================================================
                            CONTACT FORM
                        ================================================= */}

                        <motion.form
                            ref={form}
                            onSubmit={handleSubmit}

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
                            }}

                            transition={{
                                duration: 0.9,
                                delay: 0.1,
                            }}

                            className="
                                space-y-7
                            "
                        >

                            {/* =================================================
                                NAME + EMAIL
                            ================================================= */}

                            <div
                                className="
                                    grid
                                    gap-6

                                    md:grid-cols-2
                                "
                            >

                                {/* NAME */}

                                <div>

                                    <label
                                        className="
                                            mb-2
                                            block

                                            text-[9px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.2em]

                                            text-[#7A263A]
                                        "
                                    >
                                        Your Name
                                    </label>


                                    <input
                                        type="text"
                                        name="from_name"
                                        placeholder="Your name"
                                        required

                                        className="
                                            w-full

                                            border-b
                                            border-[#241814]/30

                                            bg-transparent

                                            px-0
                                            py-4

                                            text-sm
                                            text-[#241814]

                                            placeholder:text-[#241814]/40

                                            outline-none

                                            transition-all
                                            duration-300

                                            focus:border-[#7A263A]
                                        "
                                    />

                                </div>


                                {/* EMAIL */}

                                <div>

                                    <label
                                        className="
                                            mb-2
                                            block

                                            text-[9px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.2em]

                                            text-[#7A263A]
                                        "
                                    >
                                        Your Email
                                    </label>


                                    <input
                                        type="email"
                                        name="from_email"
                                        placeholder="your@email.com"
                                        required

                                        className="
                                            w-full

                                            border-b
                                            border-[#241814]/30

                                            bg-transparent

                                            px-0
                                            py-4

                                            text-sm
                                            text-[#241814]

                                            placeholder:text-[#241814]/40

                                            outline-none

                                            transition-all
                                            duration-300

                                            focus:border-[#7A263A]
                                        "
                                    />

                                </div>

                            </div>


                            {/* =================================================
                                MESSAGE
                            ================================================= */}

                            <div>

                                <label
                                    className="
                                        mb-2
                                        block

                                        text-[9px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.2em]

                                        text-[#7A263A]
                                    "
                                >
                                    Message
                                </label>


                                <textarea
                                    name="message"
                                    rows="7"
                                    placeholder="Tell me about your project..."
                                    required

                                    className="
                                        w-full
                                        resize-none

                                        border-b
                                        border-[#241814]/30

                                        bg-transparent

                                        px-0
                                        py-4

                                        text-sm
                                        leading-7

                                        text-[#241814]

                                        placeholder:text-[#241814]/40

                                        outline-none

                                        transition-all
                                        duration-300

                                        focus:border-[#7A263A]
                                    "
                                />

                            </div>


                            {/* =================================================
                                SUCCESS MESSAGE
                            ================================================= */}

                            {sent && (
                                <motion.p
                                    initial={{
                                        opacity: 0,
                                        y: 10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}

                                    className="
                                        text-sm
                                        font-medium
                                        text-[#7A263A]
                                    "
                                >
                                    ✓ Message sent successfully.
                                    I'll get back to you soon.
                                </motion.p>
                            )}


                            {/* =================================================
                                ERROR MESSAGE
                            ================================================= */}

                            {error && (
                                <motion.p
                                    initial={{
                                        opacity: 0,
                                        y: 10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}

                                    className="
                                        text-sm
                                        font-medium
                                        text-red-700
                                    "
                                >
                                    Something went wrong.
                                    Please try again.
                                </motion.p>
                            )}


                            {/* =================================================
                                SEND BUTTON
                            ================================================= */}

                            <button
                                type="submit"
                                disabled={loading}

                                className="
                                    group

                                    inline-flex
                                    items-center
                                    gap-3

                                    border
                                    border-[#7A263A]

                                    bg-[#7A263A]

                                    px-7
                                    py-4

                                    text-[9px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]

                                    text-[#F4EBDD]

                                    transition-all
                                    duration-300

                                    hover:border-[#241814]
                                    hover:bg-[#241814]

                                    disabled:cursor-not-allowed
                                    disabled:opacity-60
                                "
                            >

                                {loading ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Send Message

                                        <Send
                                            size={14}
                                            className="
                                                transition-transform
                                                duration-300

                                                group-hover:translate-x-1
                                                group-hover:-translate-y-1
                                            "
                                        />
                                    </>
                                )}

                            </button>

                        </motion.form>

                    </div>

                </div>

            </section>

        </main>
    );
};

export default Contact;