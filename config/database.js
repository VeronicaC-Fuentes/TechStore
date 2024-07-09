// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('techstore_test', 'veronica', 'admin123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
