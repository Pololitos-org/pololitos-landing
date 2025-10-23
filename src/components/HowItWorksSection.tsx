// src/components/HowItWorksSection.tsx
import {
  TbFilePencil,
  TbUserSearch,
  TbShieldCheckered
} from 'react-icons/tb'

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bricolage font-bold text-center text-gray-900 mb-16">
          Resolverlo es tan fácil como contar hasta 3
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Paso 1 */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-brand-blue rounded-2xl mx-auto flex items-center justify-center">
                <TbFilePencil className="w-10 h-10 text-brand-lime" />
              </div>
              <h3 className="text-2xl font-bricolage font-bold text-gray-900">
                Publica tu tarea
              </h3>
              <p className="text-gray-600 font-nunito">
                Describe qué necesitas y recibe ofertas de profesionales
              </p>
            </div>

            {/* Paso 2 */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-brand-blue rounded-2xl mx-auto flex items-center justify-center">
                <TbUserSearch className="w-10 h-10 text-brand-lime" />
              </div>
              <h3 className="text-2xl font-bricolage font-bold text-gray-900">
                Elige al mejor pololo
              </h3>
              <p className="text-gray-600 font-nunito">
                Compara perfiles, calificaciones y elige el que más te convenza
              </p>
            </div>

            {/* Paso 3 */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-brand-blue rounded-2xl mx-auto flex items-center justify-center">
                <TbShieldCheckered className="w-10 h-10 text-brand-lime" />
              </div>
              <h3 className="text-2xl font-bricolage font-bold text-gray-900">
                Paga de forma segura
              </h3>
              <p className="text-gray-600 font-nunito">
                El pago se libera solo cuando confirmes que todo quedó perfecto
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
