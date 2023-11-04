const inmuebleModel = require('../models/inmueble.model')
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

const updateInmuebles = async (req,res) => {
    try {
        const {inmuebleId} = req.params
        const result = await InmuebleModel.findByIdAndUpdate(inmuebleId, req.body, {new:true})
        res.json(result)
    } catch (error) {
        res.json({fatal:error.message})
    }
}

const deleteInmueble = async (req,res) => {
    try {
        const {inmuebleId} = req.params
        const result = await inmuebleModel.findByIdAndDelete(inmuebleId)
        res.json(result)
    } catch (error) {
        res.json({fatal: error.message})
    }
}

module.exports = {createInmuebles,getInmuebles, updateInmuebles,deleteInmueble}