// Tipos del dominio y del sistema Flux
export interface Course {
  id: string
  title: string
  category: string
  level: string
  hours: number
}

export type EnrollmentStatus = 'idle' | 'submitting' | 'success' | 'error'

export interface EnrollmentForm {
  modalidad: string
  horario: string
  metodoPago: string
  documento: string
}

// Estado global unico (single source of truth)
export interface State {
  courses: Course[]
  activeCategory: string
  enrollment: {
    courseId: string | null
    step: number
    form: EnrollmentForm
    status: EnrollmentStatus
    error: string | null
  }
}

// Acciones: unico medio para modificar el estado (flujo unidireccional)
export type Action =
  | { type: 'SET_CATEGORY'; category: string }
  | { type: 'OPEN_ENROLLMENT'; courseId: string }
  | { type: 'CLOSE_ENROLLMENT' }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'UPDATE_FORM'; field: keyof EnrollmentForm; value: string }
  | { type: 'SUBMIT_START' }
  | { type: 'SUBMIT_SUCCESS' }
  | { type: 'SUBMIT_ERROR'; error: string }
  | { type: 'RESET_ENROLLMENT' }
