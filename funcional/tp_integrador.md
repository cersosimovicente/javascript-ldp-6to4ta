# 1. Introducción
Este trabajo integrador presenta el paradigma de programación funcional en JavaScript, aplicado al desarrollo de un sistema de gestión de una tienda de música digital. A través de este proyecto se demuestran los principios fundamentales de la programación funcional de manera práctica y coherente.

## Características del Proyecto

El proyecto simula un catálogo de álbumes y canciones que permite:

* **Consultar y filtrar** el catálogo usando funciones puras.
* **Transformar y procesar** datos sin mutar el estado original.
* **Calcular estadísticas** con `reduce` y composición de funciones.
* **Gestionar carritos de compra** con datos inmutables.
* **Aplicar descuentos y generar reportes** mediante pipelines funcionales.
  
# 2. Desarrollo del Proyecto: Tienda de Música Digital
## 2.1 Datos del Catálogo (Estructuras Inmutables)

En programación funcional los datos de origen se declaran como constantes y nunca se modifican. Todas las operaciones producen nuevas estructuras derivadas.

```javascript
// Catálogo inmutable
const catalogo = [
  { 
    id: 1, 
    titulo: 'Abbey Road', 
    artista: 'The Beatles', 
    genero: 'Rock', 
    anio: 1969, 
    precio: 1200, 
    disponible: true, 
    canciones: ['Come Together', 'Something', 'Here Comes the Sun'] 
  },
  { 
    id: 2, 
    titulo: 'Thriller', 
    artista: 'Michael Jackson', 
    genero: 'Pop', 
    anio: 1982, 
    precio: 1500, 
    disponible: true, 
    canciones: ['Thriller', 'Billie Jean', 'Beat It'] 
  },
  { 
    id: 3, 
    titulo: 'Dark Side of the Moon', 
    artista: 'Pink Floyd', 
    genero: 'Rock', 
    anio: 1973, 
    precio: 1350, 
    disponible: false, 
    canciones: ['Money', 'Time', 'Breathe'] 
  },
  { 
    id: 4, 
    titulo: 'Rumours', 
    artista: 'Fleetwood Mac', 
    genero: 'Rock', 
    anio: 1980, 
    precio: 980, 
    disponible: true, 
    canciones: ['Go Your Own Way', 'Dreams', 'The Chain'] 
  },
  { 
    id: 5, 
    titulo: 'The Miseducation', 
    artista: 'Lauryn Hill', 
    genero: 'RnB', 
    anio: 1998, 
    precio: 1100, 
    disponible: true, 
    canciones: ['Ex-Factor', 'Doo Wop', 'Everything is Everything'] 
  }
];
```
## 2.2 Funciones Puras de Consulta
Cada función recibe datos y retorna un resultado sin modificar nada. Son predecibles, testeables y reutilizables.
### 2.2.1 Filtrado con .filter() 
1. Retorna nuevo array con álbumes del género indicado
2. Retorna sólo los álbumes disponibles
3. Filtrar por rango de precio
### 2.2.2 Transformación con .map()
1. Aplicar descuento a cada álbum — retorna NUEVO array, no modifica catalogo
2. Extraer sólo títulos del catálogo
### 2.2.3 Acumulación con .reduce()
1. Calcular suma total de precios
2. Precio promedio
3. Agrupar por género usando reduce
4. Contar álbumes por artista

