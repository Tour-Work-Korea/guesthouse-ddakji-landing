import React from 'react'
import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

export const runtime = 'nodejs'

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'images', 'logo.png')
  const logoData = fs.readFileSync(filePath)
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    React.createElement(
      'div',
      {
        style: {
          backgroundColor: '#FFFFFF',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
      React.createElement('img', {
        src: logoBase64,
        alt: '게딱지 - 게스트하우스 딱, 지금!',
        style: {
          height: '340px',
          objectFit: 'contain',
        },
      }),
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
