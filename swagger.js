const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "Users API",
        description: "users API",
    },
    host: "localhost:3000",
    schemes: ['http', 'https']
};

const outputfile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// this will generate the swagger.json file
swaggerAutogen(outputfile, endpointsFiles, doc);