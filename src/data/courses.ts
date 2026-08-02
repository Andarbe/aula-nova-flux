import type { Course } from '../flux/types'

// Catalogo de ejemplo (en produccion vendria del backend / estado de servidor)
export const courses: Course[] = [
  { id: 'c1', title: 'Fundamentos de Analisis de Datos', category: 'Datos', level: 'Basico', hours: 20 },
  { id: 'c2', title: 'Visualizacion con Power BI', category: 'Datos', level: 'Intermedio', hours: 24 },
  { id: 'c3', title: 'React desde Cero', category: 'Desarrollo', level: 'Intermedio', hours: 30 },
  { id: 'c4', title: 'APIs REST con Node.js', category: 'Desarrollo', level: 'Avanzado', hours: 28 },
  { id: 'c5', title: 'Marketing Digital 360', category: 'Marketing', level: 'Basico', hours: 18 },
  { id: 'c6', title: 'SEO y Contenidos', category: 'Marketing', level: 'Intermedio', hours: 16 },
  { id: 'c7', title: 'Finanzas para no Financieros', category: 'Finanzas', level: 'Basico', hours: 14 },
  { id: 'c8', title: 'Modelado Financiero en Excel', category: 'Finanzas', level: 'Avanzado', hours: 26 },
]
