import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Kitoko Hearth — Where Teens Build Tomorrow\'s Technology';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #4A2412 0%, #6B3A1E 45%, #D89A2B 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 96,
            height: 96,
            borderRadius: 999,
            background: 'linear-gradient(120deg, #D89A2B, #F2C879)',
            marginBottom: 40,
            fontSize: 48,
          }}
        >
          🔥
        </div>
        <div style={{ display: 'flex', color: '#F8F5F0', fontSize: 64, fontWeight: 800, letterSpacing: -1 }}>
          Kitoko Hearth
        </div>
        <div style={{ display: 'flex', color: 'rgba(248,245,240,0.8)', fontSize: 28, marginTop: 20 }}>
          Where teens build tomorrow&rsquo;s technology
        </div>
      </div>
    ),
    { ...size }
  );
}
