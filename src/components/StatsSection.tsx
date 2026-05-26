// src/components/StatsSection.tsx

const stats = [
  { number: '1.000+', label: 'Trabajos publicados' },
  { number: '50+', label: 'Pololeros activos' },
  { number: '4.8★', label: 'Calificación promedio' },
  { number: '100%', label: 'Pagos protegidos' },
]

const StatsSection: React.FC = () => {
  return (
    <section className="bg-brand-blue py-12" aria-label="Estadísticas de Pololitos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-1.5 py-4 border-b-2 border-brand-lime/20 md:border-b-0 md:border-r-2 last:border-0">
              <div className="text-4xl md:text-5xl font-bricolage font-black text-brand-lime">
                {stat.number}
              </div>
              <div className="text-blue-100 font-nunito text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
