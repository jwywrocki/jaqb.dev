import { NextResponse, type NextRequest } from 'next/server';
import { defaultLocale } from './lib/seo';

const withLocaleHeader = (request: NextRequest, locale: string) => {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-locale', locale);

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
};

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const segments = pathname.split('/').filter(Boolean);
    const firstSegment = segments[0];

    if (firstSegment === 'pl') {
        const redirectUrl = request.nextUrl.clone();
        const rest = segments.slice(1).join('/');
        redirectUrl.pathname = rest ? `/${rest}` : '/';
        return NextResponse.redirect(redirectUrl);
    }

    if (firstSegment === 'en') {
        return withLocaleHeader(request, 'en');
    }

    if (pathname === '/') {
        return withLocaleHeader(request, defaultLocale);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/en/:path*', '/pl/:path*'],
};
