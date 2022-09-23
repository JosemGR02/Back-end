
import fs from "fs";

class contenedor {
    constructor(archivoNombre) {
    this.rutArchivo = `./src/db/${archivoNombre}.json`;
    }

    async obtenerTodos() {
        try {
            const file = await fs.promises.readFile(this.rutArchivo, "utf8");
            const elementos = JSON.parse(file);
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

    async guardado(element) {
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

    async obtenerXid(id) {
        try {
            const elementos = await this.obtenerTodos();

            const elementoEncontrado = elementos.find((element) => element.id == id);

            if (!elementoEncontrado) return null;

            return elementoEncontrado;

        } catch (error) {
            console.log(error);
        }
    }

    async borrarXid(id) {
        try {
            const elementos = await this.obtenerTodos();

            const elementoEncontrado = elementos.find((elemento) => elemento.id == id);

            if (!elementoEncontrado) return "Elemento no encontrado :|";

            const filtrarElementos = elementos.filter((elemento) => elemento.id != id);

            await fs.promises.writeFile(this.rutArchivo, JSON.stringify(filtrarElementos, null, 3)
            );
        } catch (error) {
            console.log(error);
        }
    }

    async eliminarTodos() {
        try {
            await fs.promises.writeFile(this.rutArchivo, JSON.stringify([], null, 3));
        }
        catch (error) {
            console.log(error);
        }
    }

    async actualizar({ id, newData }) {
        try {
            const elementos = await this.getAll();

            const elementEncontradoIndex = elementos.findIndex(
            (element) => element.id == id
            );

            if (elementEncontradoIndex === -1) return "Elemento no encontrado :|";
            const elementoEncontrado = elementos[elementEncontradoIndex];
        
            for (const key in newData) {
                if (elementoEncontrado.hasOwnProperty(key)) {
                    elementoEncontrado[key] = newData[key];
                }
            }

            await fs.promises.writeFile(
                this.rutArchivo,
                JSON.stringify(elementos, null, 3)
            );
        } 
        catch (error) {
            console.log(error);
        }
    }
}

export { contenedor };
