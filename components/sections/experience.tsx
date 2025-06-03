'use client';

import { useLanguage } from '@/contexts/language-context';
import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
    const { t } = useLanguage();

    const experiences = [
        {
            period: `2024 — ${t('experience.present')}`,
            title: 'Full-Stack Developer',
            company: 'D9',
            location: 'Remote',
            description:
                'Designing, developing, and maintaining scalable microservices in a high-traffic e-commerce ecosystem (100k+ users). Integrated third-party services, optimized backend performance, and contributed to frontend refactors using modern frameworks.',
            technologies: ['Laravel', 'JavaScript', 'Vue.js', 'Docker', 'MySQL', 'RabbitMQ', 'Redis', 'PostgreSQL', 'React', 'C#'],
        },
        {
            period: `2022 — 2024`,
            title: 'Junior Developer',
            company: 'SZOPEX DUTKIEWICZ Sp. z o. o., Sp. K.',
            location: 'Remote',
            description:
                'Participated in the development and support of e-commerce platforms. Worked closely with designers to deliver pixel-perfect, responsive UIs. Assisted in API integration, database optimization, and cross-team collaboration on long-term projects.',
            technologies: ['Laravel', 'JavaScript', 'Vue.js', 'Docker', 'MySQL', 'RabbitMQ', 'Redis'],
        },
        {
            period: '2020 — 2020',
            title: 'Junior Developer',
            company: 'Primeo',
            location: 'Kielce, PL',
            description:
                'Created responsive websites and CMS-based applications for local clients. Focused on clean code, SEO best practices, and learned team workflows using Git and modern dev tools.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress'],
        },
    ];

    return (
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">{t('experience.title')}</h2>
                    <div className="w-24 h-1 bg-emerald-400 mx-auto"></div>
                </div>

                <div className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 to-blue-500"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative flex items-start">
                                <div className="absolute left-6 w-4 h-4 bg-emerald-400 rounded-full border-4 border-gray-900"></div>
                                <div className="ml-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-emerald-400/50 transition-all duration-300 w-full">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                            <p className="text-emerald-400 font-medium">{exp.company}</p>
                                        </div>
                                        <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                                            <div className="flex items-center text-gray-400 text-sm mb-1">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {exp.period}
                                            </div>
                                            <div className="flex items-center text-gray-400 text-sm">
                                                <MapPin className="w-4 h-4 mr-1" />
                                                {exp.location}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
