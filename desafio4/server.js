// Servidor
const express = require('express');
const apiProductos = require('./api/productos.js');
const router = require('./routerProductos.js')

const app = express();

const {json, urlencoded} = express;
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api/productos', router)
app.use(express.static('public'));


const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${server.address().port}`);
})
server.on('error', error => console.log(`Error en servidor ${error}`));
