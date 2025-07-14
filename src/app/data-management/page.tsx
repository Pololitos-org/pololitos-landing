// src/app/data-management/page.tsx
import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowLeft, 
  Mail, 
  Clock, 
  Database, 
  Shield, 
  Download, 
  Settings, 
  UserX, 
  Trash2,
  AlertTriangle 
} from 'lucide-react'

const DataManagement: NextPage = () => {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Gestión de Datos y Cuenta - Pololos</h1>
        
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
                  En <strong>Pololos</strong>, tienes control total sobre tus datos personales. 
                  Aquí puedes gestionar qué información eliminar, descargar tus datos o cerrar tu cuenta completamente.
                </p>
              </div>
            </div>
          </div>

          {/* Options Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">¿Qué deseas hacer?</h2>
            <div className="grid gap-6 md:grid-cols-3">
              
              {/* Option 1: Delete Specific Data */}
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Trash2 className="h-6 w-6 text-yellow-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Eliminar Datos Específicos</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Borra información específica manteniendo tu cuenta activa
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Historial de tareas</li>
                  <li>• Mensajes y chats</li>
                  <li>• Fotos de perfil</li>
                  <li>• Direcciones guardadas</li>
                </ul>
              </div>

              {/* Option 2: Download Data */}
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Download className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Descargar Mis Datos</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Obtén una copia de toda tu información personal
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Perfil completo</li>
                  <li>• Historial de actividad</li>
                  <li>• Mensajes</li>
                  <li>• Configuraciones</li>
                </ul>
              </div>

              {/* Option 3: Delete Account */}
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <UserX className="h-6 w-6 text-red-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Eliminar Cuenta Completa</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Cierra tu cuenta y elimina todos los datos asociados
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Proceso irreversible</li>
                  <li>• Elimina toda la información</li>
                  <li>• Cierre definitivo</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Detailed Instructions */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Mail className="h-6 w-6 text-indigo-600 mr-2" />
              Cómo Solicitar Gestión de Datos
            </h2>
            <p className="mb-4">
              Para cualquier solicitud relacionada con tus datos en <strong>Pololos</strong>, sigue estos pasos:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ol className="list-decimal list-inside space-y-3">
                <li className="text-gray-700">
                  <strong>Envía un correo electrónico</strong> a: 
                  <a href="mailto:datos@pololitos.cl" className="text-indigo-600 hover:text-indigo-800 font-medium ml-1">
                    datos@pololitos.cl
                  </a>
                </li>
                <li className="text-gray-700">
                  <strong>Especifica en el asunto</strong> qué tipo de solicitud realizas:
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm">
                    <li>Eliminar Datos Específicos - Pololos</li>
                    <li>Descargar Mis Datos - Pololos</li>
                    <li>Eliminar Cuenta Completa - Pololos</li>
                  </ul>
                </li>
                <li className="text-gray-700">
                  <strong>Incluye la siguiente información:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Tu nombre completo registrado en la aplicación</li>
                    <li>El correo electrónico asociado a tu cuenta</li>
                    <li>Tu número de teléfono (si aplica)</li>
                    <li>Detalles específicos de tu solicitud</li>
                  </ul>
                </li>
                <li className="text-gray-700">
                  <strong>Verificación de identidad:</strong> Te enviaremos un código de verificación para confirmar tu identidad
                </li>
              </ol>
            </div>
          </section>

          {/* Specific Data Deletion */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Trash2 className="h-6 w-6 text-indigo-600 mr-2" />
              Eliminación de Datos Específicos
            </h2>
            <p className="mb-4">
              Puedes solicitar la eliminación de datos específicos sin cerrar tu cuenta:
            </p>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Datos de Perfil:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Foto de perfil</li>
                  <li>Biografía personal</li>
                  <li>Preferencias guardadas</li>
                  <li>Configuraciones personalizadas</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Historial de Actividad:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Tareas publicadas anteriores</li>
                  <li>Trabajos completados</li>
                  <li>Historial de búsquedas</li>
                  <li>Actividad en la plataforma</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Comunicaciones:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Mensajes con otros usuarios</li>
                  <li>Conversaciones de tareas</li>
                  <li>Notificaciones guardadas</li>
                  <li>Historial de comunicaciones</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Datos de Ubicación:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Direcciones guardadas</li>
                  <li>Historial de ubicaciones</li>
                  <li>Zonas de servicio preferidas</li>
                  <li>Datos de geolocalización</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-4">
              <p className="text-green-800 text-sm">
                ✅ <strong>Tu cuenta permanecerá activa</strong> y podrás seguir utilizando Pololos normalmente después de eliminar estos datos específicos.
              </p>
            </div>
          </section>

          {/* Data Download */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Download className="h-6 w-6 text-indigo-600 mr-2" />
              Descarga de Datos Personales
            </h2>
            <p className="mb-4">
              Tienes derecho a obtener una copia de todos tus datos personales almacenados en Pololos:
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-gray-900 mb-2">El archivo incluirá:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Información de perfil completa</li>
                <li>Historial de todas las tareas y trabajos</li>
                <li>Mensajes y comunicaciones</li>
                <li>Calificaciones y reseñas</li>
                <li>Configuraciones y preferencias</li>
                <li>Datos de facturación y pagos</li>
                <li>Registros de actividad</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <p className="text-blue-800 text-sm">
                📄 <strong>Formato:</strong> Recibirás tus datos en formato JSON legible, junto con un resumen en PDF.
                <br />
                ⏱️ <strong>Tiempo de entrega:</strong> Máximo 7 días hábiles desde la solicitud.
              </p>
            </div>
          </section>

          {/* Complete Account Deletion */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <UserX className="h-6 w-6 text-indigo-600 mr-2" />
              Eliminación Completa de Cuenta
            </h2>
            
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
              <div className="flex items-center mb-2">
                <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                <p className="text-red-800 font-medium">⚠️ Proceso Irreversible</p>
              </div>
              <p className="text-red-700 text-sm">
                La eliminación completa de cuenta no se puede deshacer. Asegúrate de descargar tus datos importantes antes de proceder.
              </p>
            </div>

            <p className="mb-4">
              Al eliminar tu cuenta completa de <strong>Pololos</strong>, se eliminarán los siguientes datos:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 bg-red-50 p-4 rounded-lg">
              <li>Información de perfil personal (nombre, foto, biografía)</li>
              <li>Datos de contacto (correo electrónico, teléfono)</li>
              <li>Historial completo de tareas publicadas y completadas</li>
              <li>Todos los mensajes y comunicaciones</li>
              <li>Preferencias y configuraciones de la cuenta</li>
              <li>Datos de ubicación y direcciones guardadas</li>
              <li>Calificaciones y reseñas que hayas dado o recibido</li>
              <li>Acceso permanente a la plataforma</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Antes de eliminar tu cuenta:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>Completa todos los trabajos activos</li>
                <li>Resuelve cualquier disputa pendiente</li>
                <li>Descarga tus datos si los necesitas</li>
                <li>Asegúrate de no tener pagos pendientes</li>
              </ul>
            </div>
          </section>

          {/* Data Retention */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Clock className="h-6 w-6 text-indigo-600 mr-2" />
              Períodos de Retención de Datos
            </h2>
            <p className="mb-4">
              Algunos datos se conservan por períodos específicos según la normativa legal vigente:
            </p>
            
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Conservación por 30 días:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Datos de cuenta para permitir reactivación (solo eliminación completa)</li>
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

          {/* Processing Times */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Plazos de Procesamiento</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Eliminación de Datos Específicos:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li><strong>Respuesta:</strong> 24-48 horas</li>
                  <li><strong>Procesamiento:</strong> 3-5 días hábiles</li>
                  <li><strong>Confirmación:</strong> Inmediata</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Descarga de Datos:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li><strong>Respuesta:</strong> 24 horas</li>
                  <li><strong>Preparación:</strong> 3-7 días hábiles</li>
                  <li><strong>Entrega:</strong> Por email seguro</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Eliminación Completa:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li><strong>Respuesta:</strong> 48 horas</li>
                  <li><strong>Verificación:</strong> 2-3 días</li>
                  <li><strong>Eliminación:</strong> Hasta 30 días</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contacto y Soporte</h2>
            <p className="mb-4">
              Para cualquier consulta sobre gestión de datos o tu cuenta:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="space-y-2">
                <li>
                  <strong>Gestión de datos:</strong> 
                  <a href="mailto:datos@pololitos.cl" className="text-indigo-600 hover:text-indigo-800 ml-1">
                    datos@pololitos.cl
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
              <strong>Nota:</strong> Este proceso cumple con las regulaciones de protección de datos vigentes en Chile, 
              GDPR y los requisitos de transparencia de Google Play Store para aplicaciones que manejan datos de usuarios.
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

export default DataManagement