'use client';

import { usePathname, useRouter } from 'next/navigation';
import { type Language, useLanguage } from '@/contexts/language-context';
import { defaultLocale } from '@/lib/seo';

const localeValues: Language[] = ['en', 'pl'];

const buildLocalePath = (pathname: string, locale: Language) => {
    const segments = pathname.split('/').filter(Boolean);
    const hasLocale = segments.length > 0 && localeValues.includes(segments[0] as Language);
    const restSegments = hasLocale ? segments.slice(1) : segments;
    const restPath = restSegments.length > 0 ? `/${restSegments.join('/')}` : '';

    if (locale === defaultLocale) {
        return restPath || '/';
    }

    return `/${locale}${restPath}`;
};

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage();
    const pathname = usePathname();
    const router = useRouter();

    const handleSwitch = (nextLocale: Language) => {
        if (nextLocale === language) {
            return;
        }

        const hash = typeof window !== 'undefined' ? window.location.hash : '';
        setLanguage(nextLocale);
        router.push(`${buildLocalePath(pathname, nextLocale)}${hash}`);
    };

    return (
        <div className="flex items-center bg-gray-800 rounded-full p-1">
            <button
                onClick={() => handleSwitch('en')}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${language === 'en' ? 'bg-emerald-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
                EN
            </button>
            <button
                onClick={() => handleSwitch('pl')}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${language === 'pl' ? 'bg-emerald-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
                PL
            </button>
        </div>
    );
}
