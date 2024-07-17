// tests/producto.test.js
const sequelize = require('../config/databaseTest'); // Configuración de pruebas
const Producto = require('../models/producto');

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.close();
});

describe('Producto Model', () => {
  test('Debería crear un producto correctamente', async () => {
    const producto = await Producto.create({
      nombre: 'Laptop Gamer',
      descripcion: 'Una laptop poderosa para gaming',
      precio: 2000.99,
      cantidadEnStock: 15,
      categoria: 'Electrónica',
    });

    expect(producto.id).toBeDefined();
    expect(producto.nombre).toBe('Laptop Gamer');
    expect(producto.descripcion).toBe('Una laptop poderosa para gaming');
    expect(producto.precio).toBe(2000.99);
    expect(producto.cantidadEnStock).toBe(15);
    expect(producto.categoria).toBe('Electrónica');
  });

  test('Debería actualizar el precio y la cantidad en stock del producto', async () => {
    const producto = await Producto.create({
      nombre: 'Laptop Gamer',
      descripcion: 'Una laptop poderosa para gaming',
      precio: 2000.99,
      cantidadEnStock: 15,
      categoria: 'Electrónica',
    });

    await producto.update({
      precio: 2500.99,
      cantidadEnStock: 10
    });

    const productoActualizado = await Producto.findByPk(producto.id);
    expect(productoActualizado.precio).toBe(2500.99);
    expect(productoActualizado.cantidadEnStock).toBe(10);
  });

  test('Debería eliminar el producto', async () => {
    const producto = await Producto.create({
      nombre: 'Laptop Gamer',
      descripcion: 'Una laptop poderosa para gaming',
      precio: 2000.99,
      cantidadEnStock: 15,
      categoria: 'Electrónica',
    });

    await producto.destroy();

    const productoEliminado = await Producto.findByPk(producto.id);
    expect(productoEliminado).toBeNull();
  });

  test('Debería obtener los datos del producto', async () => {
    const producto = await Producto.create({
      nombre: 'Laptop Gamer',
      descripcion: 'Una laptop poderosa para gaming',
      precio: 2000.99,
      cantidadEnStock: 15,
      categoria: 'Electrónica',
    });

    const productoObtenido = await Producto.findByPk(producto.id);

    expect(productoObtenido.nombre).toBe('Laptop Gamer');
    expect(productoObtenido.descripcion).toBe('Una laptop poderosa para gaming');
    expect(productoObtenido.precio).toBe(2000.99);
    expect(productoObtenido.cantidadEnStock).toBe(15);
    expect(productoObtenido.categoria).toBe('Electrónica');
  });
});
