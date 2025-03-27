const pool = require('../config/db');

const getClientes = async () => pool.query('SELECT * FROM clientes');

const getClienteById = async (id_cliente) => {
  return pool.query('SELECT * FROM clientes WHERE id_cliente = $1', [id_cliente]);
};

const searchClientes = async (query) => {
  return pool.query(
    'SELECT * FROM clientes WHERE nombre ILIKE $1 OR apellido_paterno ILIKE $1 OR apellido_materno ILIKE $1 OR numero_telefonico::text ILIKE $1',
    [`%${query}%`]
  );
};

const createCliente = async (cliente) => {
  const { id_cliente, nombre, apellido_paterno, apellido_materno, numero_telefonico, id_usuario } = cliente;
  return pool.query(
    'INSERT INTO clientes (id_cliente, nombre, apellido_paterno, apellido_materno, numero_telefonico, id_usuario) VALUES ($1, $2, $3, $4, $5, $6)',
    [id_cliente, nombre, apellido_paterno, apellido_materno, numero_telefonico, id_usuario]
  );
};

const updateCliente = async (id, cliente) => {
  const { nombre, apellido_paterno, apellido_materno, numero_telefonico, id_usuario } = cliente;
  return pool.query(
    'UPDATE clientes SET nombre = $1, apellido_paterno = $2, apellido_materno = $3, numero_telefonico = $4, id_usuario = $5 WHERE id_cliente = $6',
    [nombre, apellido_paterno, apellido_materno, numero_telefonico, id_usuario, id]
  );
};

const deleteCliente = async (id) => pool.query('DELETE FROM clientes WHERE id_cliente = $1', [id]);

module.exports = {
  getClientes,
  getClienteById, // Exportado para obtener cliente por ID
  searchClientes,
  createCliente,
  updateCliente,
  deleteCliente,
};
