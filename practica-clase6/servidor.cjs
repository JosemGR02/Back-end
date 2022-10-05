const contenedor = require('./contenedor/Contenedor.js');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const documento = new contenedor("productos.txt");
documento.obtenerTodos()
    .then((data) => console.log({ data }))
    .catch((error) => console.log({ error }));

documento.guardar({
    title: "Producto 3 lapicera",
    price: 200,
    thumbnail: "owwsssshxs",
    id: 3,
})
    .then((data) => console.log({ data }))
    .catch((error) => console.log({ error }));


const prodRandom = (limite) => {
    return parseInt(Math.random()*limite) + 1
}

//todos los productos

app.get('/productos',(solicitud,respuesta) => {
    documento.obtenerTodos()
        .then( listaProductos => {
            JSON.parse(listaProductos) 
        })
        .then( listaParseada => {
            respuesta.send(listaParseada )
        })
})

//productos randoms

app.get('/productoRandom',(solicitud,respuesta) => {
    documento.obtenerTodos()
    .then( listaProductos =>
        JSON.parse(listaProductos) 
    )
    .then( listaParseada =>
        listaParseada[prodRandom(listaParseada.length)]
    )
    .then( prodLista=>
        respuesta.send(prodLista) 
    )
})

const server = app.listen( PORT, () => console.log(`Server listening on PORT ${PORT}`));
