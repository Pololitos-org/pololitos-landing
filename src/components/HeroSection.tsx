// src/components/HeroSection.tsx
import Image from 'next/image'

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative bg-white py-16 md:py-24"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <article className="space-y-6">
            <h1
              id="hero-heading"
              className="text-5xl md:text-6xl font-bricolage font-bold text-gray-900 leading-tight"
            >
              ¿Necesitas un <span itemProp="serviceType">pololito</span>? Lo tenemos.{' '}
              <span className="text-brand-blue">Con garantía y sin rollos.</span>
            </h1>
            <p className="text-xl text-gray-600 font-nunito" itemProp="description">
              Conecta con los mejores <strong>profesionales locales en Valdivia</strong> para resolver cualquier tarea. Todo desde tu celular.
            </p>

            {/* CTAs de descarga */}
            <nav className="flex flex-col sm:flex-row gap-4 pt-4" aria-label="Descargar aplicación">
              <a
                href="#"
                className="hover:opacity-80 transition-opacity w-[200px] h-[60px] focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded-lg"
                aria-label="Descargar Pololitos en App Store"
                rel="noopener"
              >
                <Image
                  src="/assets/app_store.svg"
                  alt="Descargar en App Store"
                  width={200}
                  height={60}
                  className="w-full h-full object-contain"
                  priority
                />
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity w-[200px] h-[60px] focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 rounded-lg"
                aria-label="Descargar Pololitos en Google Play"
                rel="noopener"
              >
                <Image
                  src="/assets/google_play.svg"
                  alt="Disponible en Google Play"
                  width={200}
                  height={60}
                  className="w-full h-full object-contain"
                  priority
                />
              </a>
            </nav>
          </article>

          {/* Visual - Placeholder */}
          <div className="relative" role="img" aria-label="Profesionales de Pololitos brindando servicios">
            <div className="aspect-square bg-gray-300 rounded-3xl flex items-center justify-center">
              <p className="text-gray-500 text-center px-8">
                Imagen: Cliente feliz usando la app + Pololo sonriendo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
