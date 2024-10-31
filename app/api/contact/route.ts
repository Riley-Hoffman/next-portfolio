import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import csrf from "csrf";
import packageJson from "../../../package.json";

const csrfProtection = new csrf();

export async function POST(request: Request) {
  const sitename = packageJson.name;

  try {
    const csrfTokenFromRequest = request.headers.get("csrf-token");
    const secretFromRequest = request.headers.get("csrf-secret");

    if (!csrfTokenFromRequest || !secretFromRequest) {
      return NextResponse.json(
        { success: false, error: "CSRF token or secret is missing" },
        { status: 403 }
      );
    }

    if (!csrfProtection.verify(secretFromRequest, csrfTokenFromRequest)) {
      return NextResponse.json(
        { success: false, error: "Invalid CSRF token" },
        { status: 403 }
      );
    }

    const { name, email, message } = await request.json();
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New contact form submission from '${name}' on ${sitename}`,
      text: message,
      html:`<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Basic Email Template</title> <style>body, table, td, a { text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-family: 'Tahoma', sans-serif; } table, td { mso-table-rspace: 0pt; mso-table-lspace: 0pt; } img { -ms-interpolation-mode: bicubic; } body { margin: 0; padding: 0; width: 100%; background-color: #f4f4f4; font-family: Arial, sans-serif; } h1 { font-size: 30px; font-weight: 400; color: #12121c; } p { font-size: 18px; color: #12121c;line-height: 1.5; } strong { font-size: 110%; } table { border-collapse: collapse; width: 100%; } .email-container { max-width: 600px; margin: 0 auto; background-color: #ffffff; } .email-header { background-color: #eee2f3; border-bottom: 2px solid #ae4971; padding: 20px; text-align: center; } .email-body { padding: 20px; } .email-body p:last-child { margin-top: 20px; } .email-body p:last-child strong { display: block; margin-bottom: 10px; } .email-footer { background-color: #f4f4f4; color: #888888; padding: 20px; text-align: center; font-size: 12px; } .button { background-color: #0073e6; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 20px; } @media screen and (max-width: 600px) { .email-container { width: 100%; } .button { display: block; width: 100%; text-align: center; } }</style> </head> <body> <table role="presentation" class="email-container"> <tr> <td class="email-header"> <h1>Contact form submission</h1> </td> </tr> <tr> <td class="email-body"> <p><strong>Name: </strong>${name}</p> <p><strong>Email: </strong>${email}</p> <p><strong>Message: </strong>${message}</p> </td> </tr> <tr> <td class="email-footer"> <p><a href="https://rileyhoffman.com" style="color: #0073e6; text-decoration: none;">${sitename}</a></p> </td> </tr> </table> </body> </html>`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error handling request:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
