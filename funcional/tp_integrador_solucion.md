// ============================================================

// Alumno/a: [Cersosimo Vicente]

// Fecha: [03/06/2026]

// Descripción: [Gestion de catalogo de albunes]

// ============================================================

// Datos de entrada (constantes, no variables)
```js
const catalogo = [
  { id: 1, titulo: 'Abbey Road',          artista: 'The Beatles',
    genero: 'Rock',  anio: 1969, precio: 1200, disponible: true,
    canciones: ['Come Together','Something','Here Comes the Sun'] },


  { id: 2, titulo: 'Thriller',             artista: 'Michael Jackson',
    genero: 'Pop',   anio: 1982, precio: 1500, disponible: true,
    canciones: ['Thriller','Billie Jean','Beat It'] },


  { id: 3, titulo: 'Dark Side of the Moon',artista: 'Pink Floyd',
    genero: 'Rock',  anio: 1973, precio: 1350, disponible: false,
    canciones: ['Money','Time','Breathe'] },


  { id: 4, titulo: 'Rumours',              artista: 'Fleetwood Mac',
    genero: 'Rock',  anio: 1977, precio: 980,  disponible: true,
    canciones: ['Go Your Own Way','Dreams','The Chain'] },


  { id: 5, titulo: 'The Miseducation',     artista: 'Lauryn Hill',
    genero: 'RnB',   anio: 1998, precio: 1100, disponible: true,
    canciones: ['Ex-Factor','Doo Wop','Everything is Everything'] },
];


//mostrar datos originales en formato tabla
//console.table(catalogo)

//Filtrado con .filter()
//1. Retorna nuevo array con álbumes del género indicado
const filtrado_genero = (catalogo, genero) => catalogo.filter(album => album.genero === genero);
//console.log("Mostrar filtrados por genero")
//console.table(filtrado_genero(catalogo, 'Rock'))

//2. Retorna sólo los álbumes disponibles
const filtrado_disponible  = (catalogo, disponible) => catalogo.filter(album => album.disponible === disponible);
//console.log('Mostrar filtrado por disponibles');
//console.table(filtrado_disponible(catalogo, true));

//3. Filtrar por rango de precio
const filtrado_precio = (catalogo, min, max) => catalogo.filter(album => album.precio >= min && album.precio <= max);
//console.log('Mostrar filtrado por rango de precios')
//console.table(filtrado_precio(catalogo, 1000, 1400))

//Aplicar descuento a cada álbum
const aplicarDescuento = (catalogo, descuento) => catalogo.map(album => ({...album, precio: Math.round(album.precio * (1 - descuento / 100))}));
//console.log('Mostrar catalogo con descuento del 10%')
//console.table(aplicarDescuento(catalogo, 10))

//Extraer solo los títulos
const extraerTitulos = (catalogo) => catalogo.map(album => album.titulo);
//console.log('Mostrar solo titulos')
//console.table(extraerTitulos(catalogo))

// Suma total de precios
const sumaPrecios = catalogo.reduce((total, album) => total + album.precio, 0);
//console.log('Mostrar suma total de precios')
//console.log(sumaPrecios)

const precioPromedio = (catalogo) => sumaPrecios / catalogo.length;
//console.log('Mostrar precio promedio')
//console.log(precioPromedio(catalogo))

```
