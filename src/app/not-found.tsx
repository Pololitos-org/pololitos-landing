import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#4949E9]/5" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#4949E9]/5" />
      </div>

      <div className="relative z-10 max-w-md w-full text-center flex flex-col items-center">
        {/* Logo */}
        <Link href="/" className="mb-10 inline-block opacity-90 hover:opacity-100 transition-opacity">
          <Image
            src="/assets/LOGOAZUL.svg"
            alt="Pololitos"
            width={160}
            height={48}
            priority
          />
        </Link>

        {/* 404 Number */}
        <div className="relative mb-6 select-none">
          <span
            className="text-[9rem] font-extrabold leading-none tracking-tighter text-transparent"
            style={{
              WebkitTextStroke: "2px #4949E9",
              fontFamily: "var(--font-bricolage)",
            }}
          >
            404
          </span>
        </div>

        {/* Message */}
        <h1
          className="text-2xl font-bold text-gray-900 mb-3"
          style={{ fontFamily: "var(--font-bricolage)" }}
        >
          Ups, esto no está disponible
        </h1>
        <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-sm">
          La página que buscas no existe o fue eliminada.
          Puede que el link esté desactualizado.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Link
            href="/"
            className="flex-1 py-3.5 px-6 bg-[#4949E9] hover:bg-[#3b3bcf] text-white font-semibold rounded-xl transition-colors text-center shadow-sm"
          >
            Volver al inicio
          </Link>
          <Link
            href="/descargar"
            className="flex-1 py-3.5 px-6 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium rounded-xl transition-colors border border-gray-200 text-center"
          >
            Descargar la app
          </Link>
        </div>
      </div>
    </main>
  );
}
