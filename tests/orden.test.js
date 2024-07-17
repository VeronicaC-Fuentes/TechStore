// tests/orden.test.js
const sequelize = require('../config/databaseTest'); // Configuración de pruebas
const Orden = require('../models/orden');

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.close();
});

describe('Orden Model', () => {
  let ordenId;

  test('Debería crear una nueva orden correctamente', async () => {
    const orden = await Orden.create({
      idCliente: 1,
      productosComprados: [
        { idProducto: 1, cantidad: 2 },
        { idProducto: 2, cantidad: 1 },
      ],
      totalOrden: 5000.50,
      estado: 'pendiente',
    });

    expect(orden.id).toBeDefined();
    expect(orden.idCliente).toBe(1);
    expect(orden.productosComprados.length).toBe(2);
    expect(orden.totalOrden).toBe(5000.50);
    expect(orden.estado).toBe('pendiente');

    ordenId = orden.id;
  });

  test('Debería obtener los detalles de una orden por su ID', async () => {
    const orden = await Orden.findByPk(ordenId);

    expect(orden).toBeDefined();
    expect(orden.idCliente).toBe(1);
    expect(orden.productosComprados.length).toBe(2);
    expect(orden.totalOrden).toBe(5000.50);
    expect(orden.estado).toBe('pendiente');
  });

  test('Debería actualizar el estado de una orden', async () => {
    const orden = await Orden.findByPk(ordenId);
    orden.estado = 'enviado';
    await orden.save();

    const ordenActualizada = await Orden.findByPk(ordenId);
    expect(ordenActualizada.estado).toBe('enviado');
  });

  test('Debería eliminar una orden', async () => {
    const orden = await Orden.findByPk(ordenId);
    await orden.destroy();

    const ordenEliminada = await Orden.findByPk(ordenId);
    expect(ordenEliminada).toBeNull();
  });
});
