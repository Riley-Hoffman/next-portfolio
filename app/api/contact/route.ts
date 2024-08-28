import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `New contact form submission from '${name}' on rileyhoffman.com`,
            text: message,
            html: `<p>You have a new contact form submission</p>
                   <p><strong>Name: </strong> ${name}</p>
                   <p><strong>Email: </strong> ${email}</p>
                   <p><strong>Message: </strong><br/> ${message}</p>`,
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ success: false, error: 'Error sending email' }, { status: 500 });
    }
}
