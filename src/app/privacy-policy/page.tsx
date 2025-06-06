// src/app/privacy-policy/page.tsx
import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

const PrivacyPolicy: NextPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
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
            <Link 
              href="/"
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-gray-600 mb-8">
            <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-CL')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Información que Recopilamos</h2>
            <p className="mb-4">
              En Pololos, recopilamos la siguiente información para brindar nuestros servicios:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Información de registro (nombre, email, teléfono)</li>
              <li>Información de perfil y preferencias</li>
              <li>Datos de ubicación en Valdivia para conectar servicios locales</li>
              <li>Información de tareas y servicios solicitados</li>
              <li>Datos de comunicación entre usuarios</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Cómo Utilizamos tu Información</h2>
            <p className="mb-4">
              Utilizamos tu información para:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Conectar usuarios con profesionales locales en Valdivia</li>
              <li>Facilitar la comunicación entre las partes</li>
              <li>Procesar pagos y transacciones</li>
              <li>Mejorar nuestros servicios</li>
              <li>Enviar notificaciones importantes sobre tus tareas</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Compartir Información</h2>
            <p className="mb-4">
              Solo compartimos tu información cuando:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Es necesario para completar una tarea (información de contacto con el profesional asignado)</li>
              <li>Lo requiere la ley</li>
              <li>Tienes tu consentimiento explícito</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Seguridad de Datos</h2>
            <p className="mb-4">
              Implementamos medidas de seguridad apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Tus Derechos</h2>
            <p className="mb-4">
              Tienes derecho a:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Acceder a tu información personal</li>
              <li>Corregir datos inexactos</li>
              <li>Solicitar la eliminación de tu cuenta</li>
              <li>Retirar tu consentimiento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contacto</h2>
            <p className="mb-4">
              Si tienes preguntas sobre esta política de privacidad, contáctanos en:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Email: contacto@pololitos.cl</li>
              <li>Dirección: Valdivia, Chile</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500">
            © 2024 Pololos. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  )
}

export default PrivacyPolicy