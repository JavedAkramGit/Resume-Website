import React from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import resumeData from '../data/resume.json';
import { Award, GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <div className="relative min-h-screen py-32 px-4 overflow-hidden">
            {/* Background Effects */}
            <div className="aura-blob w-[500px] h-[500px] bg-aura-magenta/5 bottom-0 right-0" />

            <div className="max-w-4xl mx-auto relative z-10">
                <Section
                    title="EDUCATION"
                    subtitle="Academic background and core specializations"
                >
                    <div className="space-y-8 mt-4">
                        {resumeData.education.map((edu, index) => (
                            <Card
                                key={index}
                                title={edu.degree}
                                subtitle={`${edu.school || edu.institution} | ${edu.year || edu.period}`}
                            >
                                <p className="text-slate-400 leading-relaxed">{edu.description}</p>
                            </Card>
                        ))}
                    </div>
                </Section>

                <Section
                    title="CERTIFICATIONS"
                    subtitle="Professional validation of technical expertise"
                    className="mt-24"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        {resumeData.certifications.map((cert, index) => (
                            <Card
                                key={index}
                                title={typeof cert === 'string' ? cert : cert.name}
                                subtitle={cert.issuer || "Professional Certification"}
                            >
                                {cert.date && <p className="text-xs text-aura-cyan font-mono opacity-60 uppercase tracking-widest">{cert.date}</p>}
                            </Card>
                        ))}
                    </div>
                </Section>
            </div>
        </div>
    );
};

export default Education;
