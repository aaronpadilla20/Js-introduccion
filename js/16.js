// Funciones y hosting
function suma(){
    console.log(10 + 10)
}

suma()

// Expresion de la función
//sumar2() -> Esto no ejecutaria correctamente la funcion debido a hosting
const sumar2 = function() {
    console.log(5  + 5)
}

sumar2()

// IIFE -> Encapsulamiento de variables es su objetivo principal
/*(function () {
    console.log("Esto es una funcion IIFE")
})();
*/

/* Hosting en JS se refiere a las etapas que pasa JS antes de su ejecucion siendo estas 2:
1. Registro o creacion -> Se elevan las funciones y las declaraciones de variables sin asignar su valor
2. Ejecucion -> El codigo se ejecuta y los valores son asignados a sus variables
*/
