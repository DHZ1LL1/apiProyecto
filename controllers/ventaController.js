const Venta = require('../models/ventaModel');

class VentaController {

    static async getAllVentas(req, res) {
        try {
            const ventas = await Venta.findAll();
            res.json(ventas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getVentaById(req, res) {
        try {
            const venta = await Venta.findById(req.params.id_venta);
            if (!venta) {
                return res.status(404).json({ message: "Venta no encontrada" });
            }
            res.json(venta);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createVenta(req, res) {
        try {
            const newVenta = await Venta.create(req.body);
            res.status(201).json(newVenta);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updateVenta(req, res) {
        try {
            const updatedVenta = await Venta.update(req.params.id_venta, req.body);
            if (!updatedVenta) {
                return res.status(404).json({ message: "Venta no encontrada" });
            }
            res.json(updatedVenta);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deleteVenta(req, res) {
        try {
            const deletedVenta = await Venta.delete(req.params.id_venta);
            if (!deletedVenta) {
                return res.status(404).json({ message: "Venta no encontrada" });
            }
            res.json({ message: "Venta eliminada correctamente" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = VentaController;
