import { generarDataset, areas } from "./asistencia.js";
//test de la importacion
//console.log(generarDataset(10)); //OK

const registros = generarDataset(50);
//console.log(areas);

//- Promedio general de presentismo.
const promedioGeneral = (registros) => {
    const promedio = registros.reduce((acc, registro) => {
        return acc + registro.asistencias / registro.totalClases;
    }, 0);
    return promedio / registros.length;
}
//- Promedio general de presentismo.Modo imperativo
const promedioGeneralImp = (registros) => {
    let promedio = 0;
    for (let i = 0; i < registros.length; i++) {
        promedio += registros[i].asistencias / registros[i].totalClases;
    }
    return promedio / registros.length;
}
//test promedioGeneral()
//console.log(promedioGeneral(registros)); //OK

console.log(`Promedio de presentismo general: ${(promedioGeneral(registros) * 100).toFixed(2)}%`);

// 2. Promedio de presentismo por área
//const areas = [...new Set(registros.map(r => r.area))]; // Configura un arreglo con valores unicos
// console.log(`\nPromedio de presentismo por área:`);
// areas.forEach(area => {
//   const registrosArea = registros.filter(r => r.area === area);
//   const promedio = promedioGeneral(registrosArea) * 100;
//   console.log(`${area}: ${promedio.toFixed(2)}%`);
// });
const promedioPresentismoPorArea = areas.map(area => {
    const registrosArea = registros.filter(r => r.area === area);
    const promedio = promedioGeneral(registrosArea) * 100;
    return { area, promedio };
  });

// 3. Área con mejor presentismo
const presentismoPorArea = areas.map(area => {
    const registrosArea = registros.filter(r => r.area === area);
    //const promedio = registrosArea.reduce((acc, r) => acc + (r.asistencias / r.totalClases) * 100, 0) / registrosArea.length;
    const promedio = promedioGeneral(registrosArea) * 100;

    return { area, promedio };
  });

const mejorPresentismo = presentismoPorArea.sort((a, b) => b.promedio - a.promedio)[0];
console.log(`\n Área con mejor presentismo: ${mejorPresentismo.area} (${mejorPresentismo.promedio.toFixed(2)}%)`);


// 4. Promedio general de notas
const promedioNotas = registros.reduce((acc, r) => acc + r.nota, 0) / registros.length;
console.log(`Promedio general de notas: ${promedioNotas.toFixed(2)}`);

// 5. Promedio de notas por área
console.log(`Promedio de notas por área:`);
areas.forEach(area => {
  const registrosArea = registros.filter(r => r.area === area);
  const promedio = registrosArea.reduce((acc, r) => acc + r.nota, 0) / registrosArea.length;
  console.log(`${area}: ${promedio.toFixed(2)}`);
});

// 6. Área con mejor promedio de notas
const notasPorArea = areas.map(area => {
    const registrosArea = registros.filter(r => r.area === area);
    const promedio = registrosArea.reduce((acc, r) => acc + r.nota, 0) / registrosArea.length;
    return { area, promedio };
  });
  const mejorNota = notasPorArea.sort((a, b) => b.promedio - a.promedio)[0];
  console.log(`Área con mejor promedio de notas: ${mejorNota.area} (${mejorNota.promedio.toFixed(2)})`);


