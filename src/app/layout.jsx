import { Syne, Inter, Space_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  alternates: { canonical: '/' },
  title: 'Hillary Chukwuma Prince | Backend Engineer & Cloud Developer',
  description:
    'Backend engineer with 1+ year of production experience in Django, NestJS, and Node.js. Transitioning to cloud infrastructure (AWS). Open to remote roles.',
  keywords: ['backend engineer', 'cloud developer', 'Django', 'NestJS', 'Node.js', 'AWS', 'Nigeria', 'remote developer'],
  authors: [{ name: 'Hillary Chukwuma Prince' }],
  openGraph: {
    title: 'Hillary Chukwuma Prince | Backend Engineer',
    description:
      'Backend engineer transitioning to cloud. Built AI platforms, fintech apps, and ML systems. Open to remote roles.',
    url: '/',
    siteName: 'Hillary Chukwuma Prince',
    images: [{ url: '/hillary.jpg', width: 800, height: 600, alt: 'Hillary Chukwuma Prince' }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hillary Chukwuma Prince | Backend Engineer',
    description: 'Backend engineer transitioning to cloud. Open to remote roles.',
    images: ['/hillary.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Hillary Chukwuma Prince',
  jobTitle: 'Backend Engineer',
  email: 'princehillary813@gmail.com',
  sameAs: [
    'https://github.com/Hillary3000-web',
    'https://linkedin.com/in/chukwuma-hillary-318b09337',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Port Harcourt',
    addressCountry: 'NG',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${syne.variable} ${inter.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
