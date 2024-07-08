// routes/productos.js
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.post('/productos', productoController.crearProducto);
router.get('/productos/:id', productoController.obtenerProducto);
router.put('/productos/:id', productoController.actualizarProducto);
router.delete('/productos/:id', productoController.eliminarProducto);

module.exports = router;