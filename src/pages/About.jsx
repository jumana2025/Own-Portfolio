import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-5xl font-bold mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        I'm a passionate full-stack web developer specializing in creating modern, responsive web applications.
                        I have expertise in front-end technologies like HTML ,CSS ,JAVASCRIPT, React and Redux, and back-end with Django.
                    </p>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                        or sharing knowledge with the developer community.
                    </p>

                </div>
                <div className="text-center">
                    <img
                        src="./pic 1.jpeg"
                        alt="Profile"
                        className="w-80 h-80 object-cover rounded-2xl shadow-xl mx-auto"
                    />
                </div>
            </div>
        </motion.div >
    </section >
);

export default About;