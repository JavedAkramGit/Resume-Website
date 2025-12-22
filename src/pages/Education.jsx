import React from 'react';
import Section from '../components/Section';
import resumeData from '../data/resume.json';
import { Award, GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-slate-900 py-20 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Education & Certifications</h1>
                <p className="text-slate-300 max-w-2xl mx-auto px-4">Academic background and professional qualifications.</p>
            </div>

            <Section title="Certifications">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {resumeData.certifications.map((cert, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
                            <div className="bg-amber-50 p-3 rounded-lg text-amber-600">
                                <Award size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-800 text-lg">{cert}</h3>
                                <div className="text-slate-500 text-sm mt-1">Professional License</div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section title="Education" className="bg-white">
                <div className="max-w-4xl mx-auto space-y-8">
                    {resumeData.education.map((edu) => (
                        <div key={edu.id} className="flex flex-col md:flex-row gap-4 md:items-center justify-between p-6 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                                    <GraduationCap size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">{edu.degree}</h3>
                                    <div className="text-slate-600">{edu.school}</div>
                                </div>
                            </div>
                            <div className="text-slate-500 font-medium bg-white px-4 py-1 rounded-full border border-slate-200 text-sm inline-block w-fit">
                                {edu.year}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Education;
