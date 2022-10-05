
import fs from "fs";

class contenedor {
    constructor(archivoNombre) {
    this.rutArchivo = `./practica-clase6/db/${archivoNombre}.txt`;
    }

    async obtenerTodos() {
        try {
            const archivo = await fs.promises.readFile(this.rutArchivo, "utf8");
            const elementos = JSON.parse(archivo);
            return elementos;
        } 
        catch (error) {
            if (error.code === "ENOENT") {
            await fs.promises.writeFile(this.rutArchivo, JSON.stringify([], null, 3));
            return [];
            }
            console.log(error);
        }
    }
    
    async guardar(element) {
        try {
            const elementos = await this.obtenerTodos();
            const id = elementos.length === 0 ? 1 : elementos [elementos.length - 1].id + 1;

            element.id = id;
            elementos.push(element);

            await fs.promises.writeFile(this.rutArchivo, JSON.stringify(elementos, null, 3));

            return element.id;

        } catch (error) {
            console.log(error);
        }
    }
}


export { contenedor };