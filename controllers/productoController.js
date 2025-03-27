const Producto = require('../models/productoModel');

const obtenerProductos = async (req, res) => {
  try {
    const result = await Producto.getProductos();
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

const obtenerProductoPorId = async (req, res) => {
  try {
    const id_producto = req.params.id;
    const result = await Producto.getProductoById(id_producto);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send('Producto no encontrado');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const buscarProductos = async (req, res) => {
  try {
    const result = await Producto.searchProductos(req.query.q);
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

const crearProducto = async (req, res) => {
  try {
    await Producto.createProducto(req.body);
    res.status(201).send('Producto creado');
  } catch (err) {
    res.status(500).send(err);
  }
};

const actualizarProducto = async (req, res) => {
  try {
    const id_producto = req.params.id;
    await Producto.updateProducto(id_producto, req.body);
    res.status(200).send('Producto actualizado');
  } catch (err) {
    res.status(500).send(err);
  }
};

const eliminarProducto = async (req, res) => {
  try {
    const id_producto = req.params.id;
    await Producto.deleteProducto(id_producto);
    res.status(200).send('Producto eliminado');
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  obtenerProductos,
  obtenerProductoPorId,
  buscarProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto
};
