const pool = require('../config/db');

const getProveedores = async () => pool.query('SELECT * FROM proveedores');

const getProveedorById = async (id) => {
  return pool.query('SELECT * FROM proveedores WHERE id_proveedor = $1', [id]);
};

const searchProveedores = async (query) => {
  return pool.query('SELECT * FROM proveedores WHERE Nombre ILIKE $1 OR Numero_telefonico ILIKE $1', [`%${query}%`]);
};

const createProveedor = async (proveedor) => {
  const { Nombre, Numero_telefonico, id_Direccion } = proveedor;
  return pool.query(
    'INSERT INTO proveedores (Nombre, Numero_telefonico, id_Direccion) VALUES ($1, $2, $3)',
    [Nombre, Numero_telefonico, id_Direccion]
  );
};

const updateProveedor = async (id, proveedor) => {
  const { Nombre, Numero_telefonico, id_Direccion } = proveedor;
  return pool.query(
    'UPDATE proveedores SET Nombre = $1, Numero_telefonico = $2, id_Direccion = $3 WHERE id_proveedor = $4',
    [Nombre, Numero_telefonico, id_Direccion, id]
  );
};

const deleteProveedor = async (id) => pool.query('DELETE FROM proveedores WHERE id_proveedor = $1', [id]);

module.exports = {
  getProveedores,
  getProveedorById,
  searchProveedores,
  createProveedor,
  updateProveedor,
  deleteProveedor
};
