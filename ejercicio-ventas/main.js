import { generarDatasetVentas } from './ventas.js';
const ventas = generarDatasetVentas(20);


//Total unidades vendidas en el año: 
let totalUnidadesVendidas = 0;
ventas.forEach((venta) => {
  totalUnidadesVendidas += venta.unidades;
});
console.log(`Total unidades vendidas en el año:  ${totalUnidadesVendidas}`);

//Ingreso total anual:
let ingresoTotalAnual = 0;
ventas.forEach((venta) => {
  ingresoTotalAnual += venta.precioUnitario * venta.unidades;
});
console.log(`Ingreso total anual:  ${ingresoTotalAnual}`);


const ingresosPorMes = {
    Enero: 0, Febrero: 0, Marzo: 0,
    Abril: 0, Mayo: 0, Junio: 0,
    Julio: 0, Agosto: 0, Septiembre: 0,
    Octubre: 0, Noviembre: 0, Diciembre: 0
  };



  ventas.forEach(venta => {
    const ingreso = venta.unidades * venta.precioUnitario;
    ingresosPorMes[venta.mes] += ingreso;
  });

// //   // Mostrar reporte
for (const mes in ingresosPorMes) {
    const ingreso = ingresosPorMes[mes];
    console.log(`${mes}: $${ingreso}`);
  }



// Mostrar el nombre del mes con mayor ingreso y el valor total.
let mayorIngreso = 0;
let mesMayorIngreso = '';
for (const mes in ingresosPorMes) {
  if (ingresosPorMes[mes] > mayorIngreso) {
    mayorIngreso = ingresosPorMes[mes];
    mesMayorIngreso = mes;
  }
}
console.log(`El mes con mayor ingreso es ${mesMayorIngreso} con un total de $${mayorIngreso}`);
