import React from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import resumeData from '../data/resume.json';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <div className="relative min-h-screen py-32 px-4 overflow-hidden">
            {/* Background Background Effects */}
            <div className="aura-blob w-[400px] h-[400px] bg-aura-cyan/10 top-20 right-0" />

            <div className="max-w-4xl mx-auto relative z-10">
                <Section
                    title="EXPERIENCE"
                    subtitle="Professional journey in engineering and architecture"
                >
                    <div className="space-y-8 mt-4">
                        {resumeData.experience.map((exp, index) => (
                            <Card
                                key={index}
                                title={exp.position || exp.role}
                                subtitle={`${exp.company} | ${exp.period}`}
                                tags={exp.technologies || exp.skills}
                            >
                                <ul className="space-y-3 mt-4">
                                    {(exp.highlights || exp.points || []).map((highlight, hIndex) => (
                                        <li key={hIndex} className="flex gap-3 text-slate-400 group/item">
                                            <span className="text-aura-cyan flex-shrink-0 mt-1">▹</span>
                                            <span className="group-hover:text-slate-200 transition-colors leading-relaxed">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>
                </Section>
            </div>
        </div>
    );
};

export default Experience;
