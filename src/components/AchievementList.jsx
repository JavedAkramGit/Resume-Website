import React from 'react';
import Section from './Section';
import { CheckCircle2 } from 'lucide-react';

const AchievementList = ({ items }) => {
    return (
        <div className="grid grid-cols-1 gap-6">
            {items.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl glass-card hover:border-neon-cyan/30 transition-colors group">
                    <div className="flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-6 h-6 text-neon-cyan group-hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all" />
                    </div>
                    <p className="text-slate-300 leading-relaxed font-mono text-sm">{item}</p>
                </div>
            ))}
        </div>
    );
};

export default AchievementList;
