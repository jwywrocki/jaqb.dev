'use client';

import { useLanguage } from '@/contexts/language-context';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
    const { t } = useLanguage();

    const projects = [
        {
            title: 'Clinic App',
            description: 'A clinic app with lightweight CMS for content updates.',
            image: '/placeholder.svg?height=300&width=400',
            technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
            github: 'https://github.com',
            demo: 'https://demo.com',
            featured: true,
        },
    ];

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">{t('projects.title')}</h2>
                    <div className="w-24 h-1 bg-emerald-400 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-emerald-400/50 transition-all duration-300 ${
                                project.featured ? 'lg:col-span-2' : ''
                            }`}
                        >
                            <div className={`${project.featured ? 'lg:flex lg:items-center' : ''}`}>
                                <div className={`relative overflow-hidden ${project.featured ? 'lg:w-1/2' : ''}`}>
                                    <Image
                                        src={project.image || '/placeholder.svg'}
                                        alt={project.title}
                                        width={400}
                                        height={300}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                                </div>

                                <div className={`p-8 ${project.featured ? 'lg:w-1/2' : ''}`}>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-200">{project.title}</h3>
                                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                                        >
                                            <Github className="w-5 h-5" />
                                            {t('projects.viewCode')}
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                            {t('projects.viewLive')}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
