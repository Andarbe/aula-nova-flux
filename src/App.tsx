import Catalog from './components/Catalog'
import EnrollmentWizard from './components/EnrollmentWizard'

// App Shell: layout general. La vista es "pasiva": no contiene logica de
// negocio, solo compone componentes que leen del store y despachan acciones.
export default function App() {
  return (
    <div className="app">
      <header className="topbar">
        <span className="brand">Aula Nova</span>
        <span className="tag">Prototipo · Patron Flux</span>
      </header>
      <main className="container">
        <Catalog />
      </main>
      <EnrollmentWizard />
    </div>
  )
}
