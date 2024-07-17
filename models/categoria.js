// models/categoria.js
const { DataTypes } = require('sequelize');
const sequelize = process.env.NODE_ENV === 'test' ? require('../config/databaseTest') : require('../config/database');

const Categoria = sequelize.define('Categoria', {
  nombre: DataTypes.STRING,
  descripcion: DataTypes.STRING,
});

module.exports = Categoria;
