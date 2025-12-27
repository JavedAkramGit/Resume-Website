import React from 'react';

const Card = ({ title, subtitle, children, tags = [], className = "" }) => {
    return (
        <div className={`glass-card p-6 rounded-2xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-aura-cyan/5 rounded-full blur-[60px] -mr-16 -mt-16 transition-opacity opacity-50 group-hover:opacity-100 pointer-events-none"></div>

            {title && (
                <div className="mb-4 relative z-10">
                    <h3 className="text-xl font-bold text-slate-900 mb-1 tracking-tight group-hover:text-aura-cyan transition-colors">{title}</h3>
                    {subtitle && <div className="text-xs font-bold text-aura-purple uppercase tracking-widest font-mono opacity-80">{subtitle}</div>}
                </div>
            )}

            <div className="text-slate-600 mb-6 leading-relaxed relative z-10 text-[15px]">
                {children}
            </div>

            {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 bg-[#EBE7E0] border border-slate-300/50 text-slate-500 text-[10px] font-mono rounded-md uppercase tracking-wider group-hover:border-aura-cyan/30 group-hover:text-aura-cyan transition-all"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            {/* Bottom Glow Line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-aura-cyan to-aura-purple opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
    );
};

export default Card;
