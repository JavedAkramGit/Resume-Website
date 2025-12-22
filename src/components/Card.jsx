import React from 'react';

const Card = ({ title, subtitle, children, tags = [], className = "" }) => {
    return (
        <div className={`bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow duration-300 ${className}`}>
            <div className="mb-4">
                <h3 className="text-xl font-semibold text-slate-800 mb-1">{title}</h3>
                {subtitle && <div className="text-sm font-medium text-blue-600">{subtitle}</div>}
            </div>

            <div className="text-slate-600 mb-6 leading-relaxed">
                {children}
            </div>

            {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Card;
