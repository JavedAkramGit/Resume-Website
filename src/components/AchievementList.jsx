import React from 'react';
import Section from './Section';
import { CheckCircle2 } from 'lucide-react';

const AchievementList = ({ items }) => {
    return (
        <div className="grid grid-cols-1 gap-6">
            {items.map((item, index) => (
                <div key={index} className="flex gap-4 p-6 rounded-xl glass-card hover:border-aura-cyan/40 hover:bg-white/60 transition-all duration-300 group cursor-default">
                    <div className="flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-6 h-6 text-aura-cyan group-hover:drop-shadow-[0_0_8px_rgba(0,184,204,0.8)] group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <p className="text-slate-700 group-hover:text-slate-900 leading-relaxed text-sm group-hover:drop-shadow-[0_0_2px_rgba(0,0,0,0.1)] transition-all duration-300">{item}</p>
                </div>
            ))}
        </div>
    );
};

export default AchievementList;
