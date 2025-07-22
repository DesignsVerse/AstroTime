// app/api/prokerala/token/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const client_id = process.env.PROKERALA_CLIENT_ID!;
  const client_secret = process.env.PROKERALA_CLIENT_SECRET!;
  const tokenUrl = 'https://api.prokerala.com/token';

  const res = await fetch(tokenUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`
  });

  const data = await res.json();
  return NextResponse.json(data);
}
