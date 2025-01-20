import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import csrf from 'csrf'
import { contactEmailTemplate } from '@/lib/contactEmailTemplate'

const csrfProtection = new csrf()

const handleError = (message: string, status: number) =>
  NextResponse.json({ success: false, error: message }, { status })

const sendMail = async (name: string, email: string, message: string) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const emailHtml = contactEmailTemplate({ name, email, message })

  await transporter.sendMail({
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New contact form submission from '${name}' on rileyhoffman.com`,
    text: message,
    html: emailHtml,
  })
}

export async function POST(request: Request) {
  try {
    const csrfTokenFromRequest = request.headers.get('csrf-token')
    const secretFromRequest = request.headers.get('csrf-secret')

    if (!csrfTokenFromRequest || !secretFromRequest)
      return handleError('CSRF token or secret is missing', 403)

    if (!csrfProtection.verify(secretFromRequest, csrfTokenFromRequest))
      return handleError('Invalid CSRF token', 403)

    const { name, email, message } = await request.json()
    await sendMail(name, email, message)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error handling request:', error)
    return handleError(
      'An unexpected error occurred. Please try again later.',
      500
    )
  }
}
