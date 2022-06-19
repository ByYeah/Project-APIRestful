const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Debe haber un nombre en esta casilla']
    },
    email: {
        type: String,
        required: [true, 'Debe haber un correo en esta casilla'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
});

module.exports = model('Usuario', UsuarioSchema);