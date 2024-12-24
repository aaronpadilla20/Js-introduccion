// forEach y Map

const carrito = [
    {nombre : "Monitor 20 pulgadas", precio: 500},
    {nombre : "Television 50 pulgadas", precio: 300},
    {nombre : "Tablet", precio: 100},
]

// forEach - para consola o iterar y hacer operaciones sobre cada elemento
carrito.forEach(producto => console.log(`Nombre producto ${producto.nombre}`))

// map - lista comprensiva
const nuevoArrelgo = carrito.map( producto => producto.nombre)