import React from 'react';
import Section from './Section';
import { CheckCircle2 } from 'lucide-react';

const AchievementList = ({ items }) => {
    return (
        <div className="grid grid-cols-1 gap-6">
            {items.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg bg-white border border-slate-100 hover:border-blue-100 transition-colors">
                    <div className="flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-6 h-6 text-blue-500" />
                    </div>
                    <p className="text-slate-700 leading-relaxed">{item}</p>
                </div>
            ))}
        </div>
    );
};

export default AchievementList;
