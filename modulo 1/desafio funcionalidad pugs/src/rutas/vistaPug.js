
import { Router } from 'express';
import { ApiProductos } from "../api/ApiProductos.js";


const routerVistaPug = Router()


routerVistaPug.get('/', (solicitud, respuesta)=> {
    respuesta.render('formProds.pug')
})

routerVistaPug.get('/productos', (solicitud, respuesta)=> {
    const productos = ApiProductos.obtenerTodos();
    respuesta.render('tableProds.pug', {productos: productos});
})

routerVistaPug.post('/productos', (solicitud, respuesta)=> {
    const {title, price, thumbnail} = solicitud.body;
    ApiProductos.guardar ({ title, price, thumbnail });
    respuesta.redirect("/")
})

export { routerVistaPug } 


////////////////////////////////////////////////////

routerVistaPug.get('/datos', (req, res) => {
    const { min, nivel, max, titulo } = req.query;
    const lista=["profesor",'tutor','alumno']
    const condicion=false
    res.render('index.pug', { min, nivel, max, titulo,lista,condicion });
})



