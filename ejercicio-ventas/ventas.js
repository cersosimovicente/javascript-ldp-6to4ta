//generar 10 productos aleatorio informatica

const productos = ["Laptop", "Mouse", "Teclado", "Monitor", "Impresora", 
    "Escaner", "Celular", "Tablet", "Auriculares", "Parlantes"];

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];



const generarVentasRandom = () =>{

  const mes = meses[(Math.floor(Math.random() * 12))];
  const producto = productos[Math.floor(Math.random() * 10)];
  const unidades = Math.floor(Math.random() * 10) + 1;
  const precioUnitario = Math.floor(Math.random() * 900) + 100;

    return {
        mes,
        producto,
        unidades,
        precioUnitario
    }
}


export const generarDatasetVentas = (cantidad) => {
    const dataset = [];
    for (let i = 0; i < cantidad; i++) {
        dataset.push(generarVentasRandom());
    }
    return dataset;

}



