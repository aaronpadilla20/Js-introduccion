// Iteradores

// For loop
/*for(let i = 1; i < 100; i++){
    if ( i % 2 === 0){
        console.log(`El numero ${i} es par`)
    } else {
        console.log(`El numero ${i} es impar`)
    }
}
*/

const carrito = [
    {nombre : "Monitor 20 pulgadas", precio: 500},
    {nombre : "Television 50 pulgadas", precio: 300},
    {nombre : "Tablet", precio: 100},
]

for(let i = 0; i < carrito.length; i++){
    console.log(`Producto: ${carrito[i].nombre}\n Precio: ${carrito[i].precio}`)
}

// While loop
/* let i = 1; // Valor inicial
while(i <= 100){ // Condicion
    if(i % 2 == 0){
        console.log(`El numero ${i} es par`)
    } else {
        console.log(`El numero ${i} es impar`)
    }
}
*/ 

// Do while
let i = 0;
do {
    console.log("Do while")
    i++;
} while (i < 10);




