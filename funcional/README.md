# 1. Introducción
El Paradigma de programación funcional en JavaScript.
## Principios de la Programación Funcional
En la programación funcional, las funciones son el centro del diseño: se trabaja con datos que **NO** se modifican (**inmutabilidad**) y cada función recibe datos, produce un resultado y no tiene efectos secundarios (**funciones puras**).
# 2. Fundamentos Teóricos

## 2.1 ¿Qué es la Programación Funcional?

La programación funcional (PF) es un paradigma donde los programas se construyen aplicando y componiendo funciones. A diferencia del paradigma imperativo, en PF no se describe **CÓMO** hacer algo paso a paso, sino **QUÉ** transformaciones deben ocurrir sobre los datos.


| Concepto | Paradigma Imperativo | Paradigma Funcional |
| :--- | :--- | :--- |
| **Estado** | Se modifica directamente | No se modifica (inmutable) |
| **Bucles** | `for`, `while` explícitos | `map`, `filter`, `reduce` |
| **Funciones** | Procedimientos con efectos | Funciones puras sin efectos |
| **Foco** | Cómo ejecutar pasos | Qué transformar |
| **Datos** | Variables reasignables | Constantes y nuevas copias |


## 2.2 Principios Clave: Funciones Puras

Una función pura siempre retorna el mismo resultado para los mismos argumentos y no modifica nada fuera de su scope (sin efectos secundarios).

### Ejemplo de Función Impura
Modifica una variable externa y genera un efecto secundario.

```javascript
let total = 0;

function sumarImpura(n) {
  total += n; // Efecto secundario: modifica 'total'
}
```

### Ejemplos de Funciones Puras
Solo dependen de sus argumentos y siempre retornan el mismo valor para los mismos inputs.

```javascript
// Suma básica
const sumar = (a, b) => a + b;

// Cálculo de descuento
const aplicarDescuento = (precio, pct) => precio * (1 - pct / 100);
```
## 2.3 Principios Clave: Inmutabilidad

Los datos originales nunca se modifican. Toda transformación produce un nuevo valor.

### Ejemplo de Práctica Incorrecta (Mutación)
Modifica el array original directamente de forma destructiva.

```javascript
const albumes = ['Abbey Road', 'Thriller'];
albumes.push('Dark Side of the Moon'); // ¡Mutación!
```

### Ejemplo de Práctica Correcta (Inmutabilidad)
Crea un nuevo array combinando los datos anteriores sin alterar el original.

```javascript
const albumes = ['Abbey Road', 'Thriller'];

// El operador spread (...) crea una copia con el nuevo elemento
const albumesActualizado = [...albumes, 'Dark Side of the Moon']; 
// 'albumes' original no cambió
```
## 2.4 Principios Clave: Funciones como Valores (First-Class Functions)

En JavaScript las funciones son valores de primera clase: pueden guardarse en variables, pasarse como argumentos y retornarse desde otras funciones.

### Guardar función en una variable
```javascript
const saludar = (nombre) => 'Hola, ' + nombre;
```

### Pasar función como argumento (Callback)
```javascript
const nombres = ['Ana', 'Luis', 'Marta'];

// map recibe la función 'saludar' y la aplica a cada elemento
const saludos = nombres.map(saludar); 
// Resultado: ['Hola, Ana', 'Hola, Luis', 'Hola, Marta']
```

### Retornar función desde otra función (Higher-Order Function)
```javascript
// Una función que fabrica y retorna una nueva función
const multiplicarPor = (factor) => (n) => n * factor;

const doble = multiplicarPor(2); // 'doble' ahora es una función que multiplica por 2

console.log(doble(5)); // Resultado: 10
```
## 2.3 Métodos Funcionales de Arrays en JavaScript

JavaScript incluye métodos fundamentales que son el corazón de la Programación Funcional (PF) al trabajar con colecciones de datos. Todos ellos generan nuevos resultados sin mutar el array original.

### Tabla Comparativa de Métodos


| Método | ¿Qué hace? | Ejemplo de uso en el proyecto |
| :--- | :--- | :--- |
| **`.map(fn)`** | Transforma cada elemento y retorna un nuevo array del mismo tamaño. | Aplicar descuento a cada precio. |
| **`.filter(fn)`** | Retorna un nuevo array sólo con los elementos que cumplan la condición. | Filtrar álbumes por género. |
| **`.reduce(fn, val)`** | Acumula todos los elementos en un único valor final. | Calcular total del carrito. |
| **`.find(fn)`** | Retorna el primer elemento que cumple la condición. | Buscar álbum por ID. |
| **`.every(fn)`** / **`.some(fn)`** | Verifica si todos o algún elemento cumplen la condición. | Validar disponibilidad de stock. |


