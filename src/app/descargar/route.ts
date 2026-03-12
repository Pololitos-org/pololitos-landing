import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function GET(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || ''

  // Enlaces a las tiendas
  const androidLink = 'https://play.google.com/store/apps/details?id=cl.felipeslzar.pololitos'
  const iosLink = 'https://apps.apple.com/cl/app/pololitos/id6746919263'

  // Si es Android, redirigir a Google Play
  if (/android/i.test(userAgent)) {
    return NextResponse.redirect(androidLink)
  }

  // Si es iOS (iPhone, iPad, iPod), redirigir a App Store
  if (/ipad|iphone|ipod/i.test(userAgent)) {
    return NextResponse.redirect(iosLink)
  }

  // Si no se detecta (ej. desde PC), redirigir a la landing page principal
  return NextResponse.redirect(new URL('/', request.url))
}
