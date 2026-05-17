'use client';

import { ArrowRight, Download, MapPin, Briefcase, Code2 } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import Image from 'next/image';

export default function Hero() {
    const { t, language } = useLanguage();

    const resumeHref = language === 'pl' ? '/cv/cv-pl.pdf' : '/cv/cv-en.pdf';

    const highlights = [
        { icon: Briefcase, label: t('hero.highlight.experience') },
        { icon: MapPin, label: t('hero.highlight.location') },
        { icon: Code2, label: t('hero.highlight.stack') },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-x-clip">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="section-container-wide pt-16 sm:pt-20 pb-10 sm:pb-12 lg:pt-0 lg:pb-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-5 sm:mb-6">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            {t('hero.greeting')}
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 gradient-text">{t('hero.name')}</h1>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-400 mb-4">{t('hero.title')}</h2>
                        <p className="text-base text-emerald-400/80 mb-5 sm:mb-6">{t('hero.subtitle')}</p>
                        <p className="text-base text-gray-500 mb-8 sm:mb-10 max-w-xl leading-relaxed">{t('hero.description')}</p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 sm:mb-10">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-400 hover:to-teal-400 transition-all duration-200 group glow-emerald"
                            >
                                {t('hero.cta')}
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                            </a>
                            <a
                                href={resumeHref}
                                className="inline-flex items-center justify-center px-7 py-3.5 glass rounded-xl text-gray-300 font-semibold hover:text-emerald-400 transition-all duration-200"
                                download
                            >
                                <Download className="mr-2 h-4 w-4" />
                                {t('hero.resume')}
                            </a>
                        </div>

                        <div className="flex items-center gap-4 sm:gap-6 justify-center lg:justify-start text-sm text-gray-500 flex-wrap">
                            {highlights.map(({ icon: Icon, label }) => (
                                <div key={label} className="flex items-center gap-2">
                                    <Icon className="w-4 h-4 text-emerald-500" />
                                    <span>{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="relative mx-4 sm:mx-6">
                            <div className="w-44 sm:w-56 md:w-64 lg:w-72 aspect-[769/929] rounded-full glass p-1.5 overflow-hidden">
                                <Image src="/jaqb.jpg" alt="Jakub Wywrocki" width={769} height={929} className="w-full h-full rounded-full object-cover" priority />
                            </div>
                            <div className="absolute -top-3 -right-3 glass rounded-2xl px-3 py-2 text-xs font-medium text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                Available for work
                            </div>
                            <div className="absolute -bottom-3 -left-3 glass rounded-2xl px-3 py-2 text-xs font-medium text-gray-300 flex items-center gap-1.5">
                                <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                                Full-Stack Dev
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
