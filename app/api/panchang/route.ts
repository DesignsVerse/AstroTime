export const dynamic = 'force-dynamic'; // ⬅️ This line fixes the prerender error

import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const datetime = searchParams.get('datetime') ?? new Date().toISOString();
  const coordinates = searchParams.get('coordinates') ?? '28.6139,77.2090';
  const timezone = searchParams.get('timezone') ?? 'Asia/Kolkata';
  const ayanamsa = searchParams.get('ayanamsa') ?? '1';

  try {
    const tokenResponse = await fetch('https://api.prokerala.com/token', {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' +
          Buffer.from(
            `${process.env.PROKERALA_CLIENT_ID}:${process.env.PROKERALA_CLIENT_SECRET}`
          ).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    const tokenData = await tokenResponse.json();
    const token = tokenData.access_token;

    const apiUrl = `https://api.prokerala.com/v2/astrology/panchang?datetime=${encodeURIComponent(
      datetime
    )}&timezone=${timezone}&ayanamsa=${ayanamsa}&coordinates=${coordinates}`;

    const apiResponse = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await apiResponse.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Panchang API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch Panchang' }, { status: 500 });
  }
}
