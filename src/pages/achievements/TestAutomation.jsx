import React from 'react';
import Section from '../../components/Section';
import AchievementList from '../../components/AchievementList';
import resumeData from '../../data/resume.json';
import { TestTube, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TestAutomationAchievements = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="bg-gradient-to-r from-emerald-900 to-slate-900 py-20 text-center relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Link to="/" className="absolute top-0 left-4 text-slate-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                    <div className="w-16 h-16 bg-emerald-500/20 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-300">
                        <TestTube size={32} />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Test Automation</h1>
                    <p className="text-slate-300 max-w-2xl mx-auto">Enterprise-grade testing frameworks and quality engineering.</p>
                </div>
            </div>

            <Section>
                <div className="max-w-4xl mx-auto">
                    <AchievementList items={resumeData.achievements.test_automation} />
                </div>
            </Section>
        </div>
    );
};

export default TestAutomationAchievements;
