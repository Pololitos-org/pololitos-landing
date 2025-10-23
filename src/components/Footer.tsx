// src/components/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/assets/LOGOAZUL.svg"
                alt="Pololitos Logo"
                width={150}
                height={50}
              />
            </div>
            <p className="text-gray-400 font-nunito">
              Conectando personas que necesitan ayuda con profesionales locales.
            </p>
          </div>

          {/* Enlaces legales */}
          <div className="space-y-3">
            <h3 className="font-bricolage font-semibold text-lg mb-4">Legal</h3>
            <Link
              href="/privacy-policy"
              className="block text-gray-400 hover:text-brand-lime transition-colors font-nunito"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terms-of-service"
              className="block text-gray-400 hover:text-brand-lime transition-colors font-nunito"
            >
              Términos de Servicio
            </Link>
            <Link
              href="/data-management"
              className="block text-gray-400 hover:text-brand-lime transition-colors font-nunito"
            >
              Gestión de Datos
            </Link>
          </div>

          {/* Contacto */}
          <div className="space-y-3">
            <h3 className="font-bricolage font-semibold text-lg mb-4">Contacto</h3>
            <p className="text-gray-400 font-nunito">Email: contacto@pololitos.cl</p>
            <p className="text-gray-400 font-nunito">Valdivia, Chile</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 font-nunito">
          <p>© 2025 Pololitos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
