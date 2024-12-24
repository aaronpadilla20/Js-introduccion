// Funciones que retornan valores
//function sumar(n1,n2){
//return n1 + n2
//}

//const resultado = sumar(5, 10);
//console.log(resultado);

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return 1.5 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(400);
total = agregarCarrito(500);
console.log(total)

const totalAPagar = calcularImpuesto(total)
console.log(`Total a pagar ${totalAPagar}`)