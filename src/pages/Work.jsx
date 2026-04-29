import React from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projects";

const Work = () => (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 italic underline underline-offset-8 text-white">Projects Showcase</h2>
        <div className="grid md:grid-cols-2 gap-12">
            {projectsData.map(project => (
                <Link to={`/project/${project.id}`} key={project.id} className="group cursor-pointer block bg-gray-900 rounded-3xl p-4 border border-gray-800 hover:border-indigo-500/50 transition-colors shadow-xl">
                    <div className="overflow-hidden rounded-2xl mb-6 shadow-lg shadow-black/50">
                        <img 
                            src={project.img} 
                            alt={project.title} 
                            className="grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105 w-full h-64 object-cover object-top" 
                        />
                    </div>
                    <div className="flex justify-between items-start px-2">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-100 group-hover:text-indigo-400 transition-colors mb-2">{project.title}</h3>
                            <div className="flex gap-2">
                                {project.technologies.slice(0, 3).map(tech => (
                                    <span key={tech} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-md">{tech}</span>
                                ))}
                            </div>
                        </div>
                        <div className="text-right flex flex-col items-end gap-1">
                            <span className="text-indigo-500 font-mono text-sm bg-indigo-500/10 px-2 py-1 rounded-md">{project.year}</span>
                            {project.status && <span className="text-gray-400 font-mono text-xs">{project.status}</span>}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </section>
);

export default Work;