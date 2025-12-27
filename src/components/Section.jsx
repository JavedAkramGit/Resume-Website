import React from 'react';

const Section = ({ title, subtitle, children, className = "" }) => {
    return (
        <section className={`py-12 ${className}`}>
            <div className="max-w-7xl mx-auto">
                {(title || subtitle) && (
                    <div className="mb-10 text-center">
                        {title && <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-2 tracking-tighter">{title}</h2>}
                        {subtitle && <p className="text-slate-500 font-mono text-[11px] tracking-[0.2em] uppercase opacity-80 max-w-2xl mx-auto">{subtitle}</p>}
                        <div className="w-16 h-1 bg-gradient-to-r from-aura-cyan to-aura-purple mx-auto mt-6 rounded-full opacity-40"></div>
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
