// Metodos de propiedad
const reproductor = {
    reproducir : function() {
        console.log("reproduciendo cancion")
    },
    pausar : function(){
        console.log("Pausando....")
    },
    crearPlayList : function(nombre){
        console.log(`Creando la playlist ${nombre}`)
    },
    reproducirPlayList : function(nombre){
        console.log(`Reproduciendo la playlist ${nombre}`)
    }
}

reproductor.reproducir();
reproductor.pausar();
reproductor.crearPlayList("Heavy Metal");
reproductor.reproducirPlayList("Heavy Metal");