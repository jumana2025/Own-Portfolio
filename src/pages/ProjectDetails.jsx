import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === parseInt(id));

    if (!project) {
        return (
            <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-4">Project Not Found</h2>
                <Link to="/work" className="text-indigo-500 hover:text-indigo-400">Return to Work</Link>
            </div>
        );
    }

    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pt-32 pb-20 px-4 sm:px-6 max-w-5xl mx-auto"
        >
            <Link to="/work" className="inline-block text-gray-400 hover:text-white transition-colors mb-8">
                &larr; Back to Projects
            </Link>
            
            <div className="bg-gray-900/50 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem]">
                    <img 
                        src={project.img} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-8 sm:p-12">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                            {project.title}
                        </h1>
                        <div className="flex flex-col sm:items-end">
                            <span className="text-xl text-indigo-400 font-mono mb-1">{project.year}</span>
                            {project.status && (
                                <span className="bg-indigo-600/20 text-indigo-300 px-3 py-1 rounded-full text-sm font-medium border border-indigo-500/30">
                                    {project.status}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 mt-12">
                        <div className="md:col-span-2">
                            <h3 className="text-xl font-semibold mb-4 text-gray-200">About the Project</h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                {project.description}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-200">Technologies</h3>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg text-sm border border-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <h3 className="text-xl font-semibold mb-4 text-gray-200">Links</h3>
                            <div className="flex flex-col gap-3">
                                <a 
                                    href={project.liveLink} 
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl transition-colors text-center font-medium shadow-lg shadow-indigo-900/20"
                                >
                                    View Live Site
                                </a>
                                <a 
                                    href={project.githubLink} 
                                    className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-xl transition-colors text-center border border-gray-700 font-medium"
                                >
                                    View Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default ProjectDetails;
