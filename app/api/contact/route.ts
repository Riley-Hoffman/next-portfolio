import { NextRequest, NextResponse } from 'next/server'
import csrf from 'csrf'
import nodemailer from 'nodemailer'
import { contactEmailTemplate } from '@/app/utils/contactEmailTemplate'

const csrfProtection = new csrf()

const handleError = (message: string, status: number) =>
  NextResponse.json({ success: false, error: message }, { status })

const sendMail = async (name: string, email: string, message: string) => {
  const emailHtml = contactEmailTemplate({ name, email, message })

  const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS } = process.env
  if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS) {
    throw new Error('One or more email environment variables are missing')
  }

  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: parseInt(EMAIL_PORT, 10),
    secure: false,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: EMAIL_USER,
      replyTo: email,
      to: EMAIL_USER,
      subject: `New contact form submission from '${name}' on your site`,
      text: message,
      html: emailHtml,
    })
  } catch (error) {
    console.error('Error sending email:', error)
    throw new Error('Failed to send email')
  }
}

export const POST = async (request: NextRequest) => {
  try {
    const csrfTokenFromRequest = request.headers.get('csrf-token')
    const secretFromCookie = request.cookies.get('csrf-secret')?.value

    if (!csrfTokenFromRequest || !secretFromCookie) {
      return handleError('CSRF token or secret is missing', 403)
    }

    if (!csrfProtection.verify(secretFromCookie, csrfTokenFromRequest)) {
      return handleError('Invalid CSRF token', 403)
    }

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
