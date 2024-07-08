// controllers/productoController.js
const Producto = require('../models/producto');

exports.crearProducto = async (req, res) => {
  try {
    const producto = await Producto.create(req.body);
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obtenerProducto = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    res.status(200).json(producto);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.actualizarProducto = async (req, res) => {
  try {
    await Producto.update(req.body, { where: { id: req.params.id } });
    res.status(200).json({ message: 'Producto actualizado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.eliminarProducto = async (req, res) => {
  try {
    await Producto.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: 'Producto eliminado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


