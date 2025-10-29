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
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pololitos - Servicios del hogar en Valdivia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: ['/twitter-image.png'],
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
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        url: '/favicon.svg'
      }
    ]
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: siteMetadata.siteUrl
  },
  appleWebApp: {
    capable: true,
    title: 'Pololitos',
    statusBarStyle: 'default'
  }
}