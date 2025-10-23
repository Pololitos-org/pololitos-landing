// src/data/categories.ts

export interface Category {
  name: string
  icon: string
}

export const categories: Category[] = [
  { name: 'Gasfitería', icon: 'gasfiteria.svg' },
  { name: 'Electricidad', icon: 'electricidad.svg' },
  { name: 'Armado de Muebles', icon: 'armadomuebles.svg' },
  { name: 'Limpieza', icon: 'limpieza.svg' },
  { name: 'Pintura', icon: 'pintura.svg' },
  { name: 'Jardinería', icon: 'jardineria.svg' },
  { name: 'Control de Plagas', icon: 'controlplagas.svg' },
  { name: 'Reparaciones', icon: 'reparaciones.svg' },
  { name: 'Seguridad', icon: 'seguridad.svg' },
  { name: 'Climatización', icon: 'climatizacion.svg' },
  { name: 'Tecnología', icon: 'tecnologia.svg' }
]
