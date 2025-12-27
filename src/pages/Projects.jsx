import React from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import resumeData from '../data/resume.json';

const Projects = () => {
    return (
        <div className="relative min-h-screen py-32 px-4 overflow-hidden">
            {/* Background Effects */}
            <div className="aura-blob w-[400px] h-[400px] bg-aura-purple/10 top-20 left-0" />

            <div className="max-w-6xl mx-auto relative z-10">
                <Section
                    title="PROJECTS"
                    subtitle="Technical implementations and architectural solutions"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                        {resumeData.projects.map((project, index) => (
                            <Card
                                key={index}
                                title={project.title || project.name}
                                subtitle={project.role}
                                tags={project.tech || project.technologies}
                            >
                                <p className="mb-6 leading-relaxed text-slate-400">{project.description}</p>
                                {((project.details || project.highlights) && (
                                    <ul className="space-y-3">
                                        {(project.details || project.highlights).map((detail, idx) => (
                                            <li key={idx} className="flex gap-2 text-sm text-slate-500 group/item">
                                                <span className="text-aura-magenta flex-shrink-0">›</span>
                                                <span className="group-hover:text-slate-300 transition-colors leading-relaxed">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ))}
                            </Card>
                        ))}
                    </div>
                </Section>
            </div>
        </div>
    );
};

export default Projects;
