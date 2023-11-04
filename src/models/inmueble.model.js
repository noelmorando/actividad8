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
    timestamps: true,
    //TODO: fijarme si realmente voy a usar virtuales
    toObject: {virtuals: true},
    toJSON: {
        virtuals: true,
        transform: function(doc,ret){
            delete ret.id
        }
    }
})

module.exports = model('inmueble', InmuebleSchema, 'inmuebles')