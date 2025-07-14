// src/app/account-deletion/page.tsx
import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Mail, Clock, Database, Shield } from 'lucide-react'

const AccountDeletion: NextPage = () => {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Eliminación de Cuenta - Pololos</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-gray-600 mb-8">
            <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-CL')}
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <Shield className="h-5 w-5 text-blue-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  En <strong>Pololos</strong>, respetamos tu derecho a controlar tus datos personales. 
                  Si deseas eliminar tu cuenta y los datos asociados, sigue los pasos descritos a continuación.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Mail className="h-6 w-6 text-indigo-600 mr-2" />
              Cómo Solicitar la Eliminación de tu Cuenta
            </h2>
            <p className="mb-4">
              Para solicitar la eliminación de tu cuenta de <strong>Pololos</strong>, sigue estos pasos:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ol className="list-decimal list-inside space-y-3">
                <li className="text-gray-700">
                  <strong>Envía un correo electrónico</strong> a: 
                  <a href="mailto:eliminacion@pololitos.cl" className="text-indigo-600 hover:text-indigo-800 font-medium ml-1">
                    eliminacion@pololitos.cl
                  </a>
                </li>
                <li className="text-gray-700">
                  <strong>Incluye en el asunto:</strong> "Solicitud de Eliminación de Cuenta - Pololos"
                </li>
                <li className="text-gray-700">
                  <strong>En el cuerpo del mensaje incluye:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Tu nombre completo registrado en la aplicación</li>
                    <li>El correo electrónico asociado a tu cuenta</li>
                    <li>Tu número de teléfono (si aplica)</li>
                    <li>Confirmación de que deseas eliminar permanentemente tu cuenta</li>
                  </ul>
                </li>
                <li className="text-gray-700">
                  <strong>Verificación de identidad:</strong> Por seguridad, te enviaremos un código de verificación al correo registrado en tu cuenta
                </li>
                <li className="text-gray-700">
                  <strong>Confirmación final:</strong> Una vez verificada tu identidad, procederemos con la eliminación según los plazos establecidos
                </li>
              </ol>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Database className="h-6 w-6 text-indigo-600 mr-2" />
              Datos que se Eliminan
            </h2>
            <p className="mb-4">
              Al eliminar tu cuenta de <strong>Pololos</strong>, se eliminarán los siguientes datos:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 bg-red-50 p-4 rounded-lg">
              <li>Información de perfil personal (nombre, foto, biografía)</li>
              <li>Datos de contacto (correo electrónico, teléfono)</li>
              <li>Historial de tareas publicadas y completadas</li>
              <li>Mensajes y comunicaciones dentro de la plataforma</li>
              <li>Preferencias y configuraciones de la cuenta</li>
              <li>Datos de ubicación y direcciones guardadas</li>
              <li>Calificaciones y reseñas que hayas dado o recibido</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Clock className="h-6 w-6 text-indigo-600 mr-2" />
              Datos que se Conservan y Períodos de Retención
            </h2>
            <p className="mb-4">
              Por razones legales, de seguridad y operativas, algunos datos se conservarán por períodos específicos:
            </p>
            
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Conservación por 30 días:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Datos de cuenta para permitir reactivación si cambias de opinión</li>
                  <li>Información básica de identificación para prevenir recreación inmediata</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Conservación por 12 meses:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Registros de transacciones financieras (requerido por ley)</li>
                  <li>Datos de facturación y pagos procesados</li>
                  <li>Logs de seguridad relacionados con tu cuenta</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Conservación por 5 años:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Información requerida para cumplimiento fiscal y legal</li>
                  <li>Datos agregados y anonimizados para análisis estadísticos</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Datos que NO se eliminan:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Reseñas y calificaciones públicas (se anonimizan manteniendo el contenido)</li>
                  <li>Contenido en disputas legales activas</li>
                  <li>Información requerida por autoridades competentes</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Plazos de Procesamiento</h2>
            <div className="bg-green-50 p-4 rounded-lg">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Respuesta inicial:</strong> Máximo 48 horas hábiles</li>
                <li><strong>Verificación de identidad:</strong> 2-3 días hábiles</li>
                <li><strong>Eliminación completa:</strong> Hasta 30 días calendario desde la confirmación</li>
                <li><strong>Confirmación final:</strong> Te notificaremos cuando el proceso esté completo</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Importante: Efectos de la Eliminación</h2>
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <p className="text-red-800 font-medium mb-2">⚠️ La eliminación de tu cuenta es irreversible</p>
              <ul className="list-disc list-inside text-red-700 space-y-1">
                <li>Perderás acceso permanente a tu cuenta y todos los datos asociados</li>
                <li>No podrás recuperar historial de trabajos, mensajes o calificaciones</li>
                <li>Si tienes trabajos activos, deberás completarlos antes de la eliminación</li>
                <li>Los pagos pendientes se procesarán según nuestros términos de servicio</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contacto y Soporte</h2>
            <p className="mb-4">
              Si tienes preguntas sobre el proceso de eliminación de cuenta o necesitas asistencia:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li>
                  <strong>Email de eliminación:</strong> 
                  <a href="mailto:eliminacion@pololitos.cl" className="text-indigo-600 hover:text-indigo-800 ml-1">
                    eliminacion@pololitos.cl
                  </a>
                </li>
                <li>
                  <strong>Soporte general:</strong> 
                  <a href="mailto:contacto@pololitos.cl" className="text-indigo-600 hover:text-indigo-800 ml-1">
                    contacto@pololitos.cl
                  </a>
                </li>
                <li><strong>Ubicación:</strong> Valdivia, Chile</li>
                <li><strong>Horario de atención:</strong> Lunes a Viernes, 9:00 - 18:00 CLT</li>
              </ul>
            </div>
          </section>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
            <p className="text-blue-700">
              <strong>Nota:</strong> Este proceso cumple con las regulaciones de protección de datos vigentes en Chile 
              y los requisitos de transparencia de Google Play Store para aplicaciones que manejan datos de usuarios.
            </p>
          </div>
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

export default AccountDeletion