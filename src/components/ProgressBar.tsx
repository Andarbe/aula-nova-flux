// Aplica la Ley de Miller: muestra el progreso del proceso por pasos.
export default function ProgressBar({ step, total = 3 }: { step: number; total?: number }) {
  const steps = Array.from({ length: total }, (_, i) => i + 1)
  return (
    <div className="progress">
      {steps.map((n) => (
        <div key={n} className={`progress__step${n <= step ? ' is-done' : ''}`}>
          <span className="progress__dot">{n}</span>
        </div>
      ))}
    </div>
  )
}
