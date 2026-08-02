import { useStore } from '../flux/useStore'
import { setCategory } from '../flux/actions'

const categories = ['Todos', 'Datos', 'Desarrollo', 'Marketing', 'Finanzas']

// Aplica la Ley de Hick: agrupacion por categorias para reducir la carga de decision.
export default function CategoryChips() {
  const active = useStore((s) => s.activeCategory)
  return (
    <div className="chips">
      {categories.map((c) => (
        <button
          key={c}
          className={`chip${c === active ? ' chip--active' : ''}`}
          onClick={() => setCategory(c)}
        >
          {c}
        </button>
      ))}
    </div>
  )
}
