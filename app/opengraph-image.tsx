import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = '게딱지 - 게스트하우스 딱, 지금!'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #FFF3ED 0%, #FFE4D6 100%)', // Soft orange/peach gradient
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            padding: '80px 100px',
            borderRadius: '48px',
            boxShadow: '0 30px 60px rgba(0,0,0,0.08)',
            border: '1px solid rgba(255,255,255,0.5)'
          }}
        >
          {/* Logo Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#FF6B00', // Strong orange primary
              color: 'white',
              padding: '12px 32px',
              borderRadius: '999px',
              fontSize: '32px',
              fontWeight: 800,
              marginBottom: '40px',
              letterSpacing: '-0.02em',
            }}
          >
            게딱지
          </div>

          {/* Main Headline */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontSize: '76px',
              fontWeight: 900,
              color: '#111827',
              textAlign: 'center',
              lineHeight: 1.25,
              letterSpacing: '-0.05em',
            }}
          >
            <span>단순한 숙박이 아닌,</span>
            <span style={{ color: '#FF6B00', marginTop: '8px' }}>사람을 만나는 시작점</span>
          </div>

          {/* Subheadline */}
          <div
            style={{
              display: 'flex',
              fontSize: '36px',
              color: '#6B7280',
              marginTop: '48px',
              fontWeight: 600,
              letterSpacing: '-0.02em',
            }}
          >
            게스트하우스 추천 및 예약 특화 플랫폼
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
