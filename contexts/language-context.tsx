'use client';

import type React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'en' | 'pl';

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
        'hero.availability': 'Available for work',
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
        'skills.integrations': 'Integrations',

        // Experience
        'experience.title': 'Experience',
        'experience.present': 'Present',
        'experience.d9.title': 'Full-Stack Developer',
        'experience.d9.location': 'Remote',
        'experience.d9.description':
            'Designing and developing microservices to seamlessly connect e-commerce platforms with external APIs. Taking ownership of checkout flows, social authentication, and setting up analytics tools (GTM, GA4) to provide actionable insights. Ensuring system stability through effective CI/CD pipelines and Dockerized environments.',
        'experience.szopex.title': 'Junior Developer',
        'experience.szopex.location': 'Remote',
        'experience.szopex.description':
            'Co-developed and maintained e-commerce platforms with a strong focus on performance, external integrations, and responsive UI. Collaborated closely with product and design teams to build and maintain long-term features across multiple regions.',
        'experience.primeo.title': 'Junior Developer',
        'experience.primeo.location': 'Kielce, PL',
        'experience.primeo.description':
            'Created responsive websites and CMS-based applications for local clients. Focused on writing clean code, SEO best practices, and ensuring a high-quality frontend experience.',

        // Education
        'education.title': 'Education',
        'education.degree': "Bachelor's in Computer Engineering",
        'education.institution': 'Jan Kochanowski University of Kielce',
        'education.year': '2017 - 2021',

        // Projects
        'projects.title': 'Featured Projects',
        'projects.description1': 'A modern clinic app with a lightweight CMS for self-managed content updates. Fast, responsive, and focused on team-friendly workflows.',
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
        'hero.availability': 'Dostępny',
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
        'skills.integrations': 'Integracje',

        // Experience
        'experience.title': 'Doświadczenie',
        'experience.present': 'Obecnie',
        'experience.d9.title': 'Full-Stack Developer',
        'experience.d9.location': 'Zdalnie',
        'experience.d9.description':
            'Projektowanie i rozwijanie mikrousług łączących platformy e-commerce z zewnętrznymi API. Odpowiedzialność za checkout, logowanie społecznościowe oraz wdrożenia analityki (GTM, GA4) dostarczającej użytecznych danych. Dbanie o stabilność systemów poprzez skuteczne CI/CD i środowiska Docker.',
        'experience.szopex.title': 'Junior Developer',
        'experience.szopex.location': 'Zdalnie',
        'experience.szopex.description':
            'Współtworzenie i utrzymanie platform e-commerce z naciskiem na wydajność, integracje zewnętrzne i responsywne UI. Ścisła współpraca z zespołami produktu i designu przy długoterminowych funkcjach dla wielu rynków.',
        'experience.primeo.title': 'Junior Developer',
        'experience.primeo.location': 'Kielce, Polska',
        'experience.primeo.description':
            'Tworzenie responsywnych stron i aplikacji CMS dla lokalnych klientów. Nacisk na czysty kod, dobre praktyki SEO i wysoką jakość doświadczenia frontendowego.',

        // Education
        'education.title': 'Edukacja',
        'education.degree': 'Inżynier Informatyki',
        'education.institution': 'Uniwersytet Jana Kochanowskiego w Kielcach',
        'education.year': '2017 - 2021',

        // Projects
        'projects.title': 'Wybrane Projekty',
        'projects.description1': 'Nowoczesna aplikacja dla kliniki z lekkim CMS-em do samodzielnej aktualizacji treści. Szybka, responsywna i nastawiona na wygodę obsługi zespołu.',
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

interface LanguageProviderProps {
    children: React.ReactNode;
    initialLanguage: Language;
}

export function LanguageProvider({ children, initialLanguage }: LanguageProviderProps) {
    const [language, setLanguage] = useState<Language>(initialLanguage);

    useEffect(() => {
        setLanguage(initialLanguage);
    }, [initialLanguage]);

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
