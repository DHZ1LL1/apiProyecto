const express = require('express');
const cors = require('cors');
const productoRoutes = require('./routes/productoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const empleadoRoutes = require('./routes/empleadoRoutes');
const proveedorRoutes = require('./routes/proveedorRoutes');
const rentaEquipoRoutes = require('./routes/rentaEquipoRoutes');
const ventaRoutes = require('./routes/ventaRoutes');
const swaggerDocs = require('./config/swagger');

const app = express(); // Inicializar express primero

// Habilitar CORS
app.use(cors({
    origin: 'http://localhost:4200', // Permitir Angular
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

app.use(express.json()); // Middleware para JSON
swaggerDocs(app); // Configurar Swagger

// Rutas de la API
app.use('/api', productoRoutes);
app.use('/api', usuarioRoutes);
app.use('/api', clienteRoutes);
app.use('/api', empleadoRoutes);
app.use('/api', proveedorRoutes);
app.use('/api', rentaEquipoRoutes);
app.use('/api', ventaRoutes);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
