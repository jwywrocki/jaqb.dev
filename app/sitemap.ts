import type { MetadataRoute } from 'next';
import { routedLocales, siteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return [
        {
            url: siteUrl,
            lastModified,
            changeFrequency: 'monthly',
            priority: 1,
        },
        ...routedLocales.map((locale) => ({
            url: `${siteUrl}/${locale}`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        })),
    ];
}
