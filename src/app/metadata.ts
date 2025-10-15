// src/app/metadata.ts
import { Metadata } from 'next'

export const siteMetadata = {
  title: 'Pololitos',
  description: 'Encuentra profesionales verificados para servicios del hogar en Valdivia. Gasfitería, electricidad, limpieza, reparaciones y más. Pago seguro y garantizado.',
  keywords: [
    'servicios hogar Valdivia',
    'gasfiter Valdivia',
    'electricista Valdivia',
    'reparaciones hogar',
    'limpieza Valdivia',
    'profesionales Valdivia',
    'servicios domésticos',
    'mantenimiento hogar',
    'trabajos hogar Valdivia',
    'pololos servicios'
  ],
  author: 'Pololitos',
  siteUrl: 'https://www.pololitos.cl',
  locale: 'es_CL',
  type: 'website'
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: '%s | Pololitos'
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author }],
  creator: siteMetadata.author,
  publisher: siteMetadata.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: siteMetadata.locale,
    url: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: 'Pololitos',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pololitos'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: ['/assets/twitter-image.jpg'],
    creator: '@pololitos'
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: siteMetadata.siteUrl
  },
  verification: {
    google: 'verification_code_here', // Agregar código de Google Search Console
    // yandex: 'verification_code_here',
    // bing: 'verification_code_here',
  }
}
