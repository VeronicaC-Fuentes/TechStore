// routes/categorias.js
const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

router.post('/categorias', categoriaController.crearCategoria);
router.get('/categorias', categoriaController.obtenerCategorias);
router.get('/categorias/:id', categoriaController.obtenerCategoriaPorId); 
router.put('/categorias/:id', categoriaController.actualizarCategoria);
router.delete('/categorias/:id', categoriaController.eliminarCategoria);

module.exports = router;
