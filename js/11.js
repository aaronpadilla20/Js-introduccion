//Objetos
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}

// Destructuracion forma anterior
const precioProducto = producto.precio;
const nombreProducto2 = producto.nombreProducto;

// Destructuring
//const  {precio} = producto; // {propiedad} = variable = propiedad del objeto
//const {nombreProducto} = producto;

// Forma simplificada
const { precio, nombreProducto} = producto;


