import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '오토앤써 - N사 지식 답변 마케팅 자동화 솔루션',
  description: '100% 자동 답변 시스템으로 24시간 마케팅을 자동화하세요. 네이버 지식인에서 AI가 생성한 자연스러운 답변을 자동으로 등록하여 마케팅 효과를 극대화합니다.',
  keywords: [
    'auto answer',
    '지식인 자동답변',
    '네이버 지식인',
    '마케팅 자동화',
    'AI 답변',
    '자동 답변 시스템',
    '지식인 마케팅',
    '키워드 타겟팅',
    '실시간 모니터링',
    '캡차 우회',
    '클라우드 자동화',
    'N사 지식 답변',
    '자동화 솔루션',
    '마케팅 효율성',
    '24시간 자동 운영'
  ],
  authors: [{ name: 'auto answer' }],
  creator: 'auto answer',
  publisher: 'auto answer',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://auto-answer.fot.kr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '오토앤써 - N사 지식 답변 마케팅 자동화 솔루션',
    description: '100% 자동 답변 시스템으로 24시간 마케팅을 자동화하세요. 네이버 지식인에서 AI가 생성한 자연스러운 답변을 자동으로 등록하여 마케팅 효과를 극대화합니다.',
    url: 'https://auto-answer.fot.kr',
    siteName: '오토앤써',
          images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: '오토앤써 - N사 지식 답변 마케팅 자동화 솔루션',
        },
      ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '오토앤써 - N사 지식 답변 마케팅 자동화 솔루션',
    description: '100% 자동 답변 시스템으로 24시간 마케팅을 자동화하세요.',
    images: ['/og-image.jpg'],
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
    google: 'omXjnlK7pQBakbq-sE2d9Gga56UVD3lwqnbm-HE_5Uw',
    other: {
      'naver-site-verification': '17964337c3d1d6b107a7924120c88c7126c0e732',
      'msvalidate.01': '75C0A176C3DFBC03357C823EA1553838',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: '오토앤써',
    description: 'N사 지식 답변 마케팅 자동화 솔루션. 100% 자동 답변 시스템으로 24시간 마케팅을 자동화합니다.',
    url: 'https://auto-answer.fot.kr',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '39900',
      priceCurrency: 'KRW',
      priceValidUntil: '2025-12-31',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Organization',
      name: '오토앤써',
      url: 'https://auto-answer.fot.kr',
    },
    publisher: {
      '@type': 'Organization',
      name: '오토앤써',
      logo: {
        '@type': 'ImageObject',
        url: 'https://auto-answer.fot.kr/logo.png',
      },
    },
    featureList: [
      '스마트 키워드 타겟팅',
      'AI 기반 자연스러운 답변',
      '실시간 모니터링',
      '100% 자동 운영',
      '캡차 우회 및 보안 처리',
      '클라우드 원격 서비스'
    ],
  }

  return (
    <html lang="ko">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "t1zver4m7f");
            `,
          }}
        />
        <meta name="theme-color" content="#2Db400" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="오토앤써" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2Db400" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2Db400" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
