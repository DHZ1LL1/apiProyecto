const RentaEquipo = require('../models/rentaEquipoModel');

class RentaEquipoController {

    static async getAllRentas(req, res) {
        try {
            const rentas = await RentaEquipo.findAll();
            res.json(rentas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getRentaById(req, res) {
        try {
            const renta = await RentaEquipo.findById(req.params.id_detalle_renta);
            if (!renta) {
                return res.status(404).json({ message: "Renta no encontrada" });
            }
            res.json(renta);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createRenta(req, res) {
        try {
            const newRenta = await RentaEquipo.create(req.body);
            res.status(201).json(newRenta);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updateRenta(req, res) {
        try {
            const updatedRenta = await RentaEquipo.update(req.params.id_detalle_renta, req.body);
            if (!updatedRenta) {
                return res.status(404).json({ message: "Renta no encontrada" });
            }
            res.json(updatedRenta);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deleteRenta(req, res) {
        try {
            const deletedRenta = await RentaEquipo.delete(req.params.id_detalle_renta);
            if (!deletedRenta) {
                return res.status(404).json({ message: "Renta no encontrada" });
            }
            res.json({ message: "Renta eliminada correctamente" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = RentaEquipoController;
    