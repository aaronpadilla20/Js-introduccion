// Array methods

const meses = ["Enero", "Febrero", "Marzo"]

const carrito = [
    {nombre : "Monitor 20 pulgadas", precio: 500},
    {nombre : "Television 50 pulgadas", precio: 300},
    {nombre : "Tablet", precio: 100},
]

// forEach
meses.forEach(function(mes) {
    if (mes == 'Enero') {
        console.log('Enero si existe')
    }
});

// Includes
let resultado = meses.includes("Enero")
console.log(resultado)

// Some ideal para arreglo de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre === "celular"
});
console.log(`resultado some inicial ${resultado}`)

// Some con arrow function
resultado = carrito.some(producto =>  producto.nombre === "celular");
console.log(resultado)

// Reduce
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0)
console.log(resultado)

// Filter
resultado = carrito.filter(function(producto) {
    return producto.precio < 500
})
console.log(resultado)


