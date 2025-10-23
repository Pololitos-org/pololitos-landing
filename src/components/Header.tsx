// src/components/Header.tsx
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

interface HeaderProps {
  showBackButton?: boolean
}

const Header: React.FC<HeaderProps> = ({ showBackButton = false }) => {
  return (
    <nav className="bg-white shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/assets/ISOTIPO-SOBREAZUL.svg"
              alt="Pololitos Logo"
              width={50}
              height={50}
            />
            <span className="text-2xl font-bricolage font-bold text-brand-blue">Pololitos</span>
          </Link>
          {showBackButton && (
            <Link
              href="/"
              className="flex items-center text-gray-600 hover:text-brand-blue transition-colors font-nunito"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
