// Router de productos
const express = require('express');
const ApiProductos = require('./api/productos.js');
const {Router} = express;
const router = Router();
const product = require('./api/productos.js')

const apiProductos = new ApiProductos();


router.get('/', (req,res) => {
    res.json(apiProductos.verTodos())
})

router.get('/:id', (req,res) => {
    res.json(apiProductos.verPorId(req.params.id))
})

router.post('/', (req,res) => {
    res.json(apiProductos.guardarProducto(req.body))
})    

router.put('/:id', (req,res) => {
    res.json(apiProductos.actualizarId(req.body, req.params.id))
})

router.delete('/:id', (req,res) => {
    res.json(apiProductos.borrarId(req.params.id))
})

module.exports = router;