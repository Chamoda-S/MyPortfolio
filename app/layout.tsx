import type { Metadata } from 'next'
import { Playfair_Display, Lora, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });
const lora = Lora({ subsets: ["latin"], variable: '--font-sans' });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Chamoda Suraweera | Computer Science & Design',
  description: 'Personal portfolio of Chamoda Suraweera. Computer Science student passionate about design, innovation, and technology.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${lora.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
