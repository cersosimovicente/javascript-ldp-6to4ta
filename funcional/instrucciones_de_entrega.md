# Instrucciones Generales

Leé cada consigna con detenimiento antes de escribir código. Las actividades se organizan en tres niveles que se esperan resolver en orden:
* Básico
* Intermedio
* Avanzado

> **Regla de oro de la programación funcional:** Si necesitás modificar un array u objeto, **NO** lo modifiques; creá uno nuevo. Usá `spread (...)`, `map`, `filter` y `reduce` en lugar de `push`, `pop` o asignación directa.

---

## Normas de presentación

* **Un archivo `.js` por consigna:** Por ejemplo, `ej01_basico.js`, `ej02_basico.js`, etc.
* **Encabezado obligatorio:** Cada archivo debe incluir tu nombre, la fecha y el número de consigna en comentarios al inicio.
* **Código documentado:** Todo el código debe estar comentado. Explicá qué hace cada función y qué retorna.
* **Verificación previa:** Probá el código en la consola del navegador o en Node.js antes de entregar.
* **Restricción de bucles:** No se permiten bucles `for`, `while` ni variables globales mutables en las consignas del Nivel Intermedio y Avanzado.

### Estructura mínima de cada archivo

```javascript
// ============================================================
// Consigna N° [número] — Nivel: [Básico / Intermedio / Avanzado]
// Alumno/a: [Tu nombre completo]
// Fecha: [dd/mm/aaaa]
// Descripción: [qué hace este ejercicio en una oración]
// ============================================================

// Datos de entrada (constantes, no variables)
const misDatos = [...];

// Funciones puras
const miFuncion = (param) => ...;

// Ejecución y resultados
console.log(miFuncion(misDatos));
```
