'use client';

import { useLanguage } from '@/contexts/language-context';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">{t('contact.title')}</h2>
                    <p className="text-xl text-emerald-400 mb-4">{t('contact.subtitle')}</p>
                    <div className="w-24 h-1 bg-emerald-400 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">{t('contact.description')}</p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-emerald-400" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">{t('contact.email.label')}</p>
                                    <a href={`mailto:${t('contact.email')}`} className="text-white hover:text-emerald-400 transition-colors duration-200">
                                        {t('contact.email')}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-emerald-400" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">{t('contact.location.label')}</p>
                                    <p className="text-white">{t('contact.location')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <p className="text-gray-400 mb-4">{t('contact.follow')}</p>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/jwywrocki"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-emerald-500 transition-colors duration-200 group"
                                >
                                    <Github className="w-6 h-6 text-gray-400 group-hover:text-white" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/jwywrocki"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-emerald-500 transition-colors duration-200 group"
                                >
                                    <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    {t('contact.name.label')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors duration-200"
                                    placeholder={t('contact.name.placeholder')}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    {t('contact.email.label')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors duration-200"
                                    placeholder={t('contact.email.placeholder')}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    {t('contact.message.label')}
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors duration-200 resize-none"
                                    placeholder={t('contact.message.placeholder')}
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full bg-emerald-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-emerald-600 transition-colors duration-200">
                                {t('contact.send')}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="text-center mt-16 pt-8 border-t border-gray-700">
                    <p className="text-gray-400">© {new Date().getFullYear()} Jakub Wywrocki. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
}
