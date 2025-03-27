const express = require('express');
const ProductoController = require('../controllers/productoController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Producto:
 *       type: object
 *       required:
 *         - nombre_producto
 *         - codigo_producto
 *         - descripcion
 *         - precio_unidad
 *       properties:
 *         id_producto:
 *           type: integer
 *           description: ID único del producto
 *         nombre_producto:
 *           type: string
 *           description: Nombre del producto
 *           maxLength: 60
 *         codigo_producto:
 *           type: integer
 *           description: Código del producto
 *         descripcion:
 *           type: string
 *           description: Descripción del producto
 *           maxLength: 100
 *         precio_unidad:
 *           type: number
 *           format: float
 *           description: Precio por unidad del producto
 *       example:
 *         id_producto: 1
 *         nombre_producto: "Producto A"
 *         codigo_producto: 12345
 *         descripcion: "Este es un producto de muestra."
 *         precio_unidad: 99.99
 *
 * /api/productos:
 *   get:
 *     summary: Obtiene todos los productos
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Producto'
 *       500:
 *         description: Error interno del servidor
 *   post:
 *     summary: Crea un nuevo producto
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       201:
 *         description: Producto creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       500:
 *         description: Error interno del servidor
 *
 * /api/productos/{id_producto}:
 *   get:
 *     summary: Obtiene un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id_producto
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error interno del servidor
 *   put:
 *     summary: Actualiza un producto existente
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id_producto
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       200:
 *         description: Producto actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error interno del servidor
 *   delete:
 *     summary: Elimina un producto existente
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id_producto
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado con éxito
 *       500:
 *         description: Error interno del servidor
 */

router.get('/productos', ProductoController.obtenerProductos);
router.get('/productos/:id', ProductoController.obtenerProductoPorId); // Obtener producto por ID
router.get('/productos/search', ProductoController.buscarProductos);
router.post('/productos', ProductoController.crearProducto);
router.put('/productos/:id', ProductoController.actualizarProducto); // Actualizar producto
router.delete('/productos/:id', ProductoController.eliminarProducto); // Eliminar producto

module.exports = router;
