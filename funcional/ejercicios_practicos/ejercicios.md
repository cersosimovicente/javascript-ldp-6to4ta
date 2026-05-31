# Inmutabilidad en variables, arreglos y objetos
## objetivo: El objetivo de estas actividades es practicar la creación de nuevas variables sin modificar las originales.

### 1) Inmutabilidad de variables
> Usa const para crear el valor original y crea uno nuevo sin reasignar la variable original.

1. Crea un nombre con const y hacer otra variable que sea una versión en mayúsculas.
2. Crea un número con const y calcula su doble en una nueva variable.

### 2) Inmutabilidad con arreglos
> Usa spread para crear un nuevo arreglo 

1. Dado el arreglo const albumes = ['Abbey Road', 'Thriller']; agrega el elemento 'Dark Side of the Moon'
2. En caso que tengas que modificar el arreglo const numeros = [1, 2, 3, 4, 5]; aumentando cada elemento en 1 sin destruir el arreglo original. Qué estrategia usarias?

### 3) Inmutabilidad con objetos
1. Crea un objeto persona y usa spread para actualizar solo su edad.
2. Crea un objeto nuevo que combine persona con una dirección.


### Funciones como Valores (First-Class Functions)
> En JavaScript las funciones son valores: pueden guardarse en variables, pasarse como argumentos a otras funciones y retornarse desde otras funciones.
1. Define una función que reciba un nombre y devuelva un saludo, y se almacene en una variable llamada `saludar`
   
#### Función pasada como argumento (callback) - Funcion de orden superior
1. Crea una función de orden superior llamada `operacion` que reciba otra función (fn) y un número (valor) como argumentos para ejecutarla. Luego, define una función callback llamada `triplicar` y úsala dentro de operacion para calcular y mostrar en consola el triplicado de 9.

####  Función que retorna otra funcion -  Funcion de orden superior - Factory Function
> Este tipo las funciones retornada se llaman  `Closure.`(porque mantiene acceso al entorno en el que nació). //se ve mejor con un ejemplo
```js
// FUNCIÓN FÁBRICA / DE ORDEN SUPERIOR
// (Es de orden superior porque retorna una función)
function crearSaludador(saludo) {
    
    // CLAUSURA (CLOSURE)
    // (Es la función retornada; "recuerda" la variable 'saludo')
    return function(nombre) {
        return `${saludo}, ${nombre}!`;
    };
}

// 'saludarHola' contiene la clausura con el saludo "Hola" guardado en memoria
const saludarHola = crearSaludador("Hola"); 
console.log(saludarHola("Carlos")); // "Hola, Carlos!"
```
