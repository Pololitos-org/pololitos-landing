'use client'
// src/components/HeroSection.tsx
import Image from 'next/image'
import { sendGAEvent } from '@next/third-parties/google'

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden" aria-labelledby="hero-heading">

      {/* Background blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-lime opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-brand-blue opacity-5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative swoosh */}
      <Image
        src="/assets/decoradores/vuelo1.svg"
        alt=""
        width={280}
        height={280}
        className="absolute top-4 left-1/3 opacity-10 animate-float-slow pointer-events-none select-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Contenido — en mobile va debajo del video */}
          <article className="space-y-7 order-2 md:order-1">

            {/* Speech-bubble headline — estilo brandbook */}
            <div className="space-y-3">
              <div>
                <span
                  id="hero-heading"
                  className="inline-block bg-brand-blue text-white font-bricolage font-extrabold text-3xl md:text-4xl xl:text-5xl px-8 py-4 rounded-[2.5rem] rounded-bl-sm leading-tight shadow-lg"
                >
                  ¿Necesitas un pololito?
                </span>
              </div>
              <div className="ml-6">
                <span className="inline-block bg-brand-lime text-brand-blue font-bricolage font-extrabold text-3xl md:text-4xl xl:text-5xl px-8 py-4 rounded-[2.5rem] rounded-bl-sm leading-tight shadow-lg">
                  Lo tenemos.
                </span>
              </div>
              <div>
                <span className="inline-block bg-brand-blue text-white font-bricolage font-extrabold text-2xl md:text-3xl xl:text-4xl px-8 py-4 rounded-[2.5rem] rounded-bl-sm leading-tight shadow-lg">
                  Con garantía y sin rollos.
                </span>
              </div>
            </div>

            <p className="text-xl text-gray-600 font-nunito" itemProp="description">
              Conecta con los mejores <strong>profesionales locales en Valdivia</strong> para
              resolver cualquier tarea. Todo desde tu celular.
            </p>

            {/* CTAs descarga */}
            <nav className="flex flex-row flex-wrap gap-3 pt-2" aria-label="Descargar aplicación">
              <a
                href="https://apps.apple.com/cl/app/pololitos/id6746919263"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                aria-label="Descargar Pololitos en App Store"
                onClick={() => sendGAEvent('event', 'download_click', { platform: 'ios', section: 'hero' })}
              >
                <Image src="/assets/app_store.svg" alt="Descargar en App Store" width={160} height={52} className="h-[52px] w-auto block" priority />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=cl.felipeslzar.pololitos"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                aria-label="Descargar Pololitos en Google Play"
                onClick={() => sendGAEvent('event', 'download_click', { platform: 'android', section: 'hero' })}
              >
                <Image src="/assets/google_play.svg" alt="Disponible en Google Play" width={160} height={52} className="h-[52px] w-auto block" priority />
              </a>
            </nav>
          </article>

          {/* Visual — en mobile va primero */}
          <div className="relative order-1 md:order-2" role="img" aria-label="App Pololitos en acción">
            {/* Floating circles */}
            <div className="absolute -top-6 -right-2 w-16 h-16 bg-brand-lime rounded-full opacity-60 animate-float pointer-events-none" />
            <div className="absolute top-1/3 -left-4 w-10 h-10 bg-brand-blue rounded-full opacity-20 animate-float-delayed pointer-events-none" />
            <div className="absolute -bottom-4 right-1/4 w-14 h-14 bg-brand-purple rounded-full opacity-30 animate-float-slow pointer-events-none" />
            <div className="absolute bottom-1/3 -right-6 w-8 h-8 bg-brand-yellow rounded-full opacity-50 animate-float pointer-events-none" />

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-lime/25 to-brand-blue/15 rounded-full blur-3xl pointer-events-none" />

              {/* Decorative swoosh */}
              <Image
                src="/assets/decoradores/vuelo2.svg"
                alt=""
                width={220}
                height={220}
                className="absolute -top-14 -left-10 opacity-20 pointer-events-none select-none"
                aria-hidden="true"
              />

              {/* Phone frame */}
              <div className="relative z-10 mx-auto" style={{ width: '300px' }}>
                <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  {/* Dynamic island */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-950 rounded-full z-10" />
                  <div className="relative bg-white rounded-[2.5rem] overflow-hidden" style={{ height: '580px' }}>
                    <iframe
                      src="https://www.instagram.com/p/DYk1_RQK1na/embed"
                      className="w-full h-full border-0"
                      frameBorder={0}
                      scrolling="no"
                      allowTransparency={true}
                      allow="encrypted-media"
                      title="Instagram Reel Pololitos"
                    />
                  </div>
                  <div className="mt-2 mx-auto w-20 h-1 bg-gray-600 rounded-full" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
