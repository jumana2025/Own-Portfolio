import React from "react";

const skills = [
    "Python", "JavaScript", "React", "Node.js",
    "Web Design", "Django", "PostgreSQL", "HTML", "CSS", "Tailwind CSS", "REST APIs", "Git",
    "celery", "Docker", "AWS", "Render", "Vercel", "RAG", "OpenAI API", "AI/ML",
];

const software = [
    "VS Code", "Git", "Postman", "Figma",
    "Docker", "PostgreSQL", "Vercel", "AWS",
];

export default function About() {
    return (
        <section id="about" className="bg-black px-6 py-24 text-white sm:px-10 lg:px-20">
            <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[minmax(320px,426px)_1fr] lg:gap-14 xl:gap-20">
                <div className="lg:col-start-2">
                    <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.35em] text-blue-300">
                        <span className="h-px w-8 bg-blue-500" /> About
                    </div>

                    <h2 className="max-w-4xl font-['Syne'] text-5xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                        Visual identity,
                        <br />
                        built with <span className="text-blue-500">intention.</span>
                    </h2>

                    <div className="mt-8 max-w-2xl space-y-2 text-sm leading-7 text-slate-300 sm:text-base">
                        <p>I&apos;m a software developer dedicated to building impactful digital experiences through code, design, and thoughtful problem-solving.</p>
                        <p>Focused on helping people and businesses turn ideas into clean, responsive, and useful web products.</p>
                    </div>

                    <div className="mt-12">
                        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.35em] text-blue-300">Skills</p>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => <span key={skill} className="rounded-full border border-white/15 px-3 py-2 text-xs text-slate-300 transition-colors hover:border-blue-500 hover:text-blue-300">{skill}</span>)}
                        </div>
                    </div>

                    <div className="mt-12">
                        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.35em] text-blue-300">Software</p>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-slate-300 sm:grid-cols-4">
                            {software.map((item) => <span key={item} className="before:mr-2 before:text-blue-500 before:content-['•']">{item}</span>)}
                        </div>
                    </div>

                </div>

                <div className="relative mx-auto w-full max-w-[426px] lg:col-start-1 lg:row-start-1 lg:order-first">
                    <div className="absolute -inset-3 rounded-sm border border-blue-500/20" />
                    <div className="relative overflow-hidden rounded-sm bg-slate-900">
                        <img src="/Proffessionalimage.png" alt="Professional image of Jumana, software developer" className="aspect-[4/5] w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0" />
                        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/90 to-transparent" />
                    </div>
                    <div className="absolute -bottom-5 right-0 border border-white/10 bg-[#111214] px-5 py-4 shadow-2xl sm:right-[-18px]">
                        <p className="text-2xl font-bold text-white">Full Stack</p>
                        <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">Developer</p>
                    </div>
                </div>
            </div>

        </section>
    );
}
