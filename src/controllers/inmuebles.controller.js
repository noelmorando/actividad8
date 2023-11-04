const InmuebleModel = require('../models/inmueble.model')

const getInmuebles = async (req,res) => {
    try {
        const inmuebles = await InmuebleModel.find()
        res.json(inmuebles)
    } catch (error) {
        res.json({fatal: error.message})
    }
}

module.exports = {getInmuebles}