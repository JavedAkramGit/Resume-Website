import React from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import resumeData from '../data/resume.json';

const Projects = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-slate-900 py-20 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Projects</h1>
                <p className="text-slate-300 max-w-2xl mx-auto px-4">A selection of key technical initiatives and architectural designs.</p>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {resumeData.projects.map((project) => (
                        <Card
                            key={project.id}
                            title={project.title}
                            tags={project.tech}
                        >
                            <div className="space-y-4">
                                <p>{project.description}</p>
                                {project.details && (
                                    <ul className="list-disc pl-4 space-y-2">
                                        {project.details.map((detail, idx) => (
                                            <li key={idx}>{detail}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Projects;
