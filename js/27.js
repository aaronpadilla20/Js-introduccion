// POO

// Object literal
const precio = {
    nombre : "Tablet",
    precio: 500,
}

// Object constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new Producto('Monitor curvo de 49"', 800);
const producto3 = new Producto("Tablet", 500)
console.log(producto2)

// Prototype - Crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`
}

console.log(producto2.formatearProducto())
console.log(producto3.formatearProducto())