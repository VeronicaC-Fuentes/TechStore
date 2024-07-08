// models/categoria.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categoria = sequelize.define('Categoria', {
  nombre: DataTypes.STRING,
  descripcion: DataTypes.STRING,
});

module.exports = Categoria;
