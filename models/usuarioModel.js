const pool = require('../config/db');

const getUsuarios = async () => pool.query('SELECT * FROM usuarios');

const getUsuarioById = async (id) =>
  pool.query('SELECT * FROM usuarios WHERE id_usuario = $1', [id]);

const searchUsuarios = async (query) =>
  pool.query('SELECT * FROM usuarios WHERE Usuario ILIKE $1', [`%${query}%`]);

const createUsuario = async (usuario) => {
  const { Usuario, Contraseña, id_Rol } = usuario;
  return pool.query(
    'INSERT INTO usuarios (Usuario, Contraseña, id_Rol) VALUES ($1, $2, $3)',
    [Usuario, Contraseña, id_Rol]
  );
};

const updateUsuario = async (id, usuario) => {
  const { Usuario, Contraseña, id_Rol } = usuario;
  return pool.query(
    'UPDATE usuarios SET Usuario = $1, Contraseña = $2, id_Rol = $3 WHERE id_usuario = $4',
    [Usuario, Contraseña, id_Rol, id]
  );
};

const deleteUsuario = async (id) =>
  pool.query('DELETE FROM usuarios WHERE id_usuario = $1', [id]);

module.exports = {
  getUsuarios,
  getUsuarioById,
  searchUsuarios,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};
