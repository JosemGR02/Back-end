
//Imports
import express from "express";
import { routerProductos } from "./rutas/productos.js";
import { routerVistaPug } from "./rutas/vistaPug.js";

const app = express();

//Puerto
const PORT = process.env.PORT || 8080;


//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Motor de plantilla pug
app.set('view engine', 'pug');
app.set('views', './views');


//Rutas
app.use("/", routerVistaPug);
app.use('/api/productos', routerProductos);



//Servidor
const server = app.listen(PORT, () => console.log(`Server listening on PORT ${server.address().port}`));
server.on('error', (err) => console.log(`Error: ${err}`));