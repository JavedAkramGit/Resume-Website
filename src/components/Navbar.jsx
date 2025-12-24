import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, Terminal, Cloud, Brain, Activity, TestTube, Code } from 'lucide-react';

const NavLink = ({ to, children, onClick, active }) => (
    <Link
        to={to}
        onClick={onClick}
        className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${active
            ? 'bg-blue-600 text-white shadow-md'
            : 'text-slate-600 hover:bg-slate-100 hover:text-blue-600'
            }`}
    >
        {children}
    </Link>
);

const MobileSubMenu = ({ title, children }) => (
    <div className="pl-4 space-y-1">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{title}</div>
        {children}
    </div>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-2 rounded-lg shadow-lg">
                                <Code size={24} strokeWidth={2.5} />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-slate-800">Javeed Akram</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        <NavLink to="/" active={isActive('/')}>Home</NavLink>
                        <NavLink to="/experience" active={isActive('/experience')}>Experience</NavLink>
                        <NavLink to="/projects" active={isActive('/projects')}>Projects</NavLink>

                        {/* Dropdown for Achievements */}
                        <div className="relative group">
                            <button className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-blue-600 inline-flex items-center gap-1 transition-colors">
                                Achievements
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </button>

                            <div className="absolute right-0 w-64 mt-2 origin-top-right bg-white border border-slate-100 divide-y divide-slate-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform">
                                <div className="py-1">
                                    <Link to="/achievements/cloud" className="group flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">
                                        <Cloud className="mr-3 h-4 w-4 text-slate-400 group-hover:text-blue-500" /> Cloud Engineering
                                    </Link>
                                    <Link to="/achievements/devops" className="group flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">
                                        <Terminal className="mr-3 h-4 w-4 text-slate-400 group-hover:text-amber-500" /> DevOps & CI/CD
                                    </Link>
                                    <Link to="/achievements/devops-gitops" className="group flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">
                                        <Rocket className="mr-3 h-4 w-4 text-slate-400 group-hover:text-purple-500" /> GitOps Platforms
                                    </Link>
                                </div>
                                <div className="py-1">
                                    <Link to="/achievements/test-automation" className="group flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">
                                        <TestTube className="mr-3 h-4 w-4 text-slate-400 group-hover:text-emerald-500" /> Test Automation
                                    </Link>
                                    <Link to="/achievements/performance" className="group flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">
                                        <Activity className="mr-3 h-4 w-4 text-slate-400 group-hover:text-red-500" /> Performance Eng.
                                    </Link>
                                    <Link to="/achievements/ai" className="group flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">
                                        <Brain className="mr-3 h-4 w-4 text-slate-400 group-hover:text-indigo-500" /> AI Infrastructure
                                    </Link>
                                    <Link to="/achievements/leadership" className="group flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">
                                        <Activity className="mr-3 h-4 w-4 text-slate-400 group-hover:text-teal-500" /> Leadership & Gov.
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <NavLink to="/education" active={isActive('/education')}>Education</NavLink>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-slate-200 shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink to="/" active={isActive('/')} onClick={() => setIsOpen(false)}>Home</NavLink>
                        <NavLink to="/experience" active={isActive('/experience')} onClick={() => setIsOpen(false)}>Experience</NavLink>
                        <NavLink to="/projects" active={isActive('/projects')} onClick={() => setIsOpen(false)}>Projects</NavLink>

                        <div className="border-t border-slate-100 my-2 pt-2">
                            <MobileSubMenu title="Specializations">
                                <NavLink to="/achievements/cloud" active={isActive('/achievements/cloud')} onClick={() => setIsOpen(false)}>Cloud Engineering</NavLink>
                                <NavLink to="/achievements/devops" active={isActive('/achievements/devops')} onClick={() => setIsOpen(false)}>DevOps & CI/CD</NavLink>
                                <NavLink to="/achievements/devops-gitops" active={isActive('/achievements/devops-gitops')} onClick={() => setIsOpen(false)}>GitOps Platforms</NavLink>
                                <NavLink to="/achievements/test-automation" active={isActive('/achievements/test-automation')} onClick={() => setIsOpen(false)}>Test Automation</NavLink>
                                <NavLink to="/achievements/performance" active={isActive('/achievements/performance')} onClick={() => setIsOpen(false)}>Performance Eng.</NavLink>
                                <NavLink to="/achievements/ai" active={isActive('/achievements/ai')} onClick={() => setIsOpen(false)}>AI Infrastructure</NavLink>
                                <NavLink to="/achievements/leadership" active={isActive('/achievements/leadership')} onClick={() => setIsOpen(false)}>Leadership & Gov.</NavLink>
                            </MobileSubMenu>
                        </div>

                        <NavLink to="/education" active={isActive('/education')} onClick={() => setIsOpen(false)}>Education</NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
