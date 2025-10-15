// src/app/terms-of-service/page.tsx
import type { NextPage } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const TermsOfService: NextPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Header showBackButton />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bricolage font-bold text-gray-900 mb-4">Términos de Servicio</h1>

        <p className="text-gray-600 font-nunito mb-12">
          <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-CL')}
        </p>

        <div className="space-y-10 font-nunito">
          <section>
            <h2 className="text-2xl md:text-3xl font-bricolage font-bold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Al utilizar Pololos, aceptas estar sujeto a estos términos de servicio. Si no estás de acuerdo con alguna parte de estos términos, no debes usar nuestro servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bricolage font-bold text-gray-900 mb-4">2. Descripción del Servicio</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Pololos es una plataforma que conecta personas que necesitan servicios con profesionales locales en Valdivia, Chile. Facilitamos la comunicación y el pago, pero no somos empleadores ni empleados de ninguna de las partes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bricolage font-bold text-gray-900 mb-4">3. Registro y Cuenta</h2>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
              <li>Debes ser mayor de 18 años para usar nuestros servicios</li>
              <li>Debes proporcionar información precisa y actualizada</li>
              <li>Eres responsable de mantener la seguridad de tu cuenta</li>
              <li>Una persona o entidad puede tener solo una cuenta</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bricolage font-bold text-gray-900 mb-4">4. Responsabilidades del Usuario</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Como usuario de Pololos, te comprometes a:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
              <li>Usar el servicio de manera legal y ética</li>
              <li>Proporcionar descripciones precisas de las tareas</li>
              <li>Tratar a otros usuarios con respeto</li>
              <li>Pagar por los servicios completados según lo acordado</li>
              <li>No usar la plataforma para actividades ilegales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bricolage font-bold text-gray-900 mb-4">5. Responsabilidades del Prestador de Servicios</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Los prestadores de servicios se comprometen a:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
              <li>Completar las tareas según lo acordado</li>
              <li>Mantener estándares profesionales de calidad</li>
              <li>Comunicarse de manera clara y oportuna</li>
              <li>Cumplir con todas las leyes y regulaciones aplicables</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bricolage font-bold text-gray-900 mb-4">6. Pagos y Tarifas</h2>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
              <li>Los pagos se procesan de manera segura a través de nuestra plataforma</li>
              <li>Pololos cobra una comisión por cada transacción completada</li>
              <li>Los reembolsos se manejan caso por caso</li>
              <li>Los precios son establecidos por los prestadores de servicios</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bricolage font-bold text-gray-900 mb-4">7. Limitación de Responsabilidad</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Pololos actúa como intermediario. No somos responsables por:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
              <li>La calidad del trabajo realizado</li>
              <li>Daños o lesiones durante la prestación del servicio</li>
              <li>Disputas entre usuarios</li>
              <li>Contenido generado por usuarios</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bricolage font-bold text-gray-900 mb-4">8. Resolución de Disputas</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              En caso de disputas, recomendamos primero intentar resolver directamente entre las partes. Si esto no es posible, Pololos puede mediar, pero no garantizamos una resolución específica.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bricolage font-bold text-gray-900 mb-4">9. Modificaciones</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios importantes serán notificados a los usuarios con al menos 30 días de anticipación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bricolage font-bold text-gray-900 mb-4">10. Contacto</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Si tienes preguntas sobre estos términos, contáctanos en:
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

export default TermsOfService
