import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [["Home", "#home"], ["About", "#about"], ["Project", "#projects"], ["Contact", "#contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="site-nav">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>jumanap.in</a>
      <div className={`nav-links ${open ? "is-open" : ""}`}>
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </div>
      <a className="nav-cta" href="#contact">Get in touch <span>↗</span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
    </nav>
  );
}
