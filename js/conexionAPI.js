async function listarProductos() {
    try {
        const conexion = await fetch("http://localhost:3001/productos");
        const data = await conexion.json();
        console.log("Productos obtenidos correctamente:", data);
        return data; 
    } catch (error) {
        console.error("Error al listar productos:", error); 
    }
}

async function enviarProducto(nombre, precio, imagen){
    try {
        const conexion = await fetch('http://localhost:3001/productos',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                nombre: nombre, 
                precio: precio, 
                imagen: imagen
            })
        });
        const data = await conexion.json();
        return data;

    } catch (error) {
        alert(error);
    }
}
async function deleteProducto(id) {
    try {
        const response = await fetch(`http://localhost:3001/productos/${id}`, {
            method: 'DELETE',
        });
        
        if (response.ok) {
            console.log(`Producto con ID ${id} eliminado correctamente.`);
            return true;
        } else {
            console.error(`Error al eliminar el producto con ID ${id}`);
            return false;
        }
    } catch (error) {
        console.error("Error en deleteProducto:", error);
    }
}

export const conexionAPI = {
    listarProductos,enviarProducto,deleteProducto
};
