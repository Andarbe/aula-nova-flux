import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'ghost'
  disabled?: boolean
  type?: 'button' | 'submit'
}

// Componente del design system (reutilizable), alineado con los tokens de la Unidad 2.
export default function Button({ children, onClick, variant = 'primary', disabled, type = 'button' }: Props) {
  return (
    <button className={`btn btn--${variant}`} onClick={onClick} disabled={disabled} type={type}>
      {children}
    </button>
  )
}
