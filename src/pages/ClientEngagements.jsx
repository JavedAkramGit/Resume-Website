import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Users, Briefcase, Target, TrendingUp, Award } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';

const clientEngagementsList = [
    {
        title: 'Government Digital Transformation',
        icon: Building2,
        color: 'text-aura-cyan',
        description: 'Leading cloud infrastructure and DevOps initiatives for government sector digital transformation.'
    },
    {
        title: 'Enterprise Platform Modernization',
        icon: Briefcase,
        color: 'text-aura-purple',
        description: 'Architecting scalable cloud-native platforms for enterprise-grade applications.'
    },
    {
        title: 'Workforce Development Systems',
        icon: Users,
        color: 'text-aura-magenta',
        description: 'Building AI-driven decision support systems for national training programs.'
    },
    {
        title: 'Quality Engineering Excellence',
        icon: Target,
        color: 'text-aura-cyan',
        description: 'Implementing comprehensive test automation and performance engineering frameworks.'
    },
    {
        title: 'DevOps Transformation',
        icon: TrendingUp,
        color: 'text-aura-purple',
        description: 'Establishing CI/CD pipelines and GitOps workflows for rapid delivery.'
    },
    {
        title: 'Technical Leadership',
        icon: Award,
        color: 'text-aura-magenta',
        description: 'Guiding vendor teams and establishing engineering best practices.'
    }
];

const ClientEngagements = () => {
    return (
        <div className="relative min-h-screen py-32 px-4 overflow-hidden">
            {/* Background Effects */}
            <div className="aura-blob w-[500px] h-[500px] bg-aura-purple/10 top-20 right-0" />

            <div className="max-w-7xl mx-auto relative z-10">
                <Section
                    title="CLIENT ENGAGEMENTS"
                    subtitle="Strategic partnerships and impactful project deliveries"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        {clientEngagementsList.map((item, index) => (
                            <div key={index} className="group h-full">
                                <Card className="h-full flex flex-col">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className={`p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-aura-cyan/30 transition-all shadow-lg`}>
                                            <item.icon className={`h-5 w-5 ${item.color}`} />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-aura-cyan group-hover:drop-shadow-[0_0_8px_rgba(0,184,204,0.5)] transition-all duration-300 tracking-tight">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-slate-700 leading-relaxed text-sm group-hover:text-slate-900 transition-colors duration-300">
                                        {item.description}
                                    </p>
                                </Card>
                            </div>
                        ))}
                    </div>
                </Section>
            </div>
        </div>
    );
};

export default ClientEngagements;
