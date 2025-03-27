const pool = require('../config/db');

class Venta {

    static async findAll() {
        const result = await pool.query('SELECT * FROM Venta');
        return result.rows;
    }

    static async findById(id_venta) {
        const result = await pool.query('SELECT * FROM Venta WHERE id_venta = $1', [id_venta]);
        return result.rows[0];
    }

    static async create(venta) {
        const { numero_venta, tipo_venta, id_detalle_venta, id_detalle_renta, id_metodo_pago, id_cliente } = venta;
        const result = await pool.query(
            'INSERT INTO Venta (numero_venta, tipo_venta, id_detalle_venta, id_detalle_renta, id_metodo_pago, id_cliente) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [numero_venta, tipo_venta, id_detalle_venta, id_detalle_renta, id_metodo_pago, id_cliente]
        );
        return result.rows[0];
    }

    static async update(id_venta, venta) {
        const { numero_venta, tipo_venta, id_detalle_venta, id_detalle_renta, id_metodo_pago, id_cliente } = venta;
        const result = await pool.query(
            'UPDATE Venta SET numero_venta = $1, tipo_venta = $2, id_detalle_venta = $3, id_detalle_renta = $4, id_metodo_pago = $5, id_cliente = $6 WHERE id_venta = $7 RETURNING *',
            [numero_venta, tipo_venta, id_detalle_venta, id_detalle_renta, id_metodo_pago, id_cliente, id_venta]
        );
        return result.rows[0];
    }

    static async delete(id_venta) {
        const result = await pool.query('DELETE FROM Venta WHERE id_venta = $1 RETURNING *', [id_venta]);
        return result.rows[0];
    }
}

module.exports = Venta;
