"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

export default function UserRedirectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = `pololitos://users/${id}`;
    }, 100);
    return () => clearTimeout(timeout);
  }, [id]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-[#FAFAFA]">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-sm border border-gray-100 p-8 text-center flex flex-col items-center">
        <div className="w-24 h-24 mb-6">
          <Image
            src="/favicon.svg"
            alt="Pololitos"
            width={96}
            height={96}
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Redirigiendo a Pololitos...
        </h1>
        <p className="text-gray-500 mb-8 max-w-sm leading-relaxed">
          Si no tienes Pololitos instalada, descarga nuestra app gratuita para ver el perfil de este usuario.
        </p>

        <div className="flex flex-col gap-3 w-full">
          <a
            href={`pololitos://users/${id}`}
            className="w-full py-4 px-4 bg-[#4949E9] hover:bg-[#3b3bcf] text-white font-semibold rounded-xl transition-colors shadow-sm"
          >
            Abrir en la app
          </a>
          <Link
            href="/descargar"
            className="w-full py-4 px-4 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium rounded-xl transition-colors border border-gray-200 shadow-sm"
          >
            Descargar Pololitos gratis
          </Link>
        </div>
      </div>
    </main>
  );
}
