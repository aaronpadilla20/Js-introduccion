// Arrow function
const suma = (num1, num2) => {
    return num1 + num2;
}

const resultado = suma(5,10)
console.log(resultado)

// Estructura basica
const aprendiendo = () => {
    console.log("Cuerpo basico")
}

aprendiendo()

const meses = ["Enero", "Febrero", "Marzo"]

// forEach array method
meses.forEach(mes => {
    if (mes == 'Enero') {
        console.log('Enero si existe')
    }
});


// Some method
resultado = carrito.some( producto => producto.nombre === "celular" );


// Reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0)

