
const { Router } = require('express');
const ApiProductos = require('../api/ApiProductos.js');


const routerProdsEjs = Router()


routerProdsEjs.get('/', (solicitud, respuesta) => {
    const productos = ApiProductos.obtenerTodos();
    respuesta.send({success: true, data: productos});
});

routerProdsEjs.get('/:id', (solicitud, respuesta) => {
    const {id} = solicitud.params;
    const producto = ApiProductos.obtenerXid (Number(id));

    if(!producto){
        return respuesta.send({success: false, data: undefined, message: "Producto no encontrado"});
    }

    respuesta.send({success: true, data: producto});
});

routerProdsEjs.post('/', (solicitud, respuesta) => {
    const {title, price, thumbnail} = solicitud.body;
    const nuevoProducto = ApiProductos.guardar ({ title, price, thumbnail });
    respuesta.send({success: true, data: {id: nuevoProducto.id } });
});

routerProdsEjs.put('/:id', (solicitud, respuesta) => {
    const {id} = solicitud.params;
    const {title, price, thumbnail} = solicitud.body;
    const prodActualizado = ApiProductos.actualizar(id, { title, price, thumbnail });
    respuesta.send({success: true, data: {updated: prodActualizado}});
});

routerProdsEjs.delete('/:id', (solicitud, respuesta) => {
    const id = solicitud.params.id;
    const producto = ApiProductos.eliminar(id);
    respuesta.send(producto);
})

module.exports = routerProdsEjs;
