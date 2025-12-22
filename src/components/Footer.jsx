import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import resumeData from '../data/resume.json';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white tracking-tight">{resumeData.profile.name}</h3>
                        <p className="text-slate-400 max-w-sm">
                            Building the future of cloud infrastructure and DevOps automation.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
                        <div className="space-y-3">
                            <a href={resumeData.profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                                <Linkedin size={20} />
                                <span>LinkedIn</span>
                            </a>
                            <a href={`mailto:${resumeData.profile.email}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                                <Mail size={20} />
                                <span>{resumeData.profile.email}</span>
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                                <Github size={20} />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Portfolio</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/achievements/cloud" className="hover:text-white transition-colors">Cloud Engineering</a></li>
                            <li><a href="/achievements/devops" className="hover:text-white transition-colors">DevOps & CI/CD</a></li>
                            <li><a href="/achievements/ai" className="hover:text-white transition-colors">AI Systems</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Javed Akram. All rights reserved.</p>
                    <p>Built with React, Vite & Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
