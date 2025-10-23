// src/components/CategoriesSection.tsx
import CategoryCard from './CategoryCard'
import MoreCategoriesCard from './MoreCategoriesCard'
import { categories } from '@/data/categories'

const CategoriesSection: React.FC = () => {
  return (
    <section
      className="py-20 bg-gray-50"
      aria-labelledby="categories-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="categories-heading"
          className="text-4xl md:text-5xl font-bricolage font-bold text-center text-gray-900 mb-4"
          itemProp="name"
        >
          Desde una <strong>llave que gotea</strong> hasta el <strong>armado de tus muebles</strong>
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 font-nunito" itemProp="description">
          Todo lo que necesites, lo encontramos
        </p>

        <nav aria-label="Categorías de servicios disponibles">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 list-none">
            {categories.map((category, idx) => (
              <li key={idx} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <CategoryCard
                  name={category.name}
                  icon={category.icon}
                />
                <meta itemProp="position" content={String(idx + 1)} />
              </li>
            ))}
            <li>
              <MoreCategoriesCard />
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default CategoriesSection
