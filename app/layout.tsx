import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ddakji.kr'),
  alternates: {
    canonical: '/',
  },
  title: '게딱지 - 게스트하우스 딱, 지금!',
  description: '단순한 숙박이 아닌, 사람을 만나는 시작점으로. 지금 바로 게스트하우스를 찾고 예약하세요.',
  keywords: ['게딱지', '게스트하우스', '게스트하우스 어플', '게스트하우스 딱, 지금!', '게하 플랫폼', '제주 게스트하우스', '소규모 게하', '포틀럭 파티', '파티 게하', '국내 여행', '제주도 게스트하우스', 'Ddakji', 'Guesthouse'],
  authors: [{ name: '게딱지(Ddakji)' }],
  creator: '게딱지',
  publisher: '게딱지',
  openGraph: {
    title: '게딱지 - 게스트하우스 딱, 지금!',
    description: '단순한 숙박이 아닌, 사람을 만나는 시작점으로. 지금 바로 게스트하우스를 찾고 예약하세요.',
    url: 'https://ddakji.kr',
    siteName: '게딱지(Ddakji)',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '게딱지 - 게스트하우스 딱, 지금!',
    description: '단순한 숙박이 아닌, 사람을 만나는 시작점으로. 지금 바로 게스트하우스를 찾고 예약하세요.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    other: {
      'naver-site-verification': '339dcc5f74b939065ed47a8c631b70b6733d12b7',
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-icon.svg',
  },
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
