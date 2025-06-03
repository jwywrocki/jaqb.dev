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
        { key: 'nav.projects', href: '#projects' },
        { key: 'nav.contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 w-full z-50 backdrop-blur-md">
            <div
                className={`transition-[background-color] duration-300 ease-in-out ${scrolled ? 'bg-gray-900/95' : 'bg-gray-900/30'}`}
                style={{
                    borderBottom: scrolled ? '1px solid rgba(31, 41, 55, 0.5)' : 'none',
                    boxShadow: scrolled ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none',
                }}
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <a href="#" className="text-xl font-bold text-white">
                                JW
                            </a>
                        </div>

                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                {navigation.map((item) => (
                                    <a key={item.key} href={item.href} className="text-gray-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                                        {t(item.key)}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <LanguageToggle />
                            <div className="md:hidden">
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white p-2">
                                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800/95 rounded-lg mt-2 mb-2">
                                {navigation.map((item) => (
                                    <a
                                        key={item.key}
                                        href={item.href}
                                        className="text-gray-300 hover:text-emerald-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {t(item.key)}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
}
