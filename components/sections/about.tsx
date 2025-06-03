'use client';

import { useLanguage } from '@/contexts/language-context';

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">{t('about.title')}</h2>
                    <div className="w-24 h-1 bg-emerald-400 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-300 leading-relaxed">{t('about.text1')}</p>
                        <p className="text-lg text-gray-300 leading-relaxed">{t('about.text2')}</p>
                        <p className="text-lg text-gray-300 leading-relaxed">{t('about.text3')}</p>
                    </div>

                    <div className="relative">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400">{t('about.experience')}</span>
                                    <span className="text-emerald-400 font-bold">{t('about.experience.years')}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400">{t('about.education')}</span>
                                    <span className="text-emerald-400 font-bold">{t('about.education.degree')}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400">{t('about.technologies')}</span>
                                    <span className="text-emerald-400 font-bold">{t('about.technologies.count')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
