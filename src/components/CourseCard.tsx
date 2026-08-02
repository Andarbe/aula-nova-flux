import type { Course } from '../flux/types'
import { openEnrollment } from '../flux/actions'
import Button from './ui/Button'

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="card">
      <div className="card__thumb" />
      <div className="card__body">
        <span className="card__cat">{course.category}</span>
        <h3 className="card__title">{course.title}</h3>
        <p className="card__meta">{course.level} · {course.hours} h</p>
        <Button onClick={() => openEnrollment(course.id)}>Inscribirme</Button>
      </div>
    </article>
  )
}
