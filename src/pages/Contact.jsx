import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, Send } from "lucide-react";
import { socialLinks } from "../data/socialLinks";

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

                    <Motion.div
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
                        <span /> Contact
                    </Motion.div>

                    <Motion.div
                        className="contact-heading"
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2>Let’s build something <span>unforgettable.</span></h2>
                        <p>Have a project in mind? Share a few details and I’ll get back to you as soon as I can.</p>
                    </Motion.div>

                    {/* CONTENT */}

                    <div
                        className="contact-layout grid gap-12 sm:gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12"
                    >

                        {/* LEFT */}

                        <Motion.div
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
                            <p className="contact-details-intro">Have a question or want to work together? Send me a message or connect through my profiles.</p>
                            <a className="contact-info-card" href="mailto:edv.jumana2007@gmail.com">
                                <span className="contact-info-icon"><Mail size={17} /></span>
                                <span><small>Email</small><strong>edv.jumana2007@gmail.com</strong></span>
                                <ArrowUpRight size={16} className="contact-info-arrow" />
                            </a>
                            <a className="contact-info-card" href="tel:7306519056">
                                <span className="contact-info-icon"><Phone size={17} /></span>
                                <span><small>Phone</small><strong>7306519056</strong></span>
                                <ArrowUpRight size={16} className="contact-info-arrow" />
                            </a>
                            <div className="contact-socials">
                                <p>Find me on</p>
                                <div>
                                    {socialLinks.map(({ label, href, icon: Icon }) => (
                                        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
                                            {React.createElement(Icon, { size: 16, "aria-hidden": true })}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="contact-availability"><span /> Open to thoughtful collaborations</div>
                        </Motion.div>

                        {/* FORM */}

                        <Motion.form
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

                            <div className="contact-field-grid">

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

                            <div className="contact-field-grid">
                                <div className="w-full">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        name="phone"
                                        placeholder="Your phone number"
                                        autoComplete="tel"
                                    />
                                </div>

                                <div className="w-full">
                                    <label htmlFor="projectType">Project Type</label>
                                    <select id="projectType" name="projectType" defaultValue="">
                                        <option value="" disabled>Select a project type</option>
                                        <option value="Web application">Web application</option>
                                        <option value="Business website">Business website</option>
                                        <option value="E-commerce">E-commerce</option>
                                        <option value="UI development">UI development</option>
                                        <option value="Other">Other</option>
                                    </select>
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
                                    placeholder="Tell me about your idea, goals, and timeline..."
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
                                <Motion.p
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
                                </Motion.p>
                            )}

                            {/* ERROR MESSAGE */}

                            {error && (
                                <Motion.p
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
                                </Motion.p>
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
                        </Motion.form>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Contact;
