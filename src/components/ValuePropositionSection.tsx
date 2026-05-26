// src/components/ValuePropositionSection.tsx
import Image from 'next/image'
import {
  TbShieldLock,
  TbUserCheck,
  TbBuildingCommunity,
  TbClockHour3,
  TbTrendingUp,
  TbMapSearch
} from 'react-icons/tb'

const ValuePropositionSection: React.FC = () => {
  return (
    <section className="relative">
      <div className="grid md:grid-cols-2">

        {/* Bloque Para Clientes — azul */}
        <div className="relative bg-brand-blue text-white py-16 px-8 md:px-12 overflow-hidden">
          {/* Decorative isotipo corner */}
          <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none" aria-hidden="true">
            <Image src="/assets/ISOTIPO-SOBREAZUL.svg" alt="" width={160} height={160} />
          </div>

          <div className="relative z-10 max-w-lg mx-auto space-y-6">
            {/* Speech bubble heading */}
            <div className="inline-block bg-brand-lime text-brand-blue font-bricolage font-extrabold text-3xl md:text-4xl px-7 py-4 rounded-[2.5rem] rounded-bl-sm shadow-lg leading-tight">
              Tu proyecto en las mejores manos
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-lime rounded-lg flex-shrink-0 flex items-center justify-center">
                  <TbShieldLock className="w-7 h-7 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bricolage font-semibold text-lg mb-1">Seguridad en tus pagos</h3>
                  <p className="text-blue-100 font-nunito">Tu dinero protegido hasta que el trabajo esté completado</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-lime rounded-lg flex-shrink-0 flex items-center justify-center">
                  <TbUserCheck className="w-7 h-7 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bricolage font-semibold text-lg mb-1">Profesionales verificados</h3>
                  <p className="text-blue-100 font-nunito">Todos nuestros pololeros pasan por un proceso de verificación</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-lime rounded-lg flex-shrink-0 flex items-center justify-center">
                  <TbBuildingCommunity className="w-7 h-7 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bricolage font-semibold text-lg mb-1">Apoyo a la comunidad local</h3>
                  <p className="text-blue-100 font-nunito">Conecta con profesionales de tu ciudad</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bloque Para Pololeros — lima */}
        <div className="relative bg-brand-lime text-brand-blue py-16 px-8 md:px-12 overflow-hidden">
          {/* Decorative circle */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue rounded-full opacity-8 pointer-events-none" />

          <div className="relative z-10 max-w-lg mx-auto space-y-6">
            {/* Speech bubble heading */}
            <div className="inline-block bg-brand-blue text-white font-bricolage font-extrabold text-3xl md:text-4xl px-7 py-4 rounded-[2.5rem] rounded-bl-sm shadow-lg leading-tight">
              Sé tu propio jefe. Tu agenda, tus ingresos.
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue rounded-lg flex-shrink-0 flex items-center justify-center">
                  <TbClockHour3 className="w-7 h-7 text-brand-lime" />
                </div>
                <div>
                  <h3 className="font-bricolage font-semibold text-lg mb-1">Flexibilidad total</h3>
                  <p className="text-blue-900 font-nunito">Trabaja cuando quieras, donde quieras</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue rounded-lg flex-shrink-0 flex items-center justify-center">
                  <TbTrendingUp className="w-7 h-7 text-brand-lime" />
                </div>
                <div>
                  <h3 className="font-bricolage font-semibold text-lg mb-1">Aumenta tus ingresos</h3>
                  <p className="text-blue-900 font-nunito">Accede a nuevos clientes y proyectos cada día</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue rounded-lg flex-shrink-0 flex items-center justify-center">
                  <TbMapSearch className="w-7 h-7 text-brand-lime" />
                </div>
                <div>
                  <h3 className="font-bricolage font-semibold text-lg mb-1">Encuentra clientes cerca de ti</h3>
                  <p className="text-blue-900 font-nunito">Trabajos en tu zona, sin perder tiempo en traslados</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ValuePropositionSection
