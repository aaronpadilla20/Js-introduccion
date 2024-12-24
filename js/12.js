"use strict"; // Correr JS en modo estricto forzando a escribir codigo bajo buenas practicas
// Objetos
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}

Object.freeze(producto); // Impide la modificacion del objeto
// producto.precio = 400; -> Esto marca error usando use strict
console.log(Object.isFrozen(producto)) // Verifica si un objeto esta sellado

const producto2 = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}

Object.seal(producto2); // Impide eliminar las propiedades o agregar nuevas pero si puedes editar el valor
producto2.precio = 400;
console.log(producto2)

