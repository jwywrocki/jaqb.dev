'use client';

import type React from 'react';
import { createContext, useContext, useState } from 'react';

type Language = 'en' | 'pl';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    en: {
        // Navigation
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',

        // Hero
        'hero.greeting': "Hi, I'm",
        'hero.name': 'Jakub Wywrocki',
        'hero.title': 'Full-Stack Developer',
        'hero.subtitle': 'I craft exceptional digital experiences',
        'hero.description': 'Specialized in building scalable web applications and microservices with over 3 years of experience in modern technologies.',
        'hero.cta': 'Get In Touch',
        'hero.resume': 'View Resume',

        // About
        'about.title': 'About Me',
        'about.text1': "I'm a passionate full-stack developer with over three years of experience specializing in building microservices and creating, maintaining, and evolving e-commerce platforms.",
        'about.text2':
            'My journey in web development started with a curiosity about how things work behind the scenes. Today, I focus on writing clean, efficient code and creating user-centered digital experiences.',
        'about.text3': "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.",
        'about.experience': 'Experience',
        'about.experience.years': '3+ years',
        'about.education': 'Education',
        'about.education.degree': 'BS in CS',
        'about.technologies': 'Technologies',
        'about.technologies.count': '10+',

        // Skills
        'skills.title': 'Skills & Technologies',
        'skills.tools': 'Tools',
        'skills.languages': 'Languages',
        'skills.technologies': 'Technologies',
        'skills.frameworks': 'Frameworks',
        'skills.databasesAndApis': 'Databases & APIs',

        // Experience
        'experience.title': 'Experience',
        'experience.present': 'Present',

        // Projects
        'projects.title': 'Featured Projects',
        'projects.viewLive': 'View Live',
        'projects.viewCode': 'View Code',

        // Contact
        'contact.title': "Let's Work Together",
        'contact.subtitle': 'Get In Touch',
        'contact.description': "I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!",
        'contact.email.label': 'Email',
        'contact.email': 'jaqb1991@gmail.com',
        'contact.location.label': 'Location',
        'contact.location': 'Kielce, Poland',
        'contact.follow': 'Follow me on social media',
        'contact.name.label': 'Name',
        'contact.name.placeholder': 'Name',
        'contact.email.placeholder': 'Email',
        'contact.message.label': 'Message',
        'contact.message.placeholder': 'Your message...',
        'contact.send': 'Send Message',
    },
    pl: {
        // Navigation
        'nav.about': 'O mnie',
        'nav.skills': 'Umiejętności',
        'nav.experience': 'Doświadczenie',
        'nav.projects': 'Projekty',
        'nav.contact': 'Kontakt',

        // Hero
        'hero.greeting': 'Cześć, nazywam się',
        'hero.name': 'Jakub Wywrocki',
        'hero.title': 'Full-Stack Developer',
        'hero.subtitle': 'Tworzę wyjątkowe doświadczenia cyfrowe',
        'hero.description': 'Specjalizuję się w budowaniu skalowalnych aplikacji internetowych i mikrousług z ponad 3-letnim doświadczeniem w nowoczesnych technologiach.',
        'hero.cta': 'Skontaktuj się',
        'hero.resume': 'Zobacz CV',

        // About
        'about.title': 'O mnie',
        'about.text1':
            'Jestem pasjonatem full-stack developmentu z ponad trzyletnim doświadczeniem w specjalizacji w budowaniu mikrousług oraz tworzeniu, utrzymywaniu i rozwijaniu platform e-commerce.',
        'about.text2':
            'Moja podróż w web developmencie rozpoczęła się od ciekawości, jak rzeczy działają za kulisami. Dziś skupiam się na pisaniu czystego, wydajnego kodu i tworzeniu doświadczeń cyfrowych zorientowanych na użytkownika.',
        'about.text3': 'Kiedy nie koduję, można mnie znaleźć eksplorującego nowe technologie, przyczyniającego się do projektów open-source lub cieszącego się aktywnościami na świeżym powietrzu.',
        'about.experience': 'Doświadczenie',
        'about.experience.years': 'Ponad 3 lata',
        'about.education': 'Edukacja',
        'about.education.degree': 'Inżynier',
        'about.technologies': 'Technologie',
        'about.technologies.count': 'Ponad 10',

        // Skills
        'skills.title': 'Umiejętności i Technologie',
        'skills.tools': 'Narzędzia',
        'skills.languages': 'Języki',
        'skills.technologies': 'Technologie',
        'skills.frameworks': 'Frameworki',
        'skills.databasesAndApis': 'Bazy Danych i API',

        // Experience
        'experience.title': 'Doświadczenie',
        'experience.present': 'Obecnie',

        // Projects
        'projects.title': 'Wybrane Projekty',
        'projects.description1': 'A clinic app with lightweight CMS for content updates.',
        'projects.viewLive': 'Zobacz Live',
        'projects.viewCode': 'Zobacz Kod',

        // Contact
        'contact.title': 'Współpracujmy Razem',
        'contact.subtitle': 'Skontaktuj się',
        'contact.description': 'Zawsze jestem zainteresowany nowymi możliwościami i ekscytującymi projektami. Czy masz pytanie, czy po prostu chcesz się przywitać, śmiało się odezwij!',
        'contact.email.label': 'Email',
        'contact.email': 'jaqb1991@gmail.com',
        'contact.location.label': 'Lokalizacja',
        'contact.location': 'Kielce, Polska',
        'contact.follow': 'Śledź mnie w mediach społecznościowych',
        'contact.name.label': 'Imię',
        'contact.name.placeholder': 'Imię',
        'contact.email.placeholder': 'Email',
        'contact.message.label': 'Wiadomość',
        'contact.message.placeholder': 'Twoja wiadomość...',
        'contact.send': 'Wyślij Wiadomość',
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: string): string => {
        return translations[language][key as keyof (typeof translations)['en']] || key;
    };

    return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
