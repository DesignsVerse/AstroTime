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
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { date = new Date().toISOString().split("T")[0], coordinates = "28.6139,77.2090" } = req.query;

  try {
    // Step 1: Get token
    const tokenResponse = await fetch('https://api.prokerala.com/token', {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + Buffer.from(`${process.env.PROKERALA_CLIENT_ID}:${process.env.PROKERALA_CLIENT_SECRET}`).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    const tokenData = await tokenResponse.json();
    const token = tokenData.access_token;

    // Step 2: Fetch Panchang
    const apiResponse = await fetch(
      `https://api.prokerala.com/v2/astrology/panchang?date=${date}&timezone=Asia/Kolkata&ayanamsa=1&coordinates=${coordinates}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await apiResponse.json();
    res.status(200).json(data);
  } catch (err: any) {
    console.error('Panchang API Error:', err);
    res.status(500).json({ error: 'Failed to fetch Panchang' });
  }
}
