### Ejercicios 1
1. Crear una función que reciba como parametro una cadena de caracteres y retorne la cadena invertida en mayuscula

```js
function invertir(cadena){
    // cadena = cadena.split('') //[ 'h', 'o', 'l', 'a' ]
    // cadena.reverse(); //[ 'a', 'l', 'o', 'h' ]
    // cadena = cadena.join(''); //aloh
    // cadena = cadena.toUpperCase(); //ALOH
    return cadena.split('').reverse().join('').toUpperCase();
}
console.log(invertir('hola'));
```
```js
const invertir2 = cadena => cadena.split('').reverse().join('').toUpperCase();
console.log(invertir2('hola'));
```
2. Crear una función que tome como parámetro un arreglo de números, retornar la multiplicación del número menor del arreglo y el número mayor del arreglo.
```js
function multiplicar(arreglo){
    const min = Math.min(...arreglo);
    const max = Math.max(...arreglo);
    return min * max;
}
console.log(multiplicar([2,5,2]));
```
```js
const multiplicar2 = arreglo => Math.min(...arreglo) * Math.max(...arreglo);
console.log(multiplicar2([2, 5, 2]));
```
3. Crear una función con el nombre de booleanoArray() que tome dos arreglos de números como parámetro y que retorne un booleano, unir los dos arreglos en uno solo, si la longitud de el nuevo arreglo es mayor o igual a 10 que retorne true si es menor a 10 que retorne false.
```js
function booleanoArray(arreglo1, arreglo2){
    const arreglo = [...arreglo1, ...arreglo2];
    return arreglo.length >= 10;
}
console.log(booleanoArray([2, 5, 2], [1, 5, 3]));
```
```js
const booleanoArray2 = (arreglo1, arreglo2) => [...arreglo1, ...arreglo2].length >= 10;
console.log(booleanoArray2([2, 5, 2, 5, 9, 1, 3], [1, 5, 3]));
```
4. Crear una función con el nombre de funcionArray() que tome dos arreglos de números enteros como parámetro y retornar un único arreglo, cada elemento del arreglo debe estar multiplicado por dos. ej: [2,5,2][1,5,3] -> [4,10,4,2,10,6].
```js
function funcionArray(arreglo1, arreglo2){
    const arreglo = [...arreglo1, ...arreglo2];
    for(let i = 0; i < arreglo.length; i++){
        arreglo[i] *= 2;
    }
    return arreglo;
}
console.log(funcionArray([2, 5, 2], [1, 5, 3]));
```
```js
const funcionArray2 = (arreglo1, arreglo2) => {
    const arreglo = [...arreglo1, ...arreglo2];
    for(let i = 0; i < arreglo.length; i++){
        arreglo[i] *= 2;
    }
    return arreglo;
}
console.log(funcionArray2([2, 5, 2], [1, 5, 3]));
```
```js
const funcionArray3 = (arreglo1, arreglo2) => arreglo1.concat(arreglo2).map(numero => numero * 2);
console.log(funcionArray3([2, 5, 2], [1, 5, 3]));
```