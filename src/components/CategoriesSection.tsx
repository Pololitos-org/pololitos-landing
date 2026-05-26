// src/components/CategoriesSection.tsx
import CategoryCard from './CategoryCard'
import { categories } from '@/data/categories'

const CategoriesSection: React.FC = () => {
  return (
    <section
      className="relative py-20 bg-gray-50 overflow-hidden"
      aria-labelledby="categories-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Top accent gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue via-brand-lime to-brand-blue" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="categories-heading"
            className="text-4xl md:text-5xl font-bricolage font-bold text-gray-900 mb-4"
            itemProp="name"
          >
            Desde una{' '}
            <span className="text-brand-blue">llave que gotea</span> hasta el{' '}
            <span className="text-brand-blue">armado de tus muebles</span>
          </h2>
          <p className="text-xl text-gray-600 font-nunito mb-5" itemProp="description">
            Todo lo que necesites, lo encontramos
          </p>
          <div className="w-24 h-1.5 bg-brand-blue mx-auto rounded-full" />
        </div>

        <nav aria-label="Categorías de servicios disponibles">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 list-none">
            {categories.map((category, idx) => (
              <li key={idx} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <CategoryCard name={category.name} icon={category.icon} />
                <meta itemProp="position" content={String(idx + 1)} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default CategoriesSection
