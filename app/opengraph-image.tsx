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

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#FFFFFF',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img 
          src={logoBase64} 
          style={{ 
            height: '340px', // 화면을 꽉 채울 수 있게 압도적으로 크게!
            objectFit: 'contain',
          }} 
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
