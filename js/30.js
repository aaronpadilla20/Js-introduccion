// Promises
const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;

    if (auth){
        resolve("Usuario autenticado"); // El promise se cumple
    } else {
        reject("No se pudo iniciar sesión"); // El promise no se cumple
    }
});

usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error))


