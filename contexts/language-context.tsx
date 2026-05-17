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
        'nav.education': 'Education',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',

        // Hero
        'hero.greeting': "Hi, I'm",
        'hero.name': 'Jakub Wywrocki',
        'hero.title': 'Full-Stack Developer',
        'hero.subtitle': 'Microservices & integrations for e-commerce',
        'hero.description':
            'Building solutions that drive real business value. Backend-focused e-commerce developer specializing in secure microservices, seamless integrations, and effective checkout flows.',
        'hero.cta': 'Get In Touch',
        'hero.resume': 'View Resume',
        'hero.highlight.experience': '4+ years in e-commerce',
        'hero.highlight.location': 'Remote',
        'hero.highlight.stack': 'Microservices & integrations',

        // About
        'about.title': 'About Me',
        'about.text1':
            "Hi! I'm a backend-focused Full-Stack Developer with over 4 years of experience shaping e-commerce platforms. Instead of just writing code, I focus on building solutions that drive real business value.",
        'about.text2':
            'I design microservices, connect stores with external platforms (like Baselinker and Synerise), integrate seamless payment flows (such as BLIK or PayPal), and set up analytics (GTM, GA4) to help teams understand their users.',
        'about.text3':
            'Daily stack: Laravel/PHP, JS/TS, React, occasional Vue; data: PostgreSQL, MySQL, MongoDB, Redis, RabbitMQ, Supabase, Elasticsearch; analytics: GTM, GA4, Microsoft Clarity; workflow: Git, GitHub, GitLab, Docker, CI/CD, Jira, Slack; design: Figma, Adobe XD.',
        'about.experience': 'Experience',
        'about.experience.years': '4+ years',
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
        'skills.integrations': 'Integrations & Payments',

        // Experience
        'experience.title': 'Experience',
        'experience.present': 'Present',

        // Education
        'education.title': 'Education',
        'education.degree': "Bachelor's in Computer Engineering",
        'education.institution': 'Jan Kochanowski University of Kielce',
        'education.year': '2017 - 2021',

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
        'contact.location': 'Kielce, Poland / Remote',
        'contact.follow': 'Follow me on social media',
        'contact.name.label': 'Name',
        'contact.name.placeholder': 'Name',
        'contact.email.placeholder': 'Email',
        'contact.message.label': 'Message',
        'contact.message.placeholder': 'Your message...',
        'contact.send': 'Send Message',
        'contact.sending': 'Sending...',
        'contact.success': 'Message sent! I will get back to you soon.',
        'contact.error': 'Something went wrong. Please try again.',
        'contact.rateLimit': 'Please wait a moment before sending another message.',
    },
    pl: {
        // Navigation
        'nav.about': 'O mnie',
        'nav.skills': 'Umiejętności',
        'nav.experience': 'Doświadczenie',
        'nav.education': 'Edukacja',
        'nav.projects': 'Projekty',
        'nav.contact': 'Kontakt',

        // Hero
        'hero.greeting': 'Cześć, nazywam się',
        'hero.name': 'Jakub Wywrocki',
        'hero.title': 'Full-Stack Developer',
        'hero.subtitle': 'Mikrousługi i integracje dla e-commerce',
        'hero.description': 'Buduję rozwiązania, które napędzają biznes. Backendowy developer e-commerce specjalizujący się w mikrousługach, integracjach i płynnych procesach zakupowych.',
        'hero.cta': 'Skontaktuj się',
        'hero.resume': 'Zobacz CV',
        'hero.highlight.experience': '4+ lata w e-commerce',
        'hero.highlight.location': 'Zdalnie',
        'hero.highlight.stack': 'Mikrousługi i integracje',

        // About
        'about.title': 'O mnie',
        'about.text1':
            'Cześć! Jestem Full-Stack Developerem z głównym naciskiem na backend. Od ponad 4 lat pomagam rozwijać platformy e-commerce. Zamiast tylko pisać kod, skupiam się na budowaniu rozwiązań, które napędzają biznes.',
        'about.text2':
            'Projektuję mikroserwisy, integruję sklepy z systemami zewnętrznymi (m.in. Baselinker, Synerise), wdrażam bezproblemowe płatności (BLIK, PayU i inne) oraz podpinam analitykę (GTM, GA4), która pozwala lepiej zrozumieć ruch na stronie.',
        'about.text3':
            'Na co dzień: Laravel/PHP, JS/TS, React, okazjonalnie Vue; dane: PostgreSQL, MySQL, MongoDB, Redis, RabbitMQ, Supabase, Elasticsearch; analityka: GTM, GA4, Microsoft Clarity; workflow: Git, GitHub, GitLab, Docker, CI/CD, Jira, Slack; design: Figma, Adobe XD.',
        'about.experience': 'Doświadczenie',
        'about.experience.years': 'Ponad 4 lata',
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
        'skills.integrations': 'Integracje i Płatności',

        // Experience
        'experience.title': 'Doświadczenie',
        'experience.present': 'Obecnie',

        // Education
        'education.title': 'Edukacja',
        'education.degree': 'Inżynier Informatyki',
        'education.institution': 'Uniwersytet Jana Kochanowskiego w Kielcach',
        'education.year': '2017 - 2021',

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
        'contact.location': 'Kielce, Polska / Zdalnie',
        'contact.follow': 'Śledź mnie w mediach społecznościowych',
        'contact.name.label': 'Imię',
        'contact.name.placeholder': 'Imię',
        'contact.email.placeholder': 'Email',
        'contact.message.label': 'Wiadomość',
        'contact.message.placeholder': 'Twoja wiadomość...',
        'contact.send': 'Wyślij Wiadomość',
        'contact.sending': 'Wysyłanie...',
        'contact.success': 'Wiadomość wysłana! Odezwę się najszybciej jak to możliwe.',
        'contact.error': 'Coś poszło nie tak. Spróbuj ponownie.',
        'contact.rateLimit': 'Poczekaj chwilę przed wysłaniem kolejnej wiadomości.',
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
