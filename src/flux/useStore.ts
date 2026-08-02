import { useSyncExternalStore } from 'react'
import { store } from './store'
import type { State } from './types'

const subscribe = (callback: () => void) => store.subscribe(callback)

// Hook que conecta una vista con el store. Recibe un "selector" que
// devuelve solo la porcion de estado que la vista necesita, de modo que
// el componente se vuelve a renderizar unicamente cuando esa porcion cambia.
export function useStore<T>(selector: (state: State) => T): T {
  return useSyncExternalStore(subscribe, () => selector(store.getState()))
}
