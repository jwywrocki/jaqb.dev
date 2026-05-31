import { buildJsonLd, defaultLocale } from '../lib/seo';

export default function Head() {
    const jsonLd = buildJsonLd(defaultLocale);

    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
