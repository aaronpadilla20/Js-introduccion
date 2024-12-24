// Objetos - diccionarios

const nombreProducto = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}

console.log(producto)
console.log(producto.nombreProducto) // Sintaxis de punto para obtener valor de propiedad nombreProducto
console.log(producto["precio"])

// Agregar propiedad
producto.descripcion = "Descripcion";

// Elimina propiedad
delete producto.precio;