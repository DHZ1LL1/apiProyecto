const pool = require('../config/db');

class RentaEquipo {

    static async findAll() {
        const result = await pool.query('SELECT * FROM Renta_Equipo');
        return result.rows;
    }

    static async findById(id_detalle_renta) {
        const result = await pool.query('SELECT * FROM Renta_Equipo WHERE id_detalle_renta = $1', [id_detalle_renta]);
        return result.rows[0];
    }

    static async create(rentaEquipo) {
        const { tiempo, precio_hora, id_equipo_computo, id_empleado } = rentaEquipo;
        const result = await pool.query(
            'INSERT INTO Renta_Equipo (tiempo, precio_hora, id_equipo_computo, id_empleado) VALUES ($1, $2, $3, $4) RETURNING *',
            [tiempo, precio_hora, id_equipo_computo, id_empleado]
        );
        return result.rows[0];
    }

    static async update(id_detalle_renta, rentaEquipo) {
        const { tiempo, precio_hora, id_equipo_computo, id_empleado } = rentaEquipo;
        const result = await pool.query(
            'UPDATE Renta_Equipo SET tiempo = $1, precio_hora = $2, id_equipo_computo = $3, id_empleado = $4 WHERE id_detalle_renta = $5 RETURNING *',
            [tiempo, precio_hora, id_equipo_computo, id_empleado, id_detalle_renta]
        );
        return result.rows[0];
    }

    static async delete(id_detalle_renta) {
        const result = await pool.query('DELETE FROM Renta_Equipo WHERE id_detalle_renta = $1 RETURNING *', [id_detalle_renta]);
        return result.rows[0];
    }
}

module.exports = RentaEquipo;
