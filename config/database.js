// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('techstore', 'veronica', 'admin123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
