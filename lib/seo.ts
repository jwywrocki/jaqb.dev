export const siteUrl = 'https://jaqb.dev';
export const locales = ['pl', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pl';
export const routedLocales = ['en'] as const;
export type RoutedLocale = (typeof routedLocales)[number];

type LocaleMeta = {
    locale: Locale;
    title: string;
    description: string;
    keywords: string[];
    ogLocale: string;
};

const localeMetadata: Record<Locale, LocaleMeta> = {
    en: {
        locale: 'en',
        title: 'Jakub Wywrocki | Full-Stack Developer',
        description:
            'Portfolio of Jakub Wywrocki - backend-focused Full-Stack Developer with 4+ years of experience building e-commerce microservices, payment integrations, and seamless checkout flows.',
        keywords: [
            'Jakub Wywrocki',
            'Full-Stack Developer',
            'e-commerce developer',
            'Laravel developer',
            'PHP developer',
            'React developer',
            'TypeScript',
            'microservices',
            'e-commerce integrations',
            'payment integrations',
            'remote developer',
            'Poland',
            'Kielce',
        ],
        ogLocale: 'en_US',
    },
    pl: {
        locale: 'pl',
        title: 'Jakub Wywrocki | Full-Stack Developer',
        description:
            'Portfolio Jakuba Wywrockiego - backendowy Full-Stack Developer z ponad 4-letnim doświadczeniem w budowie mikrousług e-commerce, integracjach płatności i płynnych procesach checkout.',
        keywords: [
            'Jakub Wywrocki',
            'programista full-stack',
            'developer e-commerce',
            'Laravel',
            'PHP',
            'React',
            'TypeScript',
            'mikroserwisy',
            'integracje e-commerce',
            'integracje płatności',
            'zdalnie',
            'Polska',
            'Kielce',
        ],
        ogLocale: 'pl_PL',
    },
};

const knowledgeTags = [
    'Laravel',
    'PHP',
    'JavaScript',
    'TypeScript',
    'React',
    'Vue.js',
    'Docker',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Redis',
    'RabbitMQ',
    'e-commerce',
    'microservices',
    'payment integrations',
];

const socialProfiles = ['https://github.com/jwywrocki', 'https://www.linkedin.com/in/jwywrocki'];

export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);
export const isRoutedLocale = (value: string): value is RoutedLocale => routedLocales.includes(value as RoutedLocale);

export const getLocaleMeta = (locale: Locale) => localeMetadata[locale];

export const buildJsonLd = (locale: Locale) => {
    const meta = getLocaleMeta(locale);
    const pageUrl = locale === defaultLocale ? siteUrl : `${siteUrl}/${locale}`;

    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Person',
                '@id': `${siteUrl}/#person`,
                name: 'Jakub Wywrocki',
                url: siteUrl,
                image: `${siteUrl}/jaqb.jpg`,
                jobTitle: 'Full-Stack Developer',
                description: meta.description,
                email: 'jaqb1991@gmail.com',
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Kielce',
                    addressCountry: 'PL',
                },
                sameAs: socialProfiles,
                knowsAbout: knowledgeTags,
            },
            {
                '@type': 'WebSite',
                '@id': `${siteUrl}/#website`,
                url: siteUrl,
                name: 'Jakub Wywrocki',
                description: meta.description,
                inLanguage: meta.locale,
                author: { '@id': `${siteUrl}/#person` },
            },
            {
                '@type': 'WebPage',
                '@id': `${pageUrl}#webpage`,
                url: pageUrl,
                name: meta.title,
                description: meta.description,
                inLanguage: meta.locale,
                isPartOf: { '@id': `${siteUrl}/#website` },
                about: { '@id': `${siteUrl}/#person` },
            },
        ],
    };
};
