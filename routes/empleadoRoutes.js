/**
 * @swagger
 * components:
 *   schemas:
 *     Empleado:
 *       type: object
 *       required:
 *         - clave_empleado
 *         - nombre
 *       properties:
 *         id_empleado:
 *           type: integer
 *           description: ID único del empleado
 *         clave_empleado:
 *           type: integer
 *           description: Clave del empleado
 *         nombre:
 *           type: string
 *           description: Nombre del empleado
 *           maxLength: 40
 *         apellido_paterno:
 *           type: string
 *           description: Apellido paterno del empleado
 *           maxLength: 50
 *         apellido_materno:
 *           type: string
 *           description: Apellido materno del empleado
 *           maxLength: 50
 *         fecha_nacimiento:
 *           type: string
 *           format: date
 *           description: Fecha de nacimiento del empleado
 *         numero_telefonico:
 *           type: string
 *           description: Número telefónico del empleado
 *           maxLength: 10
 *         id_usuario:
 *           type: integer
 *           description: ID del usuario asociado
 *       example:
 *         id_empleado: 1
 *         clave_empleado: 12345
 *         nombre: "Juan"
 *         apellido_paterno: "Pérez"
 *         apellido_materno: "García"
 *         fecha_nacimiento: "1980-01-01"
 *         numero_telefonico: "1234567890"
 *         id_usuario: 2
 *
 * /api/empleados:
 *   get:
 *     summary: Obtiene todos los empleados
 *     tags: [Empleados]
 *     responses:
 *       200:
 *         description: Lista de empleados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Empleado'
 *       500:
 *         description: Error interno del servidor
 *   post:
 *     summary: Crea un nuevo empleado
 *     tags: [Empleados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Empleado'
 *     responses:
 *       201:
 *         description: Empleado creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empleado'
 *       500:
 *         description: Error interno del servidor
 *
 * /api/empleados/{id_empleado}:
 *   get:
 *     summary: Obtiene un empleado por ID
 *     tags: [Empleados]
 *     parameters:
 *       - in: path
 *         name: id_empleado
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del empleado
 *     responses:
 *       200:
 *         description: Empleado encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empleado'
 *       404:
 *         description: Empleado no encontrado
 *       500:
 *         description: Error interno del servidor
 *   put:
 *     summary: Actualiza un empleado existente
 *     tags: [Empleados]
 *     parameters:
 *       - in: path
 *         name: id_empleado
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del empleado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Empleado'
 *     responses:
 *       200:
 *         description: Empleado actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empleado'
 *       404:
 *         description: Empleado no encontrado
 *       500:
 *         description: Error interno del servidor
 *   delete:
 *     summary: Elimina un empleado existente
 *     tags: [Empleados]
 *     parameters:
 *       - in: path
 *         name: id_empleado
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del empleado
 *     responses:
 *       200:
 *         description: Empleado eliminado con éxito
 *       500:
 *         description: Error interno del servidor
 */

const express = require('express');
const EmpleadoController = require('../controllers/empleadoController');

const router = express.Router();

router.get('/empleados', EmpleadoController.obtenerEmpleados);
router.get('/empleados/:id', EmpleadoController.obtenerEmpleadoPorId); // Ruta para obtener empleado por ID
router.get('/empleados/search', EmpleadoController.buscarEmpleados);
router.post('/empleados', EmpleadoController.crearEmpleado);
router.put('/empleados/:id', EmpleadoController.actualizarEmpleado);
router.delete('/empleados/:id', EmpleadoController.eliminarEmpleado);

module.exports = router;
