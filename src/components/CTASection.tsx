'use client'
// src/components/CTASection.tsx
import Image from 'next/image'
import { sendGAEvent } from '@next/third-parties/google'

const CTASection: React.FC = () => {
  return (
    <section className="relative bg-brand-blue py-24 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-lime rounded-full opacity-10 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-brand-purple rounded-full opacity-10 pointer-events-none" />
      <div className="absolute top-1/3 right-12 w-10 h-10 bg-brand-lime rounded-full opacity-25 animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 left-20 w-7 h-7 bg-brand-yellow rounded-full opacity-30 animate-float-delayed pointer-events-none" />

      {/* Isotipo de fondo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none" aria-hidden="true">
        <Image src="/assets/ISOTIPO-SOBREAZUL.svg" alt="" width={500} height={500} className="w-[500px] h-[500px]" />
      </div>

      {/* Decorative swoosh */}
      <Image
        src="/assets/decoradores/vuelo2.svg"
        alt=""
        width={260}
        height={260}
        className="absolute top-4 left-4 opacity-10 pointer-events-none select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Speech bubble headline — exactamente como el brandbook */}
        <div className="space-y-4 mb-14">
          <div className="flex justify-center">
            <span className="inline-block bg-white text-brand-blue font-bricolage font-extrabold text-3xl md:text-5xl px-10 py-5 rounded-[3rem] rounded-bl-sm shadow-xl">
              Tu proyecto
            </span>
          </div>
          <div className="flex justify-center">
            <span className="inline-block bg-brand-lime text-brand-blue font-bricolage font-extrabold text-3xl md:text-5xl px-10 py-5 rounded-[3rem] rounded-bl-sm shadow-xl">
              en las mejores manos
            </span>
          </div>
          <div className="flex justify-center">
            <span className="inline-block bg-white text-brand-blue font-bricolage font-extrabold text-3xl md:text-5xl px-10 py-5 rounded-[3rem] rounded-bl-sm shadow-xl">
              ¡Descarga la app!
            </span>
          </div>
        </div>

        {/* App store CTAs */}
        <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
          <a
            href="https://apps.apple.com/cl/app/pololitos/id6746919263"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 opacity-90 hover:opacity-100"
            onClick={() => sendGAEvent('event', 'download_click', { platform: 'ios', section: 'cta' })}
          >
            <Image src="/assets/app_store.svg" alt="Descargar en App Store" width={180} height={58} className="h-[58px] w-auto block" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=cl.felipeslzar.pololitos"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 opacity-90 hover:opacity-100"
            onClick={() => sendGAEvent('event', 'download_click', { platform: 'android', section: 'cta' })}
          >
            <Image src="/assets/google_play.svg" alt="Disponible en Google Play" width={180} height={58} className="h-[58px] w-auto block" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTASection
