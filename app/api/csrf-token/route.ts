'use server'
import { NextResponse } from 'next/server'
import csrf from 'csrf'

const csrfProtection = new csrf()

export const GET = async () => {
  const secret = csrfProtection.secretSync()
  const token = csrfProtection.create(secret)

  return NextResponse.json({ token, secret })
}
