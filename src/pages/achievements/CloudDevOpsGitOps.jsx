import React from 'react';
import Section from '../../components/Section';
import AchievementList from '../../components/AchievementList';
import resumeData from '../../data/resume.json';
import { Rocket, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudDevOpsGitOpsAchievements = () => {
    return (
        <div className="min-h-screen pt-20">
            <div className="relative overflow-hidden mb-12">
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <Link to="/" className="absolute top-0 left-4 text-slate-400 hover:text-neon-cyan flex items-center gap-2 text-sm font-mono transition-colors">
                        <ArrowLeft size={16} /> // BACK
                    </Link>
                    <div className="w-16 h-16 bg-neon-purple/10 border border-neon-purple/20 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-6 text-neon-purple shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                        <Rocket size={32} />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-200 mb-4 font-orbitron tracking-wide neon-text">GitOps Platforms</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto font-mono text-sm">Declarative infrastructure and Kubernetes delivery with ArgoCD.</p>
                </div>
            </div>

            <Section>
                <div className="max-w-4xl mx-auto">
                    <AchievementList items={resumeData.achievements.cloud_devops_gitops} />
                </div>
            </Section>
        </div>
    );
};

export default CloudDevOpsGitOpsAchievements;
