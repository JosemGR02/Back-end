
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

const primerUsuario = new Usuario (
    "Tomas", "Perez", [{titulo: "cancion de hielo y fuego", autor: "George Martin"}], ["gato", "tortuga"]
);


console.log(primerUsuario.ObtenerNombreCompleto());

console.log({cantidad: primerUsuario.contadorMascotas()});
primerUsuario.añadirMascota("hamster");

console.log({cantidad: primerUsuario.contadorMascotas()});

primerUsuario.añadirLibro("El campamento","Blue Jeans");

const nombreLibros = primerUsuario.ObtenerNombreLibro();

console.log(nombreLibros);

const segundoUsuario = new Usuario(
    "Mauricio", "jocó", [{ titulo: "El banquete", autor: "Platon" }], ["perro", "chimpance"]
);

console.log(segundoUsuario.ObtenerNombreLibro());


/*

Y a la hora de instanciar la clase solo con el nombre y apellido, así:

const primerUsuario = new Usuario("Tomas", "Perez");

De esta manera los encargados de modificar los atributos "libros" y "mascotas", son los métodos correspondientes, evitando así generar errores si a la hora de instanciar la clase se le pasa al constructor algo que no sea un array.


*/