
class Usuario {
    constructor(nombre, apellido,){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    ObtenerNombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }

    añadirMascota(mascota){
        this.mascotas.push(mascota)
    }

    contadorMascotas(){
        return this.mascotas.length;
    }

    añadirLibro(titulo, autor){
        this.libros.push({titulo, autor})
    }
    ObtenerNombreLibro() {
        return this.libros.map(libro => libro.titulo);
    }

    /*  forEach
    ObtenerNombreLibro(){
        const nombreLibros = []

        this.libros.forEach((libro) => nombreLibros.push(libro.titulo));

        return nombreLibros;
    }*/
}

const primerUsuario = new Usuario ("Tomas", "Perez");
primerUsuario.añadirLibro("cancion de hielo y fuego","George Martin");
primerUsuario.añadirMascota("gato", "tortuga");


console.log(primerUsuario.ObtenerNombreCompleto());

console.log({cantidad: primerUsuario.contadorMascotas()});
primerUsuario.añadirMascota("hamster");

console.log({cantidad: primerUsuario.contadorMascotas()});

primerUsuario.añadirLibro("El campamento","Blue Jeans");

const nombreLibros = primerUsuario.ObtenerNombreLibro();

console.log(nombreLibros);

const segundoUsuario = new Usuario("Mauricio", "jocó");
segundoUsuario.añadirLibro("El banquete","Platon");
segundoUsuario.añadirMascota("perro", "chimpance");

console.log(segundoUsuario.ObtenerNombreLibro());


/*
const primerUsuario = new Usuario (
    "Tomas", "Perez", [{titulo: "cancion de hielo y fuego", autor: "George Martin"}], ["gato", "tortuga"]
);
*/