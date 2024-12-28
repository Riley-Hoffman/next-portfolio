import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import csrf from "csrf"
import { contactEmailTemplate } from "../../../lib/contactEmailTemplate"

const csrfProtection = new csrf()

export async function POST(request: Request) {
  try {
    const csrfTokenFromRequest = request.headers.get("csrf-token")
    const secretFromRequest = request.headers.get("csrf-secret")

    if (!csrfTokenFromRequest || !secretFromRequest) {
      return NextResponse.json(
        { success: false, error: "CSRF token or secret is missing" },
        { status: 403 }
      )
    }

    if (!csrfProtection.verify(secretFromRequest, csrfTokenFromRequest)) {
      return NextResponse.json(
        { success: false, error: "Invalid CSRF token" },
        { status: 403 }
      )
    }

    const { name, email, message } = await request.json()
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

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Error handling request:", error)
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    )
  }
}
