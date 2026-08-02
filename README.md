# Aula Nova — Prototipo funcional (Patron Flux)

Prototipo de ** · Arquitectura Front-End**. Implementa el patron
arquitectonico **Flux** (store centralizado + flujo unidireccional) sobre una
porcion de la plataforma educativa *Aula Nova* :
**catalogo de cursos** e **inscripcion por pasos**.

## Stack
- React 18 + TypeScript
- Vite (servidor de desarrollo y build)

## Como ejecutar
```bash
npm install
npm run dev
```
Abre el navegador en la URL que muestra la consola (por defecto
`http://localhost:5173`).

## Que demuestra el prototipo
- **Store centralizado** (`src/flux/store.ts`): unica fuente de verdad del estado.
- **Flujo unidireccional**: la vista despacha *acciones* -> el *reducer* actualiza
  el store -> el store notifica a las vistas suscritas -> la UI se re-renderiza.
- **Acciones rastreables**: todo cambio de estado pasa por `dispatch`.
- **Asincronia + manejo de errores**: `submitEnrollment` simula la llamada al
  backend y contempla el caso de fallo.
- **Leyes UX **: agrupacion por categorias (Hick), wizard con barra de
  progreso (Miller) y CTA amplio >= 44px (Fitts).

## Estructura
```
src/
  flux/
    types.ts      # Tipos del estado y de las acciones
    store.ts      # Store centralizado + reducer puro
    actions.ts    # Action creators (incluye accion asincrona)
    useStore.ts   # Hook que conecta las vistas al store
  data/courses.ts # Catalogo de ejemplo
  components/      # Vistas (pasivas): solo leen del store y despachan acciones
  App.tsx          # App shell
  styles.css       # Design tokens + estilos
```
