const Proveedor = require('../models/proveedorModel');

const obtenerProveedores = async (req, res) => {
  try {
    const result = await Proveedor.getProveedores();
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

const obtenerProveedorPorId = async (req, res) => {
  try {
    const id_proveedor = req.params.id;
    const result = await Proveedor.getProveedorById(id_proveedor);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send('Proveedor no encontrado');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const buscarProveedores = async (req, res) => {
  try {
    const result = await Proveedor.searchProveedores(req.query.q);
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

const crearProveedor = async (req, res) => {
  try {
    await Proveedor.createProveedor(req.body);
    res.status(201).send('Proveedor creado');
  } catch (err) {
    res.status(500).send(err);
  }
};

const actualizarProveedor = async (req, res) => {
  try {
    const id_proveedor = req.params.id;
    await Proveedor.updateProveedor(id_proveedor, req.body);
    res.status(200).send('Proveedor actualizado');
  } catch (err) {
    res.status(500).send(err);
  }
};

const eliminarProveedor = async (req, res) => {
  try {
    const id_proveedor = req.params.id;
    await Proveedor.deleteProveedor(id_proveedor);
    res.status(200).send('Proveedor eliminado');
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  obtenerProveedores,
  obtenerProveedorPorId,
  buscarProveedores,
  crearProveedor,
  actualizarProveedor,
  eliminarProveedor
};
