import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

const projects = [
    {
        number: "01",
        title: "Thushk",
        category: "E-commerce",
        year: "2026",
        image: "/Thushk.png",
        description: "A modern e-commerce experience focused on clean interaction, responsive design and a simple user journey.",
        technologies: ["React", "Python", "Django", "PostgreSQL"],
    },
    {
        number: "02",
        title: "BOOKMA",
        category: "Reading community",
        year: "2026",
        image: "/Bookma.png",
        description: "A reader community platform where users can discover books, share their reading interests and connect with other readers.",
        technologies: ["React", "Django", "REST API", "PostgreSQL"],
    },
    {
        number: "03",
        title: "Pearl.oraa",
        category: "E-commerce",
        year: "2026",
        status: "LIVE",
        liveLink: "https://pearloraa-jewelry.vercel.app/",
        image: "/pearloraa.png",
        description: "A modern e-commerce experience focused on clean interaction, responsive design and a simple user journey.",
        technologies: ["React", "JavaScript", "Tailwind CSS"],
    },
];



export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="projects-showcase">
            <div className="projects-header">
                <div>
                    <p className="section-kicker">Portfolio</p>
                    <h2>Selected <span>work.</span></h2>
                </div>
                <p className="projects-intro">A focused selection of digital products built with clarity, care and a strong eye for detail.</p>
            </div>

            <div className="project-grid">
                {projects.map((project, index) => (
                    <motion.button key={project.title} type="button" className={`project-card project-card-${index + 1}`} onClick={() => setSelectedProject(project)} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.08 }}>
                        <div className="project-card-image">
                            <img src={project.image} alt={`${project.title} project preview`} loading="eager" decoding="async" />
                            <span className="project-number">{project.number}</span>
                            {project.status && <span className="project-status">{project.status}</span>}
                            <span className="project-arrow"><ArrowUpRight size={17} /></span>
                        </div>
                        <div className="project-card-info">
                            <div><p>{project.category}</p><h3>{project.title}</h3></div>
                            <span>{project.year}</span>
                        </div>
                        <p className="project-card-description">{project.description}</p>
                    </motion.button>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div className="project-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)}>
                        <motion.div className="project-modal" initial={{ opacity: 0, y: 28, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: .98 }} onClick={(event) => event.stopPropagation()}>
                            <button type="button" className="project-modal-close" aria-label="Close project" onClick={() => setSelectedProject(null)}><X size={17} /></button>
                            <p className="section-kicker">Project {selectedProject.number} {selectedProject.status && `· ${selectedProject.status}`}</p>
                            <h2>{selectedProject.title}<span>.</span></h2>
                            <img src={selectedProject.image} alt={selectedProject.title} />
                            <div className="project-modal-details"><div><p className="detail-label">About</p><p>{selectedProject.description}</p></div><div><p className="detail-label">Technologies</p><div className="tech-list">{selectedProject.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div></div>
                            <div className="project-modal-actions">
                                {selectedProject.liveLink && (
                                    <a className="project-live-link" href={selectedProject.liveLink} target="_blank" rel="noreferrer">
                                        View live project <ArrowUpRight size={15} />
                                    </a>
                                )}
                                <button type="button" className="project-modal-dismiss" onClick={() => setSelectedProject(null)}>Close project</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
