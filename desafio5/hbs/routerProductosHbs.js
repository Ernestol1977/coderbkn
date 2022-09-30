// Router de productos
const express = require('express');
const {Router} = express;
const router = Router();

const apiProductos = [];
let productsList = () => apiProductos;

router.get('/', (req,res) => {
    let product = apiProductos.verTodos()
    res.json(product)
})

router.get('/:id', (req,res) => {
    let product = apiProductos.verPorId(req.params.id)
    res.json(product)
})

router.post('/', (req,res) => {
    let product = apiProductos.guardarProducto(req.body)
    res.json(product)
})    

router.put('/:id', (req,res) => {
    let product = apiProductos.actualizarId(req.body, req.params.id)
    res.json(product)
})

router.delete('/:id', (req,res) => {
    let product = apiProductos.borrarId(req.params.id)
    res.json(product)
})

module.exports = router;