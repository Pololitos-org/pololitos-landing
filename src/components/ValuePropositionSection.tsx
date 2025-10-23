// src/components/ValuePropositionSection.tsx
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
        {/* Bloque 1: Para Clientes */}
        <div className="bg-brand-blue text-white py-16 px-8 md:px-12">
          <div className="max-w-lg mx-auto space-y-6">
            <h2 className="text-4xl font-bricolage font-bold">
              Tu proyecto en las mejores manos
            </h2>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-lime rounded-lg flex-shrink-0 flex items-center justify-center">
                  <TbShieldLock className="w-7 h-7 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bricolage font-semibold text-lg mb-1">Seguridad en tus pagos</h3>
                  <p className="text-blue-100">Tu dinero protegido hasta que el trabajo esté completado</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-lime rounded-lg flex-shrink-0 flex items-center justify-center">
                  <TbUserCheck className="w-7 h-7 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bricolage font-semibold text-lg mb-1">Profesionales verificados</h3>
                  <p className="text-blue-100">Todos nuestros pololeros pasan por un proceso de verificación</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-lime rounded-lg flex-shrink-0 flex items-center justify-center">
                  <TbBuildingCommunity className="w-7 h-7 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bricolage font-semibold text-lg mb-1">Apoyo a la comunidad local</h3>
                  <p className="text-blue-100">Conecta con profesionales de tu ciudad</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bloque 2: Para Pololeros */}
        <div className="bg-brand-lime text-brand-blue py-16 px-8 md:px-12">
          <div className="max-w-lg mx-auto space-y-6">
            <h2 className="text-4xl font-bricolage font-bold">
              Sé tu propio jefe. Tu agenda, tus ingresos.
            </h2>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue rounded-lg flex-shrink-0 flex items-center justify-center">
                  <TbClockHour3 className="w-7 h-7 text-brand-lime" />
                </div>
                <div>
                  <h3 className="font-bricolage font-semibold text-lg mb-1">Flexibilidad total</h3>
                  <p className="text-blue-900">Trabaja cuando quieras, donde quieras</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue rounded-lg flex-shrink-0 flex items-center justify-center">
                  <TbTrendingUp className="w-7 h-7 text-brand-lime" />
                </div>
                <div>
                  <h3 className="font-bricolage font-semibold text-lg mb-1">Aumenta tus ingresos</h3>
                  <p className="text-blue-900">Accede a nuevos clientes y proyectos cada día</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue rounded-lg flex-shrink-0 flex items-center justify-center">
                  <TbMapSearch className="w-7 h-7 text-brand-lime" />
                </div>
                <div>
                  <h3 className="font-bricolage font-semibold text-lg mb-1">Encuentra clientes cerca de ti</h3>
                  <p className="text-blue-900">Trabajos en tu zona, sin perder tiempo en traslados</p>
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
