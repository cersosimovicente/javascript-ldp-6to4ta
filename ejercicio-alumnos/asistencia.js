export const areas = ["Programacion", "Redes", "Sistemas Operativos", "Bases de Datos", "Desarrollo Web"];

const meses = ["Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"];

const nombres = ["Juan Pérez", "Ana Gómez", "Luis Ramírez", "Sofía Torres", "Carlos Ruiz",
    "Laura Méndez", "Pedro Rodríguez", "Marta Sánchez", "Javier López", "Elena Martínez",
    "David Gutiérrez", "Carmen Fernández", "Pablo Díaz", "Rosa Ruiz", "Jorge García"];

//Registro
// nombre: 
// area: 
// mes: 
// asistencias:
// totalClases:
// nota:


//Generar registro aleatorios
const generarRegistro = () => {
    const nombre = nombres[Math.floor(Math.random() * nombres.length)];
    const area = areas[Math.floor(Math.random() * areas.length)];
    const mes = meses[Math.floor(Math.random() * meses.length)];
    const asistencias = Math.floor(Math.random() * 20) + 1;
    const totalClases = 20;
    const nota = Math.floor(Math.random() * 10) + 1;
    return {
        nombre,
        area,
        mes,
        asistencias,
        totalClases,
        nota    
    };
}
//test generarRegistro()
//console.log(generarRegistro()); //OK

//Generar dataSet y exportarlo
export const generarDataset = (cantidad) => {
    const dataset = [];
    for (let i = 0; i < cantidad; i++) {
        dataset.push(generarRegistro());
    }
    return dataset;
}

//test generarDataset()
//console.log(generarDataset(10)); //OK
