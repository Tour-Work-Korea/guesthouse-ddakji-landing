import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

export const alt = '게딱지 - 게스트하우스 딱, 지금!'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  // 로고 일러스트 읽기
  const filePath = path.join(process.cwd(), 'public', 'images', 'logo.png');
  const logoData = fs.readFileSync(filePath);
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;

  // 가장 모던하고 세련된 스타트업 폰트 (Pretendard Bold) 불러오기
  const fontData = await fetch(
    'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/public/static/Pretendard-Bold.otf'
  ).then((res) => res.arrayBuffer());

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
          fontFamily: '"Pretendard"', // 불러온 폰트 적용
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
          {/* Logo Image */}
          <img 
            src={logoBase64} 
            style={{ 
              height: '100px',
              objectFit: 'contain',
              marginBottom: '40px',
            }} 
          />

          {/* Main Headline */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontSize: '84px',
              color: '#111827',
              textAlign: 'center',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
          >
            <span>게스트하우스 딱, 지금!</span>
          </div>

          {/* Subheadline */}
          <div
            style={{
              display: 'flex',
              fontSize: '42px',
              color: '#FF6B00',
              marginTop: '40px',
              letterSpacing: '-0.02em',
            }}
          >
            게스트하우스 특화 플랫폼
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Pretendard',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  )
}
