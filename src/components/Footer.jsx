import React from 'react';
import { Gitlab, Linkedin, Mail } from 'lucide-react';
import resumeData from '../data/resume.json';

const Footer = () => {
    return (
        <footer className="bg-[#05070D] text-slate-400 py-20 border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <h3 className="text-xl font-bold text-slate-200 tracking-widest uppercase">VISION</h3>
                            <div className="w-10 h-1 bg-aura-cyan mt-2 rounded-full"></div>
                        </div>
                        <p className="text-slate-500 max-w-sm leading-relaxed text-sm">
                            Architecting resilient, high-scale digital ecosystems through
                            advanced cloud infrastructure and seamless automation pipelines.
                        </p>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-lg font-bold text-slate-200 mb-6 tracking-tight uppercase">CONNECT</h4>
                        <div className="space-y-4">
                            <a href={resumeData.profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-aura-cyan transition-all group w-fit">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-aura-cyan/10 group-hover:text-aura-cyan transition-all border border-transparent group-hover:border-aura-cyan/20">
                                    <Linkedin size={18} />
                                </div>
                                <span className="font-medium text-sm">Professional Profile</span>
                            </a>
                            <a href={`mailto:${resumeData.profile.email}`} className="flex items-center gap-3 hover:text-aura-purple transition-all group w-fit">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-aura-purple/10 group-hover:text-aura-purple transition-all border border-transparent group-hover:border-aura-purple/20">
                                    <Mail size={18} />
                                </div>
                                <span className="font-medium text-sm">{resumeData.profile.email}</span>
                            </a>
                            <a href="https://gitlab.com/gitlab7370308" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-aura-magenta transition-all group w-fit">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-aura-magenta/10 group-hover:text-aura-magenta transition-all border border-transparent group-hover:border-aura-magenta/20">
                                    <Gitlab size={18} />
                                </div>
                                <span className="font-medium text-sm">Technical Works</span>
                            </a>
                        </div>
                    </div>

                    {/* Domains */}
                    <div>
                        <h4 className="text-lg font-bold text-slate-200 mb-6 tracking-tight uppercase">DOMAINS</h4>
                        <ul className="space-y-3 text-sm font-medium">
                            <li><a href="/achievements/cloud" className="hover:text-aura-cyan transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-aura-cyan opacity-50 group-hover:opacity-100 transition-opacity"></span>Cloud Engineering</a></li>
                            <li><a href="/achievements/devops" className="hover:text-aura-purple transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-aura-purple opacity-50 group-hover:opacity-100 transition-opacity"></span>DevOps & CI/CD</a></li>
                            <li><a href="/achievements/ai" className="hover:text-aura-magenta transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-aura-magenta opacity-50 group-hover:opacity-100 transition-opacity"></span>AI Infrastructure</a></li>
                            <li><a href="/achievements/leadership" className="hover:text-aura-cyan transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-aura-cyan opacity-50 group-hover:opacity-100 transition-opacity"></span>Technical Leadership</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-700 font-mono uppercase tracking-widest font-bold">
                    <p>© {new Date().getFullYear()} Javeed Akram. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
