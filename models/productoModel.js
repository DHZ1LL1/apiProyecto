const pool = require('../config/db');

const getProductos = async () => pool.query('SELECT * FROM productos');

const getProductoById = async (id) => {
  return pool.query('SELECT * FROM productos WHERE id_producto = $1', [id]);
};

const searchProductos = async (query) => {
  return pool.query(
    'SELECT * FROM productos WHERE nombre_producto ILIKE $1 OR descripcion ILIKE $1',
    [`%${query}%`]
  );
};

const createProducto = async (producto) => {
  const { nombre_producto, codigo_producto, descripcion, precio_unidad } = producto;
  return pool.query(
    'INSERT INTO productos (nombre_producto, codigo_producto, descripcion, precio_unidad) VALUES ($1, $2, $3, $4)',
    [nombre_producto, codigo_producto, descripcion, precio_unidad]
  );
};

const updateProducto = async (id, producto) => {
  const { nombre_producto, codigo_producto, descripcion, precio_unidad } = producto;
  return pool.query(
    'UPDATE productos SET nombre_producto = $1, codigo_producto = $2, descripcion = $3, precio_unidad = $4 WHERE id_producto = $5',
    [nombre_producto, codigo_producto, descripcion, precio_unidad, id]
  );
};

const deleteProducto = async (id) => pool.query('DELETE FROM productos WHERE id_producto = $1', [id]);

module.exports = {
  getProductos,
  getProductoById,
  searchProductos,
  createProducto,
  updateProducto,
  deleteProducto
};
