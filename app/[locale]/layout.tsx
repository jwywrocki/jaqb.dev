import type React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { defaultLocale, getLocaleMeta, isRoutedLocale, routedLocales, siteUrl } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
    return routedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale: localeParam } = await params;
    const locale = isRoutedLocale(localeParam) ? localeParam : defaultLocale;
    const meta = getLocaleMeta(locale);
    const pageUrl = `${siteUrl}/${locale}`;
    const ogImage = { url: '/og-card.svg', width: 1200, height: 630, alt: 'Jakub Wywrocki' };

    return {
        metadataBase: new URL(siteUrl),
        title: {
            default: meta.title,
            template: '%s | Jakub Wywrocki',
        },
        description: meta.description,
        keywords: meta.keywords,
        authors: [{ name: 'Jakub Wywrocki', url: siteUrl }],
        creator: 'Jakub Wywrocki',
        openGraph: {
            type: 'website',
            url: pageUrl,
            siteName: 'Jakub Wywrocki',
            title: meta.title,
            description: meta.description,
            locale: meta.ogLocale,
            images: [ogImage],
        },
        twitter: {
            card: 'summary_large_image',
            title: meta.title,
            description: meta.description,
            images: [ogImage.url],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-snippet': -1,
                'max-image-preview': 'large',
                'max-video-preview': -1,
            },
        },
        alternates: {
            canonical: pageUrl,
            languages: {
                pl: siteUrl,
                en: `${siteUrl}/en`,
            },
        },
    };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
    const { locale } = await params;

    if (!isRoutedLocale(locale)) {
        notFound();
    }

    return children;
}
