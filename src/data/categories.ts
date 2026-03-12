// src/data/categories.ts

export interface Category {
  name: string
  icon: string
}

export const categories: Category[] = [
  { name: 'Limpieza del hogar', icon: 'limpieza.svg' },
  { name: 'Cuidado de niños', icon: 'seguridad.svg' },
  { name: 'Carpintería', icon: 'armadomuebles.svg' },
  { name: 'Cuidado de animales', icon: 'animales.svg' },
  { name: 'Reparaciones', icon: 'reparaciones.svg' },
  { name: 'Cuidado de adultos', icon: 'seguridad.svg' },
  { name: 'Jardinería', icon: 'jardineria.svg' },
  { name: 'Mudanzas', icon: 'armadomuebles.svg' },
  { name: 'Pintura', icon: 'pintura.svg' },
  { name: 'Otros', icon: 'tecnologia.svg' }
]
