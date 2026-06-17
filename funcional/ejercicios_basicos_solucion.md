# Ejercicios de Programación Funcional - Nivel Básico

Este documento contiene la resolución teórica y práctica de las consignas sobre funciones puras, inmutabilidad, métodos de arrays (`map`, `filter`, `reduce`), funciones flecha y el operador spread.

---

## Consigna B.1 | Funciones puras: conceptos y primeros pasos

### Parte A: Teoría

1. **¿Qué es una función pura? ¿Qué condiciones debe cumplir?**
   Una función pura es aquella que, ante los mismos argumentos de entrada, siempre devuelve exactamente el mismo resultado. Sus condiciones obligatorias son:
   * **Determinismo:** No depende de estados ni variables externas que puedan cambiar.
   * **Sin efectos secundarios (Side Effects):** No debe modificar ninguna variable externa, ni mutar los parámetros de entrada, ni alterar el entorno (no realizar `console.log`, escrituras en archivos, llamadas a APIS, etc.).

2. **¿Qué significa que un dato es inmutable? ¿Por qué es importante en PF?**
   Significa que el dato no se puede modificar ni alterar una vez que ha sido creado. En la Programación Funcional (PF) es fundamental porque garantiza la predictibilidad del código. Al evitar que diferentes partes de la aplicación cambien un mismo objeto en memoria de forma silenciosa, se previenen errores colaterales ("bugs"), el código se vuelve más fácil de probar y es intrínsecamente seguro para entornos concurrentes.

3. **¿Cuál es la diferencia entre una función de orden superior y una función común?**
   Una **función común** solo opera con valores de datos tradicionales (como números, strings u objetos) como entradas o salidas. Una **función de orden superior** (Higher-Order Function) es una función que recibe una o más funciones como argumentos, devuelve una función como resultado, o ambas cosas.

---

### Parte B: Análisis de pureza

```javascript
let contador = 0;

function f1(x) {
  contador++;
  return x * 2;
} 
// NO PURA: Modifica la variable externa `contador`, generando un efecto secundario.

const f2 = (x) => x * 2; 
// PURA: No depende de variables externas ni modifica nada fuera de su entorno. Mismos inputs dan mismos outputs.

const f3 = (lista) => lista.push(99); 
// NO PURA: Utiliza `.push()`, lo cual altera y muta directamente el array original pasado por parámetro.

const f4 = (lista) => [...lista, 99]; 
// PURA: No altera el array original. Usa el operador spread para crear y retornar un array completamente nuevo.

const f5 = () => Math.random(); 
// NO PURA: No es determinista. Depende de un generador global de números aleatorios, por lo que su resultado cambia en cada ejecución.
```

---

### Parte C: Reescritura a funciones puras

```javascript
// f1 corregida: Se elimina la modificación del contador externo.
const f1Pura = (x) => x * 2;

// f3 corregida: Se retorna un nuevo array con el elemento agregado, manteniendo el original inmutable.
const f3Pura = (lista) => [...lista, 99];
```

---

## Consigna B.2 | Primeros pasos con .map()

```javascript
const precios =;

// 1. preciosConIVA: Cada precio multiplicado por 1.21
const preciosConIVA = precios.map(precio => precio * 1.21);
console.log('Precios con IVA:', preciosConIVA);

// 2. preciosConDescuento20: Cada precio con un 20% de descuento
const preciosConDescuento20 = precios.map(precio => precio * 0.80);
console.log('Precios con descuento 20%:', preciosConDescuento20);

// 3. preciosRedondeados: Cada precio redondeado al entero más cercano
const preciosRedondeados = precios.map(precio => Math.round(precio));
console.log('Precios redondeados:', preciosRedondeados);

// 4. etiquetas: Array de strings con el formato '\$1200'
const etiquetas = precios.map(precio => `$${precio}`);
console.log('Etiquetas:', etiquetas);

// 5. esBarato: Array de booleanos (true si es menor a \$1000, false si no)
const esBarato = precios.map(precio => precio < 1000);
console.log('¿Es barato?:', esBarato);

// Verificación de inmutabilidad del array original
console.log('Array original intacto:', precios);
```

---

## Consigna B.3 | Primeros pasos con .filter()

```javascript
const productos = [
  { nombre: 'Guitarra', categoria: 'Instrumento', precio: 15000 },
  { nombre: 'Auriculares', categoria: 'Accesorio', precio: 3200 },
  { nombre: 'Piano digital', categoria: 'Instrumento', precio: 42000 },
  { nombre: 'Cable XLR', categoria: 'Accesorio', precio: 850 },
  { nombre: 'Batería', categoria: 'Instrumento', precio: 68000 },
  { nombre: 'Micrófono', categoria: 'Accesorio', precio: 7500 },
];

// 1. soloInstrumentos: Categoria igual a 'Instrumento'
const soloInstrumentos = productos.filter(p => p.categoria === 'Instrumento');
console.log('Solo instrumentos:', soloInstrumentos, 'Cantidad:', soloInstrumentos.length);

// 2. economicos: Precio menor a \$5000
const economicos = productos.filter(p => p.precio < 5000);
console.log('Económicos:', economicos, 'Cantidad:', economicos.length);

// 3. accesoriosBaratos: Accesorios con precio menor a \$5000 (Filtro único con &&)
const accesoriosBaratos = productos.filter(p => p.categoria === 'Accesorio' && p.precio < 5000);
console.log('Accesorios baratos:', accesoriosBaratos, 'Cantidad:', accesoriosBaratos.length);

// 4. nombresLargos: Nombre con más de 7 caracteres
const nombresLargos = productos.filter(p => p.nombre.length > 7);
console.log('Nombres largos:', nombresLargos, 'Cantidad:', nombresLargos.length);
```

---

## Consigna B.4 | Primeros pasos con .reduce()

```javascript
// Usando el array 'productos' de la consigna B.3

// 1. Precio total: Suma de todos los precios
const precioTotal = productos.reduce((acc, p) => acc + p.precio, 0);
console.log('Precio total:', precioTotal);

// 2. Precio promedio: Total / cantidad (calculado dinámicamente usando el array 'arr')
const precioPromedio = productos.reduce((acc, p, _, arr) => acc + p.precio / arr.length, 0);
console.log('Precio promedio:', precioPromedio);

// 3. Precio máximo: El precio más alto de la lista
const precioMaximo = productos.reduce((max, p) => p.precio > max ? p.precio : max, productos[0].precio);
console.log('Precio máximo:', precioMaximo);

// 4. Lista de nombres: Array con sólo los nombres usando .reduce() y spread operator
const listaNombres = productos.reduce((acc, p) => [...acc, p.nombre], []);
console.log('Lista de nombres:', listaNombres);

// 5. Contador de accesorios: Cuenta cuántos pertenecen a la categoría 'Accesorio'
const contadorAccesorios = productos.reduce((acc, p) => p.categoria === 'Accesorio' ? acc + 1 : acc, 0);
console.log('Contador de accesorios:', contadorAccesorios);
```

---

## Consigna B.5 | Arrow functions y callbacks

### Parte A: Conversión y ejemplos de uso

```javascript
const cuadrado = n => n * n;
console.log('Uso cuadrado(5):', cuadrado(5));

const esPar = n => n % 2 === 0;
console.log('Uso esPar(4):', esPar(4));

const mayuscula = texto => texto.toUpperCase();
console.log('Uso mayuscula("hola"):', mayuscula('hola'));

const formatearPrecio = precio => `$${precio}`;
console.log('Uso formatearPrecio(1500):', formatearPrecio(1500));
```

### Parte B: Aplicación como Callbacks

```javascript
const numeros =;

// Se aplica .map() porque transforma cada elemento aplicando una operación matemática
const numerosAlCuadrado = numeros.map(cuadrado);
console.log('Números al cuadrado:', numerosAlCuadrado);

// Se aplica .filter() porque evalúa un predicado booleano para seleccionar elementos específicos
const numerosPares = numeros.filter(esPar);
console.log('Números pares:', numerosPares);

// Se aplica .map() porque transforma y cambia el tipo de dato de cada elemento a string con formato
const numerosFormateados = numeros.map(formatearPrecio);
console.log('Números formateados:', numerosFormateados);
```

---

## Consigna B.6 | Spread operator e inmutabilidad

### Parte A: Operaciones inmutables

```javascript
const album = {
  id: 1,
  titulo: 'Abbey Road',
  precio: 1200,
  disponible: true
};

// 1. albumConDescuento: Copia con el precio reducido en un 10%
const albumConDescuento = { ...album, precio: album.precio * 0.90 };

// 2. albumAgotado: Copia cambiando la propiedad disponible a false
const albumAgotado = { ...album, disponible: false };

// 3. albumCompleto: Copia agregando la nueva propiedad anio
const albumCompleto = { ...album, anio: 1969 };

// Verificación de que el objeto original sigue intacto
console.log('Álbum original (sin mutaciones):', album);
```

### Parte B: Análisis teórico

El operador spread (`...`) sobre objetos copia de manera superficial (*shallow copy*) todas las propiedades y valores de un objeto existente dentro de un nuevo bloque de objeto en una sola línea de código. 

Es una herramienta clave en el paradigma de la Programación Funcional porque permite resolver la **inmutabilidad** de forma sencilla y legible. En lugar de modificar directamente un objeto existente (lo que rompería las reglas funcionales), el spread operator nos permite generar una versión nueva e independiente de la información actualizando solo los campos necesarios sobre la marcha.

