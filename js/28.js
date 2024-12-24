// Clases

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`
    }

    getPrecio(){
        return this.precio
    }
}

const producto2 = new Producto('Monitor curvo de 49"', 800);
const producto3 = new Producto("Tablet", 500);

console.log(producto2.formatearProducto())
console.log(producto3.getPrecio())

// Herencia

class Libro extends Producto {
    constructor(nombre, precio, isbn){
        super(nombre, precio)
        this.isbn = isbn;
    }

    formatearProducto(){
        return `${super.formatearProducto()} y su isbn es ${this.isbn}`
    }
}

const libro = new Libro("JavaScript la revolucion", 120, "9392829483948");
console.log(libro.formatearProducto())

