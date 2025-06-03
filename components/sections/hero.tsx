'use client';

import { ArrowRight, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import Image from 'next/image';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto mt-14 sm:mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <p className="text-emerald-400 text-lg mb-4 font-medium">{t('hero.greeting')}</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">{t('hero.name')}</h1>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-400 mb-6">{t('hero.title')}</h2>
                        <p className="text-xl text-emerald-400 mb-6 font-medium">{t('hero.subtitle')}</p>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl">{t('hero.description')}</p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#contact"
                                className="inline-flex items-center px-8 py-3 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 transition-colors duration-200 group"
                            >
                                {t('hero.cta')}
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center px-8 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-emerald-400 hover:text-emerald-400 transition-colors duration-200"
                            >
                                <Download className="mr-2 h-5 w-5" />
                                {t('hero.resume')}
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="w-40 h-40 sm:w-80 sm:h-80 md:w-auto md:h-auto rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 p-1">
                                <div className="w-full h-full rounded-full bg-gray-900 p-4">
                                    <Image src="/jaqb.jpg?height=300&width=300" alt="Jakub Wywrocki" width={300} height={300} className="w-full h-full rounded-full object-cover" priority />
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-400 rounded-full opacity-20 animate-pulse"></div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
