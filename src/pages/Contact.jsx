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

            const accessKey =
                import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

            if (!accessKey) {
                setError(
                    "Access key is missing. Please check the environment variable."
                );
                return;
            }

            formData.append("access_key", accessKey);

            formData.append(
                "subject",
                "New Portfolio Contact Form Submission"
            );

            formData.append(
                "from_name",
                "Portfolio Website"
            );

            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const result = await response.json();

            console.log("Web3Forms Response:", result);

            if (result.success) {
                setSent(true);
                e.target.reset();
            } else {
                setError(
                    result.message ||
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
        <section
            id="contact"
            className="contact-section relative min-h-screen w-full overflow-hidden bg-[#F4EBDD] text-[#241814]"
        >
            <section
                className="contact-container relative mx-auto flex min-h-screen w-full max-w-[1400px] items-center px-5 py-20 sm:px-8 sm:py-24 md:px-12 md:py-28 lg:px-16"
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
                        className="contact-kicker mb-8 text-[8px] font-medium uppercase tracking-[0.25em] text-[#7A263A] sm:mb-10"
                    >
                        <span /> Get in touch
                    </motion.div>

                    <motion.div
                        className="contact-heading"
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2>Let’s build something <span>great.</span></h2>
                        <p>Share a little about what you’re working on. I’ll read every message and get back to you as soon as I can.</p>
                    </motion.div>

                    {/* CONTENT */}

                    <div
                        className="contact-layout grid gap-12 sm:gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12"
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
                            className="contact-details w-full"
                        >
                            <p className="contact-details-intro">Prefer email? Reach out directly, or connect with me on my professional profiles.</p>
                            <a className="contact-info-card" href="mailto:edv.jumana2007@gmail.com">
                                <span className="contact-info-icon"><Mail size={17} /></span>
                                <span><small>Email</small><strong>edv.jumana2007@gmail.com</strong></span>
                                <ArrowUpRight size={16} className="contact-info-arrow" />
                            </a>
                            <a className="contact-info-card" href="https://github.com/jumana2025" target="_blank" rel="noreferrer">
                                <span className="contact-info-icon contact-text-icon">GH</span>
                                <span><small>GitHub</small><strong>View my projects</strong></span>
                                <ArrowUpRight size={16} className="contact-info-arrow" />
                            </a>
                            <a className="contact-info-card" href="https://www.linkedin.com/in/jumana-p" target="_blank" rel="noreferrer">
                                <span className="contact-info-icon contact-text-icon">in</span>
                                <span><small>LinkedIn</small><strong>Let’s connect</strong></span>
                                <ArrowUpRight size={16} className="contact-info-arrow" />
                            </a>
                            <div className="contact-availability"><span /> Open to thoughtful collaborations</div>
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
                            className="contact-form w-full min-w-0 space-y-6"
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

                            {/* SUCCESS MESSAGE */}

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

                            {/* ERROR MESSAGE */}

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
        </section>
    );
};

export default Contact;
