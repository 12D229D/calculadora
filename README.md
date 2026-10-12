# Calculadora Multi-Modo

Una calculadora web con dos modos de operacion: **Basico** y **Cientifico**.

## Caracteristicas Principales

- **Modo Basico**: operaciones aritmeticas fundamentales (suma, resta, multiplicacion, division).
- **Modo Cientifico**: funciones trigonometricas, logaritmos, raices, potencias, factorial y mas.
- **Interfaz moderna**: diseno responsivo con tematica oscura y animaciones suaves.
- **Soporte de teclado**: utiliza el teclado para operar la calculadora rapidamente.
- **Cambio de modo rapido**: presiona `Tab` para alternar entre modos.
- **Historial persistente**: guarda hasta 200 operaciones en `localStorage`, con exportacion a JSON.

## Historial de Calculos

La calculadora guarda automaticamente cada operacion exitosa en el almacenamiento local del navegador (`localStorage`).

### Caracteristicas del historial
- **Persistencia**: las operaciones se mantienen entre sesiones del navegador.
- **Limite**: se conservan las ultimas 200 entradas (elimina las mas antiguas automaticamente).
- **Visualizacion**: lista visible en un panel lateral derecho junto a la pantalla principal (debajo en dispositivos moviles), con expresion, resultado, modo y fecha.
- **Exportacion**: boton "Exportar" para descargar el historial como archivo JSON.
- **Limpieza**: boton "Limpiar" para vaciar el historial completo.

### Formato de cada entrada
```json
{
  "timestamp": "2026-07-02T18:30:00.000Z",
  "expression": "12 + 7",
  "result": "19",
  "mode": "basic"
}
```

## Estructura de Archivos

- `index.html` - Estructura de la aplicacion web.
- `styles/main.css` - Estilos visuales y tema oscuro.
- `scripts/calculator.js` - Logica de la calculadora (JavaScript vanilla).

## Funciones Soportadas

### Modo Basico
- Suma, resta, multiplicacion y division
- Cambio de signo (+/-)
- Porcentaje (%)
- Punto decimal
- Limpiar pantalla (C)

### Modo Cientifico
- Trigonometria: seno, coseno, tangente y sus inversas (sin, cos, tan, asin, acos, atan)
- Logaritmos: logaritmo base 10 y logaritmo natural (log, ln)
- Raiz cuadrada (sqrt)
- Potencia (pow)
- Factorial (n!)
- Constantes: Pi (pi) y numero de Euler (e)
- Valor absoluto (abs)
- Inversa (1/x)

## Comandos de Teclado

| Tecla | Funcion |
|-------|---------|
| `0-9` | Numeros |
| `+` / `-` / `*` `/` | Operadores |
| `Enter` / `=` | Calcular resultado |
| `.` | Punto decimal |
| `Esc` | Limpiar pantalla |
| `Backspace` | Borrar ultimo digito |
| `Tab` | Cambiar modo (Basico/Cientifico) |

## Como Usar

Simplemente abre el archivo `index.html` en cualquier navegador web moderno (Chrome, Firefox, Edge, Safari).

No se requiere servidor ni dependencias externas.

## Tecnologias Utilizadas

- **HTML5** - Marcado semantico y accesible
- **CSS3** - Flexbox, Grid, variables CSS y animaciones
- **Vanilla JavaScript** - Sin frameworks ni librerias adicionales

## Compatibilidad

- Navegadores modernos que soporten ES6
- Disenado para escritorio, tabletas y moviles (responsive)

---

Desarrollado con HTML5, CSS3 y JavaScript vanilla.
