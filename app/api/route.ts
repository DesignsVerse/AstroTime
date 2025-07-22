// // app/api/prokerala/token/route.ts
// import { NextResponse } from 'next/server';

// export async function GET() {
//   const client_id = process.env.PROKERALA_CLIENT_ID!;
//   const client_secret = process.env.PROKERALA_CLIENT_SECRET!;
//   const tokenUrl = 'https://api.prokerala.com/token';

//   const res = await fetch(tokenUrl, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`
//   });

//   const data = await res.json();
//   return NextResponse.json(data);
// }
// pages/api/panchang.ts
// app/api/panchang/route.ts
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const datetime = searchParams.get('datetime') ?? new Date().toISOString();
  const coordinates = searchParams.get('coordinates') ?? '28.6139,77.2090';
  const timezone = searchParams.get('timezone') ?? 'Asia/Kolkata';
  const ayanamsa = searchParams.get('ayanamsa') ?? '1';

  try {
    // Step 1: Get token
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

    // Step 2: Call Panchang API
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
