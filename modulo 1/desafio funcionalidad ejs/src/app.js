
//Imports
const express = require('express');
const routerProdsEjs = require('./rutas/prodsEjs.js');
const routerVistaEjs = require('./rutas/vistaEjs.js');
const ejs = require('ejs');

const app = express();


//Puerto
const PORT = process.env.PORT || 8080;


//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Motor de plantilla ejs
app.set('view engine', 'ejs');
app.set('views', './views');


//Rutas
app.use("/", routerVistaEjs);
app.use('/api/productos', routerProdsEjs);



//Servidor
const server = app.listen(PORT, () => console.log(`Server listening on PORT ${server.address().port}`));
server.on('error', (err) => console.log(`Error: ${err}`));