# Plan: calculadora (web multi-modo)

## Resumen
Calculadora web con dos modos (Básico y Científico), construida en HTML5, CSS3 y JavaScript vanilla, con historial persistente en `localStorage`, exportación a JSON, accesibilidad ARIA completa y suite de pruebas unitarias.

## Objetivos
- [x] Ofrecer operaciones básicas y científicas en una sola interfaz.
- [x] Cambiar de modo con la tecla `Tab` o selector de pestañas.
- [x] Guardar historial (hasta 200 operaciones) en `localStorage`.
- [x] Exportar y limpiar el historial.
- [x] Soporte completo de teclado y atajos.
- [x] Accesibilidad ARIA completa con regiones en vivo y roles semánticos.

## 🏗️ Arquitectura

- **Patrón**: Aplicación web monolítica de página única (Single Page).
- **Flujo de datos**: El usuario interactúa con botones/teclado → JavaScript captura eventos → evalúa expresiones → actualiza el display ARIA → persiste historial en `localStorage`.

```text
calculadora/
├── index.html                  # Estructura HTML semántica + ARIA
├── styles/main.css             # Estilos responsivos con tema oscuro
├── scripts/
│   ├── calculator.js           # Lógica de cálculo, historial y teclado
│   └── calculator.test.js      # Tests unitarios de funciones científicas
├── README.md
└── plan.md
```

## 🧠 Paradigma de Programación

- **Imperativo/Procedimental + Event-Driven**
- La lógica de evaluación de expresiones y gestión de historial es **imperativa** (funciones secuenciales que mutan estado).
- La interacción con el usuario es **event-driven** (listeners de `click`, `keydown`, delegación de eventos DOM).

---

## 🌐 Propósito de Visibilidad y Destino Remoto

- **Visibilidad**: `Público (Open Source / Portafolio)`.
- **Plataforma Remota Asignada**: `GitHub`.
- **Plataforma de Despliegue CI/CD**: `GitHub Pages` / `Cloudflare Pages`.
- **Justificación**: Calculadora científica y básica web con soporte ARIA accesible y pruebas unitarias sin backend; excelente para portafolio y despliegue estático en GitHub Pages.

---

> ⚠️ **Auditoría de UI / DESIGN.md:** La interfaz actual no cumple con las directrices visuales de [DESIGN.md](../DESIGN.md) (requiere paleta HSL, Google Fonts modernas y profundidad/glassmorphism). Pendiente refactor visual.
## Estado actual
- Estado: ✅ **Completado**
- Soporta: trigonometría, logaritmos, raíz, potencias, factorial, $\pi$, $e$, valor absoluto, inversa $1/x$.
- Accesibilidad ARIA completa (`aria-live="assertive"`, `role="tab"`, `aria-selected`).
- Tests unitarios en `scripts/calculator.test.js`.

## Tareas realizadas
- [x] Separar estilos a `styles/main.css` y lógica a `scripts/calculator.js`.
- [x] Añadir tests unitarios para la evaluación de expresiones científicas (`scripts/calculator.test.js`).
- [x] Implementar accesibilidad ARIA completa.
- [x] Testear responsividad en móvil y escritorio.

## Stack / Tecnologías
- HTML5, CSS3 (Flexbox/Grid, variables CSS, animaciones)
- Vanilla JavaScript (ES6)
- localStorage
