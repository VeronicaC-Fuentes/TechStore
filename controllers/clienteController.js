// controllers/clienteController.js
const Cliente = require('../models/cliente');

exports.registrarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obtenerCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    res.status(200).json(cliente);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.actualizarCliente = async (req, res) => {
  try {
    await Cliente.update(req.body, { where: { id: req.params.id } });
    res.status(200).json({ message: 'Cliente actualizado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.eliminarCliente = async (req, res) => {
  try {
    await Cliente.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: 'Cliente eliminado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

