// Async / await

function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout( () => {
            resolve('Los clientes fueron descargados');
        }, 5000)
    })
}

function descargarUltimosPedidos(){
    return new Promise( resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout( () => {
            resolve('Los pedidos fueron descargados');
        }, 3000)
    })
}

/* setInterval( function() {
    console.log("set time out...")
}, 5000);
*/ 

async function app(){
    try{
        const clientes = await descargarNuevosClientes();
        console.log(resultado);
    } catch(error){
        console.log(error);
    }
}

// Llamadas a multiples funciones que descargan datos
async function app2(){
    try{
        const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos() ]);
        console.log(resultado[0])
        console.log(resultado[1])
    } catch(error){
        console.log(error);
    }
}

app();

console.log("Este codigo no se bloquea")

app2();