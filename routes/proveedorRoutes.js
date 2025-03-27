const express = require('express');
const ProveedorController = require('../controllers/proveedorController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Proveedor:
 *       type: object
 *       required:
 *         - Nombre
 *         - Numero_telefonico
 *         - id_Direccion
 *       properties:
 *         id_proveedor:
 *           type: integer
 *           description: ID único del proveedor
 *         Nombre:
 *           type: string
 *           description: Nombre del proveedor
 *         Numero_telefonico:
 *           type: string
 *           description: Número telefónico del proveedor
 *         id_Direccion:
 *           type: integer
 *           description: ID de la dirección asociada
 *       example:
 *         id_proveedor: 1
 *         Nombre: "Proveedor S.A."
 *         Numero_telefonico: "1234567890"
 *         id_Direccion: 2
 *
 * /api/proveedores:
 *   get:
 *     summary: Obtiene todos los proveedores
 *     tags: [Proveedores]
 *     responses:
 *       200:
 *         description: Lista de proveedores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Proveedor'
 *       500:
 *         description: Error interno del servidor
 *   post:
 *     summary: Crea un nuevo proveedor
 *     tags: [Proveedores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Proveedor'
 *     responses:
 *       201:
 *         description: Proveedor creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Proveedor'
 *       500:
 *         description: Error interno del servidor
 *
 * /api/proveedores/{id_proveedor}:
 *   get:
 *     summary: Obtiene un proveedor por ID
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id_proveedor
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del proveedor
 *     responses:
 *       200:
 *         description: Proveedor encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Proveedor'
 *       404:
 *         description: Proveedor no encontrado
 *       500:
 *         description: Error interno del servidor
 *   put:
 *     summary: Actualiza un proveedor existente
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id_proveedor
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del proveedor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Proveedor'
 *     responses:
 *       200:
 *         description: Proveedor actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Proveedor'
 *       404:
 *         description: Proveedor no encontrado
 *       500:
 *         description: Error interno del servidor
 *   delete:
 *     summary: Elimina un proveedor existente
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id_proveedor
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del proveedor
 *     responses:
 *       200:
 *         description: Proveedor eliminado con éxito
 *       500:
 *         description: Error interno del servidor
 */

router.get('/proveedores', ProveedorController.obtenerProveedores);
router.get('/proveedores/:id', ProveedorController.obtenerProveedorPorId); // Obtener proveedor por ID
router.get('/proveedores/search', ProveedorController.buscarProveedores);
router.post('/proveedores', ProveedorController.crearProveedor);
router.put('/proveedores/:id', ProveedorController.actualizarProveedor);
router.delete('/proveedores/:id', ProveedorController.eliminarProveedor);

module.exports = router;
