

import { contenedor } from "./contenedor/Contenedor.js";


const documento = new contenedor("productos");

documento.obtenerTodos()
    .then((data) => console.log({ data }))
    .catch((error) => console.log({ error }));

documento.guardar({
    title: "Producto 3 lapicera",
    price: 200,
    thumbnail: "owwiwishhxs",
    id: 3,
})
    .then((data) => console.log({ data }))
    .catch((error) => console.log({ error }));




