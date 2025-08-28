import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bridgflow - Make, N8N 커스텀 API 서비스',
  description: 'Make, N8N 등에서 공식 지원하지 않는 API들을 커스텀으로 제작해드리는 서비스',
  other: {
    'naver-site-verification': 'e3e7b583792b1b01ea790ba5e919ffe610952d4e',
    'google-site-verification': 'bHWUYxiGngVMBF5WXBDv3Z4E39r24mgKwkOMlB_ILug',
    'msvalidate.01': '75C0A176C3DFBC03357C823EA1553838',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "t0nwz0x5fl");
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
