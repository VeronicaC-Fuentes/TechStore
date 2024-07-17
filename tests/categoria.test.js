// tests/categoria.test.js
const sequelize = require('../config/databaseTest'); // Configuración de pruebas
const Categoria = require('../models/categoria');

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.close();
});

describe('Categoria Model', () => {
  let categoriaId;

  test('Debería crear una nueva categoría correctamente', async () => {
    const categoria = await Categoria.create({
      nombre: 'Electrónica',
      descripcion: 'Dispositivos electrónicos y gadgets',
    });

    expect(categoria.id).toBeDefined();
    expect(categoria.nombre).toBe('Electrónica');
    expect(categoria.descripcion).toBe('Dispositivos electrónicos y gadgets');

    categoriaId = categoria.id;
  });

  test('Debería obtener todas las categorías', async () => {
    const categorias = await Categoria.findAll();

    expect(categorias.length).toBeGreaterThan(0);
  });

  test('Debería actualizar el nombre y la descripción de una categoría', async () => {
    const categoria = await Categoria.findByPk(categoriaId);
    await categoria.update({
      nombre: 'Electrónica de consumo',
      descripcion: 'Dispositivos electrónicos para uso diario'
    });

    const categoriaActualizada = await Categoria.findByPk(categoriaId);
    expect(categoriaActualizada.nombre).toBe('Electrónica de consumo');
    expect(categoriaActualizada.descripcion).toBe('Dispositivos electrónicos para uso diario');
  });

  test('Debería eliminar una categoría', async () => {
    const categoria = await Categoria.findByPk(categoriaId);
    await categoria.destroy();

    const categoriaEliminada = await Categoria.findByPk(categoriaId);
    expect(categoriaEliminada).toBeNull();
  });
});
