// controllers/categoriaController.js
const Categoria = require('../models/categoria');

exports.crearCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.create(req.body);
    res.status(201).json(categoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obtenerCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obtenerCategoriaPorId = async (req, res) => { 
  try {
    const categoria = await Categoria.findByPk(req.params.id);
    if (categoria) {
      res.status(200).json(categoria);
    } else {
      res.status(404).json({ message: 'Categoría no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.actualizarCategoria = async (req, res) => {
  try {
    await Categoria.update(req.body, { where: { id: req.params.id } });
    res.status(200).json({ message: 'Categoría actualizada' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.eliminarCategoria = async (req, res) => {
  try {
    await Categoria.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: 'Categoría eliminada' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

