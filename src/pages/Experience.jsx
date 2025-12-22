import React from 'react';
import Section from '../components/Section';
import resumeData from '../data/resume.json';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-slate-900 py-20 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Professional Experience</h1>
                <p className="text-slate-300 max-w-2xl mx-auto px-4">A timeline of my professional journey and key roles.</p>
            </div>

            <Section>
                <div className="max-w-3xl mx-auto">
                    <div className="relative border-l-2 border-slate-200 pl-8 space-y-12">
                        {resumeData.experience.map((job) => (
                            <div key={job.id} className="relative">
                                {/* Dot */}
                                <div className="absolute -left-[41px] top-0 bg-white border-4 border-blue-500 w-5 h-5 rounded-full"></div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                                            <div className="text-blue-600 font-medium flex items-center gap-2 mt-1">
                                                <Briefcase size={16} />
                                                {job.company}
                                            </div>
                                        </div>
                                        <span className="mt-2 sm:mt-0 px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full self-start">
                                            {job.period}
                                        </span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed">
                                        {job.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Experience;
