/**
 * @swagger
 * components:
 *   schemas:
 *     Venta:
 *       type: object
 *       required:
 *         - numero_venta
 *         - tipo_venta
 *         - id_metodo_pago
 *         - id_cliente
 *       properties:
 *         id_venta:
 *           type: integer
 *           description: ID único de la venta
 *         numero_venta:
 *           type: integer
 *           description: Número de la venta
 *         tipo_venta:
 *           type: string
 *           description: Tipo de venta (por ejemplo, contado, crédito)
 *         id_detalle_venta:
 *           type: integer
 *           description: ID del detalle de la venta
 *         id_detalle_renta:
 *           type: integer
 *           description: ID del detalle de la renta (si aplica)
 *         id_metodo_pago:
 *           type: integer
 *           description: ID del método de pago
 *         id_cliente:
 *           type: integer
 *           description: ID del cliente
 *       example:
 *         id_venta: 1
 *         numero_venta: 1234
 *         tipo_venta: "contado"
 *         id_detalle_venta: 101
 *         id_detalle_renta: 202
 *         id_metodo_pago: 303
 *         id_cliente: 404
 *
 * /api/ventas:
 *   get:
 *     summary: Obtiene todas las ventas
 *     tags: [Ventas]
 *     responses:
 *       200:
 *         description: Lista de ventas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Venta'
 *       500:
 *         description: Error interno del servidor
 *   post:
 *     summary: Crea una nueva venta
 *     tags: [Ventas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Venta'
 *     responses:
 *       201:
 *         description: Venta creada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Venta'
 *       500:
 *         description: Error interno del servidor
 *
 * /api/ventas/{id_venta}:
 *   get:
 *     summary: Obtiene una venta por ID
 *     tags: [Ventas]
 *     parameters:
 *       - in: path
 *         name: id_venta
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la venta
 *     responses:
 *       200:
 *         description: Venta encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Venta'
 *       404:
 *         description: Venta no encontrada
 *       500:
 *         description: Error interno del servidor
 *   put:
 *     summary: Actualiza una venta existente
 *     tags: [Ventas]
 *     parameters:
 *       - in: path
 *         name: id_venta
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la venta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Venta'
 *     responses:
 *       200:
 *         description: Venta actualizada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Venta'
 *       404:
 *         description: Venta no encontrada
 *       500:
 *         description: Error interno del servidor
 *   delete:
 *     summary: Elimina una venta existente
 *     tags: [Ventas]
 *     parameters:
 *       - in: path
 *         name: id_venta
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la venta
 *     responses:
 *       200:
 *         description: Venta eliminada con éxito
 *       500:
 *         description: Error interno del servidor
 */




const express = require('express');
const VentaController = require('../controllers/ventaController');

const router = express.Router();

router.get('/ventas', VentaController.getAllVentas);
router.get('/ventas/:id_venta', VentaController.getVentaById);
router.post('/ventas', VentaController.createVenta);
router.put('/ventas/:id_venta', VentaController.updateVenta);
router.delete('/ventas/:id_venta', VentaController.deleteVenta);

module.exports = router;
