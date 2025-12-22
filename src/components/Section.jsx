import React from 'react';

const Section = ({ title, subtitle, children, className = "" }) => {
    return (
        <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
            <div className="max-w-7xl mx-auto">
                {(title || subtitle) && (
                    <div className="mb-12 text-center">
                        {title && <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">{title}</h2>}
                        {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
