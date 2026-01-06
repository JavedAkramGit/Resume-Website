import React from 'react';

const clientEngagementsList = [
    { title: 'NBK Capital', logo: '/clients/nbk.png', alt: 'NBK Capital' },
    { title: 'HRDF', logo: '/clients/hrdf.png', alt: 'Human Resources Development Fund' },
    { title: 'MCIT', logo: '/clients/mcit.png', alt: 'Ministry of Communications and Information Technology' },
    { title: 'Al Saadi Group', logo: '/clients/alsaadi.png', alt: 'Al Saadi Group' },
    { title: 'Accenture', logo: '/clients/accenture.png', alt: 'Accenture' },
    { title: 'First Data', logo: '/clients/firstdata.webp', alt: 'First Data' },
    { title: 'Ministry of Culture', logo: '/clients/culture.png', alt: 'Ministry of Culture' },
    { title: 'Ministry of Tourism', logo: '/clients/tourism.png', alt: 'Ministry of Tourism' },
    { title: 'Ministry of Sport', logo: '/clients/sport.png', alt: 'Ministry of Sport' },
    { title: 'Halayalla', logo: '/clients/halayalla.png', alt: 'Halayalla' },
    { title: 'UXBERT Labs', logo: '/clients/uxbert.png', alt: 'UXBERT Labs' },
    { title: 'Yusuf Bin Ahmed Kanoo', logo: '/clients/kanoo.jpg', alt: 'Yusuf Bin Ahmed Kanoo' },
];

const ClientEngagements = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 px-4">
                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <p className="text-sm text-slate-500 mb-6 tracking-wide uppercase">Contributed to Leading Organizations</p>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        <span className="text-slate-900">Professional </span>
                        <span className="bg-gradient-to-r from-aura-cyan via-aura-purple to-aura-magenta bg-clip-text text-transparent">
                            Experience
                        </span>
                    </h1>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        Organizations where I've contributed my expertise in cloud infrastructure, DevOps,
                        and quality engineering to drive digital transformation initiatives.
                    </p>
                </div>
            </div>

            {/* Logo Grid */}
            <div className="relative py-20 px-4">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {clientEngagementsList.map((client, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl"
                            >
                                <div className="relative bg-white/40 backdrop-blur-md border border-white/20 hover:bg-white/60 hover:border-aura-cyan/30 hover:shadow-[0_8px_30px_rgba(0,184,204,0.15)] transition-all duration-300 cursor-default aspect-[4/3]">
                                    <img
                                        src={client.logo}
                                        alt={client.alt}
                                        className="absolute inset-0 w-full h-full object-contain p-8 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientEngagements;
