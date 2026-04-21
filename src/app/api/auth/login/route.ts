import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'samp_secret_key_change_in_prod';

function hashPassword(password: string, salt: string) {
  // Try both depending on exact SA-MP configuration, often password+salt is used.
  const hash = crypto.createHash('sha256');
  hash.update(password + salt);
  return hash.digest('hex').toUpperCase();
}

export async function POST(request: Request) {
  try {
    const { ucp, password } = await request.json();

    if (!ucp || !password) {
      return NextResponse.json({ error: 'UCP Name and Password are required' }, { status: 400 });
    }

    const [rows]: any = await pool.query('SELECT * FROM playerucp WHERE ucp = ?', [ucp]);
    if (rows.length === 0) {
      return NextResponse.json({ error: 'UCP account not found' }, { status: 401 });
    }

    const user = rows[0];
    const hashedPassword = hashPassword(password, user.salt);

    // Some SAMP servers use uppercase hash, others lowercase. Let's compare case insensitive.
    if (hashedPassword.toLowerCase() !== user.password.toLowerCase()) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    // Sign JWT
    const token = jwt.sign({ ucpId: user.ID, ucpName: user.ucp }, JWT_SECRET, { expiresIn: '1d' });

    const response = NextResponse.json({ success: true, ucp: user.ucp });
    
    // Set cookie
    response.cookies.set('ucp_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 // 1 day
    });

    return response;
  } catch (error: any) {
    console.error('Login Error:', error);
    return NextResponse.json({ error: 'Internal server error while logging in' }, { status: 500 });
  }
}
