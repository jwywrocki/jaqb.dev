'use client';

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [cooldownUntil, setCooldownUntil] = useState<number | null>(null);
    const cooldownMs = 15_000;

    const isCooldown = cooldownUntil !== null;
    const statusClassName = status === 'success' ? 'text-emerald-400' : status === 'error' ? 'text-rose-400' : 'text-gray-500';

    const handleChange = (field: keyof typeof formData) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [field]: event.target.value }));
        if (status !== 'idle') {
            setStatus('idle');
            setStatusMessage('');
        }
    };

    const startCooldown = () => {
        const nextCooldown = Date.now() + cooldownMs;
        setCooldownUntil(nextCooldown);
        setTimeout(() => {
            setCooldownUntil((current) => (current === nextCooldown ? null : current));
        }, cooldownMs);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isSubmitting || isCooldown) {
            if (isCooldown) {
                setStatus('error');
                setStatusMessage(t('contact.rateLimit'));
            }
            return;
        }

        setIsSubmitting(true);
        setStatus('sending');
        setStatusMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                setStatus('error');
                setStatusMessage(response.status === 429 ? t('contact.rateLimit') : t('contact.error'));
                return;
            }

            setStatus('success');
            setStatusMessage(t('contact.success'));
            setFormData({ name: '', email: '', message: '' });
            startCooldown();
        } catch (error) {
            setStatus('error');
            setStatusMessage(t('contact.error'));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section section-clipped">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="section-container">
                <div className="section-header">
                    <h2 className="section-title">{t('contact.title')}</h2>
                    <p className="section-subtitle">{t('contact.subtitle')}</p>
                    <div className="section-divider mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        <p className="text-base text-gray-400 mb-8 leading-relaxed">{t('contact.description')}</p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{t('contact.email.label')}</p>
                                    <a href={`mailto:${t('contact.email')}`} className="text-sm text-white hover:text-emerald-400 transition-colors duration-200">
                                        {t('contact.email')}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{t('contact.location.label')}</p>
                                    <p className="text-sm text-white">{t('contact.location')}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">{t('contact.follow')}</p>
                            <div className="flex gap-3">
                                <a
                                    href="https://github.com/jwywrocki"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:border-emerald-500/30 hover:text-emerald-400 text-gray-400 transition-all duration-200"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/jwywrocki"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:border-emerald-500/30 hover:text-emerald-400 text-gray-400 transition-all duration-200"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card rounded-2xl p-7">
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                                    {t('contact.name.label')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange('name')}
                                    maxLength={100}
                                    autoComplete="name"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/8 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white/8 transition-all duration-200 text-sm"
                                    placeholder={t('contact.name.placeholder')}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                                    {t('contact.email.label')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange('email')}
                                    maxLength={200}
                                    autoComplete="email"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/8 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white/8 transition-all duration-200 text-sm"
                                    placeholder={t('contact.email.placeholder')}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                                    {t('contact.message.label')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange('message')}
                                    maxLength={2000}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/8 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white/8 transition-all duration-200 resize-none text-sm"
                                    placeholder={t('contact.message.placeholder')}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting || isCooldown}
                                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-emerald-400 hover:to-teal-400 transition-all duration-200 glow-emerald text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? t('contact.sending') : t('contact.send')}
                            </button>
                            {statusMessage ? (
                                <p className={`text-xs ${statusClassName}`} role="status" aria-live="polite">
                                    {statusMessage}
                                </p>
                            ) : null}
                        </form>
                    </div>
                </div>

                <div className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/5">
                    <p className="text-xs text-gray-600">© {new Date().getFullYear()} Jakub Wywrocki. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
}
