import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const linkStyle = ({ isActive }) =>
        isActive ? "text-indigo-400 font-bold" : "text-gray-300 hover:text-white transition-colors";

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-700">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                <NavLink to="/" className="text-2xl font-black tracking-tighter">JUMANA<span className="text-indigo-600">.</span></NavLink>
                <div className="hidden md:flex space-x-10 text-sm font-medium uppercase tracking-widest">
                    <NavLink to="/" className={linkStyle}>Home</NavLink>
                    <NavLink to="/work" className={linkStyle}>Work</NavLink>
                    <NavLink to="/about" className={linkStyle}>About</NavLink>
                    <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
                </div>
                <button
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden bg-black border-t border-gray-700">
                    <div className="px-10 py-8 space-y-6  text-sm font-medium uppercase tracking-widest">
                        <NavLink to="/" className={linkStyle} onClick={() => setIsOpen(false)}>Home</NavLink>
                        <NavLink to="/work" className={linkStyle} onClick={() => setIsOpen(false)}>Work</NavLink>
                        <NavLink to="/about" className={linkStyle} onClick={() => setIsOpen(false)}>About</NavLink>
                        <NavLink to="/contact" className={linkStyle} onClick={() => setIsOpen(false)}>Contact</NavLink>
                    </div>
                </div>
            )
            }
        </nav >
    );
};

export default Navbar;