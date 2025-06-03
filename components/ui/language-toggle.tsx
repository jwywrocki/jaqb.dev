'use client';

import { useLanguage } from '@/contexts/language-context';

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center bg-gray-800 rounded-full p-1">
            <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${language === 'en' ? 'bg-emerald-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
                EN
            </button>
            <button
                onClick={() => setLanguage('pl')}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${language === 'pl' ? 'bg-emerald-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
                PL
            </button>
        </div>
    );
}
