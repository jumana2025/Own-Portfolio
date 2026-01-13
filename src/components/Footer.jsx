import React from "react";
const Footer = () => (
    <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-2xl font-bold mb-4">JUMANA<span className="text-indigo-400">.</span></h3>
                    <p className="text-slate-400">Creating web experiences that matter.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-slate-400">
                        <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                        <li><a href="/work" className="hover:text-white transition-colors">Project</a></li>
                        <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                        <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4">Connect</h4>
                    <div className="flex space-x-4">
                        <a href="https://github.com/jumana2025" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
                        <a href="https://www.linkedin.com/in/jumana-p" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
                        <a href="jumana.edv@gmail.com" className="text-slate-400 hover:text-white transition-colors">Email</a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2025 JUMANA. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;