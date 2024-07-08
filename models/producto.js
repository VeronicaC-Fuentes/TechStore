// models/producto.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Producto = sequelize.define('Producto', {
  nombre: DataTypes.STRING,
  descripcion: DataTypes.STRING,
  precio: DataTypes.FLOAT,
  cantidadEnStock: DataTypes.INTEGER,
  categoria: DataTypes.STRING,
});

module.exports = Producto;


