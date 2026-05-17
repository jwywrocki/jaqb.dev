'use client';

import { useLanguage } from '@/contexts/language-context';
import { Briefcase, GraduationCap, Layers } from 'lucide-react';

export default function About() {
    const { t } = useLanguage();

    const stats = [
        { key: 'experience', icon: Briefcase, label: t('about.experience'), value: t('about.experience.years'), color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
        { key: 'education', icon: GraduationCap, label: t('about.education'), value: t('about.education.degree'), color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
        { key: 'technologies', icon: Layers, label: t('about.technologies'), value: t('about.technologies.count'), color: 'text-teal-400', bg: 'bg-teal-500/10' },
    ];

    return (
        <section id="about" className="section section-clipped">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="section-container">
                <div className="section-header">
                    <h2 className="section-title">{t('about.title')}</h2>
                    <div className="section-divider mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                    <div className="lg:col-span-3 space-y-5">
                        <p className="text-base text-gray-400 leading-relaxed">{t('about.text1')}</p>
                        <p className="text-base text-gray-400 leading-relaxed">{t('about.text2')}</p>
                        <p className="text-base text-gray-400 leading-relaxed">{t('about.text3')}</p>
                    </div>

                    <div className="lg:col-span-2 space-y-4">
                        {stats.map(({ key, icon: Icon, label, value, color, bg }) => (
                            <div key={key} className="glass-card rounded-2xl p-5 flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                                    <Icon className={`w-5 h-5 ${color}`} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{label}</p>
                                    <p className={`text-sm font-semibold ${color}`}>{value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
