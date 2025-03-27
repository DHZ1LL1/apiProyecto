/**
 * @swagger
 * components:
 *   schemas:
 *     Cliente:
 *       type: object
 *       required:
 *         - nombre
 *         - id_usuario
 *       properties:
 *         id_cliente:
 *           type: integer
 *           description: ID único del cliente
 *         nombre:
 *           type: string
 *           description: Nombre del cliente
 *           maxLength: 40
 *         apellido_paterno:
 *           type: string
 *           description: Apellido paterno del cliente
 *           maxLength: 50
 *         apellido_materno:
 *           type: string
 *           description: Apellido materno del cliente
 *           maxLength: 50
 *         numero_telefonico:
 *           type: string
 *           description: Número telefónico del cliente
 *           maxLength: 10
 *         id_usuario:
 *           type: integer
 *           description: ID del usuario asociado
 *       example:
 *         id_cliente: 1
 *         nombre: "Carlos"
 *         apellido_paterno: "López"
 *         apellido_materno: "Martínez"
 *         numero_telefonico: "1234567890"
 *         id_usuario: 2
 *
 * /api/clientes:
 *   get:
 *     summary: Obtiene todos los clientes
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Lista de clientes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cliente'
 *       500:
 *         description: Error interno del servidor
 *   post:
 *     summary: Crea un nuevo cliente
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       201:
 *         description: Cliente creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       500:
 *         description: Error interno del servidor
 *
 * /api/clientes/{id_cliente}:
 *   get:
 *     summary: Obtiene un cliente por ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id_cliente
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del cliente
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       404:
 *         description: Cliente no encontrado
 *       500:
 *         description: Error interno del servidor
 *   put:
 *     summary: Actualiza un cliente existente
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id_cliente
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       200:
 *         description: Cliente actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       404:
 *         description: Cliente no encontrado
 *       500:
 *         description: Error interno del servidor
 *   delete:
 *     summary: Elimina un cliente existente
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id_cliente
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del cliente
 *     responses:
 *       200:
 *         description: Cliente eliminado con éxito
 *       500:
 *         description: Error interno del servidor
 */



const express = require('express');
const ClienteController = require('../controllers/clienteController');

const router = express.Router();

router.get('/clientes', ClienteController.obtenerClientes);
router.get('/clientes/:id_cliente', ClienteController.obtenerClientePorId); // Usar obtenerClientePorId
router.post('/clientes', ClienteController.crearCliente);
router.put('/clientes/:id_cliente', ClienteController.actualizarCliente);
router.delete('/clientes/:id_cliente', ClienteController.eliminarCliente);

module.exports = router;




