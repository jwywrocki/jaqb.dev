'use client';

import { useLanguage } from '@/contexts/language-context';

export default function Skills() {
    const { t } = useLanguage();

    const skillCategories = [
        {
            title: t('skills.tools'),
            skills: ['Git', 'Docker', 'RabbitMQ', 'VS Code'],
            color: 'from-blue-500 to-purple-500',
        },
        {
            title: t('skills.languages'),
            skills: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
            color: 'from-emerald-500 to-teal-500',
        },
        {
            title: t('skills.frameworks'),
            skills: ['Laravel', 'Next.js', 'React', 'Node.js', 'SCSS'],
            color: 'from-orange-500 to-red-500',
        },
        {
            title: t('skills.databasesAndApis'),
            skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'REST API'],
            color: 'from-pink-500 to-yellow-500',
        },
    ];

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">{t('skills.title')}</h2>
                    <div className="w-24 h-1 bg-emerald-400 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-emerald-400/50 transition-all duration-300 group">
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                <div className="w-8 h-8 bg-white rounded-lg opacity-20"></div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-emerald-500 hover:text-white transition-colors duration-200 cursor-default"
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
