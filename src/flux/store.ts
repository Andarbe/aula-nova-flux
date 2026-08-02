import type { Action, State, EnrollmentForm } from './types'
import { courses } from '../data/courses'

const emptyForm: EnrollmentForm = { modalidad: '', horario: '', metodoPago: '', documento: '' }

export const initialState: State = {
  courses,
  activeCategory: 'Todos',
  enrollment: { courseId: null, step: 1, form: { ...emptyForm }, status: 'idle', error: null },
}

// Reducer puro: unica funcion que transforma el estado a partir de una accion.
// Facilita la testabilidad (entrada -> salida deterministica).
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_CATEGORY':
      return { ...state, activeCategory: action.category }
    case 'OPEN_ENROLLMENT':
      return {
        ...state,
        enrollment: { courseId: action.courseId, step: 1, form: { ...emptyForm }, status: 'idle', error: null },
      }
    case 'CLOSE_ENROLLMENT':
      return { ...state, enrollment: { ...state.enrollment, courseId: null } }
    case 'NEXT_STEP':
      return { ...state, enrollment: { ...state.enrollment, step: Math.min(state.enrollment.step + 1, 3) } }
    case 'PREV_STEP':
      return { ...state, enrollment: { ...state.enrollment, step: Math.max(state.enrollment.step - 1, 1) } }
    case 'UPDATE_FORM':
      return {
        ...state,
        enrollment: {
          ...state.enrollment,
          form: { ...state.enrollment.form, [action.field]: action.value },
        },
      }
    case 'SUBMIT_START':
      return { ...state, enrollment: { ...state.enrollment, status: 'submitting', error: null } }
    case 'SUBMIT_SUCCESS':
      return { ...state, enrollment: { ...state.enrollment, status: 'success' } }
    case 'SUBMIT_ERROR':
      return { ...state, enrollment: { ...state.enrollment, status: 'error', error: action.error } }
    case 'RESET_ENROLLMENT':
      return { ...state, enrollment: { ...initialState.enrollment, form: { ...emptyForm } } }
    default:
      return state
  }
}

// Store centralizado estilo Flux:
//  - un unico estado (getState)
//  - un unico punto de cambio (dispatch)
//  - notificacion a las vistas suscritas (subscribe)
class Store {
  private state: State = initialState
  private listeners: Array<() => void> = []

  getState(): State {
    return this.state
  }

  dispatch(action: Action): void {
    this.state = reducer(this.state, action)
    this.listeners.forEach((listener) => listener())
  }

  subscribe(listener: () => void): () => void {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener)
    }
  }
}

export const store = new Store()
