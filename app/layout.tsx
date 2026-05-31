import type React from 'react';
import { headers } from 'next/headers';
import { Inter } from 'next/font/google';
import Header from '@/components/sections/header';
import { LanguageProvider, type Language } from '@/contexts/language-context';
import { defaultLocale, isLocale } from '../lib/seo';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const requestHeaders = await headers();
    const headerLocale = requestHeaders.get('x-locale') ?? '';
    const locale = isLocale(headerLocale) ? headerLocale : defaultLocale;

    return (
        <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
            <body className={inter.className} suppressHydrationWarning>
                <LanguageProvider initialLanguage={locale as Language}>
                    <Header />
                    {children}
                </LanguageProvider>
            </body>
        </html>
    );
}
