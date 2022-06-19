const dotenv = require('dotenv').config();
const app = require('./app');
const {  mongoConn } = require('./databases/configuration');

// configuraciones del puerto
app.set('port', process.env.PORT || 8000);

const conn = mongoConn()

// Conexción - escucha 
app.listen(app.get('port'), () => {
    console.log(`Arranca el servidor en el puerto: ${app.get('port')}`)
});