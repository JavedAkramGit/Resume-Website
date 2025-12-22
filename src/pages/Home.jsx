import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Server, Shield, Brain } from 'lucide-react';
import Section from '../components/Section';
import resumeData from '../data/resume.json';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-slate-900 text-white py-24 sm:py-32">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-gradient-to-r from-blue-200 to-indigo-400 bg-clip-text text-transparent">
                            {resumeData.profile.name}
                        </h1>
                        <p className="text-lg leading-8 text-slate-300 mb-8 font-light">
                            {resumeData.profile.title}
                        </p>
                        <p className="text-base leading-7 text-slate-400 mb-10 max-w-xl mx-auto">
                            {resumeData.profile.summary}
                        </p>
                        <div className="flex items-center justify-center gap-x-6">
                            <Link to="/achievements/cloud" className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all flex items-center gap-2">
                                View Achievements <ArrowRight size={16} />
                            </Link>
                            <a href={resumeData.profile.linkedin} target="_blank" rel="noreferrer" className="text-sm font-semibold leading-6 text-white hover:text-blue-300">
                                LinkedIn Profile <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Grid */}
            <Section title="Core Competencies" subtitle="Specialized expertise in modern infrastructure">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                            <Cloud size={24} />
                        </div>
                        <h3 className="font-semibold text-lg text-slate-900 mb-2">Cloud Architecture</h3>
                        <p className="text-slate-600 text-sm">Expertise in AWS & Alibaba Cloud, designing scalable and secure cloud-native environments.</p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                        <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                            <Server size={24} />
                        </div>
                        <h3 className="font-semibold text-lg text-slate-900 mb-2">DevOps & GitOps</h3>
                        <p className="text-slate-600 text-sm">Building automated delivery pipelines with GitLab, ArgoCD, and Kubernetes.</p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                            <Shield size={24} />
                        </div>
                        <h3 className="font-semibold text-lg text-slate-900 mb-2">Quality Engineering</h3>
                        <p className="text-slate-600 text-sm">Advanced test automation strategies reducing regression time by 93%.</p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                        <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                            <Brain size={24} />
                        </div>
                        <h3 className="font-semibold text-lg text-slate-900 mb-2">AI Systems</h3>
                        <p className="text-slate-600 text-sm">Designing AI-driven decision support systems for enterprise data analysis.</p>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Home;
