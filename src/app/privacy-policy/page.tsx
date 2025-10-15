// src/app/privacy-policy/page.tsx
import type { NextPage } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const PrivacyPolicy: NextPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Header showBackButton />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bricolage font-bold text-gray-900 mb-4">Política de Privacidad</h1>

        <p className="text-gray-600 font-nunito mb-12">
          <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-CL')}
        </p>

        <div className="space-y-10 font-nunito">
          <section>
            <h2 className="text-2xl md:text-3xl font-bricolage font-bold text-gray-900 mb-4">1. Información que Recopilamos</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              En Pololos, recopilamos la siguiente información para brindar nuestros servicios:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
              <li>Información de registro (nombre, email, teléfono)</li>
              <li>Información de perfil y preferencias</li>
              <li>Datos de ubicación en Valdivia para conectar servicios locales</li>
              <li>Información de tareas y servicios solicitados</li>
              <li>Datos de comunicación entre usuarios</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bricolage font-bold text-gray-900 mb-4">2. Cómo Utilizamos tu Información</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Utilizamos tu información para:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
              <li>Conectar usuarios con profesionales locales en Valdivia</li>
              <li>Facilitar la comunicación entre las partes</li>
              <li>Procesar pagos y transacciones</li>
              <li>Mejorar nuestros servicios</li>
              <li>Enviar notificaciones importantes sobre tus tareas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bricolage font-bold text-gray-900 mb-4">3. Compartir Información</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Solo compartimos tu información cuando:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
              <li>Es necesario para completar una tarea (información de contacto con el profesional asignado)</li>
              <li>Lo requiere la ley</li>
              <li>Tienes tu consentimiento explícito</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bricolage font-bold text-gray-900 mb-4">4. Seguridad de Datos</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Implementamos medidas de seguridad apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bricolage font-bold text-gray-900 mb-4">5. Tus Derechos</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Tienes derecho a:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
              <li>Acceder a tu información personal</li>
              <li>Corregir datos inexactos</li>
              <li>Solicitar la eliminación de tu cuenta</li>
              <li>Retirar tu consentimiento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bricolage font-bold text-gray-900 mb-4">6. Contacto</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Si tienes preguntas sobre esta política de privacidad, contáctanos en:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
              <li>Email: contacto@pololitos.cl</li>
              <li>Dirección: Valdivia, Chile</li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default PrivacyPolicy
