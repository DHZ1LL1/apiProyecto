const pool = require('../config/db');

const getEmpleados = async () => pool.query('SELECT * FROM empleados');

const getEmpleadoById = async (id) => {
  return pool.query('SELECT * FROM empleados WHERE id_empleado = $1', [id]);
};

const searchEmpleados = async (query) => {
  return pool.query(
    'SELECT * FROM empleados WHERE nombre ILIKE $1 OR apellido_paterno ILIKE $1 OR apellido_materno ILIKE $1',
    [`%${query}%`]
  );
};

const createEmpleado = async (empleado) => {
  const { clave_empleado, nombre, apellido_paterno, apellido_materno, Fecha_nacimiento, Numero_telefonico, id_usuario } = empleado;
  return pool.query(
    'INSERT INTO empleados (clave_empleado, nombre, apellido_paterno, apellido_materno, Fecha_nacimiento, Numero_telefonico, id_usuario) VALUES ($1, $2, $3, $4, $5, $6, $7)',
    [clave_empleado, nombre, apellido_paterno, apellido_materno, Fecha_nacimiento, Numero_telefonico, id_usuario]
  );
};

const updateEmpleado = async (id, empleado) => {
  const { nombre, apellido_paterno, apellido_materno, Fecha_nacimiento, Numero_telefonico, id_usuario } = empleado;
  return pool.query(
    'UPDATE empleados SET nombre = $1, apellido_paterno = $2, apellido_materno = $3, Fecha_nacimiento = $4, Numero_telefonico = $5, id_usuario = $6 WHERE id_empleado = $7',
    [nombre, apellido_paterno, apellido_materno, Fecha_nacimiento, Numero_telefonico, id_usuario, id]
  );
};

const deleteEmpleado = async (id) => pool.query('DELETE FROM empleados WHERE id_empleado = $1', [id]);

module.exports = {
  getEmpleados,
  getEmpleadoById,
  searchEmpleados,
  createEmpleado,
  updateEmpleado,
  deleteEmpleado,
};
