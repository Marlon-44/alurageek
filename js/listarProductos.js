import {conexionAPI} from "./conexionAPI.js";



export default function createCard(image, name, price,id){
    const producto = document.createElement("li");
    producto.className = 'producto__item';
    producto.innerHTML = `<div class="card">
                                <img class="card__imagen" src="${image}" alt="">
                                <h3>${name}</h3>
                                <div class="card--price-delete">
                                    <p>$ ${price}</p>
                                    <button class="card__boton-eliminar" data-delete>
                                        <img src="assets/icon__trash.svg" alt="Eliminar producto" class="card__icono" >
                                    </button>
                                </div>
                                
                            </div>`;

    const deleteButton = producto.querySelector('[data-delete]');
    deleteButton.addEventListener('click', async () => {
        const isDeleted = await conexionAPI.deleteProducto(id);
        if (isDeleted) {
            producto.remove(); // Elimina el elemento de la lista si la API confirma la eliminación
            alert("Producto eliminado con éxito");
        } else {
            alert("No se pudo eliminar el producto");
        }
    });

    return producto;

    
}   

const lista = document.querySelector("[data-lista]");


async function getProductos(){
    try {
        const productos = await conexionAPI.listarProductos();
        productos.forEach(producto => lista.appendChild(createCard(producto.imagen, producto.nombre, producto.precio,producto.id)));
    } catch (error) {
        alert( error);
    }
    
}

getProductos();