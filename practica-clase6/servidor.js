
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const fs = require('fs')



const contenedorProductos = new contenedor('productos')
contenedorProductos.guardar({
    title: 'zapatilla',
    price: 3000 ,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
    id: 2
})

const prodRandom=(limite)=>{
    return parseInt(Math.random()*limite) + 1
}

//todos los productos

app.get('/productos',(solicitud,respuesta)=>{
    documento.obtenerTodos()
        .then( listaProductos=>{
            JSON.parse(listaProductos) 
        })
        .then( listaParseada=>{
            response.json(listaParseada )
        })
})

//productos randoms

app.get('/productoRandom',(solicitud,respuesta)=>{
    documento.obtenerTodos()
    .then( listaProductos=>
        JSON.parse(lista) 
    )
    .then( listaParseada =>
        listaParseada[prodRandom(listaParseada.length)]
    )
    .then( prodLista=>
        respuesta.json(prodLista) 
    )
})


app.listen( PORT, () => console.log(`Server listening on PORT ${PORT}`));
const server = app.listen( PORT, () => console.log(`Server listening on PORT ${PORT}`));
