import csrf from 'csrf';
import { NextResponse } from 'next/server';

const csrfProtection = new csrf();

export async function GET() {
    const secret = process.env.CSRF_SECRET || csrfProtection.secretSync();
    const token = csrfProtection.create(secret);
    
    return NextResponse.json({ token });
}
