const express = require('express');
const RentaEquipoController = require('../controllers/rentaEquipoController');

const router = express.Router();

router.get('/rentas', RentaEquipoController.getAllRentas);
router.get('/rentas/:id_detalle_renta', RentaEquipoController.getRentaById);
router.post('/rentas', RentaEquipoController.createRenta);
router.put('/rentas/:id_detalle_renta', RentaEquipoController.updateRenta);
router.delete('/rentas/:id_detalle_renta', RentaEquipoController.deleteRenta);

module.exports = router;
