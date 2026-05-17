'use client';

import { useLanguage } from '@/contexts/language-context';
import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
    const { t } = useLanguage();

    const education = [
        {
            key: 'ujk',
            degree: t('education.degree'),
            institution: t('education.institution'),
            year: t('education.year'),
        },
    ];

    return (
        <section id="education" className="section">
            <div className="section-container-narrow">
                <div className="section-header">
                    <h2 className="section-title">{t('education.title')}</h2>
                    <div className="section-divider mx-auto"></div>
                </div>

                <div className="space-y-4">
                    {education.map((item) => (
                        <div key={item.key} className="glass-card rounded-2xl p-6 flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <GraduationCap className="w-5 h-5 text-indigo-400" />
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                                    <h3 className="text-base font-semibold text-white">{item.degree}</h3>
                                    <div className="flex items-center gap-1.5 text-gray-500 text-xs flex-shrink-0">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {item.year}
                                    </div>
                                </div>
                                <p className="text-sm text-emerald-400 font-medium">{item.institution}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
