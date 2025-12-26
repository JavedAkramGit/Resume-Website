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
        color: 'text-blue-500',
        description: 'Scalable cloud-native infrastructure on AWS & Alibaba Cloud.'
    },
    {
        to: '/achievements/devops',
        title: 'DevOps & CI/CD',
        icon: Terminal,
        color: 'text-amber-500',
        description: 'Advanced CI/CD pipelines, automation, and tooling.'
    },
    {
        to: '/achievements/devops-gitops',
        title: 'GitOps Platforms',
        icon: Rocket,
        color: 'text-purple-500',
        description: 'Declarative GitOps workflows with ArgoCD and Kubernetes.'
    },
    {
        to: '/achievements/test-automation',
        title: 'Test Automation',
        icon: TestTube,
        color: 'text-emerald-500',
        description: 'Enterprise-grade test automation frameworks.'
    },
    {
        to: '/achievements/performance',
        title: 'Performance Engineering',
        icon: Activity,
        color: 'text-red-500',
        description: 'Load testing, observability, and system optimization.'
    },
    {
        to: '/achievements/ai',
        title: 'AI Infrastructure',
        icon: Brain,
        color: 'text-indigo-500',
        description: 'AI-driven decision support systems and ML infrastructure.'
    },
    {
        to: '/achievements/leadership',
        title: 'Leadership & Governance',
        icon: Activity,
        color: 'text-teal-500',
        description: 'Technical leadership, team management, and strategic direction.'
    }
];

const Achievements = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-slate-900 py-20 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Achievements</h1>
                <p className="text-slate-300 max-w-2xl mx-auto px-4">
                    Key milestones and technical accomplishments across Cloud, DevOps, and Quality Engineering.
                </p>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievementsList.map((item, index) => (
                        <Link key={index} to={item.to} className="group">
                            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 h-full border border-slate-100">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`p-3 rounded-lg bg-slate-50 group-hover:bg-slate-100 transition-colors`}>
                                        <item.icon className={`h-6 w-6 ${item.color}`} />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-slate-600">
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Achievements;
