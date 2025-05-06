# Enunciado: Estadísticas de Presentismo de Alumnos

Una institución educativa quiere analizar el desempeño de los estudiantes en diferentes áreas del departamento de Informática. Para eso, se dispone de un conjunto de registros mensuales por alumno.
Cada objeto representa el rendimiento de un alumno en un área específica durante un mes, con la siguiente estructura:

```js
{
  nombre: "Juan Pérez",
  area: "Programación",
  mes: "Marzo",
  asistencias: 18,       // cantidad de clases asistidas
  totalClases: 20,       // total de clases programadas
  nota: 8.5              // calificación final del mes (de 1 a 10)
}
```
Las áreas disponibles son:
- `Programación`
- `Redes`
- `Sistemas Operativos`
- `Bases de Datos`
- `Desarrollo Web`

## Objetivos:
1. Crear una función `generarRegistro()` que devuelva un objeto aleatorio con los campos definidos.
2. Crear una función `generarDataset(cantidad)` que genere un array con la cantidad de registros deseada.

## Reportes requeridos:
- **Promedio general de presentismo.**
  - Para realizar esto, primero calcula el presentismo individual porcentaje_individual=asistencias / totalClases
  - Suma todos esos porcentajes individuales.
  - Divide esa suma por la cantidad total de registros para obtener el promedio general (en forma decimal).

- **Promedio de presentismo por área.**
  - Primero toma todos los registros de asistencia que correspondan a esa área.
  - Calcular el porcentaje de asistencia por cada alumno.
  - Sacar el promedio de esos porcentajes

     Ejemplo con datos simplificados:

     Supongamos que en el área Redes tenemos estos 3 registros:

     ```js
    [
      { nombre: "Ana", asistencias: 18, totalClases: 20 }, // 90%
      { nombre: "Luis", asistencias: 16, totalClases: 20 }, // 80%
      { nombre: "Sofía", asistencias: 20, totalClases: 20 } // 100%
    ]   
    ```
    Los porcentajes individuales de presentismo son:

    Ana: 90%

    Luis: 80%

    Sofía: 100%

    Entonces el promedio de presentismo para el área Redes es: 90+80+100/3 = 90

- **Área con mejor presentismo promedio.**

- **Promedio general de notas.**

- **Promedio de notas por área.**

- **Área con mejor promedio de notas.**

## Ejemplo de salida esperada en consola:
```bash
Promedio de presentismo general: 91.2%  

Promedio de presentismo por área:
Programación: 88.7%
Redes: 92.5%
Sistemas Operativos: 89.1%
Bases de Datos: 95.3%
Desarrollo Web: 90.0%
Área con mejor presentismo: Bases de Datos (95.3%)

Promedio general de notas: 8.32

Promedio de notas por área:
Programación: 8.0
Redes: 8.4
Sistemas Operativos: 8.1
Bases de Datos: 8.7
Desarrollo Web: 8.2
Área con mejor nota promedio: Bases de Datos (8.7)
```

## Requerimientos técnicos:
Utilizar **métodos de arreglo** como:
- `forEach`
- `map`
- `filter`
- `reduce`
- `sort`
- `find`

### Separar el código en dos archivos:

- asistencias.js: Contiene funciones para generar datos aleatorios.

- main.js: Realiza los cálculos y muestra el reporte por consola.

### Podes investigar los métodos en el siguiente link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array






