import React, { useState } from "react";
import { ArrowDownToLine, ArrowUpRight, LoaderCircle, Play } from "lucide-react";

const buttons = [
  { label: "View Portfolio", href: "#projects", icon: ArrowUpRight, style: "primary" },
  { label: "Let's Talk", href: "#contact", icon: Play, style: "secondary" },
];

export default function Home() {
  const [downloading, setDownloading] = useState(false);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#07090c] px-6 py-32 text-white sm:px-12 lg:px-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(47,143,255,.16),transparent_32%)]" />

      <div className="max-w-5xl">


        <h1 className="font-['Syne'] text-[clamp(2.75rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.035em]">
          Building Digital
          <br />
          Experiences That
          <br />
          <span className="text-blue-500">Inspire.</span>
        </h1>

        <p className="mt-8 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
          I&apos;m Jumana P, a Full Stack Developer creating responsive, user-friendly web applications with React and modern technologies.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          {buttons.map(({ label, href, icon: Icon, style }) => (
            <a
              key={label}
              href={href}
              className={`home-cta magnetic-button ${style === "primary"
                ? "flex items-center gap-3 rounded-full bg-blue-500 px-6 py-4 text-sm font-bold hover:bg-blue-400"
                : "flex items-center gap-3 rounded-full border border-white/20 px-6 py-4 text-sm font-bold hover:border-blue-400"}`}
              onPointerMove={(event) => {
                if (event.pointerType === "touch") return;
                const bounds = event.currentTarget.getBoundingClientRect();
                const x = event.clientX - bounds.left - bounds.width / 2;
                const y = event.clientY - bounds.top - bounds.height / 2;
                event.currentTarget.style.setProperty("--magnetic-x", `${x * 0.12}px`);
                event.currentTarget.style.setProperty("--magnetic-y", `${y * 0.16}px`);
              }}
              onPointerLeave={(event) => {
                event.currentTarget.style.setProperty("--magnetic-x", "0px");
                event.currentTarget.style.setProperty("--magnetic-y", "0px");
              }}
            >
              {label}
              {React.createElement(Icon, { size: 15 })}
            </a>
          ))}

          <a
            className={`resume-cta${downloading ? " is-loading" : ""}`}
            href="/jumanap.in.pdf"
            download="Jumana-P-Resume.pdf"
            aria-busy={downloading}
            onClick={(event) => {
              if (downloading) {
                event.preventDefault();
                return;
              }

              setDownloading(true);
              window.setTimeout(() => setDownloading(false), 1200);
            }}
            onPointerMove={(event) => {
              if (event.pointerType === "touch") return;
              const bounds = event.currentTarget.getBoundingClientRect();
              const x = event.clientX - bounds.left - bounds.width / 2;
              const y = event.clientY - bounds.top - bounds.height / 2;
              event.currentTarget.style.setProperty("--magnetic-x", `${x * 0.12}px`);
              event.currentTarget.style.setProperty("--magnetic-y", `${y * 0.16}px`);
            }}
            onPointerLeave={(event) => {
              event.currentTarget.style.setProperty("--magnetic-x", "0px");
              event.currentTarget.style.setProperty("--magnetic-y", "0px");
            }}
          >
            {downloading
              ? <LoaderCircle className="resume-spinner" size={16} aria-hidden="true" />
              : <ArrowDownToLine size={16} aria-hidden="true" />}
            <span aria-live="polite">{downloading ? "Preparing..." : "Download Resume"}</span>
          </a>
        </div>
      </div>

      <a className="absolute bottom-8 right-8 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-blue-300" href="#about">
        Scroll to explore <ArrowUpRight size={14} />
      </a>
    </section>
  );
}
