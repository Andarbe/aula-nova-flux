import { useStore } from '../flux/useStore'
import CategoryChips from './CategoryChips'
import CourseCard from './CourseCard'

// La vista lee del store con selectores y deriva la lista visible.
export default function Catalog() {
  const courses = useStore((s) => s.courses)
  const active = useStore((s) => s.activeCategory)
  const visible = active === 'Todos' ? courses : courses.filter((c) => c.category === active)

  return (
    <section>
      <h1 className="h1">Catalogo de cursos</h1>
      <CategoryChips />
      <p className="count">{visible.length} curso(s)</p>
      <div className="grid">
        {visible.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </section>
  )
}
