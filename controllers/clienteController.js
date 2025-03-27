const Clientes = require('../models/clienteModel');

const obtenerClientes = async (req, res) => {
  try {
    const result = await Clientes.getClientes();
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

const obtenerClientePorId = async (req, res) => {
  try {
    const id_cliente = req.params.id_cliente;
    const result = await Clientes.getClienteById(id_cliente);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

const buscarClientes = async (req, res) => {
  try {
    const result = await Clientes.searchClientes(req.query.q);
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

const crearCliente = async (req, res) => {
  try {
    await Clientes.createCliente(req.body);
    res.status(201).send('Cliente creado');
  } catch (err) {
    res.status(500).send(err);
  }
};

const actualizarCliente = async (req, res) => {
  try {
    const id_cliente = req.params.id_cliente;
    await Clientes.updateCliente(id_cliente, req.body);
    res.status(200).send('Cliente actualizado');
  } catch (err) {
    res.status(500).send(err);
  }
};

const eliminarCliente = async (req, res) => {
  try {
    const id_cliente = req.params.id_cliente;
    await Clientes.deleteCliente(id_cliente);
    res.status(200).send('Cliente eliminado');
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  obtenerClientes,
  obtenerClientePorId,  // Agregado para obtener un cliente por ID
  buscarClientes,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
};
