// src/components/CTASection.tsx
import Image from 'next/image'

const CTASection: React.FC = () => {
  return (
    <section className="relative bg-brand-blue py-20 overflow-hidden">
      {/* Isotipo de fondo con baja opacidad */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <Image
          src="/assets/ISOTIPO-SOBREAZUL.svg"
          alt="Pololitos Isotipo"
          width={384}
          height={384}
          className="w-96 h-96"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bricolage font-bold text-white mb-6">
          ¿Listo/a para probar pololitos?
        </h2>
        <p className="text-xl text-blue-100 mb-12 font-nunito">
          La solución está en la palma de tu mano.
        </p>

        {/* CTAs grandes */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://apps.apple.com/cl/app/pololitos/id6746919263"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity h-[60px] md:h-[68px] w-auto"
          >
            <Image
              src="/assets/app_store.svg"
              alt="Descargar en App Store"
              width={200}
              height={68}
              className="h-full w-auto object-contain"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=cl.felipeslzar.pololitos"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity h-14 md:h-16 w-auto"
          >
            <Image
              src="/assets/google_play.svg"
              alt="Disponible en Google Play"
              width={200}
              height={64}
              className="h-full w-auto object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTASection
