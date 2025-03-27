const UsuarioModel = require('../models/usuarioModel');

const obtenerUsuarios = async (req, res) => {
  try {
    const result = await UsuarioModel.getUsuarios();

    const usuariosFormateados = result.rows.map(usuario => ({
      id_usuario: usuario.id_usuario,
      Usuario: usuario.usuario,  // Cambia "usuario" por "Usuario"
      Contraseña: usuario.contraseña,  // Cambia "contraseña" por "Contraseña"
      Correo: usuario.correo ?? `${usuario.usuario}@example.com`, // Si es null, genera uno
      Rol: usuario.id_rol === 1 ? "Empleado" : usuario.id_rol === 2 ? "Cliente" : "Desconocido"
    }));

    res.json(usuariosFormateados);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const obtenerUsuarioPorId = async (req, res) => {
  try {
    const { id_usuario } = req.params;
    const result = await UsuarioModel.getUsuarioById(id_usuario);
    
    if (result.rows.length === 0) {
      return res.status(404).send('Usuario no encontrado');
    }

    const usuario = result.rows[0];

    const usuarioFormateado = {
      id_usuario: usuario.id_usuario,
      Usuario: usuario.usuario,  // Cambia "usuario" por "Usuario"
      Contraseña: usuario.contraseña,  // Cambia "contraseña" por "Contraseña"
      Correo: usuario.correo ?? `${usuario.usuario}@example.com`, // Si es null, genera uno
      Rol: usuario.id_rol === 1 ? "Empleado" : usuario.id_rol === 2 ? "Cliente" : "Desconocido"
    };

    res.json(usuarioFormateado);
  } catch (err) {
    res.status(500).send(err.message);
  }
};


const crearUsuario = async (req, res) => {
  try {
    const { Usuario, Contraseña, Correo, Rol } = req.body;
    
    if (!Usuario || !Contraseña || !Correo || !Rol) {
      return res.status(400).send('Faltan datos requeridos');
    }

    if (!/\S+@\S+\.\S+/.test(Correo)) {
      return res.status(400).send('El correo no es válido');
    }

    if (!['Empleado', 'Cliente'].includes(Rol)) {
      return res.status(400).send('El rol debe ser "Empleado" o "Cliente"');
    }

    await UsuarioModel.createUsuario({ Usuario, Contraseña, Correo, Rol });
    res.status(201).send('Usuario creado');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const actualizarUsuario = async (req, res) => {
  try {
    const { id_usuario } = req.params;
    const { Usuario, Contraseña, Correo, Rol } = req.body;

    if (Correo && !/\S+@\S+\.\S+/.test(Correo)) {
      return res.status(400).send('El correo no es válido');
    }

    if (Rol && !['Empleado', 'Cliente'].includes(Rol)) {
      return res.status(400).send('El rol debe ser "Empleado" o "Cliente"');
    }

    await UsuarioModel.updateUsuario(id_usuario, { Usuario, Contraseña, Correo, Rol });
    res.status(200).send('Usuario actualizado');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const eliminarUsuario = async (req, res) => {
  try {
    const { id_usuario } = req.params;
    await UsuarioModel.deleteUsuario(id_usuario);
    res.status(200).send('Usuario eliminado');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  obtenerUsuarios,
  obtenerUsuarioPorId,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
};
