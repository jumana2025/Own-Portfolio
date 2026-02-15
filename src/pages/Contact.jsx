import React, { useState } from "react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = "Portfolio Contact Message";

        const body = `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;

        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=jumana.edv@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(gmailLink, "_blank");

        // Optional: clear form after click
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };

    return (
        <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8">Let's talk.</h2>

            <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid md:grid-cols-2 gap-6">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="w-full p-4 bg-gray-800 border border-gray-600 rounded-xl focus:outline-indigo-400 text-white placeholder-gray-400"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full p-4 bg-gray-800 border border-gray-600 rounded-xl focus:outline-indigo-400 text-white placeholder-gray-400"
                        required
                    />
                </div>

                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project"
                    rows="5"
                    className="w-full p-4 bg-gray-800 border border-gray-600 rounded-xl focus:outline-indigo-400 text-white placeholder-gray-400"
                    required
                ></textarea>

                <button
                    type="submit"
                    className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-indigo-600 transition-all"
                >
                    Send Message
                </button>

            </form>
        </section>
    );
};

export default Contact;
