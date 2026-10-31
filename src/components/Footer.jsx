import React from "react";

const quickLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

const services = ["Web Development", "Responsive Design", "UI Development", "Creative Technology"];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <a className="footer-brand" href="#home">JUMANA<span>.</span></a>
          <p>Thoughtful digital experiences, built with care and a little curiosity.</p>
          <a className="footer-contact-link" href="#contact">Have a project in mind? <span aria-hidden="true">↗</span></a>
        </div>

        <div className="footer-column">
          <h2>Explore</h2>
          {quickLinks.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </div>

        <div className="footer-column">
          <h2>What I do</h2>
          {services.map((service) => <span key={service}>{service}</span>)}
        </div>

        <div className="footer-column footer-social-column">
          <h2>Connect</h2>
          <a href="https://github.com/jumana2025" target="_blank" rel="noreferrer"><span className="footer-github-mark" aria-hidden="true">GH</span> GitHub</a>
          <a href="https://www.linkedin.com/in/jumana-p" target="_blank" rel="noreferrer"><span className="footer-github-mark" aria-hidden="true">in</span> LinkedIn</a>
          <a href="https://www.instagram.com/jumanap.in/" target="_blank" rel="noreferrer"><span className="footer-github-mark" aria-hidden="true">ig</span> Instagram</a>
          <a href="mailto:jumana.edv@gmail.com"><span className="footer-github-mark" aria-hidden="true">@</span> Email</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Jumana. All rights reserved.</span>
        <a href="#home">Back to top <span aria-hidden="true">↗</span></a>
        <span>Designed & built with intention.</span>
      </div>
    </footer>
  );
}
