import { conexionAPI } from "./conexionAPI.js";

const formulario = document.getElementById('enviar_btn');
const limpiar = document.getElementById('limpiar_btn');

async function crearProducto(e) {
    e.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value; 
    const imagen = document.querySelector('[data-imagen]').value;
    try {
        await conexionAPI.enviarProducto(nombre, precio, imagen);
        console.log(nombre, precio, imagen)
        window.location.reload();
        alert('Producto creado con éxito');
    } catch (error) {
        alert(error);
    }
}
function limpiarForm(){
    alert('Formulario limpiado con éxito');
    formulario.reset();
    
}
formulario.addEventListener('click', (e) => {
    crearProducto(e);
});

limpiar.addEventListener('click',  limpiarForm);
