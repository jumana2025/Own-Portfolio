import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Home = () => (
    <>
        {/* Hero Section */}
        <section className="pt-32 sm:pt-36 md:pt-44 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 sm:mb-8 md:mb-10">
                        WEB<br /> Developer<span className="text-indigo-600">.</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mb-8 sm:mb-10 md:mb-12 leading-relaxed">
                        Specializing in building high-end interactive interfaces and robust design systems for modern brands.
                    </p>
                    <Link to="/work" className="inline-block bg-blue text-blue px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-base sm:text-lg hover:bg-indigo-600 transition-all shadow-xl">
                        See My Projects
                    </Link>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="text-center mt-8 md:mt-0">
                    <img
                        src="./pic 1.jpeg"
                        alt="Hero"
                        className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-2xl mx-auto"
                    />
                </motion.div>
            </div>
        </section>

        {/* Skills Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">Skills & Technologies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                    {
                        name: 'HTML',
                        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
                        description: 'The foundation of web development. I use HTML5 semantic elements to create structured, accessible web pages with proper document structure.'
                    },
                    {
                        name: 'CSS',
                        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
                        description: 'Styling and layout expertise. I create responsive, modern designs using CSS3 features like Flexbox, Grid, and animations for beautiful user interfaces.'
                    },
                    {
                        name: 'JavaScript',
                        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                        description: 'Core programming language for interactive web applications. I write clean, efficient JavaScript code for DOM manipulation and dynamic functionality.'
                    },
                    {
                        name: 'React',
                        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                        description: 'Modern frontend library for building user interfaces. I develop reusable components, manage state effectively, and create scalable React applications.'
                    },
                    {
                        name: 'Redux',
                        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
                        description: 'State management solution for complex applications. I use Redux to manage application state predictably and handle complex data flows.'
                    },
                    {
                        name: 'Django',
                        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
                        description: 'Full-stack Python web framework. I build robust backend applications with Django, handling databases, authentication, and REST APIs.'
                    }
                ].map(skill => (
                    <div key={skill.name} className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-700">
                        <div className="flex flex-col items-center text-center">
                            <img src={skill.icon} alt={skill.name} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4" />
                            <h3 className="font-bold text-base sm:text-lg text-gray-100 mb-2">{skill.name}</h3>
                            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{skill.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        {/* About Preview */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">About Me</h2>
                    <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                        I'm a passionate full-stack web developer specializing in creating modern, responsive web applications.
                        I have expertise in front-end technologies like React and Redux, and back-end with Django.
                    </p>
                    <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                        When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                        or sharing knowledge with the developer community.
                    </p>
                    <Link to="/about" className="inline-block bg-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-indigo-700 transition-all text-sm sm:text-base">
                        Learn More About Me
                    </Link>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="text-center mt-8 md:mt-0">
                    <img
                        src="./pic 1.jpeg"
                        alt="About Me"
                        className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-2xl shadow-2xl mx-auto"
                    />
                </motion.div>
            </div>
        </section>

        {/* Work Preview */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="group cursor-pointer">
                    <div className="overflow-hidden rounded-2xl mb-4">
                        <img src="/portfolio pro.png" alt="Portfolio" className="grayscale group-hover:grayscale-0 transition-all duration-500 w-full h-48 sm:h-56 md:h-64 object-cover" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">Personal Portfolio</h3>
                    <p className="text-gray-400 text-sm sm:text-base">2025</p>
                </div>
                <div className="group cursor-pointer">
                    <div className="overflow-hidden rounded-2xl mb-4">
                        <img src="e-commerce.png" alt="E-commerce" className="grayscale group-hover:grayscale-0 transition-all duration-500 w-full h-48 sm:h-56 md:h-64 object-cover" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">Fashion Accessories E-commerce</h3>
                    <p className="text-gray-400 text-sm sm:text-base">2025</p>
                </div>
                <div className="group cursor-pointer">
                    <div className="overflow-hidden rounded-2xl mb-4">
                        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570" alt="Library" className="grayscale group-hover:grayscale-0 transition-all duration-500 w-full h-48 sm:h-56 md:h-64 object-cover" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">Library Management System</h3>
                    <p className="text-gray-400 text-sm sm:text-base">2026 - Ongoing</p>
                </div>
            </div>
            <div className="text-center mt-8 sm:mt-10 md:mt-12">
                <Link to="/work" className="inline-block bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-indigo-600 transition-all text-sm sm:text-base">
                    View All Projects
                </Link>
            </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Let's Work Together</h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
                Have a project in mind? I'd love to hear about it.
            </p>
            <Link to="/contact" className="inline-block bg-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-indigo-700 transition-all text-sm sm:text-base">
                Get In Touch
            </Link>
        </section >
    </>
);

export default Home;