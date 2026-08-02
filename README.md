# Aula Nova — Prototipo funcional (Patron Flux)

Prototipo de la **Unidad 3 · Arquitectura Front-End**. Implementa el patron
arquitectonico **Flux** (store centralizado + flujo unidireccional) sobre una
porcion de la plataforma educativa *Aula Nova* definida en la Entrega 1:
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
- **Leyes UX (Unidad 2)**: agrupacion por categorias (Hick), wizard con barra de
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
  styles.css       # Design tokens (Unidad 2) + estilos
```

## Guion sugerido para el video (3-5 min)
1. Mostrar el catalogo y filtrar por categoria (Hick).
2. Iniciar una inscripcion y recorrer los 3 pasos del wizard (Miller).
3. Confirmar y mostrar el estado de exito (y, si aparece, el manejo de error).
4. Abrir `store.ts` y `actions.ts` y explicar el flujo unidireccional.

## Evidencias de la entrega
- Repositorio: (reemplazar por la URL de tu GitHub)
- Video: (reemplazar por el enlace a YouTube / Drive)
