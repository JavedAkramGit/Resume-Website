import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Terminal, Rocket, TestTube, Activity, Brain } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';

const achievementsList = [
    {
        to: '/achievements/cloud',
        title: 'Cloud Engineering',
        icon: Cloud,
        color: 'text-aura-cyan',
        description: 'Scalable cloud-native infrastructure on AWS & Alibaba Cloud.'
    },
    {
        to: '/achievements/devops',
        title: 'DevOps & CI/CD',
        icon: Terminal,
        color: 'text-aura-purple',
        description: 'Advanced CI/CD pipelines, automation, and tooling.'
    },
    {
        to: '/achievements/devops-gitops',
        title: 'GitOps Platforms',
        icon: Rocket,
        color: 'text-aura-magenta',
        description: 'Declarative GitOps workflows with ArgoCD and Kubernetes.'
    },
    {
        to: '/achievements/test-automation',
        title: 'Test Automation',
        icon: TestTube,
        color: 'text-aura-cyan',
        description: 'Enterprise-grade test automation frameworks.'
    },
    {
        to: '/achievements/performance',
        title: 'Performance Engineering',
        icon: Activity,
        color: 'text-aura-purple',
        description: 'Load testing, observability, and system optimization.'
    },
    {
        to: '/achievements/ai',
        title: 'AI Infrastructure',
        icon: Brain,
        color: 'text-aura-magenta',
        description: 'AI-driven decision support systems and ML infrastructure.'
    },
    {
        to: '/achievements/leadership',
        title: 'Leadership & Governance',
        icon: Activity,
        color: 'text-aura-cyan',
        description: 'Technical leadership, team management, and strategic direction.'
    }
];

const Achievements = () => {
    return (
        <div className="relative min-h-screen py-32 px-4 overflow-hidden">
            {/* Background Effects */}
            <div className="aura-blob w-[500px] h-[500px] bg-aura-cyan/10 top-20 left-0" />

            <div className="max-w-7xl mx-auto relative z-10">
                <Section
                    title="ACHIEVEMENTS"
                    subtitle="Technical milestones and specialized domain expertise"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        {achievementsList.map((item, index) => (
                            <Link key={index} to={item.to} className="group h-full">
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
                            </Link>
                        ))}
                    </div>
                </Section>
            </div>
        </div>
    );
};

export default Achievements;
