// models/cliente.js
const { DataTypes } = require('sequelize');
const sequelize = process.env.NODE_ENV === 'test' ? require('../config/databaseTest') : require('../config/database');

const Cliente = sequelize.define('Cliente', {
  nombre: DataTypes.STRING,
  correoElectronico: DataTypes.STRING,
  numeroTelefono: DataTypes.STRING,
  direccionEnvio: DataTypes.STRING,
});

module.exports = Cliente;


