const Empleado = require('../models/empleadoModel');

const obtenerEmpleados = async (req, res) => {
  try {
    const result = await Empleado.getEmpleados();
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

const obtenerEmpleadoPorId = async (req, res) => {
  try {
    const id_empleado = req.params.id;
    const result = await Empleado.getEmpleadoById(id_empleado);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send('Empleado no encontrado');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const buscarEmpleados = async (req, res) => {
  try {
    const result = await Empleado.searchEmpleados(req.query.q);
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

const crearEmpleado = async (req, res) => {
  try {
    await Empleado.createEmpleado(req.body);
    res.status(201).send('Empleado creado');
  } catch (err) {
    res.status(500).send(err);
  }
};

const actualizarEmpleado = async (req, res) => {
  try {
    const id_empleado = req.params.id;
    await Empleado.updateEmpleado(id_empleado, req.body);
    res.status(200).send('Empleado actualizado');
  } catch (err) {
    res.status(500).send(err);
  }
};

const eliminarEmpleado = async (req, res) => {
  try {
    const id_empleado = req.params.id;
    await Empleado.deleteEmpleado(id_empleado);
    res.status(200).send('Empleado eliminado');
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  obtenerEmpleados,
  obtenerEmpleadoPorId,
  buscarEmpleados,
  crearEmpleado,
  actualizarEmpleado,
  eliminarEmpleado,
};
