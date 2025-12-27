import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, Terminal, Cloud, Brain, Activity, TestTube, Code, ChevronDown } from 'lucide-react';

const NavLink = ({ to, children, onClick, active }) => (
    <Link
        to={to}
        onClick={onClick}
        className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 font-sans tracking-wide ${active
            ? 'text-aura-cyan bg-aura-cyan/10 ring-1 ring-aura-cyan/30'
            : 'text-slate-600 hover:text-aura-cyan hover:bg-[#EBE7E0]'
            }`}
    >
        {children}
    </Link>
);

const MobileSubMenu = ({ title, children }) => (
    <div className="pl-4 space-y-1">
        <div className="text-xs font-semibold text-aura-purple uppercase tracking-wider mb-2 mt-2 font-sans">{title}</div>
        {children}
    </div>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Experience', path: '/experience' },
        { name: 'Projects', path: '/projects' },
        { name: 'Education', path: '/education' },
    ];

    return (
        <nav className="fixed w-full z-50 px-4 py-4">
            <div className="max-w-7xl mx-auto">
                <div className="glass-panel px-6 py-3 rounded-2xl flex items-center justify-between border-white/5">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
                            <div className="w-10 h-10 bg-aura-cyan/10 border border-aura-cyan/20 rounded-xl flex items-center justify-center text-aura-cyan group-hover:scale-110 transition-transform duration-300 shadow-[0_5px_15px_rgba(0,184,204,0.1)]">
                                <Terminal size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-lg tracking-tighter text-slate-900 leading-none">JAVEED AKRAM</span>
                                <span className="text-[10px] text-aura-cyan font-mono tracking-[0.2em] mt-1">
                                    {(() => {
                                        const path = location.pathname;
                                        if (path === '/') return 'BUILD';
                                        if (path === '/experience') return 'INNOVATE';
                                        if (path === '/projects') return 'AUTOMATE';
                                        if (path.startsWith('/achievements')) return 'SCALE';
                                        if (path === '/education') return 'DEPLOY';
                                        return 'VISION';
                                    })()}
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${isActive(link.path)
                                    ? 'text-aura-cyan bg-aura-cyan/10 shadow-[0_5px_15px_rgba(34,211,238,0.1)]'
                                    : 'text-slate-600 hover:text-aura-cyan hover:bg-[#EBE7E0]'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Dropdown for Achievements */}
                        <div className="relative group">
                            <Link
                                to="/achievements"
                                className={`px-4 py-2 rounded-xl text-sm font-medium inline-flex items-center gap-1 transition-all duration-300 ${location.pathname.startsWith('/achievements')
                                    ? 'text-aura-cyan bg-aura-cyan/10 shadow-[0_5px_15px_rgba(34,211,238,0.1)]'
                                    : 'text-slate-600 hover:text-aura-cyan hover:bg-[#EBE7E0]'
                                    }`}
                            >
                                Achievements
                                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                            </Link>

                            <div className="absolute right-0 w-64 mt-2 origin-top-right opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 pt-2">
                                <div className="glass-panel p-2 rounded-xl shadow-2xl border-slate-300/50 overflow-hidden">
                                    <Link to="/achievements/cloud" className="flex items-center gap-3 p-2 rounded-lg text-sm text-slate-600 hover:text-aura-cyan hover:bg-[#F5F2ED] transition-colors">
                                        <Cloud size={16} className="text-aura-cyan" /> Cloud Engineering
                                    </Link>
                                    <Link to="/achievements/devops" className="flex items-center gap-3 p-2 rounded-lg text-sm text-slate-600 hover:text-aura-purple hover:bg-[#F5F2ED] transition-colors">
                                        <Terminal size={16} className="text-aura-purple" /> DevOps & CI/CD
                                    </Link>
                                    <Link to="/achievements/devops-gitops" className="flex items-center gap-3 p-2 rounded-lg text-sm text-slate-600 hover:text-aura-magenta hover:bg-[#F5F2ED] transition-colors">
                                        <Rocket size={16} className="text-aura-magenta" /> GitOps Platforms
                                    </Link>
                                    <div className="h-px bg-white/5 my-2 mx-1"></div>
                                    <Link to="/achievements" className="flex items-center justify-center p-2 rounded-lg text-[10px] font-bold text-aura-cyan hover:bg-aura-cyan/5 transition-colors tracking-widest uppercase">
                                        View All
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-aura-cyan transition-all"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 px-4">
                    <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl border-white/5">
                        <div className="flex flex-col p-2 gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive(link.path)
                                        ? 'bg-aura-cyan/10 text-aura-cyan'
                                        : 'text-slate-600 hover:text-aura-cyan hover:bg-slate-100'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/achievements"
                                onClick={() => setIsOpen(false)}
                                className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${location.pathname.startsWith('/achievements')
                                    ? 'bg-aura-cyan/10 text-aura-cyan'
                                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                                    }`}
                            >
                                Achievements
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};


export default Navbar;
