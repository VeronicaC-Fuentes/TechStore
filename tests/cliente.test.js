// tests/cliente.test.js
const sequelize = require('../config/databaseTest'); // Configuración de pruebas
const Cliente = require('../models/cliente');

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.close();
});

describe('Cliente Model', () => {
  test('Debería crear un cliente correctamente', async () => {
    const cliente = await Cliente.create({
      nombre: 'Albus Dumbledore',
      correoElectronico: 'albus.dumbledore@hogwarts.edu',
      numeroTelefono: '987654321',
      direccionEnvio: 'Hogwarts Castle, Highlands, Scotland',
    });

    expect(cliente.id).toBeDefined();
    expect(cliente.nombre).toBe('Albus Dumbledore');
    expect(cliente.correoElectronico).toBe('albus.dumbledore@hogwarts.edu');
    expect(cliente.numeroTelefono).toBe('987654321');
    expect(cliente.direccionEnvio).toBe('Hogwarts Castle, Highlands, Scotland');
  });

  test('Debería actualizar la información del cliente', async () => {
    const cliente = await Cliente.create({
      nombre: 'Albus Dumbledore',
      correoElectronico: 'albus.dumbledore@hogwarts.edu',
      numeroTelefono: '987654321',
      direccionEnvio: 'Hogwarts Castle, Highlands, Scotland',
    });

    await cliente.update({
      direccionEnvio: '4 Privet Drive, Little Whinging, Surrey',
      numeroTelefono: '123456789'
    });

    const clienteActualizado = await Cliente.findByPk(cliente.id);
    expect(clienteActualizado.direccionEnvio).toBe('4 Privet Drive, Little Whinging, Surrey');
    expect(clienteActualizado.numeroTelefono).toBe('123456789');
  });

  test('Debería eliminar el cliente', async () => {
    const cliente = await Cliente.create({
      nombre: 'Albus Dumbledore',
      correoElectronico: 'albus.dumbledore@hogwarts.edu',
      numeroTelefono: '987654321',
      direccionEnvio: 'Hogwarts Castle, Highlands, Scotland',
    });

    await cliente.destroy();

    const clienteEliminado = await Cliente.findByPk(cliente.id);
    expect(clienteEliminado).toBeNull();
  });

  test('Debería obtener los datos del cliente', async () => {
    const cliente = await Cliente.create({
      nombre: 'Albus Dumbledore',
      correoElectronico: 'albus.dumbledore@hogwarts.edu',
      numeroTelefono: '987654321',
      direccionEnvio: 'Hogwarts Castle, Highlands, Scotland',
    });

    const clienteObtenido = await Cliente.findByPk(cliente.id);

    expect(clienteObtenido.nombre).toBe('Albus Dumbledore');
    expect(clienteObtenido.correoElectronico).toBe('albus.dumbledore@hogwarts.edu');
    expect(clienteObtenido.numeroTelefono).toBe('987654321');
    expect(clienteObtenido.direccionEnvio).toBe('Hogwarts Castle, Highlands, Scotland');
  });
});
