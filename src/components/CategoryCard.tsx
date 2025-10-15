// src/components/CategoryCard.tsx
import Image from 'next/image'

interface CategoryCardProps {
  name: string
  icon: string
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, icon }) => {
  return (
    <article
      className="bg-white p-6 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer group"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="w-16 h-16 mb-4 relative">
        <Image
          src={`/assets/categorias/${icon}`}
          alt={`Servicio de ${name} en Valdivia`}
          width={64}
          height={64}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <h3 className="font-bricolage font-semibold text-gray-900" itemProp="name">
        {name}
      </h3>
      <meta itemProp="areaServed" content="Valdivia, Chile" />
      <meta itemProp="serviceType" content={name} />
    </article>
  )
}

export default CategoryCard
