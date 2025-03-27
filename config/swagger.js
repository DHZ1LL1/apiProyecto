const { info } = require('console');
const { version } = require('os');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Proyecto', 
            version: '1.0.0',
            description: 'Documentacion de API de Proyecto y detalles de Proyecto',
        },
        servers: [
            {
                url: 'http://localhost:'+process.env.PORT , 
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log('Swagger docs available at http://localhost:'+ process.env.PORT+'/api-docs');
};

module.exports = swaggerDocs;