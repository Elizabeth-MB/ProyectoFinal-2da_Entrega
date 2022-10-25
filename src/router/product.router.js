const express = require('express')

const router = express.Router()

const ProductManager = require('../controllers/product.manager')

const productManager = new ProductManager('src/data/products.json')
const admin = true

const isAdmin = (req, res, next) => {
    if(admin)
    {
        next()
    }
    else{
        res.send({error: -1, descripcion: 'Usuario no autorizado'})
    }
}

// GET: '/:id?' - Permite listar todos los productos disponibles o un producto por su id (Disponible para usuarios y administradores)
route.get('/', async (req, res) => {
    try{
        res.send(await productManager.getProducts())
    }
    catch (error){
        res.send(error)
    }
})

route.get('/:id', async (req, res) => {
    try{
        res.send(await productManager.getProduct(req.id))
    }
    catch (error){
        res.send(error)
    }
})

// POST: '/' Para incorporar productos al listado (Disponible para administradores)
route.post('/', isAdmin, async (req, res) => {
    try{
        res.send(await productManager.createProduct(req.body))
    }
    catch (error){
        res.send(error)
    }
})

// PUT: '/:id' - Actualiza un producto por su id (Disponible para administradores)
route.put('/:id', isAdmin, async (req, res) => {
    try{
        res.send(await productManager.updateProduct(req.id, req.body))
    }
    catch (error){
        res.send(error)
    }
})

// DELETE: '/:id' - Borra un producto por su id (Disponible para administradores)
route.delete('/:id', isAdmin, async (req, res) => {
    try{
        res.send(await productManager.deleteProduct(req.id))
    }
    catch (error){
        res.send(error)
    }
})
module.exports = route