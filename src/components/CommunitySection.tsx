// src/components/CommunitySection.tsx
import { Star } from 'lucide-react'

const CommunitySection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bricolage font-bold text-center text-gray-900 mb-16">
          Conoce a nuestros pololos destacados
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Pololero 1 */}
          <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
            <div className="w-24 h-24 bg-gray-400 rounded-full mx-auto"></div>
            <div className="text-center">
              <h3 className="font-bricolage font-bold text-xl text-gray-900">Javier Díaz</h3>
              <p className="text-brand-blue font-semibold font-nunito">Constructor</p>
              <div className="flex justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
            </div>
          </div>

          {/* Pololero 2 */}
          <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
            <div className="w-24 h-24 bg-gray-400 rounded-full mx-auto"></div>
            <div className="text-center">
              <h3 className="font-bricolage font-bold text-xl text-gray-900">María González</h3>
              <p className="text-brand-blue font-semibold font-nunito">Electricista</p>
              <div className="flex justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
            </div>
          </div>

          {/* Pololero 3 */}
          <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
            <div className="w-24 h-24 bg-gray-400 rounded-full mx-auto"></div>
            <div className="text-center">
              <h3 className="font-bricolage font-bold text-xl text-gray-900">Carlos Muñoz</h3>
              <p className="text-brand-blue font-semibold font-nunito">Gasfiter</p>
              <div className="flex justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonios */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Testimonio 1 */}
          <div className="bg-brand-lime p-6 rounded-2xl relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-brand-yellow rounded-full"></div>
            <p className="text-gray-900 mb-4 font-nunito">
              "Excelente servicio. El gasfiter llegó puntual y resolvió el problema rápidamente. ¡100% recomendado!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
              <div>
                <p className="font-bricolage font-semibold text-gray-900">Ana Torres</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonio 2 */}
          <div className="bg-brand-lime p-6 rounded-2xl relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-brand-yellow rounded-full"></div>
            <p className="text-gray-900 mb-4 font-nunito">
              "Me ayudaron con la mudanza y fueron super cuidadosos con mis cosas. La plataforma es muy fácil de usar."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
              <div>
                <p className="font-bricolage font-semibold text-gray-900">Roberto Silva</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunitySection
