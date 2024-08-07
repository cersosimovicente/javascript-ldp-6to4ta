import products from "./datos.js";

//variables globale
const elementos = {
  productoTabla: document.querySelector("#productosTabla"),
  productoId: document.querySelector("#productoId"),
  productoNombre: document.querySelector("#nombreProducto"),
  productoDescripcion: document.querySelector("#descripcionProducto"),
  productoPrecio: document.querySelector("#precioProducto"),
  prductoCantidad: document.querySelector("#cantidadProducto"),
  productoGuardar: document.querySelector("#productoGuardar"),
};

let productos = [];

const renderTable = () => {
  productos = products;
  elementos.productoTabla.innerHTML = productos
    .map(
      (producto) => `
    
    <tr>
          <th>${producto.id}</th>
          <td>${producto.nombre}</td>
          <td>${producto.descripcion}</td>
          <td>${producto.precio}</td>
          <td>${producto.cantidad}</td>
          <td>
                <button type="submit" id="idEditar" class="btn btn-warning">Editar</button>
                <button type="submit" class="btn btn-danger">Eliminar</button>
          </td>
    </tr>
  
  
  `
    ).join('')
    
};

elementos.productoGuardar.addEventListener("click", (e) => {
  e.preventDefault();
  const producto = {
    id: elementos.productoId.value,
    nombre: elementos.productoNombre.value,
    descripcion: elementos.productoDescripcion.value,
    precio: elementos.productoPrecio.value,
    cantidad: elementos.prductoCantidad.value,
  };
  producto.id ? actualizarProducto(producto) : guardarProducto(producto);
});

const actualizarProducto = (producto) => {

};

const guardarProducto = (producto) => {
  producto.id = productos.length + 1;
  productos.push(producto);
  renderTable();
};


renderTable();

const btnEditar = document.querySelector('#idEditar');

btnEditar.addEventListener('click', (e)=>{
  console.log(e.target.parentElement);
})


