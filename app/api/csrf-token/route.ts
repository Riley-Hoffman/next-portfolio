import { NextResponse } from 'next/server'
import csrf from 'csrf'

const csrfProtection = new csrf()

export const GET = async () => {
  const secret = csrfProtection.secretSync()
  const token = csrfProtection.create(secret)

  const response = NextResponse.json({ token })

  response.cookies.set('csrf-secret', secret, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  })

  return response
}
