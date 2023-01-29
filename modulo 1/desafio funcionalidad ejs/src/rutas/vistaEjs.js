
const { Router } = require('express');
const ApiProductos = require('.../api/ApiProductos.js');


const routerVistaEjs = Router()


routerVistaEjs.get('/personas', (req, res) => {
    res.render('index', { personas });
})

routerVistaEjs.post('/personas', (req, res) => {
    const { nombre, apellido, edad } = req.body;
    personas.push({ nombre, apellido, edad });
    res.redirect('/personas')
});
////////////////////////////////////////////////////


routerVistaEjs.get('/', (solicitud, respuesta)=> {
    respuesta.render('formularioProds', { productos })
})

routerVistaEjs.get('/productos', (solicitud, respuesta)=> {
    const productos = ApiProductos.obtenerTodos();
    respuesta.render("tablaProds", {productos: productos});
})

routerVistaEjs.post('/productos', (solicitud, respuesta)=> {
    const {title, price, thumbnail} = solicitud.body;
    ApiProductos.guardar ({ title, price, thumbnail });
    respuesta.redirect("/")
})

module.exports = routerVistaEjs;