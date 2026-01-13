import React from "react";
export const Contact = () => (
    <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-8">Let’s talk.</h2>
        <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className="w-full p-4 bg-gray-800 border border-gray-600 rounded-xl focus:outline-indigo-400 text-white placeholder-gray-400" />
                <input type="email" placeholder="Email" className="w-full p-4 bg-gray-800 border border-gray-600 rounded-xl focus:outline-indigo-400 text-white placeholder-gray-400" />
            </div>
            <textarea placeholder="Tell me about your project" rows="5" className="w-full p-4 bg-gray-800 border border-gray-600 rounded-xl focus:outline-indigo-400 text-white placeholder-gray-400"></textarea>
            <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-indigo-600 transition-all">
                Send Message
            </button>
        </form>
    </section>
);

export default Contact;