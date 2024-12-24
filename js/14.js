// Arrays - Arreglos - listas

const numeros = [10,20,30,40,50];

console.log(numeros);

// const datos = ["Hola", true, null, 100];
// console.table(datos);

// Acceder a los valores de un arreglo
//console.log(datos[2]);

// Conocer la extesion de un arreglo
//console.log(numeros.length)

// Iterar arreglos
//numeros.forEach( function(numero){
 //   console.log(numero)
//})

numeros.push(5,6,7); // Agrega elemento al final
numeros.unshift(0,9,19); // Agrega elementos al inicio
numeros.pop(); // Elimina ultimo elemento
numeros.shift(); // Elimina primr elemeneto
numeros.splice(2, 1); // Elimina elementos (1) a partir del indice indicado (2)

// Rest Operator o Spread Operator
// Spread operator(...) lo que hace es copiar el array u objeto
const nuevoArreglo = [...numeros, 2000] // Equivalente a push pero es una mejor practica crear un nuevo array
console.log(nuevoArreglo)



const nuevoArreglo2 = [3000, ...numeros] // Equivalente a unshift pero es una mejor practica crear un nuevo array



