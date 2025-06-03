import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/sections/header';
import { LanguageProvider } from '@/contexts/language-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Jakub Wywrocki | Full-Stack Developer',
    description: 'Portfolio of Jakub Wywrocki, a full-stack developer with over three years of experience',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>
                <LanguageProvider>
                    <Header />
                    {children}
                </LanguageProvider>
            </body>
        </html>
    );
}
