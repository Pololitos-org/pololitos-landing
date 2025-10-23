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

          {/* Visual - Mockup de celular */}
          <div className="relative" role="img" aria-label="App Pololitos en acción">
            {/* Contenedor con decoración de fondo */}
            <div className="relative">
              {/* Círculo decorativo de fondo */}
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-lime/30 to-brand-blue/20 rounded-full blur-3xl"></div>
              
              {/* Línea de vuelo del pololo (decorativa) */}
              <svg 
                className="absolute -top-12 -left-8 w-64 h-64 text-brand-lime opacity-30"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path 
                  d="M20,180 Q50,50 100,100 T180,20" 
                  stroke="currentColor" 
                  strokeWidth="8" 
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="20" cy="180" r="8" fill="currentColor" />
              </svg>

              {/* Mockup del celular */}
              <div className="relative z-10 mx-auto max-w-sm">
                {/* Frame del celular */}
                <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10"></div>
                  
                  {/* Pantalla */}
                  <div className="relative bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                    <Image
                      src="/assets/screenshot_pololitos.png" // Tu screenshot aquí
                      alt="Captura de pantalla de la app Pololitos"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
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
