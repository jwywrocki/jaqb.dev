'use client';

import { useLanguage } from '@/contexts/language-context';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
    const { t } = useLanguage();

    const projects = [
        {
            key: 'clinic',
            title: 'Clinic App',
            description: 'A clinic app with lightweight CMS for content updates.',
            image: '/projects/clinic.png?height=300&width=400',
            technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
            github: 'https://github.com',
            demo: 'https://clinic.jaqb.dev',
            featured: true,
        },
    ];

    return (
        <section id="projects" className="section section-clipped">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="section-container">
                <div className="section-header">
                    <h2 className="section-title">{t('projects.title')}</h2>
                    <div className="section-divider mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <div key={project.key} className={`glass-card rounded-2xl overflow-hidden ${project.featured ? 'lg:col-span-2' : ''}`}>
                            <div className={`${project.featured ? 'lg:flex lg:items-stretch' : ''}`}>
                                <div className={`relative overflow-hidden ${project.featured ? 'lg:w-1/2' : ''}`}>
                                    <Image src={project.image || '/projects/placeholder.svg'} alt={project.title} width={400} height={300} className="w-full h-56 object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                </div>

                                <div className={`p-7 ${project.featured ? 'lg:w-1/2 flex flex-col justify-center' : ''}`}>
                                    <h3 className="text-lg font-bold text-white mb-3">{project.title}</h3>
                                    <p className="text-sm text-gray-400 mb-5 leading-relaxed">{project.description}</p>

                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="px-2.5 py-0.5 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-5">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                                        >
                                            <Github className="w-4 h-4" />
                                            {t('projects.viewCode')}
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                                        >
                                            <ExternalLink className="w-4 h-4" />
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
