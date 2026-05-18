## NIVEL BÁSICO 

Las consignas básicas introducen las funciones puras, la inmutabilidad y los primeros usos de `map`, `filter` y `reduce` sobre arrays simples.
### Consigna B.1 | Funciones puras: conceptos y primeros pasos
**Teoría + Práctica**

#### Parte A
Respondé en comentarios dentro del archivo:
1. ¿Qué es una función pura? ¿Qué condiciones debe cumplir?
2. ¿Qué significa que un dato es inmutable? ¿Por qué es importante en PF?
3. ¿Cuál es la diferencia entre una función de orden superior y una función común?

#### Parte B
Indicá cuáles de estas funciones son puras y cuáles no, justificando tu respuesta:

```javascript
let contador = 0;

function f1(x) { 
  contador++; 
  return x * 2; 
} // ¿pura?

const f2 = (x) => x * 2; // ¿pura?

const f3 = (lista) => lista.push(99); // ¿pura?

const f4 = (lista) => [...lista, 99]; // ¿pura?

const f5 = () => Math.random(); // ¿pura?
```

#### Parte C
Reescribí `f1` y `f3` para que sean funciones puras.

### Consigna B.2 | Primeros pasos con .map()
**Práctica**

Dado el siguiente array de precios:
```javascript
const precios = [1200, 800, 3500, 450, 2100, 990];
```

Usando `.map()` y funciones flecha (*arrow functions*), creá los siguientes arrays derivados. 
* **Restricciones:** No uses `for` ni `while`. No modifiques el array `precios`.

Generá:
1. `preciosConIVA`: Cada precio multiplicado por 1.21.
2. `preciosConDescuento20`: Cada precio con un 20% de descuento.
3. `preciosRedondeados`: Cada precio redondeado al entero más cercano (`Math.round`).
4. `etiquetas`: Array de strings con el formato `'$1200'`, `'$800'`, etc.
5. `esBarato`: Array de booleanos (`true` si el precio es menor a $1000, `false` si no).

Mostrá cada resultado por consola. Verificá que el array `precios` original **NO** haya cambiado con un `console.log()` al final del archivo.

### Consigna B.3 | Primeros pasos con .filter()
**Práctica**

Dado el siguiente array de productos musicales:
```javascript
const productos = [
  { nombre: 'Guitarra', categoria: 'Instrumento', precio: 15000 },
  { nombre: 'Auriculares', categoria: 'Accesorio', precio: 3200 },
  { nombre: 'Piano digital', categoria: 'Instrumento', precio: 42000 },
  { nombre: 'Cable XLR', categoria: 'Accesorio', precio: 850 },
  { nombre: 'Batería', categoria: 'Instrumento', precio: 68000 },
  { nombre: 'Micrófono', categoria: 'Accesorio', precio: 7500 },
];
```

Usando sólo `.filter()`, obtené los siguientes arrays:
1. `soloInstrumentos`: Productos cuya `categoria` sea `'Instrumento'`.
2. `economicos`: Productos con `precio` menor a $5000.
3. `accesoriosBaratos`: Accesorios con `precio` menor a $5000 (podés combinar dos `.filter()` o usar un único filtro con `&&`).
4. `nombresLargos`: Productos cuyo `nombre` tenga más de 7 caracteres.

**Requisito:** Para cada resultado, mostrá por consola cuántos elementos contiene utilizando `console.log()` y la propiedad `.length`.
### Consigna B.4 | Primeros pasos con .reduce()
**Práctica**

Utilizando el mismo array `productos` de la **consigna B.3**, resolvé los siguientes cálculos usando **únicamente** `.reduce()`. 
* **Restricciones:** No uses `for`, `while`, ni variables externas que vayas modificando en cada iteración.

Calculá y obtené:
1. **Precio total:** La suma de los precios de todos los productos.
2. **Precio promedio:** El valor promedio de los productos (total / cantidad).
3. **Precio máximo:** El precio más alto entre todos los productos de la lista.
4. **Lista de nombres:** Construí un array que contenga solo los nombres de todos los productos usando `.reduce()` (no vale usar `.map()`).
5. **Contador de accesorios:** Contá cuántos productos pertenecen a la categoría `'Accesorio'`.

>  **Pista para el punto 4:** El acumulador inicial debe ser un array vacío `[]` y en cada paso agregás el nombre actual usando el operador spread: `[...acumulador, item.nombre]`.
### Consigna B.5 | Arrow functions y callbacks
**Práctica**

#### Parte A
Convertí las siguientes funciones tradicionales a sus *arrow functions* equivalentes (funciones flecha) en una sola línea (retorno implícito). Luego, escribí un ejemplo de uso de cada una con `console.log()`:

```javascript
function cuadrado(n) { 
  return n * n; 
}

function esPar(n) { 
  return n % 2 === 0; 
}

function mayuscula(texto) { 
  return texto.toUpperCase(); 
}

function formatearPrecio(precio) { 
  return '\$' + precio; 
}
```

#### Parte B
Utilizá las nuevas *arrow functions* que creaste en la Parte A como **callbacks** de los métodos `.map()` o `.filter()` sobre el siguiente array:

```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

* **Nota:** Elegí qué método (`.map()` o `.filter()`) tiene más sentido para cada una de tus funciones según el resultado que quieras obtener.
### Consigna B.6 | Spread operator e inmutabilidad
**Práctica + Análisis**

Dado el siguiente objeto que representa un disco:
```javascript
const album = {
  id: 1,
  titulo: 'Abbey Road',
  precio: 1200,
  disponible: true
};
```

#### Parte A
Realizá las siguientes operaciones **SIN** modificar el objeto original:
1. **`albumConDescuento`:** Creá una copia del álbum con el precio reducido en un 10%.
2. **`albumAgotado`:** Creá una copia del álbum cambiando la propiedad `disponible` a `false`.
3. **`albumCompleto`:** Creá una copia del álbum agregando una nueva propiedad `anio` con el valor `1969`.

**Requisito:** Mostrá el objeto `album` original al final de tu script con un `console.log()` para verificar que no sufrió mutaciones.

#### Parte B
En un comentario dentro del archivo, explicá con tus palabras qué hace el operador `...` (*spread operator*) sobre los objetos y por qué es clave en el paradigma de la programación funcional.

