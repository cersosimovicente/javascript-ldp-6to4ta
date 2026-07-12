Convertir a funcion flecha
```js
function calcularPrecioTotal(precio, impuesto) {
    const totalImpuesto = precio * impuesto;
    return precio + totalImpuesto;
}
//solucion
const calcularPrecioTotal = (precio, impuesto) => precio + (precio * impuesto);
// Invocación con un producto de $1000 y un impuesto del 21% (0.21)
console.log("Precio total con impuesto:", calcularPrecioTotal(1000, 0.21)); 
// Resultado en consola: 1200
```
convertir a funcion pura usando filter
```js
const productosValidos = [];
function filtrarCarrito(productos, precioMaximo) {
    productos.forEach(function(prod) {
        if (prod.stock > 0 && prod.precio < precioMaximo) {
            productosValidos.push(prod);
        }
    });
    return productosValidos;
//solucion
const filtrarCarrito = (productos, precioMaximo) => 
  productos.filter(prod => prod.stock > 0 && prod.precio < precioMaximo);

// Arreglo de prueba (datos de entrada)
const carrito = [
  { nombre: "Teclado", stock: 5, precio: 150 },
  { nombre: "Mouse", stock: 0, precio: 50 },    // Sin stock (no pasa)
  { nombre: "Monitor", stock: 2, precio: 400 }, // Supera el precio máximo (no pasa)
  { nombre: "Pad", stock: 10, precio: 30 }
];

// Invocación filtrando productos con precio menor a $200
console.log("Productos válidos:", filtrarCarrito(carrito, 200));
/* 
Resultado en consola:
[
  { nombre: 'Teclado', stock: 5, precio: 150 },
  { nombre: 'Pad', stock: 10, precio: 30 }
]
*/

```
