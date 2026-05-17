import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const RATE_LIMIT_MS = 15_000;
const rateLimit = new Map<string, number>();

const getClientIp = (request: Request) => {
    const forwarded = request.headers.get('x-forwarded-for');
    if (forwarded) {
        return forwarded.split(',')[0].trim();
    }
    return request.headers.get('x-real-ip') ?? 'unknown';
};

export async function POST(request: Request) {
    try {
        const now = Date.now();
        const ip = getClientIp(request);
        const lastRequestAt = rateLimit.get(ip);

        if (lastRequestAt && now - lastRequestAt < RATE_LIMIT_MS) {
            return NextResponse.json({ ok: false, message: 'Too many requests. Please wait a moment and try again.' }, { status: 429 });
        }

        let body: Record<string, unknown>;
        try {
            body = await request.json();
        } catch {
            return NextResponse.json({ ok: false, message: 'Invalid request.' }, { status: 400 });
        }

        const name = String(body.name ?? '').trim();
        const email = String(body.email ?? '').trim();
        const message = String(body.message ?? '').trim();

        if (!name || !email || !message) {
            return NextResponse.json({ ok: false, message: 'Missing required fields.' }, { status: 400 });
        }

        if (name.length > 100 || email.length > 200 || message.length > 2000) {
            return NextResponse.json({ ok: false, message: 'Message is too long.' }, { status: 400 });
        }

        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!emailOk) {
            return NextResponse.json({ ok: false, message: 'Email address is invalid.' }, { status: 400 });
        }

        const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO, MAIL_FROM } = process.env;

        if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !MAIL_TO) {
            return NextResponse.json({ ok: false, message: 'Mail server is not configured.' }, { status: 500 });
        }

        const port = Number(SMTP_PORT);
        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port,
            secure: port === 465,
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
        });

        const safeName = name.replace(/[\r\n]+/g, ' ').slice(0, 100);
        const safeMessage = message.replace(/\r\n/g, '\n').slice(0, 2000);

        await transporter.sendMail({
            from: MAIL_FROM ?? SMTP_USER,
            to: MAIL_TO,
            replyTo: email,
            subject: `[Portfolio] New message from ${safeName}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${safeMessage}`,
        });

        rateLimit.set(ip, now);

        return NextResponse.json({ ok: true }, { status: 200 });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json({ ok: false, message: 'Unable to send message.' }, { status: 500 });
    }
}
