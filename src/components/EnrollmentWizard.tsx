import { useStore } from '../flux/useStore'
import {
  nextStep, prevStep, updateForm, submitEnrollment, closeEnrollment, resetEnrollment,
} from '../flux/actions'
import ProgressBar from './ProgressBar'
import Button from './ui/Button'

// Wizard de inscripcion (Ley de Miller: pasos + progreso).
// Toda su interaccion se resuelve despachando acciones al store.
export default function EnrollmentWizard() {
  const enrollment = useStore((s) => s.enrollment)
  const courses = useStore((s) => s.courses)

  if (!enrollment.courseId) return null
  const course = courses.find((c) => c.id === enrollment.courseId)
  const { step, form, status } = enrollment

  return (
    <div className="overlay" role="dialog" aria-modal="true">
      <div className="modal">
        <header className="modal__head">
          <button className="modal__close" onClick={closeEnrollment} aria-label="Cerrar">←</button>
          <h2>Inscripcion</h2>
        </header>

        {status === 'success' ? (
          <div className="modal__body modal__body--center">
            <p className="ok">✓ ¡Inscripcion confirmada!</p>
            <p>Te inscribiste en <strong>{course?.title}</strong>.</p>
            <Button onClick={() => { resetEnrollment(); closeEnrollment() }}>Volver al catalogo</Button>
          </div>
        ) : (
          <div className="modal__body">
            <ProgressBar step={step} />
            <p className="modal__sub">Paso {step} de 3 · {course?.title}</p>

            {step === 1 && (
              <>
                <label>Modalidad
                  <select value={form.modalidad} onChange={(e) => updateForm('modalidad', e.target.value)}>
                    <option value="">Selecciona...</option>
                    <option>Virtual en vivo</option>
                    <option>Autoguiado</option>
                  </select>
                </label>
                <label>Horario preferido
                  <select value={form.horario} onChange={(e) => updateForm('horario', e.target.value)}>
                    <option value="">Selecciona...</option>
                    <option>Manana</option>
                    <option>Noche</option>
                  </select>
                </label>
              </>
            )}

            {step === 2 && (
              <>
                <label>Metodo de pago
                  <select value={form.metodoPago} onChange={(e) => updateForm('metodoPago', e.target.value)}>
                    <option value="">Selecciona...</option>
                    <option>Tarjeta</option>
                    <option>PSE</option>
                  </select>
                </label>
                <label>Documento
                  <input
                    value={form.documento}
                    onChange={(e) => updateForm('documento', e.target.value)}
                    placeholder="Numero de documento"
                  />
                </label>
              </>
            )}

            {step === 3 && (
              <div className="summary">
                <p><strong>Resumen</strong></p>
                <p>Curso: {course?.title}</p>
                <p>Modalidad: {form.modalidad || '—'}</p>
                <p>Horario: {form.horario || '—'}</p>
                <p>Pago: {form.metodoPago || '—'}</p>
              </div>
            )}

            {status === 'error' && <p className="err">{enrollment.error}</p>}

            <div className="modal__actions">
              <Button variant="ghost" onClick={prevStep} disabled={step === 1 || status === 'submitting'}>
                Atras
              </Button>
              {step < 3 ? (
                <Button onClick={nextStep}>Continuar</Button>
              ) : (
                <Button onClick={submitEnrollment} disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Enviando...' : 'Confirmar inscripcion'}
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
