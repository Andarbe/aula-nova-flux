import { store } from './store'
import type { EnrollmentForm } from './types'

// Action creators: la vista NUNCA modifica el estado directamente,
// solo despacha acciones a traves de estas funciones (flujo unidireccional).
export const setCategory = (category: string) => store.dispatch({ type: 'SET_CATEGORY', category })
export const openEnrollment = (courseId: string) => store.dispatch({ type: 'OPEN_ENROLLMENT', courseId })
export const closeEnrollment = () => store.dispatch({ type: 'CLOSE_ENROLLMENT' })
export const nextStep = () => store.dispatch({ type: 'NEXT_STEP' })
export const prevStep = () => store.dispatch({ type: 'PREV_STEP' })
export const updateForm = (field: keyof EnrollmentForm, value: string) =>
  store.dispatch({ type: 'UPDATE_FORM', field, value })
export const resetEnrollment = () => store.dispatch({ type: 'RESET_ENROLLMENT' })

// Accion asincrona: simula la comunicacion con el backend y contempla
// explicitamente el escenario de fallo (manejo de errores).
export async function submitEnrollment(): Promise<void> {
  store.dispatch({ type: 'SUBMIT_START' })
  try {
    await new Promise<void>((resolve, reject) => {
      setTimeout(() => (Math.random() > 0.15 ? resolve() : reject(new Error('network'))), 900)
    })
    store.dispatch({ type: 'SUBMIT_SUCCESS' })
  } catch {
    store.dispatch({ type: 'SUBMIT_ERROR', error: 'No se pudo completar la inscripcion. Intenta de nuevo.' })
  }
}
