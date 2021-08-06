
const carrito = document.querySelector('#carrito');
const listaProductos = document.querySelector('#lista-producto');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 


let articulosCarrito = [];
cargarEventListeners();
function cargarEventListeners() { 
     listaProductos.addEventListener('click', agregarProducto);
    
     carrito.addEventListener('click', eliminarProducto);
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
     
     document.addEventListener('DOMContentLoaded', () => {
          articulosCarrito = JSON.parse( localStorage.getItem('carrito') ) || []  ;          
          carritoHTML();
     });
}
function agregarProducto(e) {     
     e.preventDefault();
     if(e.target.classList.contains('agregar-carrito')) {
          const producto = e.target.parentElement.parentElement;        
          leerDatosCurso(producto);
          console.log(e.target.parentElement.parentElement)
     }
}
function leerDatosCurso(producto) {
     const infoProducto = {
          imagen: producto.querySelector('img').src,
          titulo: producto.querySelector('h3').textContent,
          precio: producto.querySelector('p span').textContent,
          id: producto.querySelector('a').getAttribute('data-id'), 
          cantidad: 1
     }


     if( articulosCarrito.some( producto => producto.id === infoProducto.id ) ) { 
          const productos = articulosCarrito.map( producto => {
               if( producto.id === infoProducto.id ) {
                    let cantidad = parseInt(producto.cantidad);
                    cantidad++
                    producto.cantidad =  cantidad;
                    return producto;
               } else {
                    return producto;
               }
          })
          articulosCarrito = [...productos];
     }  else {
         articulosCarrito = [...articulosCarrito, infoProducto];
          //articulosCarrito.push(infoProducto)
     }
     

     carritoHTML();
}
function eliminarProducto(e) {
     e.preventDefault();
     if(e.target.classList.contains('borrar') ) {
          const producto = e.target.parentElement.parentElement;
          const productoId = producto.querySelector('a').getAttribute('data-id');          
          articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);

          carritoHTML();  
     }
}
function carritoHTML() {

     vaciarCarrito();

     articulosCarrito.forEach(producto => {
          const row = document.createElement('tr');
          row.innerHTML = `
               <td>  
                    <img src="${producto.imagen}" width=100>
               </td>
               <td>${producto.titulo}</td>
               <td>${producto.precio}</td>
               <td>${producto.cantidad} </td>
               <td><a href="#" class="borrar" data-id="${producto.id}">X</a></td>
             
          `;
          contenedorCarrito.appendChild(row);
     });

 
     sincronizarStorage();

}
function sincronizarStorage() {
     localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}
function vaciarCarrito() {    
     while(contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
      }
}

