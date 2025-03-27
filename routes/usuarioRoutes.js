/** 
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       required:
 *         - Usuario
 *         - Contraseña
 *         - Correo
 *         - Rol
 *       properties:
 *         id_usuario:
 *           type: integer
 *           description: ID único del usuario
 *         Usuario:
 *           type: string
 *           description: Nombre de usuario
 *         Contraseña:
 *           type: string
 *           description: Contraseña del usuario
 *         Correo:
 *           type: string
 *           format: email
 *           description: Correo electrónico del usuario
 *         Rol:
 *           type: string
 *           enum: [Empleado, Cliente]
 *           description: Rol del usuario en el sistema
 *       example:
 *         id_usuario: 1
 *         Usuario: "usuario1"
 *         Contraseña: "password123"
 *         Correo: "usuario1@example.com"
 *         Rol: "Empleado"
 *
 * /api/usuarios:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 *       500:
 *         description: Error interno del servidor
 *   post:
 *     summary: Crea un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       201:
 *         description: Usuario creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       500:
 *         description: Error interno del servidor
 *
 * /api/usuarios/{id_usuario}:
 *   get:
 *     summary: Obtiene un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id_usuario
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error interno del servidor
 *   put:
 *     summary: Actualiza un usuario existente
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id_usuario
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuario actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error interno del servidor
 *   delete:
 *     summary: Elimina un usuario existente
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id_usuario
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario eliminado con éxito
 *       500:
 *         description: Error interno del servidor
 */


const express = require('express');
const UsuarioController = require('../controllers/usuarioController');

const router = express.Router();

router.get('/usuarios', UsuarioController.obtenerUsuarios);
router.get('/usuarios/:id_usuario', UsuarioController.obtenerUsuarioPorId);
router.post('/usuarios', UsuarioController.crearUsuario);
router.put('/usuarios/:id_usuario', UsuarioController.actualizarUsuario);
router.delete('/usuarios/:id_usuario', UsuarioController.eliminarUsuario);

module.exports = router;
