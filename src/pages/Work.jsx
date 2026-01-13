import React from "react";
const projects = [
    { id: 1, title: "Personal Portfolio", year: "2025", img: "/portfolio pro.png" },
    { id: 2, title: "Fashion Accessories E-commerce", year: "2025", img: "/e-commerce.png" },
    { id: 3, title: "Library Management System", year: "2026", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570", status: "Ongoing" }
];

const Work = () => (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 italic underline underline-offset-8">Projects Showcase</h2>
        <div className="grid md:grid-cols-2 gap-12">
            {projects.map(project => (
                <div key={project.id} className="group cursor-pointer">
                    <div className="overflow-hidden rounded-2xl mb-4">
                        <img src={project.img} alt={project.title} className="grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" />
                    </div>
                    <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <div className="text-right">
                            <span className="text-gray-400 font-mono">{project.year}</span>
                            {project.status && <span className="text-indigo-600 font-mono block">{project.status}</span>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Work;