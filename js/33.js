function obtenerEmpleados() {
    const url = "js/empleados.json"
    fetch(url)
        .then( resultado => resultado.json())
        .then( datos => console.log(datos));
}

obtenerEmpleados();