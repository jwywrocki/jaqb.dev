'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import LanguageToggle from '@/components/ui/language-toggle';

export default function Header() {
    const { t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navigation = [
        { key: 'nav.about', href: '#about' },
        { key: 'nav.skills', href: '#skills' },
        { key: 'nav.experience', href: '#experience' },
        { key: 'nav.education', href: '#education' },
        { key: 'nav.projects', href: '#projects' },
        { key: 'nav.contact', href: '#contact' },
    ];

    const navLinkClassName = 'text-gray-400 hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-white/5';
    const mobileLinkClassName = 'block px-5 py-3 text-sm font-medium text-gray-300 hover:text-emerald-400 hover:bg-white/5 transition-colors duration-200';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const showBackground = scrolled || isMenuOpen;

    return (
        <header className="sticky top-0 z-50">
            <div className={`transition-all duration-300 ${showBackground ? 'bg-[#0f172a]/90 backdrop-blur-md shadow-xl' : ''}`}>
                <nav className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <a href="#" className="text-xl font-bold gradient-text-emerald">
                                JW
                            </a>
                        </div>

                        <div className="hidden md:flex items-center space-x-1">
                            {navigation.map((item) => (
                                <a key={item.key} href={item.href} className={navLinkClassName}>
                                    {t(item.key)}
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            <LanguageToggle />
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200">
                                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>
                </nav>
            </div>

            <div className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pb-4">
                    <div className="bg-[#0f172a]/95 backdrop-blur-md border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden">
                        {navigation.map((item) => (
                            <a key={item.key} href={item.href} className={mobileLinkClassName} onClick={() => setIsMenuOpen(false)}>
                                {t(item.key)}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}
