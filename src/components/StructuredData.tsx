// src/components/StructuredData.tsx
import { siteMetadata } from '@/app/metadata'

export const OrganizationSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pololitos',
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    logo: `${siteMetadata.siteUrl}/assets/LOGOAZUL.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contacto@pololitos.cl',
      contactType: 'Customer Service',
      areaServed: 'CL',
      availableLanguage: 'Spanish'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Valdivia',
      addressCountry: 'CL'
    },
    sameAs: [
      // Agregar links de redes sociales cuando estén disponibles
      // 'https://www.facebook.com/pololitos',
      // 'https://www.instagram.com/pololitos',
      // 'https://www.twitter.com/pololitos'
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const LocalBusinessSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': siteMetadata.siteUrl,
    name: 'Pololitos',
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    telephone: '+56-x-xxxx-xxxx', // Agregar teléfono real
    email: 'contacto@pololitos.cl',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Valdivia',
      addressRegion: 'Los Ríos',
      addressCountry: 'CL'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -39.8142,
      longitude: -73.2459
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '09:00',
      closes: '18:00'
    },
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: 'Valdivia'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const WebSiteSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pololitos',
    url: siteMetadata.siteUrl,
    description: siteMetadata.description,
    inLanguage: 'es-CL',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteMetadata.siteUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const ServiceSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Servicios del Hogar',
    provider: {
      '@type': 'Organization',
      name: 'Pololitos'
    },
    areaServed: {
      '@type': 'City',
      name: 'Valdivia',
      '@id': 'https://www.wikidata.org/wiki/Q1911'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios del Hogar',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gasfitería',
            description: 'Servicios profesionales de gasfitería en Valdivia'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Electricidad',
            description: 'Servicios profesionales de electricidad en Valdivia'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Limpieza',
            description: 'Servicios profesionales de limpieza en Valdivia'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Reparaciones',
            description: 'Servicios profesionales de reparaciones en Valdivia'
          }
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const MobileAppSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Pololitos',
    operatingSystem: ['iOS', 'Android'],
    applicationCategory: 'LifestyleApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CLP'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
