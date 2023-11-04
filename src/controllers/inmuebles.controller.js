const InmuebleModel = require('../models/inmueble.model')

const getInmuebles = async (req,res) => {
    try {
        const inmuebles = await InmuebleModel.find()
        res.json(inmuebles)
    } catch (error) {
        res.json({fatal: error.message})
    }
}

const createInmuebles = async (req,res) => {
    try {
        const inmueble = await InmuebleModel.create(req.body)
        res.json(inmueble)
    } catch (error) {
        res.json({fatal: error.message})
    }
}

const createInm = (req,res) => {

}

module.exports = {getInmuebles, createInmuebles}