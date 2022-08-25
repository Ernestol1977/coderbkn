class Usuario {

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
    
    getFullName() {
        return `Mi nombre es ${this.nombre} ${this.apellido}`;
    }

    addMascota(nuevaMascota) {
        this.mascotas.push(nuevaMascota);
    }
    
    countMascotas() {
        return this.mascotas.length;
    }

    addLibros(titulo, autor) {
        let libro = {titulo, autor};
        this.libros.push(libro);
    }

    getBookName() {
        let nombresLibro = this.libros.map((libro) => libro.titulo);
        return nombresLibro;
    }
};


let usuario1 = new Usuario('Ernesto', 'Londero');

// agregar
usuario1.addMascota('Elvis');
usuario1.addMascota('Frida');
usuario1.addLibros('El archivo de Sherlock Holmes', 'A. Conan Doyle');
usuario1.addLibros('Día Cero', 'Baldacci');

// mostrar
console.log(usuario1.getFullName());
console.log(usuario1.mascotas)
console.log(usuario1.countMascotas());
console.log(usuario1.libros);
console.log(usuario1.getBookName());

