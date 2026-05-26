// src/components/HowItWorksSection.tsx
import { TbFilePencil, TbUserSearch, TbShieldCheckered } from 'react-icons/tb'

const steps = [
  {
    Icon: TbFilePencil,
    title: 'Publica tu tarea',
    desc: 'Describe qué necesitas y recibe ofertas de profesionales',
  },
  {
    Icon: TbUserSearch,
    title: 'Elige la mejor oferta',
    desc: 'Compara perfiles, calificaciones y elige el trabajador que más te convenza',
  },
  {
    Icon: TbShieldCheckered,
    title: 'Paga de forma segura',
    desc: 'El pago se libera solo cuando confirmes que todo quedó perfecto',
  },
]

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lime opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue opacity-5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bricolage font-bold text-gray-900 mb-5">
            Resolverlo es tan fácil como contar hasta 3
          </h2>
          {/* Accent underline */}
          <div className="w-24 h-1.5 bg-brand-lime mx-auto rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 relative">

            {/* Desktop connecting line */}
            <div
              className="hidden md:block absolute top-10 h-0.5 bg-gradient-to-r from-brand-lime via-brand-blue to-brand-lime opacity-25 z-0"
              style={{ left: '22%', right: '22%' }}
            />

            {steps.map((step, i) => (
              <div key={i} className="relative text-center space-y-5 z-10">
                {/* Icon with step badge */}
                <div className="relative inline-block">
                  <div className="w-20 h-20 bg-brand-blue rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                    <step.Icon className="w-10 h-10 text-brand-lime" />
                  </div>
                  {/* Step number bubble */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-lime rounded-full flex items-center justify-center shadow-md">
                    <span className="text-brand-blue font-bricolage font-black text-sm leading-none">
                      {i + 1}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bricolage font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 font-nunito leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
