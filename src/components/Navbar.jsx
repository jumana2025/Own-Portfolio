import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [["Home", "#home"], ["About", "#about"], ["Projects", "#projects"], ["Contact", "#contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>JUMANAP<span className="text-blue-500">.</span>IN</a>
        <div id="primary-navigation" className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </div>
        <a className="nav-cta" href="#contact">Let&apos;s Talk <span>↗</span></a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
    </header>
  );
}
