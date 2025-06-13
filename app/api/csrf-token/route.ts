import { NextResponse } from 'next/server'
import csrf from 'csrf'

const csrfProtection = new csrf()

const TOKEN_EXPIRATION = 24 * 60 * 60

export const GET = async () => {
  try {
    const secret = csrfProtection.secretSync()
    const token = csrfProtection.create(secret)

    const response = NextResponse.json({ token })

    response.cookies.set('csrf-secret', secret, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: TOKEN_EXPIRATION,
    })

    return response
  } catch (error) {
    console.error('Error generating CSRF token:', error)
    return NextResponse.json(
      { error: 'Failed to generate CSRF token' },
      { status: 500 }
    )
  }
}
