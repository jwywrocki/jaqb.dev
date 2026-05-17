'use client';

import { useLanguage } from '@/contexts/language-context';
import { Wrench, Code2, Layers, Database, Link2 } from 'lucide-react';

export default function Skills() {
    const { t } = useLanguage();

    const skillCategories = [
        {
            key: 'tools',
            icon: Wrench,
            title: t('skills.tools'),
            skills: ['Git', 'Docker', 'CI/CD', 'GitHub', 'GitLab', 'Jira', 'Slack', 'Figma', 'Adobe XD'],
            accent: 'text-blue-400',
            bg: 'bg-blue-500/10',
        },
        {
            key: 'languages',
            icon: Code2,
            title: t('skills.languages'),
            skills: ['PHP', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
            accent: 'text-emerald-400',
            bg: 'bg-emerald-500/10',
        },
        {
            key: 'frameworks',
            icon: Layers,
            title: t('skills.frameworks'),
            skills: ['Laravel', 'React', 'Next.js', 'Vue.js', 'Node.js'],
            accent: 'text-orange-400',
            bg: 'bg-orange-500/10',
        },
        {
            key: 'databases',
            icon: Database,
            title: t('skills.databasesAndApis'),
            skills: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'RabbitMQ', 'Elasticsearch', 'Supabase'],
            accent: 'text-pink-400',
            bg: 'bg-pink-500/10',
        },
        {
            key: 'integrations',
            icon: Link2,
            title: t('skills.integrations'),
            skills: ['BLIK', 'PayU', 'Tpay', 'PayPal', 'PayPo', 'InPost Pay', 'GiftPay', 'eCDP', 'Synerise', 'Baselinker', 'Miinto', 'Trustmate', 'GTM', 'GA4', 'Clarity'],
            accent: 'text-indigo-400',
            bg: 'bg-indigo-500/10',
        },
    ];

    return (
        <section id="skills" className="section">
            <div className="section-container">
                <div className="section-header">
                    <h2 className="section-title">{t('skills.title')}</h2>
                    <div className="section-divider mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {skillCategories.map(({ key, icon: Icon, title, skills, accent, bg }) => (
                        <div key={key} className="glass-card rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-5">
                                <div className={`w-9 h-9 rounded-lg ${bg} flex items-center justify-center`}>
                                    <Icon className={`w-4 h-4 ${accent}`} />
                                </div>
                                <h3 className="text-sm font-semibold text-white">{title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-400 rounded-full border border-white/8 hover:bg-emerald-500/15 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-200 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
