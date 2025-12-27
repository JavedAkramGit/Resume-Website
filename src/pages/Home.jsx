import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Users } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';
import resumeData from '../data/resume.json';

const Home = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Effects */}
            <div className="aura-blob w-[500px] h-[500px] bg-aura-cyan/10 -top-20 -left-20" />
            <div className="aura-blob w-[400px] h-[400px] bg-aura-purple/5 bottom-1/4 -right-10" style={{ animationDelay: '2s' }} />

            {/* Terminal Scanlines Effect (Landing Page Only) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

            <div className="pt-32 pb-20 px-4 relative z-10 text-center">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-white shadow-[0_5px_15px_rgba(0,184,204,0.1)] border border-slate-200 text-[11px] font-mono text-aura-cyan mb-12">
                        <span className="flex h-2 w-2 rounded-full bg-aura-cyan animate-pulse"></span>
                        <span className="opacity-70 font-mono tracking-tighter uppercase text-slate-500">system_node: operational</span>
                        <span className="font-bold opacity-30 text-slate-300">|</span>
                        <span className="font-bold font-mono tracking-tighter">EST_02:30:11</span>
                    </div>

                    <div className="relative mb-12 group">
                        <h1 className="flex flex-col items-center justify-center gap-6 mb-20 select-none">
                            <span className="font-tech text-xl md:text-3xl lg:text-4xl text-slate-600 transition-all duration-500 block hover:-translate-y-1 hover:text-aura-cyan cursor-default opacity-80 hover:opacity-100">ARCHITECTING</span>
                            <span className="font-stylized font-black text-5xl md:text-6xl lg:text-7xl neon-text block py-4 tracking-tight">LIMITLESS</span>
                            <span className="font-tech text-xl md:text-3xl lg:text-4xl text-slate-600 transition-all duration-500 block hover:translate-y-1 hover:text-aura-purple cursor-default opacity-80 hover:opacity-100 uppercase">POSSIBILITIES</span>
                        </h1>
                    </div>

                    {/* Terminal Window Mockup */}
                    <div className="max-w-3xl mx-auto mb-16 relative">
                        <div className="absolute inset-0 bg-aura-cyan/5 blur-3xl rounded-full"></div>
                        <div className="relative bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xl">
                            <div className="bg-slate-50 px-4 py-2 flex items-center justify-between border-b border-slate-200">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                                </div>
                                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">profile_summary.exe</div>
                                <div className="w-10"></div>
                            </div>
                            <div className="p-6 text-left font-mono text-sm md:text-base">
                                <div className="flex gap-3 mb-2">
                                    <span className="text-aura-cyan">➜</span>
                                    <span className="text-slate-900">cat vision.txt</span>
                                </div>
                                <div className="text-slate-600 mb-6 ml-6 border-l-2 border-slate-100 pl-4 py-1 italic">
                                    "Architecting resilient, high-scale digital ecosystems through
                                    advanced infrastructure engineering and seamless automation."
                                </div>
                                <div className="flex gap-3 mb-2">
                                    <span className="text-aura-purple">➜</span>
                                    <span className="text-slate-900">ls ./expertise</span>
                                </div>
                                <div className="text-aura-cyan/70 ml-6 grid grid-cols-2 md:grid-cols-4 gap-2 text-xs uppercase tracking-tighter font-bold">
                                    <span>[ CLOUD ]</span>
                                    <span>[ DEVOPS ]</span>
                                    <span>[ ARCH ]</span>
                                    <span>[ SECURITY ]</span>
                                </div>
                                <div className="flex gap-3 mt-6">
                                    <span className="text-aura-magenta animate-pulse tracking-tighter">[ SYSTEM_READY ] _</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
                        <Link to="/achievements/cloud" className="neon-button group font-mono text-xs tracking-[0.2em] uppercase">
                            ./explore_solutions
                        </Link>
                        <a
                            href="https://linkedin.com/in/mohamedjaveedakram"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 rounded-lg border border-white/10 text-slate-200 font-bold hover:bg-white/5 transition-all flex items-center gap-2 group font-mono text-sm"
                        >
                            <Users size={16} className="text-aura-cyan group-hover:scale-110 transition-transform" />
                            // CONNECT_SOCIAL
                        </a>
                    </div>

                    {/* Feature Grid */}
                    <Section title="SYSTEM MODULES" subtitle="Specialized infrastructure capabilities" className="mt-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Card
                                title="Cloud Architecture"
                                subtitle="SCALABILITY"
                                tags={['AWS', 'Alibaba', 'Azure']}
                            >
                                <p>Expertise in multi-cloud environments, designing high-availability and secure cloud-native architectures.</p>
                            </Card>

                            <Card
                                title="DevOps & GitOps"
                                subtitle="AUTOMATION"
                                tags={['K8s', 'ArgoCD', 'CI/CD']}
                            >
                                <p>Building automated delivery pipelines and declarative workflows to accelerate software delivery.</p>
                            </Card>

                            <Card
                                title="Quality Engineering"
                                subtitle="RELIABILITY"
                                tags={['Selenium', 'JMeter', 'QA Strategy']}
                            >
                                <p>Integrating enterprise-grade test automation and performance monitoring across the stack.</p>
                            </Card>

                            <Card
                                title="AI Infrastructure"
                                subtitle="INTELLIGENCE"
                                tags={['Python', 'BERT', 'MLOps']}
                            >
                                <p>Developing AI-driven decision support systems and scalable infrastructure for model deployment.</p>
                            </Card>
                        </div>
                    </Section>
                </div>
            </div>
        </div>
    );
};

export default Home;
