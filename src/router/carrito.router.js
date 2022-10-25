const express = require('express')

// const express = require('express')
const router = express.Router()
const CarritoManager = require('../controllers/carrito.manager')

const carritoManager = new CarritoManager('src/data/carritos.json')

// POST: '/' Crea un carrito y devuelve su id
route.post('/', async (req, res) => {
    try{
        res.send(await carritoManager.createCarrito())
    }
    catch (error){
        res.send(error)
    }
})

// DELETE: '/:id' - Vacía un carrito y lo elimina
route.delete('/:id', async (req, res) => {
    try{
        res.send(await carritoManager.deleteCarrito(req.carritoId))
    }
    catch (error){
        res.send(error)
    }
})

route.delete('/:id/productos/:id_prod', async (req, res) => {
    try{
        res.send(await carritoManager.deleteProduct(req.carritoId, req.productId))
    }
    catch (error){
        res.send(error)
    }
})

// GET: '/:id/productos' - Permite listar todos los productos guardados en el carrito
route.get('/:id/productos', async (req, res) => {
    try{
        res.send(await carritoManager.getCarritoProductos(req.carritoId))
    }
    catch (error){
        res.send(error)
    }
})

route.post('/:id/productos', async (req, res) => {
    try{
        res.send(await cm.addProduct(req.carritoId, req.body))
    }
    catch (error){
        res.send(error)
    }
})

module.exports = route