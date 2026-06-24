# Examen de Paradigma Funcional.

## 1) Verdadera (V) o Falsa (F) *(2 pts)*

* **1.1** Una función pura puede modificar una variable declarada fuera de su cuerpo, siempre que no se note en el resultado. **(__)**
* **1.2** El método `.filter()` modifica el array original eliminando los elementos que no cumplen la condición. **(__)**
* **1.3** El método `.map()` siempre retorna un array de la misma longitud que el array original. **(__)**

---

## 2) Análisis de Código *(3 pts)*

Analice el código. Contiene errores que violan el paradigma funcional (mutaciones o impurezas).

```javascript
const precios =;

function duplicarPrecios(lista) {
  for (let i = 0; i < lista.length; i++) {
    lista[i] = lista[i] * 2;
  }
  return lista;
}
```

**¿Por qué es un error?**
_Escriba su respuesta aquí..._

**Código corregido:**
```javascript
// Escriba el código corregido aquí
```

---

## 3) Convertir a función pura *(5 pts)*

Modifique las siguientes funciones para que cumplan con los principios del paradigma funcional:

### Función 1
```javascript
const carrito = [];
function agregarProducto(producto) {
  carrito.push(producto);
  return carrito;
}
```

### Función 2
```javascript
function aplicarDescuento(producto, porcentaje) {
  producto.precio = producto.precio - (producto.precio * porcentaje / 100);
  return producto;
}
```
