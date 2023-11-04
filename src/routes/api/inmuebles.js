const router = require('express').Router()
const InmueblesController = require('../../controllers/inmuebles.controller')
const inmuebleModel = require('../../models/inmueble.model')
const {checkInmueble} = require('../../middlewares/inmuebles.middleware')

router.get('/', InmueblesController.getInmuebles)
router.post('/', InmueblesController.createInmuebles)
router.put('/:inmuebleId', checkInmueble, InmueblesController.updateInmuebles)
router.delete('/:inmuebleId', checkInmueble, InmueblesController.deleteInmueble)

module.exports = router