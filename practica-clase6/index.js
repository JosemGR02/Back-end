
import { contenedor } from "./contenedor/Contenedor.js";




const contenedorProductos = new contenedor("productos");

contenedorProductos.obtenerTodos()
    .then((data) => console.log({ data }))
    .catch((error) => console.log({ error }));

contenedorProductos.guardar({
    title: "Producto 3 lapicera",
    price: 200,
    thumbnail: "owwiwishhs",
    id: 3,
})
    .then((data) => console.log({ data }))
    .catch((error) => console.log({ error }));


