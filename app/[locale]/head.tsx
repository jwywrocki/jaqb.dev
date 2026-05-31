import { notFound } from 'next/navigation';
import { buildJsonLd, isRoutedLocale } from '@/lib/seo';

export default async function Head({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;

    if (!isRoutedLocale(locale)) {
        notFound();
    }

    const jsonLd = buildJsonLd(locale);

    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
