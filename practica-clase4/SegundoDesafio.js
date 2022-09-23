
import { contenedor } from "./contenedor/Contenedor.js";

const contenedorProductos = new contenedor("productos");

contenedorProductos.obtenerTodos()
    .then((data) => console.log({ data }))
    .catch((error) => console.log({ error }));

contenedorProductos.guardado({
    title: "Producto 1 ekdvcy",
    price: 3100,
    thumbnail: "eqrqrqtt",
})
    .then((data) => console.log({ data }))
    .catch((error) => console.log({ error }));

contenedorProductos.obtenerXid(1)
    .then((data) => console.log({ data }))
    .catch((error) => console.log({ error }));

contenedorProductos.borrarXid(3).then((data) => console.log({ data }));

contenedorProductos.eliminarTodos();

const productos = [
    {
        title: "Producto 1 ekdvcy",
        price: 3100,
        thumbnail: "eqrqrqtt",
    },
    {
        title: "Producto 2 jvbidte",
        price: 1500,
        thumbnail: "kssjjsj",
    },
    {
        title: "Producto 3 kfjbls",
        price: 4300,
        thumbnail: "wywuwuw",
    },
];

const metodosPrueba = async () => {

    try {
        const idProducto1 = await contenedorProductos.guardado(productos[0]);
        const idProducto2 = await contenedorProductos.guardado(productos[1]);
        const idProducto3 = await contenedorProductos.guardado(productos[2]);

        const productos = await contenedorProductos.obtenerXid(1);
        console.log({ productos });
    } 

    catch (error) {
            console.log({ error });
        }
    };

metodosPrueba();

contenedorProductos.actualizar({
    id: 2,
    newData: { title: "Producto 2 jvbidte", price: 1500 },
});
