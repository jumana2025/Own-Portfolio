import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Send } from "lucide-react";

export const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setSent(false);
        setError("");

        try {
            const formData = new FormData(e.target);

            formData.append(
                "access_key",
                import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
            );

            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const result = await response.json();

            if (result.success) {
                setSent(true);
                e.target.reset();
            } else {
                setError(
                    "Your message could not be sent. Please try again."
                );
            }
        } catch (err) {
            console.error("Web3Forms Error:", err);

            setError(
                "Something went wrong. Please try again or email me directly."
            );
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
                w-full
                overflow-hidden

                bg-[#F4EBDD]
                text-[#241814]
            "
        >
            <section
                className="
                    relative
                    mx-auto

                    flex
                    min-h-screen
                    w-full
                    max-w-[1400px]
                    items-center

                    px-5
                    py-20

                    sm:px-8
                    sm:py-24

                    md:px-12
                    md:py-28

                    lg:px-16
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

                        sm:h-[450px]
                        sm:w-[450px]

                        md:h-[500px]
                        md:w-[500px]
                    "
                />

                <div className="relative z-10 w-full">

                    {/* LABEL */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="
                            mb-8

                            text-[8px]
                            font-medium
                            uppercase
                            tracking-[0.25em]

                            text-[#7A263A]

                            sm:mb-10
                        "
                    >
                        Get in touch
                    </motion.div>

                    {/* CONTENT */}

                    <div
                        className="
                            grid
                            gap-12

                            sm:gap-16

                            lg:grid-cols-[0.9fr_1.1fr]
                            lg:gap-24
                        "
                    >

                        {/* LEFT */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -40,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                            }}
                            className="w-full"
                        >

                            <p
                                className="
                                    max-w-md

                                    text-[12px]
                                    leading-6

                                    text-[#241814]/70

                                    sm:text-sm
                                    sm:leading-7
                                "
                            >
                                Have a project in mind, a collaboration idea,
                                or just want to say hello? Send me a message
                                and I'll get back to you as soon as possible.
                            </p>

                            <motion.h2
                                initial={{
                                    opacity: 0,
                                    y: 30,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.15,
                                }}
                                className="
                                    my-10

                                    text-[clamp(4rem,17vw,9rem)]

                                    font-black
                                    uppercase
                                    leading-[0.78]
                                    tracking-[-0.07em]

                                    sm:my-14
                                    sm:text-[16vw]

                                    md:text-[11vw]

                                    lg:text-[7vw]
                                "
                            >
                                Let's
                                <br />
                                talk.
                            </motion.h2>

                            {/* EMAIL */}

                            <div>

                                <div
                                    className="
                                        mb-3

                                        flex
                                        items-center
                                        gap-3

                                        text-[8px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.18em]

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
                                        max-w-full
                                        items-center
                                        gap-2

                                        break-all

                                        text-[12px]
                                        font-medium

                                        transition-colors
                                        duration-300

                                        hover:text-[#7A263A]

                                        sm:text-sm
                                    "
                                >
                                    edv.jumana2007@gmail.com

                                    <ArrowUpRight
                                        size={14}
                                        className="shrink-0"
                                    />
                                </a>

                            </div>

                        </motion.div>

                        {/* FORM */}

                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.9,
                                delay: 0.1,
                            }}
                            className="
                                w-full
                                min-w-0
                                space-y-6
                            "
                        >

                            {/* NAME + EMAIL */}

                            <div
                                className="
                                    grid
                                    grid-cols-1
                                    gap-6

                                    md:grid-cols-2
                                "
                            >

                                {/* NAME */}

                                <div className="w-full">

                                    <label
                                        htmlFor="name"
                                        className="
                                            mb-2
                                            block

                                            text-[8px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.18em]

                                            text-[#7A263A]
                                        "
                                    >
                                        Your Name
                                    </label>

                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        required
                                        autoComplete="name"
                                        className="
                                            w-full

                                            border-b
                                            border-[#241814]/30

                                            bg-transparent

                                            px-0
                                            py-3.5

                                            text-[13px]

                                            outline-none

                                            placeholder:text-[#241814]/40

                                            focus:border-[#7A263A]

                                            sm:text-sm
                                        "
                                    />

                                </div>

                                {/* EMAIL */}

                                <div className="w-full">

                                    <label
                                        htmlFor="email"
                                        className="
                                            mb-2
                                            block

                                            text-[8px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.18em]

                                            text-[#7A263A]
                                        "
                                    >
                                        Your Email
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        required
                                        autoComplete="email"
                                        className="
                                            w-full

                                            border-b
                                            border-[#241814]/30

                                            bg-transparent

                                            px-0
                                            py-3.5

                                            text-[13px]

                                            outline-none

                                            placeholder:text-[#241814]/40

                                            focus:border-[#7A263A]

                                            sm:text-sm
                                        "
                                    />

                                </div>

                            </div>

                            {/* MESSAGE */}

                            <div className="w-full">

                                <label
                                    htmlFor="message"
                                    className="
                                        mb-2
                                        block

                                        text-[8px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.18em]

                                        text-[#7A263A]
                                    "
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    placeholder="Tell me about your project..."
                                    required
                                    className="
                                        w-full
                                        resize-none

                                        border-b
                                        border-[#241814]/30

                                        bg-transparent

                                        px-0
                                        py-3.5

                                        text-[13px]
                                        leading-6

                                        outline-none

                                        placeholder:text-[#241814]/40

                                        focus:border-[#7A263A]

                                        sm:text-sm
                                        sm:leading-7
                                    "
                                />

                            </div>

                            {/* SUCCESS */}

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
                                        text-xs
                                        font-medium
                                        text-[#7A263A]
                                    "
                                >
                                    ✓ Message sent successfully.
                                    I'll get back to you soon.
                                </motion.p>
                            )}

                            {/* ERROR */}

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
                                        text-xs
                                        font-medium
                                        text-red-700
                                    "
                                >
                                    {error}
                                </motion.p>
                            )}

                            {/* BUTTON */}

                            <button
                                type="submit"
                                disabled={loading}
                                className="
                                    group

                                    inline-flex
                                    w-full

                                    items-center
                                    justify-center
                                    gap-3

                                    border
                                    border-[#7A263A]

                                    bg-[#7A263A]

                                    px-6
                                    py-4

                                    text-[8px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.18em]

                                    text-[#F4EBDD]

                                    transition-all
                                    duration-300

                                    hover:border-[#241814]
                                    hover:bg-[#241814]

                                    disabled:cursor-not-allowed
                                    disabled:opacity-60

                                    sm:w-auto
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