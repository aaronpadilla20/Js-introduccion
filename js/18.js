function suma(numero1, numero2){
    console.log(numero1 + numero2)
}

suma(5, 10)

// Expresion de la función
const sumar2 = function(numero1, numero2) {
    console.log(numero1 + numero2)
}

sumar2(10, 100)

// Parametros por default
function suma3(numero1 = 0, numero2 = 0){
    console.log(numero1 + numero2)
}

suma3(5, 10)
