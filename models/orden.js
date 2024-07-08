// models/orden.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Orden = sequelize.define('Orden', {
  idCliente: DataTypes.INTEGER,
  productosComprados: DataTypes.JSON,
  totalOrden: DataTypes.FLOAT,
  estado: DataTypes.STRING,
});

module.exports = Orden;