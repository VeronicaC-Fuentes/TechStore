// controllers/ordenController.js
const Orden = require('../models/orden');

exports.crearOrden = async (req, res) => {
  try {
    const orden = await Orden.create(req.body);
    res.status(201).json(orden);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obtenerOrden = async (req, res) => {
  try {
    const orden = await Orden.findByPk(req.params.id);
    res.status(200).json(orden);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.obtenerOrdenes = async (req, res) => {
  try {
    const ordenes = await Orden.findAll();
    res.status(200).json(ordenes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.actualizarOrden = async (req, res) => {
  try {
    await Orden.update(req.body, { where: { id: req.params.id } });
    res.status(200).json({ message: 'Orden actualizada' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.eliminarOrden = async (req, res) => {
  try {
    await Orden.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: 'Orden eliminada' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


