# Solución – Examen de Paradigma Funcional

## 1) Verdadera (V) o Falsa (F) *(2 pts)*

### 1.1

Una función pura puede modificar una variable declarada fuera de su cuerpo, siempre que no se note en el resultado.

**Respuesta:** Falso

**Justificación:** Una función pura no debe producir efectos secundarios ni modificar variables externas.

### 1.2

El método `.filter()` modifica el array original eliminando los elementos que no cumplen la condición.

**Respuesta:** Falso

**Justificación:** `filter()` devuelve un nuevo arreglo sin modificar el original.

### 1.3

El método `.map()` siempre retorna un array de la misma longitud que el array original.

**Respuesta:** Verdadero

**Justificación:** `map()` transforma cada elemento del arreglo original y devuelve un nuevo arreglo con la misma cantidad de elementos.

---

# 2) Análisis de Código *(3 pts)*

## Código original

```javascript
const precios = [10, 20, 30];

function duplicarPrecios(lista) {
  for (let i = 0; i < lista.length; i++) {
    lista[i] = lista[i] * 2;
  }
  return lista;
}
```

## ¿Por qué es un error?

La función modifica directamente el arreglo recibido como parámetro. Esta modificación se conoce como **mutación**, lo que viola los principios del paradigma funcional.

Una función funcional debe:

* No modificar sus argumentos.
* No producir efectos secundarios.
* Devolver una nueva estructura de datos.

## Código corregido

```javascript
const precios = [10, 20, 30];

function duplicarPrecios(lista) {
  return lista.map(precio => precio * 2);
}

const nuevosPrecios = duplicarPrecios(precios);

console.log(precios);       // [10, 20, 30]
console.log(nuevosPrecios); // [20, 40, 60]
```

---

# 3) Convertir a Función Pura *(5 pts)*

## Función 1

### Código original

```javascript
const carrito = [];

function agregarProducto(producto) {
  carrito.push(producto);
  return carrito;
}
```

### Problema

La función modifica una variable global (`carrito`), generando un efecto secundario.

### Solución funcional

```javascript
function agregarProducto(carrito, producto) {
  return [...carrito, producto];
}

const carrito = ["Mouse"];
const nuevoCarrito = agregarProducto(carrito, "Teclado");

console.log(carrito);      // ["Mouse"]
console.log(nuevoCarrito); // ["Mouse", "Teclado"]
```

### Explicación

La función recibe el carrito como parámetro y devuelve una nueva copia con el producto agregado, sin modificar el arreglo original.

---

## Función 2

### Código original

```javascript
function aplicarDescuento(producto, porcentaje) {
  producto.precio = producto.precio - (producto.precio * porcentaje / 100);
  return producto;
}
```

### Problema

La función modifica directamente el objeto recibido como parámetro.

### Solución funcional

```javascript
function aplicarDescuento(producto, porcentaje) {
  return {
    ...producto,
    precio: producto.precio - (producto.precio * porcentaje / 100)
  };
}

const producto = {
  nombre: "Monitor",
  precio: 1000
};

const productoConDescuento = aplicarDescuento(producto, 10);

console.log(producto);
// { nombre: "Monitor", precio: 1000 }

console.log(productoConDescuento);
// { nombre: "Monitor", precio: 900 }
```

### Explicación

Se utiliza el operador **spread (`...`)** para crear una copia del objeto y modificar únicamente la propiedad `precio`, preservando el objeto original.

---
