import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export const Home = () => (
    <div className="bg-[#030712] relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-indigo-900/20 to-transparent pointer-events-none"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>

        {/* Hero Section */}
        <section className="relative pt-32 sm:pt-36 md:pt-48 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 sm:gap-16">
            <motion.div
                className="flex-1 text-center md:text-left z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-medium px-4 py-1.5 rounded-full text-sm mb-6 sm:mb-8">
                    Available for new projects
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 sm:mb-8 text-white">
                    WEB<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Developer</span>.
                </h1>
                <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto md:mx-0 mb-8 sm:mb-12 leading-relaxed font-light">
                    Specializing in building high-end interactive interfaces and robust design systems for modern brands.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Link to="/work" className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                        See My Projects
                    </Link>
                    <Link to="/contact" className="bg-gray-800/80 backdrop-blur text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-700 transition-all border border-gray-700">
                        Get In Touch
                    </Link>
                </div>
            </motion.div>

            <motion.div
                className="flex-1 relative z-10 w-full max-w-md mx-auto md:max-w-none"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="relative aspect-square sm:aspect-[4/3] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/10 group">
                    <img
                        src="./pic 1.jpeg"
                        alt="Hero Developer"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
                </div>
            </motion.div>
        </section>

        {/* Work Preview */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto z-10">
            <div className="flex justify-between items-end mb-12 sm:mb-16">
                <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Selected Work</h2>
                    <p className="text-gray-400 text-lg">A glimpse into some of my recent projects.</p>
                </div>
                <Link to="/work" className="hidden sm:inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                    View All Projects &rarr;
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {projectsData.slice(0, 3).map(project => (
                    <Link to={`/project/${project.id}`} key={project.id} className="group flex flex-col bg-gray-900/40 border border-gray-800 hover:border-indigo-500/30 rounded-3xl p-3 sm:p-4 transition-all duration-300 shadow-xl backdrop-blur-sm">
                        <div className="overflow-hidden rounded-2xl mb-5 sm:mb-6 aspect-video bg-black/20">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                            />
                        </div>
                        <div className="px-2 sm:px-3 pb-2 flex-1 flex flex-col">
                            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors mb-2">{project.title}</h3>
                            <p className="text-gray-400 text-sm sm:text-base line-clamp-2 mb-4">{project.description}</p>
                            <div className="mt-auto flex justify-between items-center hidden sm:flex">
                                <span className="text-xs bg-gray-800 text-gray-400 px-3 py-1 rounded-full">{project.year}</span>
                                <span className="text-indigo-400 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">Details &rarr;</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="text-center mt-10 sm:hidden">
                <Link to="/work" className="inline-block border border-gray-700 text-gray-300 px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                    View All Projects
                </Link>
            </div>
        </section>

        {/* Skills Section */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center text-white">Skills & Technologies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                {[
                    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                    { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
                    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
                    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
                    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
                ].map(skill => (
                    <div key={skill.name} className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center border border-gray-800 hover:border-indigo-500/50 hover:-translate-y-2 transition-all duration-300 group">
                        <img src={skill.icon} alt={skill.name} className="w-12 h-12 sm:w-16 sm:h-16 mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="font-medium text-sm sm:text-base text-gray-300">{skill.name}</h3>
                    </div>
                ))}
            </div>
        </section>

        {/* Contact CTA */}
        <section className="relative py-20 sm:py-32 px-4 sm:px-6 max-w-4xl mx-auto text-center z-10">
            <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/20 border border-indigo-500/20 rounded-[3rem] p-10 sm:p-16 md:p-20 backdrop-blur-sm">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Let's build something amazing</h2>
                <p className="text-lg sm:text-xl text-indigo-200/80 mb-10 max-w-2xl mx-auto">
                    Have a project in mind? I'm available for freelance opportunities and full-time roles.
                </p>
                <Link to="/contact" className="inline-block bg-white text-indigo-950 px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-100 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    Start a Conversation
                </Link>
            </div>
        </section>
    </div>
);

export default Home;