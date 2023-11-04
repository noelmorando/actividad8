const {Schema, model} = require('mongoose')

const InmuebleSchema = new Schema({
    piso:String,
    letra: String,
    extension: Number,
    habitaciones: Number,
    alquilado: String,
    propietario: String,
    contacto: String
}, {
    versionKey: false,
    timestamps: true
})

module.exports = model('inmueble', InmuebleSchema, 'inmuebles')