'use client';

import { useLanguage } from '@/contexts/language-context';
import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
    const { t } = useLanguage();

    const experiences = [
        {
            key: 'd9',
            period: `2024 - ${t('experience.present')}`,
            title: t('experience.d9.title'),
            company: 'D9',
            location: t('experience.d9.location'),
            description: t('experience.d9.description'),
            technologies: ['Laravel', 'JavaScript', 'Vue.js', 'Docker', 'MySQL', 'RabbitMQ', 'Redis', 'PostgreSQL', 'React', 'C#'],
        },
        {
            key: 'szopex',
            period: '2022 - 2024',
            title: t('experience.szopex.title'),
            company: 'SZOPEX DUTKIEWICZ Sp. z o. o., Sp. K.',
            location: t('experience.szopex.location'),
            description: t('experience.szopex.description'),
            technologies: ['Laravel', 'JavaScript', 'Vue.js', 'Docker', 'MySQL', 'RabbitMQ', 'Redis'],
        },
        {
            key: 'primeo',
            period: '2020',
            title: t('experience.primeo.title'),
            company: 'Primeo',
            location: t('experience.primeo.location'),
            description: t('experience.primeo.description'),
            technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress'],
        },
    ];

    return (
        <section id="experience" className="section section-clipped">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="section-container-narrow">
                <div className="section-header">
                    <h2 className="section-title">{t('experience.title')}</h2>
                    <div className="section-divider mx-auto"></div>
                </div>

                <div className="relative">
                    <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-emerald-500/60 via-indigo-500/30 to-transparent"></div>

                    <div className="space-y-6">
                        {experiences.map((exp) => (
                            <div key={exp.key} className="relative pl-8">
                                <div className="absolute left-[-4px] top-4 w-2 h-2 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20"></div>
                                <div className="glass-card rounded-2xl p-6">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                                        <div>
                                            <h3 className="text-base font-semibold text-white">{exp.title}</h3>
                                            <p className="text-sm text-emerald-400 font-medium">{exp.company}</p>
                                        </div>
                                        <div className="flex flex-col sm:items-end gap-1 flex-shrink-0">
                                            <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {exp.period}
                                            </div>
                                            <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                                                <MapPin className="w-3.5 h-3.5" />
                                                {exp.location}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-400 mb-4 leading-relaxed">{exp.description}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {exp.technologies.map((tech) => (
                                            <span key={tech} className="px-2.5 py-0.5 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
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
