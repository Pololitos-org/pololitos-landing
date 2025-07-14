// src/app/page.tsx
import type { NextPage } from 'next'
import Image from 'next/image'
import { 
  Droplets,
  Sparkles,
  Wrench,
  Leaf,
  Monitor,
  Calendar,
  Search,
  ArrowRight,
  ShieldCheck,
  Users,
  MapPin,
  Edit
} from 'lucide-react'
import Link from 'next/link';

const popularCategories = [
  { id: '1', name: 'Gasfitería', Icon: Droplets },
  { id: '2', name: 'Limpieza', Icon: Sparkles },
  { id: '3', name: 'Reparaciones', Icon: Wrench },
  { id: '4', name: 'Jardinería', Icon: Leaf },
  { id: '5', name: 'Tecnología', Icon: Monitor },
  { id: '6', name: 'Eventos', Icon: Calendar },
];

const steps = [
  {
    title: 'Publica tu tarea',
    description: 'Describe lo que necesitas y establece tu presupuesto',
    Icon: Edit
  },
  {
    title: 'Recibe ofertas',
    description: 'Compara ofertas y elige el mejor profesional',
    Icon: Users
  },
  {
    title: 'Paga seguro',
    description: 'Solo pagas cuando el trabajo esté completado',
    Icon: ShieldCheck
  }
];

const Home: NextPage = () => {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Navigation */}
      <nav className="bg-white shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-3">
              <Image 
                src="/favicon.png" 
                alt="Pololos Logo" 
                width={80}
                height={80}
              />
              <span className="text-2xl font-bold text-indigo-600">Pololos</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Gradient Background */}
      <section className="relative z-10 bg-gradient-to-b from-blue-50 to-white">
        <div className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Publica un Pololo.<br/>Alguien lo hará por ti.
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Conectamos personas que necesitan ayuda con profesionales locales en Valdivia
              </p>
              
              {/* Search Bar */}
              <div className="mt-8 max-w-xl mx-auto">
                <div className="flex items-center px-4 py-3 bg-white rounded-lg shadow-sm">
                  <Search className="h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="¿Qué necesitas hacer?"
                    className="ml-3 block w-full bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-500"
                    readOnly
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mt-10 max-w-4xl mx-auto">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
                  {popularCategories.map((category) => {
                    const IconComponent = category.Icon;
                    return (
                      <div key={category.id} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <IconComponent className="h-8 w-8 text-indigo-600" />
                        <span className="mt-2 text-sm font-medium text-gray-900">{category.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <div className="inline-flex items-center justify-between px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md">
                  <span>Obtener ofertas</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Curved separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="fill-current text-gray-50" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48h1440V0c-211.52 36.186-469.92 48-775.2 48C389.52 48 131.12 36.186 0 0v48z"/>
          </svg>
        </div>
      </section>

      {/* Trust Section with Background */}
      <section className="relative z-10 bg-gray-50 pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">¿Por qué elegirnos?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-blue-50 rounded-full">
                  <ShieldCheck className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Pagos Seguros</h3>
                <p className="mt-2 text-gray-500">Tu dinero está protegido hasta que el trabajo esté completo</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-blue-50 rounded-full">
                  <Users className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Comunidad Local</h3>
                <p className="mt-2 text-gray-500">Red de profesionales de Valdivia trabajando para la comunidad</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-blue-50 rounded-full">
                  <MapPin className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Servicios en Valdivia</h3>
                <p className="mt-2 text-gray-500">Conectamos personas en toda la ciudad para hacer la vida más fácil</p>
              </div>
            </div>
          </div>
        </div>
        {/* Curved separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="fill-current text-white" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48h1440V0c-211.52 36.186-469.92 48-775.2 48C389.52 48 131.12 36.186 0 0v48z"/>
          </svg>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="relative z-10 bg-white pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">¿Cómo funciona?</h2>
          <div className="max-w-3xl mx-auto">
            {steps.map((step, index) => {
              const IconComponent = step.Icon;
              return (
                <div key={index} className="relative flex items-start mb-12 last:mb-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                    <IconComponent className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    <p className="mt-1 text-gray-500">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-12 h-16 w-px bg-indigo-100" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/* Curved separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="fill-current text-indigo-600" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48h1440V0c-211.52 36.186-469.92 48-775.2 48C389.52 48 131.12 36.186 0 0v48z"/>
          </svg>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para comenzar?</h2>
          <p className="text-indigo-100 mb-8">Encuentra el profesional perfecto para tu tarea</p>
          <div className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg">
            Publicar una tarea
          </div>
        </div>
      </section>

      {/* Large Watermark Logo */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-5">
        <svg className="w-96 h-96" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"/>
          <path d="M16 8c0 1.5-2 3-4 3s-4-1.5-4-3 2-3 4-3 4 1.5 4 3zm-4 4c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z"/>
        </svg>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center flex-wrap space-x-6 mb-4">
              <Link 
                href="/privacy-policy" 
                className="text-gray-500 hover:text-indigo-600 transition-colors"
              >
                Política de Privacidad
              </Link>
              <span className="text-gray-300">|</span>
              <Link 
                href="/terms-of-service" 
                className="text-gray-500 hover:text-indigo-600 transition-colors"
              >
                Términos de Servicio
              </Link>
              <span className="text-gray-300">|</span>
              <Link 
                href="/data-management" 
                className="text-gray-500 hover:text-indigo-600 transition-colors"
              >
                Gestión de Datos
              </Link>
            </div>
            <div className="text-gray-500">
              © 2024 Pololos. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default Home