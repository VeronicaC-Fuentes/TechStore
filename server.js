// server.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');

// Importar rutas
const productoRoutes = require('./routes/productos');
const clienteRoutes = require('./routes/clientes');
const ordenRoutes = require('./routes/ordenes');
const categoriaRoutes = require('./routes/categorias');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Usar rutas
app.use('/api', productoRoutes);
app.use('/api', clienteRoutes);
app.use('/api', ordenRoutes);
app.use('/api', categoriaRoutes);

// Sincronizar base de datos y arrancar servidor
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });
